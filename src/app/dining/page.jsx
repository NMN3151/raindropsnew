"use client";
import React from "react";
import TopBar from "../home-1/TopBar";
import HeaderOne from "../home-1/Header";
import DinebannerOne from "../dining/Dinebanner";
import Dining from "../dining/Dining";
import Heathyeating from "../dining/HeathyEating";
import Foodpurpose from "../dining/Foodpurpose";
import FooterOne from "../home-1/FooterOne";
import MindfulDining from "./MindfulDining";
import Wellness from "./Wellness";
import Awaits from "./Awaits";
import Meal from "./Meal";
import Chef from "./Chef";
import BackToTop from "../home-1/BackToTop";

function page() {
  return (
    <>
      <TopBar />
      <HeaderOne />
      <div style={{ marginTop: "-20px" }}>
        <DinebannerOne />
      </div>
      <Dining />
      <Heathyeating />
      <Chef />
      <Foodpurpose />
      {/* dining */}
      <MindfulDining />
      <Wellness />
      <Awaits />
      <Meal />
      <FooterOne />
      <BackToTop/>
    </>
  );
}
export default page;
