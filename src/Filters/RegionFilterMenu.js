import React from "react";
import { MenuItem } from "@mui/material";
const RegionFilterMenu = (data) => {
    let region = [];
    function setRegion(data){
        region = data;
    }
  let d = data?.map((e) => {
    return e?.region;
  });
  d = d.map((e) => {
    return e?.charAt(0).toUpperCase() + e?.slice(1);
  });
  setRegion(d.sort());
  const uniqueRegion = region.filter((e, i) => {
    return region.indexOf(e) === i;
  });
  let menu = uniqueRegion?.map((e, i) => {
    return (
      <MenuItem value={e} key={i}>
        {e}
      </MenuItem>
    );
  });
  return menu;
};

export default RegionFilterMenu;
