import { Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

const RedirectText = styled("span")({
  color: "#00AFF4",
  fontWeight: 500,
  cursor: "pointer",
});

const RedirectInfo = ({
  text,
  redirectText,
  additionalStyles,
  redirectHandler,
}) => {
  return (
    <Typography
      sx={{ color: "#72767d" }}
      additionalStyles={additionalStyles ? additionalStyles : {}}
      variant="subtitle2"
    >
      {text}{" "}
      <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
