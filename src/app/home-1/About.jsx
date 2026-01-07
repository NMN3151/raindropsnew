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
                  {/* Ensure rellax-img is present */}
                  <Image
                    src="/assets/images/about/N1.jpg"
                    alt="Background"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="jarallax-img rellax rellax-img"
                    priority={false} // lazy loaded
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
              {/* <span className="h6 subtitle__icon__two d-block wow fadeInUp">About Us</span> */}
              <h2 className="content__title wow fadeInUp">
                Where Mind Meets Nature
              </h2>
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
                <strong>
                  At Rain Drops, where luxury becomes personal, science becomes
                  human, and the rainforest becomes your private guide to
                  clarity.
                </strong>
              </p>
              {/* <Link href="#" className="theme-btn btn-style fill no-border wow fadeInUp" data-wow-delay=".5s"> */}
              {/* <span>Learn More</span> */}
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOne;
