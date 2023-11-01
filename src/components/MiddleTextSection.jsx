import React from "react";
import { motion } from "framer-motion";
import { StyledBox } from "./StyledComponents";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { useTheme } from "@mui/material";
import { useResponsiveValues } from "../utils/CustomHooks";
import { MIDDLE_TEXT } from "../utils/Constants";

function MiddleTextSection() {
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();
  return (
    <div>
      <StyledBox
        style={{
          width: "90vw",
          height: smallScreen ? "75vh" : "40vh",
          marginTop: "2vh",
          paddingBottom: "2vh",
          marginBottom: "3vh",
          flexDirection: "column",
        }}
      >
        <motion.p
          fontSize={smallScreen ? "1rem" : "2rem"}
          style={{
            fontWeight: "bold",
            color: theme.palette.primary.secondary,
            fontSize: smallScreen ? "1.2rem" : "2rem",
            textAlign: "center",
          }}
        >
          {MIDDLE_TEXT}
        </motion.p>
        <div
          style={{
            display: "flex",
            width: smallScreen ? "100%" : "90vw",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.palette.primary.blue,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: smallScreen ? "column" : "row",
              justifyContent: "space-between",
              width: smallScreen ? "95vw" : "70vw",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  color: theme.palette.primary.white,
                  fontSize: smallScreen ? "1.2rem" : "2rem",
                  textAlign: "center",
                  marginLeft: "1rem",
                }}
              >
                Contact:
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ContactPhoneIcon
                sx={{
                  color: theme.palette.primary.white,
                  fontSize: "6vh",
                }}
              />
              <p
                style={{
                  fontWeight: "bold",
                  color: theme.palette.primary.white,
                  fontSize: smallScreen ? "1.2rem" : "2rem",
                  textAlign: "center",
                  marginLeft: "1rem",
                }}
              >
                <a
                  style={{ color: theme.palette.primary.white }}
                  href="tel:PHONE_NUM"
                >
                  0722974883
                </a>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ContactPhoneIcon
                sx={{
                  color: theme.palette.primary.white,
                  fontSize: "6vh",
                }}
              />
              <p
                style={{
                  fontWeight: "bold",
                  color: theme.palette.primary.white,
                  fontSize: smallScreen ? "1.2rem" : "2rem",
                  textAlign: "center",
                  marginLeft: "1rem",
                }}
              >
                <a
                  style={{ color: theme.palette.primary.white }}
                  href="tel:PHONE_NUM"
                >
                  {" "}
                  0746432274
                </a>
              </p>
            </div>
          </div>
        </div>
      </StyledBox>
    </div>
  );
}

export default MiddleTextSection;
