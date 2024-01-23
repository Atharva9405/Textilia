import React from "react";
import { connect } from "react-redux";
import { Typography } from "@mui/material";

const ChosenOptionLabel = ({ name }) => {
  return (
    <Typography
      sx={{ fontSize: "16px", color: "white", fontWeight: "bold" }}
    >{`${name ? `You are talking to: ${name}` : ""}`}</Typography>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    name: state.chat.chosenChatDetails?.name,
  };
};

export default connect(mapStoreStateToProps)(ChosenOptionLabel);
