import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import IntroVideo from "../assets/IntroVideo.mp4";
import IntroVideo2 from "../assets/IntroVideo2.mp4";

function VideoComponent({ onEnded }) {
  const videoSrc = IntroVideo2;
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    setAutoplay(true);
  }, []);

  return (
    <ReactPlayer
      url={videoSrc}
      controls={true}
      style={{
        alignSelf: "center",
      }}
      width="95%"
      height="95%"
      playing={autoplay}
      onEnded={onEnded}
      onReady={() => setAutoplay(true)}
    />
  );
}

export default VideoComponent;
