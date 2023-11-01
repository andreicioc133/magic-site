import React, { useState } from "react";
import { Modal } from "@mui/material";
import VideoComponent from "./VideoComponent";
import { styled } from "@mui/material";
import { motion } from "framer-motion";
import GenericBtn from "./GenericBtn";
import { useResponsiveValues } from "../utils/CustomHooks";

export const StyledVideoModalContainer = styled(motion.div)(
  ({ theme, style }) => ({
    height: "90vh",
    width: "90vw",
    border: "1px solid" + theme.palette.primary.secondary,
    borderRadius: "10px",
    fontFamily: "Rubik",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "1rem 1rem 1rem 1rem",
    alignSelf: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.primary.main,
    ...style,
  })
);

function VideoModal({ handleStartThanksVideo }) {
  const [openVideoModal, setOpenVideoModal] = useState(true);
  const { smallScreen } = useResponsiveValues();

  const handleClose = () => {
    document
      .getElementById("video-carousel")
      .scrollIntoView({ behavior: "smooth" });
    setOpenVideoModal(false);
    handleStartThanksVideo();
  };

  return (
    <Modal open={openVideoModal} onClose={() => setOpenVideoModal(false)}>
      <StyledVideoModalContainer
        style={{
          width: smallScreen ? "90vw" : "90vw",
          height: smallScreen ? "70vh" : "90vh",
          top: smallScreen ? "45%" : "50%",
          left: smallScreen ? "50%" : "50%",
          // position: smallScreen ? "" : "absolute",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            // alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <GenericBtn
            label={"x"}
            width={"2vw"}
            height={"2vh"}
            onClick={() => handleClose()}
          />
        </div>
        <VideoComponent onEnded={handleClose} />
      </StyledVideoModalContainer>
    </Modal>
  );
}

export default VideoModal;
