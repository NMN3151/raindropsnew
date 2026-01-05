"use client";
import React from "react";
import TopBar from "../home-1/TopBar";
import HeaderOne from "../home-1/Header";
import SBannerOne from "./SBanner";
import Landscapepage from "./Landscape";
import Countrypage from "./Country";
import Manolead from "./Manolead";
import RainforestSection from "./Innerclarity";
import Culture from "./Culture";
import Imagine from "./Imagine";
import Meetsl from "./Meetsl";
import Mindmeetspage from "./Mindsmeets";
import FooterOne from "../home-1/FooterOne";
import BackToTop from "../home-1/BackToTop";

function page() {
  return (
    <>
      <TopBar />
      <HeaderOne />
      <div style={{ marginTop: "-20px" }}>
        <SBannerOne />
      </div>
      <Landscapepage />
      <Countrypage />
      <Manolead />
      <RainforestSection />
      <Culture />
      <Imagine />
      <Meetsl />
      <Mindmeetspage />
      <FooterOne />
      <BackToTop/>
    </>
  );
}
export default page;
