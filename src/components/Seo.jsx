import React from "react";
import { Helmet } from "react-helmet";
import Img1 from "../assets/Img1.jpeg";

function Seo() {
  return (
    <>
      <Helmet>
        <title>{"Cea mai puternica vrajitoare - Tamaduitoarea Sunita"}</title>
      </Helmet>
      <Helmet>
        <meta
          name="description"
          content={
            "Tamaduitoarea, Clarvazatoarea, Prezicatoarea, Ghicitoarea, cea mai puternica cunoscatoare a magiei albe SUNITA."
          }
        />
      </Helmet>
      <Helmet>
        <meta
          property="og:title"
          content={"Cea mai puternica vrajitoare - Tamaduitoarea Sunita"}
        />
        <meta
          property="og:description"
          content={
            "Tamaduitoarea, Clarvazatoarea, Prezicatoarea, Ghicitoarea, cea mai puternica cunoscatoare a magiei albe SUNITA."
          }
        />
        <meta property="og:image" content={Img1} />
        <meta property="og:url" content={"www.clarvazatoare-online.com"} />
        <meta property="og:type" content="website" />
      </Helmet>
    </>
  );
}

export default Seo;
