import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React from "react";
import Img1 from "../assets/Img1.jpeg";
import Img2 from "../assets/Img2.jpeg";
import Img3 from "../assets/Img3.jpeg";
import Img4 from "../assets/Img4.jpeg";
import Img5 from "../assets/Img5.jpeg";
import "./styles.css";

function ImageCarousel() {
  return (
    <>
      <ImageList variant="woven" cols={3} gap={6}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} className="front-img">
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

const itemData = [
  {
    img: Img1,
    title: "Bed",
  },
  {
    img: Img2,
    title: "Books",
  },
  {
    img: Img3,
    title: "Sink",
  },
  {
    img: Img4,
    title: "Kitchen",
  },
  {
    img: Img5,
    title: "Blinds",
  },
];

export default ImageCarousel;
