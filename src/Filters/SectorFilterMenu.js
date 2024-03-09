import { MenuItem } from '@mui/material'
import React from 'react'
const SectorFilterMenu = (data) => {
    let sector = [];
    function setSector(data){
        sector = data;
    }
    let d = data?.map((e) => {
        return e?.sector;
      });
      d = d.map((e) => {
        return e?.charAt(0).toUpperCase() + e?.slice(1);
      });
      setSector(d.sort());
      const uniqueSector = sector.filter((e, i) => {
        return sector.indexOf(e) === i;
      });
      let menu = uniqueSector?.map((e, i) => {
        return (
          <MenuItem value={e} key={i}>
            {e}
          </MenuItem>
        );
      });
 return menu;
}

export default SectorFilterMenu
