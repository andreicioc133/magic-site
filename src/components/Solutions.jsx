import React from "react";
import { StyledBox, StyledContainer } from "./StyledComponents";
import GenericText from "./GenericText";
import { useTheme } from "@emotion/react";
import GenericBtn from "./GenericBtn";
import { useResponsiveValues } from "../utils/CustomHooks";
import {
  CLARVIZIUNEA_TEXT,
  TAROTUL_TEXT,
  ASTROLOGIA_TEXT,
  CHIROMANTIA_TEXT,
} from "../utils/Constants";
import Astrology from "../assets/Astrology.jpg";
import Clairvoyance from "../assets/Clairvoyance.jpg";
import PalmRead from "../assets/PalmRead.jpg";
import Tarot from "../assets/Tarot.png";

function Solutions({ handleOpenShowMoreModal }) {
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();
  const solutions = [
    {
      id: 0,
      title: "Clarviziunea",
      text: CLARVIZIUNEA_TEXT,
      shortText:
        "Clarviziunea este abilitatea de a vedea cu puterea mintii, o putere care ma ajuta de fiecare data sa intampin raul.",
      photo: Clairvoyance,
    },
    {
      id: 0,
      title: "Tarotul",
      text: TAROTUL_TEXT,
      shortText:
        "Tarotul este practica veche utilizata in prezicerea viitorului sau identificarea prezentului. Arata interpretarii cartilor de tarot nu este destinata oricui.",
      photo: Tarot,
    },
    {
      id: 0,
      title: "Astrologia",
      text: ASTROLOGIA_TEXT,
      shortText:
        "Astrologia inglobeaza un ansamblu de cunostinte, traditii si credinte, tructurate din punct de vedere geographic in sisteme",
      photo: Astrology,
    },
    {
      id: 0,
      title: "Chiromantia",
      text: CHIROMANTIA_TEXT,
      shortText:
        "Chiromantia sau gicitul in palma este una din cele mai vechi metode de divinatie din lume insa practicarea ei nu a fost niciodata atestata istoric.",
      photo: PalmRead,
    },
  ];

  return (
    <StyledContainer
      id="solutionsID"
      flexDirection="column"
      style={{
        borderTop: "0px",
        paddingBottom: "3vh",
        marginTop: "5vh",
      }}
    >
      <StyledBox
        style={{
          height: smallScreen ? "8vh" : "20vh",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <GenericText
          label="Puterea magiei albe"
          fontWeight={"bold"}
          fontSize={smallScreen ? "2rem" : "3rem"}
          style={{
            color: theme.palette.primary.secondary,
            fontFamily: "cursive",
          }}
        />
      </StyledBox>
      <StyledBox
        style={{
          flexDirection: smallScreen ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {solutions.map((solution) => {
          return (
            <StyledBox
              key={solution?.id}
              style={{
                flex: !smallScreen && "0.25",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: smallScreen && "90vw",
                border: `0.2px dashed ${theme.palette.primary.secondary}`,
                borderRadius: "10px",
                // padding: "1rem",
                margin: smallScreen ? "5px 0 5px 0" : "0 5px 0 5px",
                height: !smallScreen && "80vh",
              }}
            >
              <div style={{ flex: "0.7" }}>
                <img
                  src={solution.photo}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                ></img>
              </div>
              <div
                style={{
                  display: "flex",
                  flex: "0.3",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                <GenericText
                  label={solution?.title}
                  fontSize={"2rem"}
                  style={{ color: theme.palette.primary.secondary }}
                />

                <GenericText
                  label={solution?.shortText}
                  fontSize={"1rem"}
                  style={{
                    color: theme.palette.primary.secondary,
                    textAlign: "center",
                    height: smallScreen ? "13vh" : "20vh",
                  }}
                />

                <GenericBtn
                  label={"Aflati Mai Mult"}
                  onClick={() =>
                    handleOpenShowMoreModal(solution?.title, solution?.text)
                  }
                />
              </div>
            </StyledBox>
          );
        })}
      </StyledBox>
    </StyledContainer>
  );
}

export default Solutions;
