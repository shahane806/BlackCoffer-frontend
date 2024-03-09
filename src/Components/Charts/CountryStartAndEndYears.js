import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import zoomPlugin from "chartjs-plugin-zoom";

import ChartFooter from "../ChartFooter/ChartFooter";
import NextPrevBtn from "../HandleNextPrev/NextPrevBtn/NextPrevBtn";

const CountryStartAndEndYears = () => {
  Chart.register(zoomPlugin);
  const [labels, setLabels] = useState([]);
  const [startDatasets, setStartYearDataset] = useState([]);
  const [endDatasets, setEndYearDataset] = useState([]);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  
  let [i, setI] = useState(0);
  let [j, setJ] = useState(0);
  let [count, setCount] = useState(50);
  let [limit, setLimit] = useState(50);
  const [countryDataset, setCountryDataset] = useState([]);
  const [startYear, setStartYear] = useState([]);
  const [endYear, setEndYear] = useState([]);
  let d2 = useSelector((state) => {
    return state?.dataReducer;
  });

  useEffect(() => {
    const d = d2?.map((e) => {
      return e?.country;
    });
    setCountryDataset(d);
    const i = d2?.map((e) => {
      return e?.end_year;
    });
    setEndYear(i);
    const j = d2?.map((e) => {
      return e?.start_year;
    });
    setStartYear(j);
  }, [d2]);

  useEffect(() => {
    const s = countryDataset.filter((e, i) => {
      return i < limit;
    });
    setLabels(s);

    const d = endYear.filter((e, i) => {
      return i < limit;
    });
    setEndYearDataset(d);
    const e = startYear.filter((e, i) => {
      return i < limit;
    });
    setStartYearDataset(e);
  }, [countryDataset]);
  const handlePrev = () => {
    if (i === 0) {
      setDisablePrev(true);
      setCount(limit);
      setJ(0);
    } else {
      setI(--i);

      setCount(count - limit);
      setJ(j - limit);
      setDisablePrev(false);
      setDisableNext(false);
    }
  };
  const handleNext = () => {
    if (i === countryDataset.length / limit) {
      setDisableNext(true);
    } else {
      setI(++i);
      setCount(count + limit);
      setJ(count);
      setDisableNext(false);
      setDisablePrev(false);
    }
  };
  useEffect(() => {
    if (j === 0 && count === limit) {
      setDisablePrev(true);
    }

    const s = countryDataset
      .filter((e, i) => {
        return i < count;
      })
      .slice(j, count);
    setLabels(s);
    const idata = endYear
      .filter((e, i) => {
        return i < count;
      })
      .slice(j, count);

    setEndYearDataset(idata);
    const sd = startYear
      .filter((e, i) => {
        return i < count;
      })
      .slice(j, count);

    setStartYearDataset(sd);

    if (count === countryDataset.length) {
      setDisableNext(true);
    }
  }, [count, j]);
  const data = {
    labels: labels.map((e, i) => {
      return e + "\n" + startDatasets[i];
    }),
    datasets: [
      {
        barThickness: 10,
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
        hoverRadius: 5,
        label: "Country Start Year And End Year ",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        fill: false,
        tension: 0.1,

        data: endDatasets,
      },
    ],
  };
  const options = {
    maintainAspectRatio: true,
    scale: {
      beginAtZero: true,
    },
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
          threshold: 5,
        },
        zoom: {
          wheel: {
            enabled: false,
          },
          drag: {
            enabled: false,
          },
          ticks: {
            beginAtZero: true,
          },
          mode: "x",
        },
      },
    },
  };

  return (
    <>
      <div id="barchart">
        <ChartFooter title={"Country Start and End Years"} />
        <Bar data={data} options={options} />
        <NextPrevBtn
          disablePrev={disablePrev}
          disableNext={disableNext}
          handlePrev={handlePrev}
          count={count}
          handleNext={handleNext}
          maxCount={countryDataset.length}
        />
      </div>
    </>
  );
};

export default CountryStartAndEndYears;
