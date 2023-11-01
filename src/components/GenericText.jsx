import React from "react";
import { styled } from "@mui/material";
import { motion } from "framer-motion";

function GenericText({ label, fontSize, fontWeight, style }) {
  const StyledText = styled(motion.p)(({ theme }) => ({
    color: theme.palette.primary.white,
    fontSize: fontSize,
    fontWeight: fontWeight,
    fontFamily: "monospace",
    ...style,
  }));
  return <StyledText>{label}</StyledText>;
}

export default GenericText;
