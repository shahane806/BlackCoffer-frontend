import { MenuItem } from '@mui/material'
import React from 'react'
const CountryFilterMenu = (data) => {
    let country = [];
    function setCountry(data){
        country = data;
    }
    let d = data?.map((e) => {
        return e?.country;
      });
      d = d.map((e) => {
        return e?.charAt(0).toUpperCase() + e?.slice(1);
      });
      setCountry(d.sort());
      const uniqueCountry = country.filter((e, i) => {
        return country.indexOf(e) === i;
      });
     let menu = uniqueCountry?.map((e, i) => {
        return (
          <MenuItem value={e} key={i}>
            {e}
          </MenuItem>
        );
      });
  return menu;
}

export default CountryFilterMenu
