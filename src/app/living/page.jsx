"use client";
import React from "react";
import TopBar from "../home-1/TopBar";
import HeaderOne from "../home-1/Header";
import Banner from "../living/Banner";
import Partnership from "../living/Partnership";
import WorldHeritage from "../living/WorldHeritage";
import Community from "../living/Community";
import Unique from "../living/Unique";
import Promise from "../living/Promise";
import Participate from "../living/Participate";
import FooterOne from "../home-1/FooterOne";

function page() {
  return <>
    <TopBar />
    <HeaderOne />
     <div style={{ marginTop: "-20px" }}>
    <Banner />
    </div>
    <Partnership />
    <WorldHeritage />
    <Community />
    <Unique />
    <Promise />
    <Participate />
    <FooterOne />

  </>;
}
export default page;
