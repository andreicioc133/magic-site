import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import ReactPlayer from "react-player";
import "pure-react-carousel/dist/react-carousel.es.css";

function VideoCarousel() {
  const videosData = [
    { id: 1, url: "https://www.youtube.com/watch?v=jRWR0Ob6mLI" },
    { id: 2, url: "https://www.youtube.com/watch?v=RpHIdB7i0oM" },
    { id: 3, url: "https://www.youtube.com/watch?v=wN9bXy_fiOE" },
    { id: 4, url: "https://www.youtube.com/watch?v=XceJFDoEPMY" },
  ];

  return (
    <>
      <CarouselProvider
        orientation="horizontal"
        naturalSlideWidth={500}
        naturalSlideHeight={500}
        totalSlides={videosData.length}
        style={{ width: "75vw" }}
        visibleSlides={videosData.length}
      >
        <Slider>
          {videosData.map((e) => {
            return (
              <Slide style={{ width: "50%" }}>
                <ReactPlayer
                  url={e.url}
                  // controls={true}
                  // style={{
                  //   alignSelf: "center",
                  // }}
                  width="95%"
                  height="95%"
                  // playing={autoplay}
                />
              </Slide>
            );
          })}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </>
  );
}

export default VideoCarousel;
