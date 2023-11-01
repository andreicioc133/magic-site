import React from "react";
import { motion } from "framer-motion";
import { StyledBox } from "./StyledComponents";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { useTheme } from "@mui/material";
import { useResponsiveValues } from "../utils/CustomHooks";
import { INTRO_TEXT } from "../utils/Constants";
import Logo from "../assets/Logo.png";

function IntroSection() {
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: smallScreen ? "50vh" : "50vh",
      }}
    >
      <StyledBox
        style={{
          width: "90vw",
          flex: smallScreen || "0.8",
          height: smallScreen ? "37vh" : "20vh",
        }}
      >
        <motion.p
          className="glow"
          fontSize={"2rem"}
          style={{
            fontWeight: "bold",
            fontStyle: "italic",
            color: theme.palette.primary.white,
            fontSize: smallScreen ? "1.2rem" : "2rem",
            fontFamily: "cursive",
          }}
        >
          {INTRO_TEXT}
        </motion.p>
      </StyledBox>
      <StyledBox
        style={{
          flex: smallScreen ? "0.2" : "0.1",
          flexDirection: smallScreen ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ContactPhoneIcon
            sx={{
              color: theme.palette.primary.secondary,
              fontSize: "6vh",
            }}
          />
          <p
            style={{
              fontWeight: "bold",
              color: theme.palette.primary.secondary,
              fontSize: smallScreen ? "1.2rem" : "2rem",
              textAlign: "center",
              marginLeft: "1rem",
            }}
          >
            <a
              style={{ color: theme.palette.primary.secondary }}
              href="tel:PHONE_NUM"
            >
              0722974883
            </a>
          </p>
        </div>
        <img
          src={Logo}
          style={{ width: "35vw", marginTop: smallScreen ? "" : "7.5vh" }}
          className="homescreenImg"
        ></img>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ContactPhoneIcon
            sx={{
              color: theme.palette.primary.secondary,
              fontSize: "6vh",
            }}
          />
          <p
            style={{
              fontWeight: "bold",
              color: theme.palette.primary.secondary,
              fontSize: smallScreen ? "1.2rem" : "2rem",
              textAlign: "center",
              marginLeft: "1rem",
            }}
          >
            <a
              style={{ color: theme.palette.primary.secondary }}
              href="tel:PHONE_NUM"
            >
              0722974883
            </a>
          </p>
        </div>
      </StyledBox>
    </div>
  );
}

export default IntroSection;
