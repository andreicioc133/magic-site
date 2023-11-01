import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useResponsiveValues } from "../utils/CustomHooks";
import GenericBtn from "./GenericBtn";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useTheme } from "@mui/material";

function VideoPlayerCarousel({ videos, autoplay = false }) {
  const theme = useTheme();
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [autoplayVideo, setAutoplayVideo] = useState(autoplay);

  const handleNextVideo = () => {
    let currentVideoIndex = videos.findIndex(
      (element) => element === currentVideo
    );
    if (currentVideo === videos.slice(-1)[0]) {
      setCurrentVideo(videos[0]);
      return;
    }
    setCurrentVideo(videos[currentVideoIndex + 1]);
  };

  const handlePreviousVideo = () => {
    let currentVideoIndex = videos.findIndex(
      (element) => element === currentVideo
    );
    if (currentVideo === videos[0]) {
      setCurrentVideo(videos.slice(-1)[0]);
      return;
    }
    setCurrentVideo(videos[currentVideoIndex - 1]);
  };

  const { smallScreen } = useResponsiveValues();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: smallScreen ? "column" : "row",
        // justifyContent: "center",
        alignItems: "center",
        width: smallScreen ? "100%" : "80vw",
        height: smallScreen ? "80vh" : "95%",
        borderTop: smallScreen
          ? "none"
          : `1px solid ${theme.palette.primary.secondary}`,
        borderBottom: smallScreen
          ? "none"
          : `1px solid ${theme.palette.primary.secondary}`,
        borderRadius: smallScreen ? 0 : "5px",
        padding: smallScreen ? 0 : "0 5vw 0 5vw",
        marginTop: smallScreen ? 0 : "7.5vh",
        marginBottom: smallScreen ? 0 : "7.5vh",
      }}
    >
      {smallScreen ? (
        <></>
      ) : (
        <>
          <GenericBtn
            label={<PlayArrowIcon style={{ transform: "rotate(180deg)" }} />}
            text={"Anterior"}
            width={"10vw"}
            height={"7vh"}
            style={{
              maxHeight: "10vh",
              marginRight: smallScreen ? "0" : "2vw",
            }}
            onClick={() => handlePreviousVideo()}
          />
        </>
      )}

      <ReactPlayer
        url={currentVideo}
        controls={true}
        style={{
          alignSelf: "center",
        }}
        height={smallScreen ? "35vh" : "80vh"}
        width={smallScreen ? "90vw" : "80%"}
        playing={autoplayVideo}
        onEnded={() => handleNextVideo()}
      />
      <GenericBtn
        label={<PlayArrowIcon />}
        text={"Urmatorul"}
        // label={<PlayArrowIcon />}
        width={smallScreen ? "50vw" : "10vw"}
        height={"7vh"}
        style={{
          maxHeight: "10vh",
          marginLeft: smallScreen ? "0" : "2vw",
          marginTop: smallScreen ? "4vh" : "0",
          marginBottom: smallScreen ? "4vh" : "0",
        }}
        onClick={() => handleNextVideo()}
      ></GenericBtn>
    </div>
  );
}

export default VideoPlayerCarousel;
