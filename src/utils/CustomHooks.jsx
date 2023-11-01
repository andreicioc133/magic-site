import { useTheme, useMediaQuery } from "@mui/material";

export const useResponsiveValues = () => {
  const theme = useTheme();
  const extraSmallScreen = useMediaQuery(
    theme?.breakpoints?.between("xs", "sm")
  );
  const smallScreen = useMediaQuery(theme?.breakpoints?.down("md"));
  const mediumScreen = useMediaQuery(theme?.breakpoints?.down("lg"));
  const largeScreen = useMediaQuery(theme?.breakpoints?.down("xl"));
  const extraLargeScreen = useMediaQuery(theme?.breakpoints?.only("xl"));

  return {
    extraSmallScreen,
    smallScreen,
    mediumScreen,
    largeScreen,
    extraLargeScreen,
  };
};
