import { styled } from "@mui/material";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";

function GenericBtn({ onClick, width, height, label, style, text }) {
  const StyledBtn = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.white,
    width: width,
    minHeight: height,
    borderColor: theme.palette.primary.secondary,
    border: "1px solid" + theme.palette.primary.secondary,
    // backgroundColor: theme.palette.primary.secondary,
    "&:hover": {
      backgroundColor: theme.palette.primary.secondary,
      color: "white",
      borderColor: theme.palette.primary.secondary,
      border: "1px solid" + theme.palette.primary.secondary,
    },
    ...style,
  }));

  return (
    <StyledBtn variant="outlined" onClick={onClick}>
      {label}
      {text}
    </StyledBtn>
  );
}

export default GenericBtn;
