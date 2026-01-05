"use client";
import TopBar from "../home-1/TopBar";
import HeaderOne from "../home-1/Header";
import IBanner from "./IBanner"
import Partnership from "./Partnership"
import Guardiens from "./Guardiens"
import Card from "./Card"
import Matter from "./Matter"
import CMSSC from "./CMSSC"
import FooterOne from "../home-1/FooterOne";
import BackToTop from "../home-1/BackToTop";

function page() {
  const programSchema = {
  };
  return (
    <>

      <TopBar />
      <HeaderOne />
      <div style={{ marginTop: "-20px" }}>
        <IBanner />
      </div>
      <Partnership />
      <Guardiens />
      <Card />
      <Matter />
      <CMSSC />
      <FooterOne />
      <BackToTop/>
    </>
  );
}

export default page;
