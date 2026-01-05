"use client";
import TopBar from "../home-1/TopBar";
import HeaderOne from "../home-1/Header";
import Banner from "../neuroscience/banner";
import Icons from "../neuroscience/Icons";
import Mindmeets from "../neuroscience/Mindmeets";
import Experience from "../neuroscience/Experience";
import Different from "../neuroscience/Different";
import Joinexperience from "../neuroscience/Joinexperience";
import Muse from "../neuroscience/Muse";
import Loveit from "../neuroscience/Loveit";
import FooterOne from "../home-1/FooterOne";
import BackToTop from "../home-1/BackToTop";
import React from "react";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
// import AdvanceForm from '../home-1/AdvanceForm'

function page() {
  const programSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Mindfulness & Wellness Retreats",
    description:
      "Join neuroscience-based mindfulness retreats at Rain Drops Villa near Sinharaja.",
    provider: {
      "@type": "Organization",
      name: "Rain Drops Villa",
      sameAs: "https://raindrops.lk",
    },
    url: "https://raindrops.lk/neuroscience",
  };
  return (
    <>
      <SEO
        title="Mindfulness Retreat Sri Lanka | Wellness Programs in Sinharaja"
        description="Mindfulness, neuroscience-based retreats at Rain Drops Villa—clarity retreats and rainforest immersion programs."
        keywords="mindfulness retreat Sri Lanka, wellness retreat Deniyaya"
        canonical="https://raindrops.lk/wellness-programs"
      />

      <StructuredData data={programSchema} />

      {/* SEO tags hidden */}
      <div
        style={{
          position: "absolute",
          left: "-9999px",
          top: "-9999px",
        }}
      >
        <h1>Wellness Programs & Retreats</h1>
        <p>
          Signature clarity retreats, rainforest immersion experiences and more.
        </p>
      </div>

      <TopBar />
      <HeaderOne />
      <div style={{ marginTop: "-20px" }}>
        <Banner />
      </div>
      {/* <AdvanceForm /> */}
      <Icons />
      <Mindmeets />
      <Experience />
      <Different />
      <Joinexperience />
      <Muse />
      <Loveit />
      <FooterOne />
         <BackToTop />
    </>
  );
}

export default page;
