"use client";
import React from "react";

function Weather() {
  const researchExperiences = [
    {
      id: 2,
      title: "YEAR - ROUND CLIMATE",
      description: (
        <div className="text-content-inner">
          <div className="paragraph-group">
            <p className="intro-text">
              <span
                style={{
                  fontStyle: "italic",
                  fontFamily: "BrittanySignature",
                  fontSize: 19,
                }}
              >
                Rain Drops
              </span>
              &nbsp; lies in Sri Lanka's wet zone, close to the equator, which
              means the climate is warm, humid and lush throughout the year.
            </p>
            <p className="intro-text mt-6">
              There is no harsh winter here – only gentle shifts between
              sun-soaked mornings, misty afternoons and cleansing rains.
            </p>
          </div>

          <div className="support-section mt-10">
            <p className="intro-text font-medium border-b-2 border-gray-300 inline-block pb-1">
              Any time of year is suitable for:
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start">
                short or long wellness retreats
              </li>
              <li className="flex items-start">Mindfulness training</li>
              <li className="flex items-start">
                Leadership and inner discovery programs
              </li>
              <li className="flex items-start">Extended stays for writing</li>
              <li className="flex items-start">Reflection or research</li>
              <li className="flex items-start">Rain & Seasons</li>
            </ul>
          </div>
        </div>
      ),
      purpose: "",
      image: "/assets/images/weather/wl7.png",
      imageSide: "right",
    },

    {
      id: 3,
      title: "RAIN & SEASONS",
      description: (
        <div className="text-content-inner">
          <div className="paragraph-group">
            <p className="img">
              <img
                style={{ width: "340px", height: "45px" }}
                src="/assets/images/weather/Group 40910.png"
                alt="Rain season indicator"
              />
            </p>
            <p className="intro-text mt-6">
              Many pleasantly warm days, clear skies, excellent for trails,
              creek walks and outdoor meditation.
            </p>
          </div>
          <div className="support-section mt-10 relative">
            <div className="img1-container">
              <p className="img1">
                <img
                  style={{ width: "490px", height: "45px" }}
                  src="/assets/images/weather/Group 40911 (1).png"
                  alt="Weather pattern"
                />
              </p>
            </div>
            <p className="intro-text font-medium border-b-2 border-gray-300 inline-block pb-1 mt-4">
              These are usually our wetter periods, with more frequent showers
              and heavier rain at times.This is when the forest feels most alive
              – streams swell, frogs sing louder, and the air becomes cool and
              deeply cleansing.
            </p>
          </div>
          <div className="text_img mt-8">
            <div className="img_instead">
              <img
                src="/assets/images/weather/Group 40912 (1).png"
                alt="Additional weather information"
                style={{
                  maxWidth: "300px",
                  height: "auto",
                  marginLeft: "-740px",
                }}
              />
            </div>
          </div>
        </div>
      ),
      image: "/assets/images/weather/wl16.png",
      imageSide: "left",
    },
  ];

  return (
    <div className="rts__section philosophy__section section__padding">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-10 text-center">
            <h2 className="main__title">
              Weather – The Rhythm of the Rainforest
            </h2>
          </div>
        </div>

        {researchExperiences.map((research, index) => (
          <div
            key={research.id}
            className="row g-4 g-lg-5 align-items-center mb-5"
          >
            <div
              className={`col-12 col-lg-6 order-2 ${
                research.imageSide === "left" ? "order-lg-1" : "order-lg-2"
              }`}
            >
              <div className="philosophy-image-wrapper">
                <img
                  src={research.image}
                  alt={research.title}
                  className="philosophy-image w-100 rounded-3"
                  style={{ objectFit: "fill", width: "100%", height: "400px" }}
                  onError={(e) => {
                    e.target.style.backgroundColor = "#f5f5f5";
                    e.target.style.display = "flex";
                    e.target.style.alignItems = "center";
                    e.target.style.justifyContent = "center";
                    e.target.style.color = "#666";
                    e.target.style.fontSize = "1.2rem";
                    e.target.style.fontWeight = "500";
                    e.target.innerHTML = "Research Image";
                    e.target.classList.add("fallback-image");
                  }}
                />
              </div>
            </div>

            <div
              className={`col-12 col-lg-6 order-1 ${
                research.imageSide === "left" ? "order-lg-2" : "order-lg-1"
              }`}
            >
              <div className="philosophy-content">
                <h2 className="section__title wow fadeInUp">
                  {research.title}
                </h2>
                <p className="philosophy__highlight">{research.description}</p>
                <p className="philosophy__cta">{research.purpose}</p>
              </div>
            </div>
          </div>
        ))}
        <div>
          <p>During wet months you are more likely to:</p>
          <ul>
            <li>
              See beetles or small insects in your room (attracted to light)
            </li>
            <li>Meet leeches on rainforest and tea-trail hikes</li>
            <li>
              Experience sudden, beautiful storms followed by clear, fresh air
            </li>
          </ul>
          <p>
            We provide leech socks, umbrellas, suitable guidance and flexible
            programming so that even rainy days become part of your inner
            journey – a chance to practice calmness, acceptance and presence
            with whatever nature brings
          </p>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 575px) {
          .img_instead img[style*="margin-left: -740px"] {
            margin-left: 0px !important;
            max-width: 120px !important;
            display: block;
            margin: 0 auto;
          }
        }

        @media (min-width: 576px) and (max-width: 767px) {
          .img_instead img[style*="margin-left: -740px"] {
            margin-left: -500px !important;
            max-width: 160px !important;
            display: block;
            margin-right: auto;
          }
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .img_instead img[style*="margin-left: -740px"] {
            margin-left: -250px !important;
            max-width: 200px !important;
          }
        }

        @media (min-width: 992px) and (max-width: 1199px) {
          .img_instead img[style*="margin-left: -740px"] {
            margin-left: -500px !important;
            max-width: 250px !important;
          }
        }

        @media (min-width: 1200px) and (max-width: 1399px) {
          .img_instead img[style*="margin-left: -740px"] {
            margin-left: -650px !important;
            max-width: 280px !important;
          }
        }

        @media (min-width: 1400px) {
          .img_instead img[style*="margin-left: -740px"] {
            margin-left: -740px !important;
            max-width: 300px !important;
          }
        }
      `}</style>

      <style jsx>{`
        .philosophy__section {
          background: #ffffff;
          padding: 3rem 0;
        }

        .main__subtitle {
          line-height: 1.6;
          font-weight: 300;
          max-width: 600px;
          margin: 0 auto;
        }

        .section__title {
          line-height: 1.6;
          font-weight: 300;
          font-size: 2rem;
          max-width: 700px;
          margin: 0 auto;
        }

        .philosophy-image {
          width: 100%;
          border-radius: 2px;
          transition: transform 0.4s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .text-content-inner {
          position: relative;
        }

        .paragraph-group {
          margin-bottom: 1.5rem;
        }

        .intro-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
          margin-bottom: 1rem;
        }

        .support-section {
          margin-top: 2rem;
        }

        .support-section ul {
          list-style-type: none;
          padding-left: 0;
        }

        .support-section li {
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.5rem;
        }

        .support-section li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #666;
          font-size: 1.2rem;
        }

        .img1-container {
          position: relative;
          display: inline-block;
          width: 100%;
          margin-bottom: 0.5rem;
        }

        .img1 {
          display: inline-block;
          margin-bottom: 0;
        }

        .text_img {
          position: relative;
          width: 100%;
          margin-top: 0.5rem;
          display: flex;
          justify-content: flex-start;
        }

        .img_instead {
          position: relative;
          display: flex;
          justify-content: flex-start;
          width: 100%;
        }

        .img_instead img {
          max-width: 300px;
          height: auto;
          object-fit: contain;
          display: block;
        }

        @media (max-width: 575px) {
          .philosophy__section {
            padding: 2rem 0;
          }

          .philosophy-content {
            text-align: center;
            margin-bottom: 2rem;
          }

          .main__subtitle {
            font-size: 0.9rem;
            padding: 0 1rem;
          }

          .section__title {
            font-size: 20px;
            text-align: center;
          }

          .philosophy-image {
            height: 220px;
            margin: 0 auto;
          }

          .intro-text {
            font-size: 0.9rem;
          }

          .img1 img {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
          }

          .text_img {
            justify-content: center;
          }

          .img_instead {
            justify-content: center;
          }
        }

        @media (min-width: 576px) and (max-width: 991px) {
          .philosophy-content {
            text-align: left;
            margin-bottom: 0;
          }

          .main__subtitle {
            font-size: 1.1rem;
          }

          .section__title {
            font-size: 20px;
            text-align: left;
          }

          .philosophy-image {
            height: 280px;
          }

          .intro-text {
            font-size: 1.05rem;
          }

          .philosophy__section {
            padding: 4rem 0;
          }

          .text_img {
            justify-content: flex-start;
          }

          .img_instead {
            justify-content: flex-start;
          }
        }

        @media (min-width: 992px) and (max-width: 1199px) {
          .philosophy__section {
            padding: 5rem 0;
          }

          .main__subtitle {
            font-size: 1.3rem;
          }

          .main__title {
            margin-top: -100px;
          }

          .philosophy-image {
            height: 320px;
          }

          .intro-text {
            font-size: 1.15rem;
          }
        }

        @media (min-width: 1200px) {
          .philosophy__section {
            padding: 6rem 0;
            margin-top: -50px;
          }

          .main__title {
            margin-top: -10px;
          }

          .philosophy-image {
            height: 350px;
          }

          .intro-text {
            font-size: 1.2rem;
          }
          .text-content-inner {
            margin-top: 50px;
          }
        }

        @media (min-width: 1400px) {
          .philosophy-image {
            height: 380px;
          }
        }

        .fallback-image {
          font-size: 1.2rem;
          font-weight: 500;
        }

        .container {
          padding-left: 15px;
          padding-right: 15px;
        }

        @media (max-width: 767px) {
          .philosophy__highlight {
            text-align: justify;
          }
        }

        /* Add spacing between sections */
        .mb-5 {
          margin-bottom: 3rem !important;
        }

        @media (max-width: 768px) {
          .mb-5 {
            margin-bottom: 2rem !important;
          }
        }

        @media (max-width: 768px) {
          .img img,
          .img1 img {
            width: 100% !important;
            height: auto !important;
            max-width: 100% !important;
          }

          .img img {
            max-width: 340px !important;
          }

          .img1 img {
            max-width: 490px !important;
          }
        }

        @media (max-width: 767px) {
          .container {
            overflow-x: hidden;
          }
        }
      `}</style>
    </div>
  );
}

export default Weather;
