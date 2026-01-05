"use client";
import React from "react";
// import GDPRCookie from "./home-1/GDPRCookie";
import TopBar from "./home-1/TopBar";
import HeaderOne from "./home-1/Header";
  import BannerOne from "./home-1/Banner";
// import AdvanceForm from "./home-1/AdvanceForm";
import AboutOne from "./home-1/About";
import FacilitiesOne from "./home-1/FacilitiesOne";
import RoomOne from "./home-1/RoomOne";
import TestimonialOne from "./home-1/TestimonialOne";
import Story from "./home-1/Story"; 
import VideoOne from "./home-1/VideoOne";
import Philosophy from "./home-1/Philosophy";
import Wellness from "./home-1/Wellness";
import Nutrition from "./home-1/Nutrition";
import Neroscience from "./home-1/Neroscience";
import Signature from "./home-1/Signature";
// import Founders from "./home-1/Founders";
// import OfferOne from "./home-1/OfferOne";
import GalleryOne from "./home-1/GalleryOne";
// import Question from "./home-1/Question";
import FooterOne from "./home-1/FooterOne";
import BackToTop from "./home-1/BackToTop";
import SEO from "./components/SEO";
import StructuredData from "./components/StructuredData";
// import Booking from "./components/BookingWidget";
function Page() {
 
    const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rain Drops Villa",
    "url": "https://raindrops.lk",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://raindrops.lk/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  
   return (
    <>
     <SEO
        title="Rain Drops Villa - Luxury Stay Villa Experience Comfort & Elegance"
        description="Rain Drops Villa — a luxury wellness retreat near Sinharaja Rainforest. Mindfulness programs, villa suites, rainforest activities, and mindful dining."
        keywords="wellness villa Sinharaja, Deniyaya villa, mindfulness retreat Sri Lanka, sinharaja villa, deniyaya villa, luxury villa near Sinharaja"
        canonical="https://raindrops.lk/"
        ogImage="https://raindrops.lk/og-image.jpg"
      />


    

      <head>
        <StructuredData data={homepageSchema} />
      </head>

 {/* SEO tags hidden */}
    <div style={{
        position: "absolute",
        left: "-9999px",
        top: "-9999px"
      }}>
        <h1>Wellness Villa in Sinharaja – Rain Drops Villa</h1>
        <p>
          Rain Drops Villa is a wellness villa in Sinharaja offering mindfulness retreats,
          luxury rooms and rainforest experiences.
        </p>
      </div>

      {/* <GDPRCookie
        settings={{
          title: "Accept Cookies & privacy",
          message: "Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches.",
          expires: 90, // Cookie expiration in days
        }}
      /> */}
      <TopBar />
      <HeaderOne />
      <div style={{marginTop:"-20px"}}>
      <BannerOne />
      </div>
      {/* <AdvanceForm /> */}
      {/* <Booking/> */}
      <AboutOne />
      <FacilitiesOne />
      <RoomOne className="pt-120" />
      <Story />
      <VideoOne />  
      <Philosophy /> 
      <Wellness />
      <Nutrition />
      <Neroscience />
      <TestimonialOne />
      <Signature />
      {/* <Founders /> */}
      {/* <OfferOne /> */}
      <GalleryOne />
      {/* <Question /> */}
      <FooterOne />
      <BackToTop />
    </>
  );
}

export default Page;
