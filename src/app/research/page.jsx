"use client";
import React from "react";
import TopBar from "../home-1/TopBar";
import HeaderOne from "../home-1/Header";
import Banner from "../research/Banner";
import Philosophy from "./Philosophy";
import Stillness from "./Stillness";
import SRE from "./SRE";
import Action from "./Action";
import FooterOne from "../home-1/FooterOne";
import BackToTop from "../home-1/BackToTop";
// import AdvanceForm from '../home-1/AdvanceForm';

function page() {
  return (
    <>
      <TopBar />
      <HeaderOne />
      <div style={{ marginTop: "-20px" }}>
        <Banner />
      </div>
      {/* <AdvanceForm /> */}
      <Philosophy />
      <Stillness />
      <SRE />
      <Action />
      <FooterOne />
      <BackToTop/>
    </>
  );
}
export default page;
