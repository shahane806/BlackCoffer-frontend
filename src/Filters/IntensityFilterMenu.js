import { MenuItem } from "@mui/material";
import React from "react";
let intensity = [];
function setIntensity(data) {
  intensity = data;
}
const IntensityFilterMenu = (data) => {
  let d = data?.map((e) => {
    return e?.intensity;
  });
  setIntensity(
    d.sort(function (a, b) {
      return a - b;
    })
  );
  const uniqueIntensity = intensity.filter((e, i) => {
    return intensity.indexOf(e) === i;
  });
  let menu = uniqueIntensity?.map((e, i) => {
    return (
      <MenuItem value={e} key={i}>
        {e}
      </MenuItem>
    );
  });
  return menu;
};
export function getIntensity() {
  return intensity;
}
export default IntensityFilterMenu;
