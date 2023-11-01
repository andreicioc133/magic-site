import { Container, CssBaseline, useTheme } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React, { useState } from "react";
import Img6 from "../assets/Img6.jpeg";
import Img7 from "../assets/Img7.jpeg";
import Img8 from "../assets/Img8.jpeg";
import Video2 from "../assets/Video2.mp4";
import Video3 from "../assets/Video3.mp4";
import Background from "../assets/background.gif";
import thank1 from "../assets/thank1.mp4";
import thank2 from "../assets/thank2.mp4";
import thank3 from "../assets/thank3.mp4";
import thank4 from "../assets/thank4.mp4";
import thank5 from "../assets/thank5.mp4";
import thank6 from "../assets/thank6.mp4";
import { DESCRIPTION_LONG, DESCRIPTION_SHORT } from "../utils/Constants";
import { useResponsiveValues } from "../utils/CustomHooks";
import BaseInfoModal from "./BaseInfoModal";
import ContactEndSection from "./ContactEndSection";
import ContactSection from "./ContactSection";
import GenericBtn from "./GenericBtn";
import GenericText from "./GenericText";
import ImageSlider from "./ImageSlider";
import IntroSection from "./IntroSection";
import MiddleTextSection from "./MiddleTextSection";
import Solutions from "./Solutions";
import { StyledBox, StyledContainer } from "./StyledComponents";
import VideoModal from "./VideoModal";
import VideoPlayerCarousel from "./VideoPlayerCarousel";
import "./styles.css";

