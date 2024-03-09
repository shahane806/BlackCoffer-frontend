import { MenuItem } from "@mui/material";
import React from "react";
const PestFilterMenu = (data) => {
  let pest = [];
  function setPest(data) {
    pest = data;
  }
  let d = data?.map((e) => {
    return e?.pestle;
  });
  d = d.map((e) => {
    return e?.charAt(0).toUpperCase() + e?.slice(1);
  });
  setPest(d.sort());
  const uniquePestle = pest.filter((e, i) => {
    return pest.indexOf(e) === i;
  });
  let menu = uniquePestle?.map((e, i) => {
    return (
      <MenuItem value={e} key={i}>
        {e}
      </MenuItem>
    );
  });
  return menu;
};

export default PestFilterMenu;
