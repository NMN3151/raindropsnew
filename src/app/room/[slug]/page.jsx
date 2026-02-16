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

  // Collect only images that exist
  const images = [
    roomPost.image1,
    roomPost.image2,
    roomPost.image3,
    roomPost.image10,
    roomPost.image11,
    roomPost.extraimage1,
    roomPost.extraimage2,
    roomPost.extraimage3,
  ].filter(Boolean);

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
      <div className="rts__section single page__hero__height page__hero__bg no__shadow hero-banner">
        <img src={`${roomPost.bannerImg}`} alt="Room Banner" />
      </div>

      <div className="rts__section section__padding">
        <div className="container">
          <div className="row g-5 sticky-wrap">
            <div className="col-xxl-11 col-xl-8">
              <div className="room__details">

                <span className="price">{roomPost.price}</span>
                <h2 className="room__title">{roomPost.title}</h2>
                <h2 className="room__title2">{roomPost.title2}</h2>
                <div className="room__meta"></div>

                <div>
                  <p className="room__content">{roomPost.content}</p>
                </div>

                {/* Image Grid — fixed 3-column, equal size */}
                <div className="room__image__group">
                  {images.map((src, index) => (
                    <div className="room__image__item" key={index}>
                      <img src={src} alt={`room-image-${index + 1}`} />
                    </div>
                  ))}
                </div>

                <span className="features__heading">Features</span>

                <div className="room__feature">
                  <div className="room__fetures">
                    <ul className="list__item">
                      <li>{roomPost.feature1}</li>
                      <li>{roomPost.feature2}</li>
                      <li>{roomPost.feature3}</li>
                      <li>{roomPost.feature4}</li>
                    </ul>
                  </div>
                </div>

                <p className="room__attraction">{roomPost.attraction}</p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 sticky-item"></div>
          </div>
        </div>
      </div>

      <FooterOne />

      <style jsx>{`

        /* ── Hero Banner ── */
        .hero-banner {
          margin-top: -20px;
          overflow: hidden;
        }

        .hero-banner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── Price ── */
        .price {
          display: inline-block;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: #6a9a6a;
          letter-spacing: 0.5px;
        }

        /* ── Room Titles ── */
        .room__title {
          margin-bottom: 4px;
        }

        .room__title2 {
          font-size: 22px;
          font-weight: 400;
          margin-top: -6px;
          margin-bottom: 20px;
          color: #666;
        }

        /* ── Room Content ── */
        .room__content {
          max-width: 1200px;
          line-height: 1.8;
          color: #444;
          margin-bottom: 40px;
        }

        /* ── Image Grid — fixed 3 columns, no stretching ── */
        .room__image__group {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 30px;
          margin-bottom: 50px;
        }

        .room__image__item {
          width: 100%;
          height: 250px;
          overflow: hidden;
          border-radius: 8px;
        }

        .room__image__item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .room__image__item:hover img {
          transform: scale(1.04);
        }

        /* ── Features ── */
        .features__heading {
          display: block;
          margin-bottom: 20px;
          font-size: 1.4rem;
          font-weight: 600;
          letter-spacing: 0.3px;
        }

        .room__feature {
          margin-bottom: 40px;
        }

        .list__item {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .list__item li {
          padding-left: 20px;
          position: relative;
          color: #444;
          line-height: 1.6;
        }

        .list__item li::before {
          content: "✦";
          position: absolute;
          left: 0;
          color: #6a9a6a;
          font-size: 10px;
          top: 5px;
        }

        /* ── Attraction ── */
        .room__attraction {
          line-height: 1.8;
          color: #555;
          margin-top: 10px;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .room__image__group {
            grid-template-columns: repeat(2, 1fr);
          }

          .room__image__item {
            height: 200px;
          }
        }

        @media (max-width: 480px) {
          .room__image__group {
            grid-template-columns: repeat(1, 1fr);
          }

          .room__image__item {
            height: 220px;
          }
        }
      `}</style>
    </>
  );
}

export default RoomDetailsPage;