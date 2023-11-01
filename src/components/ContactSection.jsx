import React from "react";
import { StyledBox, StyledContainer } from "./StyledComponents";
import GenericText from "./GenericText";
import { useTheme } from "@emotion/react";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { useResponsiveValues } from "../utils/CustomHooks";

function ContactSection() {
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();
  return (
    <StyledContainer
      flexDirection="column"
      style={{
        borderRadius: "10px",
        backgroundColor: theme.palette.primary.blue,
        marginTop: smallScreen && "5vh",
      }}
    >
      <StyledBox
        style={{
          height: smallScreen ? "10vh" : "20vh",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <GenericText
          label="Contacteaza-ne acum!"
          fontSize={smallScreen ? "1.25rem" : "3rem"}
          fontWeight={"bold"}
          style={{
            color: theme.palette.primary.white,
            fontStyle: "italic",
          }}
        />
      </StyledBox>
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
                  color: theme.palette.primary.white,
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
        </StyledBox>
      </StyledBox>
    </StyledContainer>
  );
}

export default ContactSection;
