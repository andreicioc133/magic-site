import React from "react";
import { useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useResponsiveValues } from "../utils/CustomHooks";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import GenericBtn from "./GenericBtn";

function NavBar() {
  const { smallScreen } = useResponsiveValues();
  const theme = useTheme();
  const phoneNumbers = [
    { id: 1, number: "0722974883" },
    { id: 2, number: "0722974883" },
  ];
  const buttonsData = [
    { id: 1, label: "Multumiri", path: "video-carousel" },
    { id: 2, label: "Contact", path: "contactID" },
    { id: 3, label: "Servicii", path: "solutionsID" },
    { id: 4, label: "Videoclipuri", path: "videosSectionID" },
  ];

  const scrollToDiv = (path) => {
    document.getElementById(path).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: smallScreen ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        borderBottom: `3px solid grey`,
        boxShadow: "inset 0 0 20px #000000",
        height: "10vh",
        zIndexindex: "1100",
        backgroundColor: "black",
      }}
    >
      {smallScreen ? (
        <>
          <motion.div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flex: "1",
              height: "7vh",
              width: "100%",
            }}
          >
            {phoneNumbers.map((number) => {
              return (
                <motion.div
                  key={number?.id}
                  style={{
                    display: "flex",
                    flex: "0.5",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: number?.id === 2 && "flex-end",
                    borderRight:
                      number?.id === 1 &&
                      `1px dashed ${theme.palette.primary.secondary}`,
                  }}
                >
                  <ContactPhoneIcon
                    sx={{
                      color: theme.palette.primary.secondary,
                      fontSize: "3vh",
                    }}
                  />
                  <p
                    style={{
                      fontWeight: "bold",
                      color: theme.palette.primary.secondary,
                      fontSize: smallScreen ? "1.2rem" : "1.4rem",
                      textAlign: "center",
                      marginLeft: "0.5rem",
                    }}
                  >
                    <a
                      style={{ color: theme.palette.primary.secondary }}
                      href="tel:PHONE_NUM"
                    >
                      {number?.number}
                    </a>
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            style={{
              display: "flex",
              flex: "0.25",
              height: "7vh",
              borderRight: `1px dashed ${theme.palette.primary.secondary}`,
              alignItems: "center",
            }}
          >
            <motion.p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                fontFamily: "cursive",
                color: theme.palette.primary.secondary,
                paddingLeft: "1vw",
              }}
            >
              Tamaduitoarea Sunita
            </motion.p>
          </motion.div>
          <motion.div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              flex: "0.35",
              height: "7vh",
              borderRight: `1px dashed ${theme.palette.primary.secondary}`,
            }}
          >
            {phoneNumbers.map((number) => {
              return (
                <motion.div
                  key={number?.id}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ContactPhoneIcon
                    sx={{
                      color: theme.palette.primary.secondary,
                      fontSize: "5vh",
                    }}
                  />
                  <p
                    style={{
                      fontWeight: "bold",
                      color: theme.palette.primary.secondary,
                      fontSize: smallScreen ? "1.2rem" : "1.4rem",
                      textAlign: "center",
                      marginLeft: "1rem",
                    }}
                  >
                    <a
                      style={{ color: theme.palette.primary.secondary }}
                      href="tel:PHONE_NUM"
                    >
                      {number?.number}
                    </a>
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            style={{
              display: "flex",
              flex: "0.4",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {buttonsData.map((el) => {
              return (
                <>
                  <GenericBtn
                    label={el?.label}
                    style={{
                      border: `none`,
                      color: theme.palette.primary.secondary,
                    }}
                    onClick={() => scrollToDiv(el?.path)}
                  />
                </>
              );
            })}
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

export default NavBar;
