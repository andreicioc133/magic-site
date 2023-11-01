import React from "react";
import { StyledBox, StyledContainer } from "./StyledComponents";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { useTheme } from "@mui/material";
import { useResponsiveValues } from "../utils/CustomHooks";
import GenericText from "./GenericText";

function ContactEndSection() {
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();
  return (
    <>
      <StyledContainer
        flexDirection="column"
        style={{
          borderRadius: "10px",
          border: `0.2px dashed ${theme.palette.primary.secondary}`,
          boxShadow: "0px -2px 3px" + theme.palette.primary.secondary,
          marginTop: smallScreen ? "0" : "2vh",
          marginBottm: "2vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: smallScreen ? "30vh" : "50vh",
            alignItems: "center",
            width: "100%",
          }}
        >
          <GenericText
            label="Raspunsul e unul singur:"
            fontSize={smallScreen ? "1.25rem" : "2.5rem"}
            fontWeight={"bold"}
            style={{
              color: theme.palette.primary.white,
              fontStyle: "italic",
            }}
          />
          <GenericText
            label="TAMADUITOREA SI CLARVAZATOAREA SUNITA"
            fontSize={smallScreen ? "1.25rem" : "2.5rem"}
            fontWeight={"bold"}
            style={{
              color: theme.palette.primary.secondary,
              fontStyle: "italic",
              textAlign: "center",
            }}
          />
          <GenericText
            label="Nu ezitati, contactati o adevarata tamaduitoare si clarvazatoare cu puteri miraculoase."
            fontSize={smallScreen ? "0.85rem" : "1.25rem"}
            fontWeight={"bold"}
            style={{
              textAlign: "center",
              color: theme.palette.primary.white,
              fontStyle: "italic",
            }}
          />
        </div>
        <StyledBox
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <StyledBox
            style={{
              display: "flex",
              flexDirection: smallScreen ? "column" : "row",
              justifyContent: "space-between",
              width: smallScreen ? "95vw" : "60vw",
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
              {smallScreen ? (
                <></>
              ) : (
                <p
                  style={{
                    fontWeight: "bold",
                    color: theme.palette.primary.secondary,
                    fontSize: smallScreen ? "1.2rem" : "2rem",
                    textAlign: "center",
                    marginLeft: "1rem",
                  }}
                >
                  Contact:
                </p>
              )}
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
                  {" "}
                  0746432274
                </a>
              </p>
            </div>
          </StyledBox>
        </StyledBox>
      </StyledContainer>
      <div style={{ height: "1vh" }}></div>
    </>
  );
}

export default ContactEndSection;
