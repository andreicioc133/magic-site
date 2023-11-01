import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Img9 from "../assets/Img9.jpg";
import Img10 from "../assets/Img10.jpg";
import Img11 from "../assets/Img11.jpg";
import Img12 from "../assets/Img12.jpg";
import Img13 from "../assets/Img13.jpg";
import img14 from "../assets/img14.jpeg";

const texts = [
  "PREZICATOARE",
  "Ghicitoare",
  "Tamaduitoare",
  "Clarvazatoare",
  "Magie Alba",
];

const images = [Img9, Img10, Img11, Img12, Img13, img14];

function ImageSlider() {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);

  const renderNextImage = () => {
    if (index === 4) {
      setCurrentImage(images[0]);
      setIndex(0);
      return;
    }

    setCurrentImage(images[index + 1]);
    setIndex(() => index + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => renderNextImage(), 2000);
    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          display: "flex",
          left: 0,
          bottom: 0,
          padding: "10px",
          width: "100%",
          minHeight: "50vh",
          position: "relative",
          margin: "0 auto",
        }}
      >
        <motion.img
          src={currentImage}
          alt="alt"
          style={{
            width: "100%",
            height: "auto",
            padding: 0,
            backgroundPosition: "center top",
            transition: "background 0.2s linear",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "-10vh",
            left: "10px",
            margin: 0,
            padding: "10px",
            width: "98.6%",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          {/* <p
            style={{
              fontSize: "10vmin",
              color: theme.palette.primary.white,
              width: "100%",

              //   backgroundColor: "green",
            }}
          >
            {currentText}
          </p> */}
        </div>
      </motion.div>
    </>
  );
}

export default ImageSlider;
