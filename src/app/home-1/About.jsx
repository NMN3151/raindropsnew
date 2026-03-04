"use client";
import React, { useEffect } from "react";
import Rellax from "rellax";
import Link from "next/link";
import Image from "next/image";

function AboutOne() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      new Rellax(".rellax", { speed: 1 });
    }
  }, []);
  return (
    <div className="rts__section about__area is__home__main section__padding">
      <div className="section__shape d-none d-xl-block">
        <img src="/assets/images/about/section__shape.svg" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="about__wrapper">
            <div className="image">
              <div
                className="position-relative radius wow fadeInUp overflow-hidden"
                data-wow-delay=".3s"
              >
                <div
                  className="jara-mask-1 jarallax image-height pt-0"
                  data-rellax-speed="2"
                >
                  <Image
                    src="/assets/images/about/N1.jpg"
                    alt="Background"
                    fill
                  />
                </div>
              </div>
              <div
                className="image__card radius-10 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon radius-10 center-item">
                  <i className="flaticon-people" />
                </div>
                <div className="content">
                  <p>
                    {" "}
                    Exceptional Minds<br></br>At work
                  </p>
                </div>
              </div>
              <div className="image__card__image wow fadeInUp">
                <Image
                  src="/assets/images/about/N.jpg"
                  width={312}
                  height={230}
                  alt="About Rain Drops"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="content">
              <span className="h6 subtitle__icon_about_section mx-auto">
                RainDrops wellness villa
              </span>

              <h2 className="content__title wow fadeInUp">
                Where Mind Meets Nature
              </h2>

              <p className="arrivetext">Arrive. Exhale. Become Still.</p>

              <p
                className="content__subtitle wow fadeInUp"
                data-wow-delay=".3s"
              >
                A rare and refined wellness experience for those who seek more
                than a retreat, they seek themselves. Just a mile from the{" "}
                <strong style={{ color: "#a8915b" }}>
                  Sinharaja UNESCO Rainforest
                </strong>
                , Rain Drops is an intimate sanctuary where original
                mindfulness, advanced neuroscience, presidential-level culinary
                mastery, and a private research center come together exclusively
                for you.
                <br></br> <br></br>
                Here, nature doesn't just surround you, it welcomes you, aligns
                with you, and restores you. Your stay is curated to help you
                cultivate calm and truly enjoy it through: mind-designed
                cuisine, forest-guided meditations, real-time brain clarity
                tracking, and villa interiors crafted with natural luxury and
                quiet elegance.
                <br></br> <br></br>
              </p>
            </div>
          </div>

          {/* ── UPDATED QUOTE BLOCK ── */}
          <div className="atraindropscontainer">
            <p className="quote-text">
              <span className="quote-mark quote-open">&ldquo;</span>
              At Rain Drops, where luxury becomes personal, science becomes
              human, and the rainforest becomes your private guide to clarity.
              <span className="quote-mark quote-close">&rdquo;</span>
            </p>
          </div>

        </div>
      </div>

      <style jsx>{`

      .content__title{
      margin-bottom: 0px;
      }
      
        .arrivetext {
          color: var(--rts-heading);
          font-weight: semi-bold;
          font-family: "Crimson Text", serif;
          font-size: 20px;
          margin-bottom: 40px;
        }

        /* ── Quote Block ── */
        .atraindropscontainer {
          max-width: 1120px;
          padding: 20px 40px;
          text-align: center;
          border-radius: 6px;
          box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
          position: relative;
          margin: 0px auto;
          font-family: 'Cinzel';
          margin-top: 20px;
        }

        .quote-text {
          font-size: 16px;
          color: #333;
          text-align: center;
          margin: 0;
          line-height: 1.8;
          display: inline;
        }

        .quote-mark {
          font-family: Georgia, serif;
          font-size: 30px;
          line-height: 1;
          color: #333;
          user-select: none;
          display: inline;
          vertical-align: middle;
           font-weight: bold;
        }

        .quote-open {
          margin-right: 0.25rem;
        }

        .quote-close {
          margin-left: 0.25rem;
        }

        @media (max-width: 768px) {
          .atraindropscontainer {
            padding: 1.5rem 2rem;
            margin: 0px 15px 0px 15px;

          }
        }

        @media (max-width: 480px) {
          .atraindropscontainer {
            padding: 1.2rem 1.2rem;
          }

          .quote-text {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
}

export default AboutOne;