import React from "react";
import { Pie } from "react-chartjs-2";
import ChartFooter from "../ChartFooter/ChartFooter";
const Intensity = (props) => {
  const data = {
    labels: ["Intensity", "Likelihood", "Relevance","Impact"],
    datasets: [
      {
        data: [props?.Intensity, props?.Likelihood, props?.Relevance,props?.Impact],
        needleValue: props?.intensity,
        backgroundColor: ["red", "#FFCE56", "lightgreen","purple"],
        hoverBackgroundColor: ["red", "#FFCE56", "lightgreen","purple"],
      },
    ],
  };
  const config = {
    data: data,
    options: {
      layout: {
        padding: {
          bottom: 3,
        },
      },
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div>
      <Pie width="300px" data={config?.data} options={config?.options} />
      <ChartFooter
        title={`Intensity : ${props?.Intensity != "" ? props?.Intensity : 0} , Likelihood : ${props?.Likelihood!= "" ? props?.Likelihood : 0} , Relevance : ${props?.Relevance!= "" ? props?.Relevance : 0}, Impact : ${props?.Impact != ""? props?.Impact : 0}`}
      />
    </div>
  );
};

export default Intensity;
