import { Button } from "@mui/material";
import React from "react";
const NextPrevBtn = (props) => {
  return (
    <>
      <div style={{ display: "flex"  , justifyContent:"space-evenly"}}>
        <p>{props?.count}/{props?.maxCount}</p>
        <Button
          disabled={props?.disablePrev}
          style={{ backgroundColor: "#f0f0f0", marginLeft: "10px" }}
          onClick={props?.handlePrev}
        >
          &lt;
        </Button>
        <Button
          disabled={props?.disableNext}
          style={{ backgroundColor: "#f0f0f0", marginLeft: "10px" }}
          onClick={props?.handleNext}
          
        >  
          &gt;
        </Button>
        <Button>
        <a
          href={props?.urlDataset!= "" ? props?.urlDataset: "/"}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          More
        </a>
      </Button>
      </div>
     
    </>
  );
};

export default NextPrevBtn;
