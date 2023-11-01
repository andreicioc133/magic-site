import { styled } from "@mui/material";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";

export const StyledContainer = styled(motion.div)(
  ({ theme, style, flexDirection }) => ({
    display: "flex",
    flexDirection: flexDirection ? flexDirection : "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    minHeight: "30vh",
    borderColor: theme.palette.primary.secondary,
    ...style,
  })
);

export const StyledBox = styled(motion.div)(({ theme, style }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "40%",
  minHeight: "100%",
  borderColor: theme.palette.primary.secondary,

  ...style,
}));

export const StyledImg = styled("img")(({ srcSet, src, alt }) => ({
  srcSet: srcSet,
  src: src,
  alt: alt,
  loading: "lazy",
}));