function HomePage() {
  const { smallScreen } = useResponsiveValues();
  const theme = useTheme();
  const [openShowMoreModal, setOpenShowMoreModal] = useState(false);
  const [showMoreModalTitle, setShowMoreModalTitle] = useState("asd");
  const [showMoreModalText, setShowMoreModalText] = useState("asd");
  const [autoplayThanksVideo, setAutoplayThanksVideo] = useState(false);
  const firstSectionVideos = [thank1, thank2, thank3, thank4, thank5, thank6];
  const tikTokVideos = [Video2, Video3];

  const testText =
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis massa scelerisque elit fermentum iaculis. Donec semper maximus dui, pellentesque sollicitudin mi tempor maximus. Sed commodo, dolor eget vehicula laoreet, tellus nisi blandit orci, vitae blandit justo elit porta arcu. Integer bibendum eros sit amet dolor accumsan, a tempor mauris lacinia. Nam quis ligula maximus, dictum mauris vitae, gravida ante. Donec maximus quam convallis semper aliquet. Sed libero mauris, cursus a pellentesque eget, euismod tristique orci. Vestibulum quis luctus elit, vulputate laoreet tellus. Curabitur volutpat posuere risus ac suscipit. Cras varius lectus sit amet dapibus efficitur. Duis sodales tincidunt convallis. Ut molestie massa eu finibus mollis. Morbi id commodo diam. Nam mattis efficitur ultricies. Nullam eu quam risus. Vivamus a turpis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis massa scelerisque elit fermentum iaculis. Donec semper maximus dui, pellentesque sollicitudin mi tempor maximus. Sed commodo, dolor eget vehicula laoreet, tellus nisi blandit orci, vitae blandit justo elit porta arcu. Integer bibendum eros sit amet dolor accumsan, a tempor mauris lacinia. Nam quis ligula maximus, dictum mauris vitae, gravida ante. Donec maximus quam convallis semper aliquet. Sed libero mauris, cursus a pellentesque eget, euismod tristique orci. Vestibulum quis luctus elit, vulputate laoreet tellus. Curabitur volutpat posuere risus ac suscipit. Cras varius lectus sit amet dapibus efficitur. Duis sodales tincidunt convallis. Ut molestie massa eu finibus mollis. Morbi id commodo diam. Nam mattis efficitur ultricies. Nullam eu quam risus. Vivamus a turpis lacus.  ";

  const handleOpenShowMoreModal = (title, text) => {
    setOpenShowMoreModal(true);
    title ? setShowMoreModalTitle(title) : setShowMoreModalTitle("titlu");
    text ? setShowMoreModalText(text) : setShowMoreModalText(testText);
  };

  const handleStartThanksVideo = () => {
    setAutoplayThanksVideo(true);
  };

  return (
    <CssBaseline>
      <Container
        maxWidth="xxl"
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: smallScreen ? "260vh" : "150vh",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "url(" + Background + ")",
          flexGrow: 1,
          paddingLeft: "6vw",
        }}
      >
        <VideoModal handleStartThanksVide={handleStartThanksVideo} />
        <>
          <BaseInfoModal
            title={showMoreModalTitle}
            text={showMoreModalText}
            modalOpened={openShowMoreModal}
            callbackSetBack={() => setOpenShowMoreModal(false)}
          />
        </>
        <ImageSlider />

        {/* INTRO SECTION */}

        <IntroSection />

        {/* INTRO SECTION */}

        {/*Thanks Videos Section */}

        <div
          style={{
            height: smallScreen && "90vh",
            borderBottom:
              smallScreen && `0.2px dashed ${theme.palette.primary.secondary}`,
          }}
        >
          <div
            id={"video-carousel"}
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "25vh",
              backgroundColor: smallScreen ? "" : "black",
              alignItems: "center",
              // opacity: 0.5,
              marginTop: smallScreen ? "5vh" : "5vh",
              borderTop: `0.2px dashed ${theme.palette.primary.secondary}`,
            }}
          >
            <p
              style={{
                fontSize: "2.75rem",
                color: theme.palette.primary.secondary,
                fontWeight: "bold",
                opacity: 1,
              }}
            >
              Multumiri
            </p>
          </div>
          <StyledBox
            style={{
              width: "90vw",
              height: smallScreen ? "100vh" : "95vh",
              paddingBottom: smallScreen ? "0vh" : "5vh",
              marginBottom: "3vh",
            }}
          >
            <VideoPlayerCarousel
              videos={firstSectionVideos}
              autoplay={{ autoplayThanksVideo }}
            />
          </StyledBox>
        </div>

        {/*Thanks Videos Section */}

        {/* MIDDLE TEXT SECTION */}
        <MiddleTextSection />

        {/* MIDDLE TEXT SECTION */}

        <StyledContainer
          justifyContent={"space-around"}
          alignItems={"center"}
          style={{
            height: smallScreen ? "67vh" : "50vh",
          }}
        >
          <StyledBox
            justifyContent={"center"}
            alignItems={"center"}
            style={{ flexDirection: "column", width: "90vw" }}
          >
            <GenericText
              label={DESCRIPTION_SHORT}
              fontSize={smallScreen ? "1rem" : "1.5rem"}
              fontWeight={"none"}
              style={{ textAlign: "center" }}
            />
            <GenericBtn
              label={"Aflati Mai Mult"}
              onClick={() =>
                handleOpenShowMoreModal("Puterea magiei albe", DESCRIPTION_LONG)
              }
            />
          </StyledBox>
        </StyledContainer>

        {/* CONTACT section */}
        <ContactSection />
        {/* CONTACT section end*/}

        {/* TikTok videos section */}

        <div
          style={{
            height: smallScreen && "70vh",
            borderBottom:
              smallScreen && `0.2px dashed ${theme.palette.primary.secondary}`,
          }}
        >
          <div
            id={"video-carousel"}
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "15vh",
              backgroundColor: smallScreen ? "" : "black",
              alignItems: "center",
              marginTop: smallScreen ? "5vh" : "5vh",
              borderTop: `0.2px dashed ${theme.palette.primary.secondary}`,
            }}
          >
            <p
              style={{
                fontSize: smallScreen ? "1.25rem" : "2.75rem",
                color: theme.palette.primary.secondary,
                fontWeight: "bold",
                opacity: 1,
                fontFamily: "cursive",
                textAlign: "center",
              }}
            >
              TAMADUITOREA SI CLARVAZATOAREA SUNITA
            </p>
          </div>
          <StyledBox
            style={{
              width: "90vw",
              height: smallScreen ? "80vh" : "110vh",
              paddingBottom: smallScreen ? "0vh" : "5vh",
              marginBottom: smallScreen ? "0vh" : "3vh",
            }}
          >
            <VideoPlayerCarousel videos={tikTokVideos} autoplay={false} />
          </StyledBox>
        </div>

        {/* TikTok videos section */}

        {/* PHOTOS SECTION */}
        {smallScreen ? (
          <StyledBox
            style={{
              width: "95vw",
              height: smallScreen ? "60vh" : "75vh",
              marginTop: smallScreen && "1vh",
            }}
          >
            <img
              srcSet={Img7}
              src={Img7}
              alt={"img"}
              style={{ height: "60vh" }}
            />
          </StyledBox>
        ) : (
          <StyledBox style={{ width: "95vw", height: "75vh" }}>
            <ImageList
              sx={{ width: "95vw", height: "80vh" }}
              cols={3}
              rowHeight={"100vh"}
            >
              {" "}
              <ImageListItem>
                <img
                  srcSet={`${Img6}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${Img6}?w=248&fit=crop&auto=format`}
                  alt={"img"}
                  style={{ height: "50vh", width: "30vw" }}
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  srcSet={`${Img7}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${Img7}?w=248&fit=crop&auto=format`}
                  alt={"img"}
                  style={{ height: "80vh", width: "30vw" }}
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  srcSet={`${Img8}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${Img8}?w=248&fit=crop&auto=format`}
                  alt={"img"}
                  style={{ height: "80vh", width: "30vw" }}
                />
              </ImageListItem>
            </ImageList>
          </StyledBox>
        )}

        {/* PHOTOS SECTION */}

        {/* Solutions section */}

        <Solutions handleOpenShowMoreModal={handleOpenShowMoreModal} />

        {/* Solutions section end*/}

        {/* CONTACT END SECTION */}

        <ContactEndSection />

        {/* CONTACT END END*/}
      </Container>
    </CssBaseline>
  );
}

export default HomePage;
