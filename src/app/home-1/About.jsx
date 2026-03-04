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
                  {/* <Image
                    src="/assets/images/about/N2.jpg"
                    alt="Background"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="jarallax-img rellax rellax-img"
                    priority={false} // lazy loaded
                  /> */}
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
                Here, nature doesn’t just surround you, it welcomes you, aligns
                with you, and restores you. Your stay is curated to help you
                cultivate calm and truly enjoy it through: mind-designed
                cuisine, forest-guided meditations, real-time brain clarity
                tracking, and villa interiors crafted with natural luxury and
                quiet elegance.
                <br></br> <br></br>
              </p>
            </div>
          </div>
          <div className="atraindropscontainer">
            <p>
              At Rain Drops, where luxury becomes personal, science becomes
              human, and the rainforest becomes your private guide to clarity.
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

        .atraindropscontainer {
          max-width: 950px;
          margin: 60px auto 0 auto;
          padding: 0px 40px;
          text-align: center;
          border-radius: 6px;
          box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
          position: relative;
        }

        .atraindropscontainer p {
          font-family: "Cinzel";
          font-size: 16px;
          color: #000000;
          line-height: 1.8;
          letter-spacing: 0.5px;
          margin: 0;
        }

        .atraindropscontainer::before {
          content: "“";
          color: #1f1f1f;
          font-family: serif;
          font-size: 40px;
          position: absolute;
          top: 0px;
          left: 35px;
        }

        .atraindropscontainer::after {
          content: "”";
          color: #1f1f1f;
          font-family: serif;
          font-size: 40px;
          position: absolute;
          bottom: 0px;
          right: 275px;
        }



        @media (max-width: 1024px) {
          .atraindropscontainer {
            margin: 0px auto 0 auto;
          }

        
        }

 






        @media (max-width: 768px) {

 

           
          .atraindropscontainer {
           max-width: 320px;
           margin-top: 20px;
           padding: 20px 20px;

          }

          .atraindropscontainer p {
            font-size: 15px;
            line-height: 1.7;
          }

          .atraindropscontainer::before {
            font-size: 36px;
            top: 5px;
            left: 15px;
          }

          .atraindropscontainer::after {
            font-size: 36px;
            bottom: 15px;
            right: 15px;
          }
        }
      `}</style>
    </div>
  );
}

export default AboutOne;
