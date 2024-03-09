import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { fetchDataRoute } from "../../Api/apiRoutes";
import { useDispatch } from "react-redux";
import EndYearFilter from "../../Filters/EndYearFilterMenu";
import SourceFilter from "../../Filters/SourceFilterMenu";
import TopicFilter from "../../Filters/TopicFilterMenu";
import PestFilter from "../../Filters/PestFilterMenu";
import SectorFilter from "../../Filters/SectorFilterMenu";
import RegionFilter from "../../Filters/RegionFilterMenu";
import CountryFilter from "../../Filters/CountryFilterMenu";
import IntensityFilter from "../../Filters/IntensityFilterMenu";
import CityFilter from "../../Filters/CityFilterMenu";
import FilterLebals2 from "./FilterLebals2";
let data = [];
function setData(d) {
  data = d;
}
const FilterForm = (props) => {
  const [v, setValue] = useState("");

  const [menuItems, setMenuItems] = useState([]);
  const [filteredMenu, setfilteredMenu] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const d = fetchDataRoute();
    d?.then((res) => res?.data?.data)?.then((res) => {
      setData(res);
    });
  }, []);

  useEffect(() => {
    menuItems[0] = EndYearFilter(data);
    menuItems[1] = SourceFilter(data);
    menuItems[2] = TopicFilter(data);
    menuItems[3] = PestFilter(data);
    menuItems[4] = SectorFilter(data);
    menuItems[5] = RegionFilter(data);
    menuItems[6] = CountryFilter(data);
    menuItems[7] = IntensityFilter(data);
    menuItems[8] = CityFilter(data);
  }, [data]);
  useEffect(() => {
    dispatch({
      type: "fetchData",
      payload: data,
    });
  }, [data]);

  useEffect(() => {
    FilterLebals2()?.map((e, i) => {
      if (e === props?.formLebal) {
        if (menuItems[i] != undefined) {
          filteredMenu[i] = menuItems[i];
        }
      }
    });
    let d = filteredMenu?.filter((e) => {
      return e != null;
    });

    setfilteredMenu(d);
  }, [menuItems]);
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{props?.formLebal}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id={props?.filterId}
        value={v}
        label={props?.formLebal}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        {filteredMenu?.map((e, i) => {
          return e;
        })}
      </Select>
    </FormControl>
  );
};
export function getData() {
  return data;
}
export default FilterForm;
