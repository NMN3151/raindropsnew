"use client";
import React from "react";
import GDPRCookie from "../home-1/GDPRCookie";
import TopBar from "../home-1/TopBar";
import HeaderOne from "../home-1/Header";
import ABanner from "./ABanner";
import Story from "../home-1/Story"; 
import Founders from "../home-1/Founders.jsx";
import Team from "./Team.jsx";
import TestimonialOne from "../home-1/TestimonialOne";
import Family from "./family";
import FooterOne from "../home-1/FooterOne";
import BackToTop from "../home-1/BackToTop";

function page() {
  return (
    <>
      {/* <GDPRCookie
        settings={{
          title: "Accept Cookies & privacy",
          message: "Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches.",
          expires: 90, // Cookie expiration in days
        }}
      /> */}
      <TopBar />

      <HeaderOne />

      {/* <div style={{marginTop:"30px"}}>
      <AdvanceForm/>
      </div> */}
      <div style={{ marginTop: "-20px" }}>
       <ABanner />
       
       
       
       
      </div>
      <Story />
      {/* <TeamOne /> */}
      <Founders />
      <Team />

      <Family />
      <TestimonialOne />
      <FooterOne />
      <BackToTop />
    </>
  );
}

export default page;
