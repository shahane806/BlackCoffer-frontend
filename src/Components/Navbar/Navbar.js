import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { AppBar, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const Navbar = () => {
  const [sideBar, setSideBar] = useState("block");

  const handleClick = () => {
    sideBar === "block" ? setSideBar("none") : setSideBar("block");

    document.getElementById("side_menu").style.display = `${sideBar}`;
  };

  return (
    <Box sx={{ flexGrow: 1 }} style={{ position: "fixed", width: "100%" }}>
      <AppBar position="static" style={{backgroundColor:"#fffcfc" , boxShadow:"none" ,borderBottom:"1px solid #edebeb" , zIndex:"999"}}>
        <Toolbar >
          <MenuIcon onClick={handleClick} style={{ cursor: "pointer" , filter:"invert(5)" }} />
          <h3 style={{marginLeft:"10px" ,color:"black"}}>BlackCoffer Dashboard</h3>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
