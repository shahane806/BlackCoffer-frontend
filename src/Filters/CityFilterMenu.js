import { MenuItem } from '@mui/material'
import React from 'react'

 
  const CityFilterMenu = (data) => {
    let city = [];
    function setCity(data){
      city = data;
    }
    let d = data?.map((e) => {
      return e?.city;
    });
    setCity(d.sort());
    d = d.map((e) => {
      return e?.charAt(0).toUpperCase() + e?.slice(1);
    });
    setCity(d.sort());
    const uniqueCity = city.filter((e, i) => {
      return city.indexOf(e) === i;
    });
   let menu = uniqueCity?.map((e, i) => {
      return (
        <MenuItem value={e} key={i}>
          {e}
        </MenuItem>
      );
    });
    return menu;
  };
  export default CityFilterMenu;