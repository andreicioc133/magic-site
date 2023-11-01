import React, { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import GenericText from "./GenericText";
import GenericBtn from "./GenericBtn";
import { useTheme, styled } from "@mui/material";
import { motion } from "framer-motion";
import { useResponsiveValues } from "../utils/CustomHooks";

const StyledBaseModalContainer = styled(motion.div)(({ theme, style }) => ({
  display: "flex",
  height: "90vh",
  width: "80vw",
  border: "1px solid" + theme.palette.primary.secondary,
  borderRadius: "10px",
  fontFamily: "Rubik",
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
}));

function BaseInfoModal({ title, text, modalOpened = false, callbackSetBack }) {
  const [openModal, setOpenModal] = useState(false);

  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();

  useEffect(() => {
    if (modalOpened) setOpenModal(true);
    console.log("title: ", title, "text: ", text);
  }, [modalOpened]);

  const handleModalClose = () => {
    setOpenModal(false);
    callbackSetBack();
  };

  return (
    <>
      <Modal open={openModal} onClose={() => handleModalClose()}>
        <StyledBaseModalContainer
          style={{ height: smallScreen ? "65vh" : "80vh" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              flex: "0.05",
            }}
          >
            <GenericBtn
              label={"x"}
              width={"5vw"}
              height={"2vh"}
              onClick={() => handleModalClose(false)}
            />
          </div>
          <div
            style={{
              flex: "0.05",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <GenericText
              label={title || ""}
              fontSize={smallScreen ? "1.25rem" : "2.25rem"}
              style={{
                fontWeight: "bold",
                color: theme.palette.primary.secondary,
              }}
            />
          </div>
          <div
            style={{
              flex: "0.9",
              display: "flex",
              justifyContent: "center",
              overflowY: "scroll",
            }}
          >
            <GenericText label={text || ""} style={{ textAlign: "center" }} />
          </div>
        </StyledBaseModalContainer>
      </Modal>
    </>
  );
}

export default BaseInfoModal;
