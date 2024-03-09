import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import FilterForm, { getData } from "../Components/FilterForm/FilterForm";
import CountryStartYearAndEndYears from "../Components/Charts/CountryStartAndEndYears";
import CountryIntensityRatioChart from "../Components/Charts/CountryIntensityRatioChart";
import Intensity from "../Components/Charts/Intensity";
import ChartFooter from "../Components/ChartFooter/ChartFooter";
import FilterLebals from "../Components/FilterForm/FilterLebals";
import FilterId from "../Components/FilterForm/FilterId";
import NextPrevBtn from "../Components/HandleNextPrev/NextPrevBtn/NextPrevBtn";
import LOD from "./LayerOneData/LayerOneData";
import LTD from "./LayerTwoData/LayerTwoData";
import L3D from "./LayerThreeData/LayerThreeData";

import {
  EndYearFilter,
  SourceFilter,
  TopicFilter,
  SectorFilter,
  RegionFilter,
  CityFilter,
  PestFilter,
  IntensityFilter,
  CountryFilter,
} from "../Filters/filter";

const Dashboard = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [width, setWidth] = useState("70%");
  const [height, setHeight] = useState(0);
  const [spacing, setSpacing] = useState(2);

  const [filterValue, setFilterValue] = useState([]);

  // eslint-disable-next-line

  useEffect(() => {
    setWidth(window.outerWidth + "px");
    setHeight(window.outerHeight + "px");
    document.getElementById("side_menu").style.display === "none"
      ? setWidth("100%")
      : setWidth("70%");
    document.getElementById("side_menu").style.display === "block"
      ? setSpacing(5)
      : setSpacing(2);
    setFilter();

    // eslint-disable-next-line
  }, []);

  //////Dashboard Elements
  const [labels, setLabels] = useState([]);
  const [datasets, setDatasets] = useState([]);
  const [startDatasets, setStartYearDataset] = useState([]);
  const [endDatasets, setEndYearDataset] = useState([]);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  let [i, setI] = useState(0);
  let [j, setJ] = useState(0);
  let [count, setCount] = useState(1);
  let [limit, setLimit] = useState(1);
  //////////////////////////////////////////////////////////////////////////Datasets
  const [countryDataset, setCountryDataset] = useState([]);
  const [intensityDataset, setIntensityDataset] = useState([]);
  const [likelihoodDataset, setLikelihoodDataset] = useState([]);
  const [relevanceDataset, setRelevanceDataset] = useState([]);
  const [publishedDataset, setPublishedDataset] = useState([]);
  const [addedDataset, setAddedDataset] = useState([]);
  const [sourceDataset, setSourceDataset] = useState([]);
  const [pestleDataset, setPestleDataset] = useState([]);
  const [insightDataset, setInsightDataset] = useState([]);
  const [topicDataset, setTopicDataset] = useState([]);
  const [titleDataset, setTitleDataset] = useState([]);
  const [urlDataset, setUrlDataset] = useState([]);
  const [sectorDataset, setSectorDataset] = useState([]);
  const [regionDataset, setRegionDataset] = useState([]);
  const [impactDataset, setImpactDataset] = useState([]);
  ///////////////////////////////////////////////////////////////////////////DataArray
  const [startYear, setStartYear] = useState([]);
  const [endYear, setEndYear] = useState([]);
  const [intensity, setIntensity] = useState([]);
  const [likelihood, setLikelihood] = useState([]);
  const [relevance, setRelevance] = useState([]);
  const [url, setUrl] = useState([]);
  const [sector, setSector] = useState([]);
  const [region, setRegion] = useState([]);
  const [impact, setImpact] = useState([]);
  const [publish, setPublish] = useState([]);
  const [added, setAdded] = useState([]);
  const [source, setSource] = useState([]);
  const [pestle, setPestle] = useState([]);
  const [insight, setInsight] = useState([]);
  const [topic, setTopic] = useState([]);
  const [title, setTitle] = useState([]);
  const [country, setCountry] = useState([]);
  let [d2, setD2] = useState([]);
  let [timeoutid, setTimeoutid] = useState(0);
  timeoutid = setTimeout(
    () => {
      setD2(getData());
    },
    1000,
    timeoutid
  );
  if (timeoutid > 5) {
    clearTimeout(timeoutid);
  }
  useEffect(() => {
    setCountry(LOD?.Country(d2));
    setEndYear(LOD?.EndYear(d2));
    setStartYear(LOD?.StartYear(d2));
    setIntensity(LOD?.Intensity(d2));
    setLikelihood(LOD?.Likelihood(d2));
    setRelevance(LOD?.Relevance(d2));
    setUrl(LOD?.Url(d2));
    setSector(LOD?.Sector(d2));
    setRegion(LOD?.Region(d2));
    setImpact(LOD?.Impact(d2));
    setPublish(LOD?.Publish(d2));
    setSource(LOD?.Source(d2));
    setTitle(LOD?.Title(d2));
    setAdded(LOD?.Added(d2));
    setPestle(LOD?.Pestle(d2));
    setInsight(LOD?.Insight(d2));
    setTopic(LOD?.Topic(d2));
   
    if(d2.length == 0 ){
      setD2(getData())
    }
    // eslint-disable-next-line
  }, [d2]);

  useEffect(() => {
    setCountryDataset(LTD?.Country(country, limit));
    setEndYearDataset(LTD?.EndYear(endYear, limit));
    setStartYearDataset(LTD?.StartYear(startYear, limit));
    setIntensityDataset(LTD?.Intensity(intensity, limit));
    setLikelihoodDataset(LTD?.Likelihood(likelihood, limit));
    setRelevanceDataset(LTD?.Relevance(relevance, limit));
    setUrlDataset(LTD?.Url(url, limit));
    setSectorDataset(LTD?.Sector(sector, limit));
    setRegionDataset(LTD?.Region(region, limit));
    setImpactDataset(LTD?.Impact(impact, limit));
    setTopicDataset(LTD?.Topic(topic, limit));
    setPublishedDataset(LTD?.Publish(publish, limit));
    setAddedDataset(LTD?.Added(added, limit));
    setSourceDataset(LTD?.Source(source, limit));
    setInsightDataset(LTD?.Insight(insight, limit));
    setPestleDataset(LTD?.Pestle(pestle, limit));
    setTitleDataset(LTD?.Title(title, limit));
    // eslint-disable-next-line
  }, [country]);
  const handlePrev = () => {
    if (i === 0) {
      setDisablePrev(true);
      setCount(limit);
      setJ(0);
    }

    else {
      setI(--i);

      setCount(count - limit);
      setJ(j - limit);
      setDisablePrev(false);
      setDisableNext(false);
    }
  };
  const handleNext = () => {
    if (i === country.length / limit) {
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

    setCountryDataset(L3D?.Country(country, j, count));
    setEndYearDataset(L3D?.EndYear(endYear, j, count));
    setStartYearDataset(L3D?.StartYear(startYear, j, count));
    setIntensityDataset(L3D?.Intensity(intensity, j, count));
    setLikelihoodDataset(L3D?.Likelihood(likelihood, j, count));
    setRelevanceDataset(L3D?.Relevance(relevance, j, count));
    setUrlDataset(L3D?.Url(url, j, count));
    setSectorDataset(L3D?.Sector(sector, j, count));
    setRegionDataset(L3D?.Region(region, j, count));
    setImpactDataset(L3D?.Impact(impact, j, count));
    setTopicDataset(L3D?.Topic(topic, j, count));
    setPublishedDataset(L3D?.Publish(publish, j, count));
    setAddedDataset(L3D?.Added(added, j, count));
    setSourceDataset(L3D?.Source(source, j, count));
    setInsightDataset(L3D?.Insight(insight, j, count));
    setPestleDataset(L3D?.Pestle(pestle, j, count));
    setTitleDataset(L3D?.Title(title, j, count));

    if (count === country.length) {
      setDisableNext(true);
    }
    // eslint-disable-next-line
  }, [count, j]);
  const [filterSet, setFilterSet] = useState(true);
  const setFilter = () => {
    let val = [];
    EndYearFilter(d2).length != 0 && val.push(EndYearFilter(d2));
    SourceFilter(d2).length != 0 && val.push(SourceFilter(d2));
    TopicFilter(d2).length != 0 && val.push(TopicFilter(d2));
    PestFilter(d2).length != 0 && val.push(PestFilter(d2));
    SectorFilter(d2).length != 0 && val.push(SectorFilter(d2));
    RegionFilter(d2).length != 0 && val.push(RegionFilter(d2));
    CountryFilter(d2).length != 0 && val.push(CountryFilter(d2));
    IntensityFilter(d2).length != 0 && val.push(IntensityFilter(d2));
    CityFilter(d2).length != 0 && val.push(CityFilter(d2));
    let all = [];
    val.map((e,i)=>{
      e.map((e)=>{
        all.push(e)
      })
    })
    setD2(all)
    setCount(1);
    setLimit(1);
    setI(0);
    setJ(0);

    setFilterValue([]);
    setFilterSet(!filterSet);
  };
  const resetFilter = () => {
    setFilterSet(!filterSet);
    setCount(1);
    setLimit(1);
    setI(0);
    setJ(0);
    setD2(getData());
    setFilterValue([]);
  };

  const dstyle = {
    marginBottom: "5px",
    border: "1px solid rgba(0,0,0,0.2)",
    textAlign: "start",
    paddingLeft: "15px",
    marginLeft: "10px",
    position: "relative",
    bottom: "5px",
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          width: { width },

          height: { height },

          flexWrap: "wrap",
        }}
      >
        <div
          id="side_menu"
          style={{
            marginTop: "4%",
            width: "20%",
            height: "80vh",
            borderRight: "1px solid #1976d2",
            overflowY: "scroll",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Grid marginTop={"10px"}>
            {FilterLebals().map((e, k) => {
              return (
                <Item key={k}>
                  <FilterForm formLebal={e} filterId={`${FilterId(d2)?.[k]}`} />
                </Item>
              );
            })}
            <Item>
              <Button disabled={filterSet} onClick={setFilter}>
                Set Filter
              </Button>
              <Button disabled={!filterSet} onClick={resetFilter}>
                Reset Filter
              </Button>
            </Item>
          </Grid>
        </div>
        <div
          id="dashboard"
          style={{
            width: width,
            padding: "10px",
            paddingTop: "30px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "4%",
            height: "80vh",
            borderRight: "1px solid #1976d2",
            overflowY: "scroll",
            alignItems: "center",
          }}
        >
          <Grid marginTop={"10px"} container spacing={spacing}>
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <Item>
                  <ChartFooter
                    title={`${
                      countryDataset[0] !== ""
                        ? "Country : " + countryDataset[0]
                        : "No Country Found"
                    }`}
                  />
                  <ChartFooter
                    title={
                      regionDataset[0] !== ""
                        ? "Region : " + regionDataset[0]
                        : "No Region Found"
                    }
                  />
                </Item>
                <Grid
                  item
                  xs={15}
                  style={{ marginTop: "10px", display: "flex" }}
                >
                  <Item xs={5}>
                    <Intensity
                      Intensity={intensityDataset[0]}
                      Likelihood={likelihoodDataset[0]}
                      Relevance={relevanceDataset[0]}
                      Impact={impactDataset[0]}
                    />
                  </Item>

                  <Grid
                    style={{
                      display: "flex",
                      minWidth: "160%",
                      flexDirection: "column",
                    }}
                  >
                    <Item style={dstyle}>
                      <ChartFooter
                        title={`${
                          titleDataset[0] !== ""
                            ? "Title : " + titleDataset[0]
                            : "Title : No data Found"
                        }`}
                      />
                      <ChartFooter
                        title={`${
                          topicDataset[0] !== ""
                            ? "Topic : " + topicDataset[0]
                            : "Topic : No data Found"
                        }`}
                      />
                    </Item>
                    <Item style={dstyle}>
                      <ChartFooter
                        title={`${
                          insightDataset[0] !== ""
                            ? "Insight : " + insightDataset[0]
                            : "Insight : No data Found"
                        }`}
                      />
                      <ChartFooter
                        title={`${
                          pestleDataset[0] !== ""
                            ? "Pestle : " + pestleDataset[0]
                            : "Pestle : No data Found"
                        }`}
                      />
                    </Item>
                    <Item style={dstyle}>
                      <ChartFooter
                        title={`${
                          sourceDataset[0] !== ""
                            ? "Source : " + sourceDataset[0]
                            : "Source : No data Found"
                        }`}
                      />
                      <ChartFooter
                        title={`${
                          addedDataset[0] !== ""
                            ? "Added : " + addedDataset[0]
                            : "Added : No data Found"
                        }`}
                      />
                    </Item>
                    <Item style={dstyle}>
                      <ChartFooter
                        title={`${
                          publishedDataset[0] !== ""
                            ? "Published :  " + publishedDataset[0]
                            : "Published : No data Found"
                        }`}
                      />
                    </Item>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={7}>
                <Item style={{ display: "flex" }}>
                  <Grid item xs={3}>
                    <Item style={{ boxShadow: "none" }}>
                      <ChartFooter
                        title={`${
                          startDatasets[0] !== ""
                            ? "Start Year : " + startDatasets[0]
                            : "No Data Found"
                        }`}
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={3}>
                    <Item style={{ boxShadow: "none" }}>
                      <ChartFooter
                        title={`${
                          endDatasets[0] !== ""
                            ? "End Year : " + endDatasets[0]
                            : "No Data Found"
                        }`}
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={5}>
                    <Item style={{ boxShadow: "none" }}>
                      <ChartFooter
                        title={`${
                          sectorDataset[0] !== ""
                            ? "Sector : " + sectorDataset[0]
                            : "No Data Found"
                        }`}
                      />
                    </Item>
                  </Grid>
                </Item>
              </Grid>

              <Grid item xs={15} position={"relative"} bottom={15}>
                <Item>
                  <NextPrevBtn
                    disablePrev={disablePrev}
                    disableNext={disableNext}
                    handlePrev={handlePrev}
                    count={count}
                    handleNext={handleNext}
                    urlDataset={urlDataset[0]}
                    maxCount={country.length}
                  />
                </Item>
              </Grid>

              <Grid item xs={15}>
                <Item>
                  <CountryIntensityRatioChart />
                </Item>
              </Grid>
              <Grid item xs={15}>
                <Item>
                  <CountryStartYearAndEndYears />
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
