import React from 'react'
import MenuItem from "@mui/material/MenuItem";

const SourceFilterMenu = (data) => {
  let source = [];
  function setSource(data){
    source = data;
  }

  let d = data?.map((e) => {
    return e?.source;
  });
  d = d.map((e) => {
    return e?.charAt(0).toUpperCase() + e?.slice(1);
  });
  setSource(d.sort());

  const uniqueSource = source.filter((e, i) => {
    return source.indexOf(e) === i;
  });
  let menu = uniqueSource?.map((e, i) => {
    return (
      <MenuItem value={e} key={i}>
        {e}
      </MenuItem>
    );
  });
  return menu;
 };
export default SourceFilterMenu;

