import React from 'react'
import { styled } from "@mui/system";
import { connect } from "react-redux";

const MainContainer = styled("div")({
    height: "85%",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  });

const VideosContainer = ({localStream}) => {
  return (
    <MainContainer>

    </MainContainer>
  )
}

export default VideosContainer
