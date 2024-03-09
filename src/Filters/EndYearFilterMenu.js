import MenuItem from "@mui/material/MenuItem";
 const EndYearFilterMenu = (data)=>{
    let endYear = [];
  function setEndYear(data){
    endYear = data;
  }
    let d = data?.map((e) => {
        return e?.end_year;
      });
  
      setEndYear(
        d.sort(function (a, b) {
          return a - b;
        })
      );
      const filteredData = endYear.filter((e, i) => {
        return endYear?.indexOf(e) === i;
      });
     let menu = filteredData?.map((e, i) => {
        return (
          <MenuItem value={e} key={i}>
            {e}
          </MenuItem>
        );
      });
    return menu;
}
export default EndYearFilterMenu;