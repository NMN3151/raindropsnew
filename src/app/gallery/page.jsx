import React from "react";
import TopBar from "../home-1/TopBar";
import HeaderOne from "../home-1/Header";
import GBanner from "./GBanner";
import GalleryFive from "./Gallery";
import VideoOne from "../home-1/VideoOne";
import FooterOne from "../home-1/FooterOne";
import BackToTop from "../home-1/BackToTop";
// import GDPRCookie from '../home-1/GDPRCookie'
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";

function page() {
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Rain Drops Villa Photo Gallery",
    url: "https://raindrops.lk/gallery",
  };

  return (
    <>
      {/* <GDPRCookie
                settings={{
                    title: "Accept Cookies & privacy",
                    message: "Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches.",
                    expires: 90, // Cookie expiration in days
                }}
            /> */}
      <SEO
        title="Rain Drops Villa Gallery | Photos of Wellness Retreat & Nature"
        description="Browse images of Rain Drops Villa — mindfulness retreats, poolside villas and rainforest activities near Sinharaja."
        canonical="https://raindrops.lk/gallery"
      />

      <StructuredData data={gallerySchema} />

      <div
        style={{
          position: "absolute",
          left: "-9999px",
          top: "-9999px",
        }}
      >
        <h1>Gallery — Rain Drops Villa</h1>
      </div>

      <TopBar />
      <HeaderOne />
      <div style={{ marginTop: "-20px" }}>
        <GBanner />
       
       
       
      </div>
      <GalleryFive />
      <VideoOne />
      <FooterOne />
      <BackToTop />
    </>
  );
}

export default page;
