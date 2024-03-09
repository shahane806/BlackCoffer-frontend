import React from "react";
import { styled } from "@mui/material/styles";
const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));
const ChartFooter = (props) => {
  return (
    <div>
      <Div>{props?.title}</Div>
    </div>
  );
};

export default ChartFooter;
