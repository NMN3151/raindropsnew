// app/room/[slug]/page.js
"use client";
import React from "react";
import { useState } from "react";
import { useParams } from "next/navigation"; 
import TopBar from "../../home-1/TopBar";
import HeaderOne from "../../home-1/Header";
import FooterOne from "../../home-1/FooterOne";
import Posts from "../../data/data-room.json";
import Link from "next/link";
import "react-datepicker/dist/react-datepicker.css";
import SEO from "../../components/SEO";
import StructuredData from "../../components/StructuredData";

function RoomDetailsPage() {
  const [result, setResult] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const { slug } = useParams(); 

  const roomPost = Posts.find((post) => post.slug === slug); 

  if (!roomPost) {
    return <div>Post not found!</div>; 
  }

 

  const roomsSchema = {
    "@context": "https://schema.org",
    "@type": "Villa",
    name: "Rain Drops Villa - Rooms & Suites",
    image: "https://raindrops.lk/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sinharaja",
      addressRegion: "Southern Province",
      addressCountry: "LK",
    },
    description:
      "Luxury rooms near Sinharaja rainforest with poolside suites and garden villas.",
    url: "https://raindrops.lk/rooms",
  };

  return (
    <>
      <SEO
        title="Luxury Villas near Sinharaja | Deniyaya Accommodation"
        description="Stay in luxury villa rooms at Rain Drops Villa, located minutes from Sinharaja Rainforest. Poolside villas, garden suites & nature escape rooms."
        keywords="luxuary villas Sinharaja, luxury rooms Sinharaja, Deniyaya rooms, poolside villa Sri Lanka"
      />
      <StructuredData data={roomsSchema} />

      <TopBar />
      <HeaderOne />
      {/* room details area */}
      <div
        className="rts__section single page__hero__height page__hero__bg no__shadow"
        style={{ marginTop: "-20px" }}
      >
        <img src={`${roomPost.bannerImg}`} alt="Room Banner" />
      </div>
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row g-5 sticky-wrap">
            <div className="col-xxl-11 col-xl-8">
              <div className="room__details">
                <span className="h4 price">{roomPost.price}</span>
                <h2 className="room__title">{roomPost.title}</h2>
                <h2 className="room__title2">{roomPost.title2}</h2>
                <div className="room__meta"></div>
                <div>
                  <p className="room__content" style={{maxWidth:"1200px"}}>{roomPost.content}</p>
                </div>
                <div className="room__image__group row row-cols-md-3 row-cols-sm-1 mt-30 mb-50 gap-4 gap-md-0">
                  <div className="room__image__item">
                    <img src={`${roomPost.image1}`} alt="image1" />
                  </div>
                  <div className="room__image__item">
                    <img src={`${roomPost.image2}`} alt="image2" />
                  </div>
                  <div className="room__image__item">
                    <img src={`${roomPost.image3}`} alt="image2" />
                  </div>
                </div>

                <span className="h4 d-block mb-50">Features</span>
                <div className="room__feature mb-30">
                  <div className="room__fetures">
                    <ul className="list__item">
                      <li>{roomPost.feature1}</li>
                      <li>{roomPost.feature2}</li>
                      <li>{roomPost.feature3}</li>
                      <li>{roomPost.feature4}</li>
                    </ul>
                  </div>
                </div>
                <p>{roomPost.attraction}</p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 sticky-item"></div>
          </div>
        </div>
      </div>
      <FooterOne />

      <style jsx>{`
        .room__title2 {
          font-size: 24px;
          font-weight: 400;
          margin-top: -10px;
        }
      `}</style>
    </>
  );
}

export default RoomDetailsPage;
