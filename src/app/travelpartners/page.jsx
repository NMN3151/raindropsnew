"use client";
import React from "react";
import TopBar from "../home-1/TopBar";
import HeaderOne from "../home-1/Header";
import Banner from "./Banner";
import TravePartners from "./TravePartners";  
import WhyTravelPartnersChoose from "./WhyTravelPartnersChoose";
import PropertyAtAGlance from "./PropertyAtAGlance";
import SignatureExperiencesYourClients from "./SignatureExperiencesYourClients";
import SideToSideContainers from "./SideToSideContainers";
import FooterOne from "../home-1/FooterOne";
import FilingForm from "./FilingForm";

function page() {
  return <>
    <TopBar />
    <HeaderOne />
     <div style={{ marginTop: "-20px" }}>
    <Banner />
    </div>
    <TravePartners />
    <WhyTravelPartnersChoose />
    <PropertyAtAGlance />
    <SignatureExperiencesYourClients />   
    <SideToSideContainers />
    <FilingForm />
    <FooterOne />

  </>;
}
export default page;
