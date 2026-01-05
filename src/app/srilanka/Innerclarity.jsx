"use client";
import React from "react";

function RainforestSection() {
  return (
    <>
      <div className="rts__section rainforest__section section__padding">
        <div className="container">
          <h2 className="content__title wow fadeInUp">
            Sri Lanka - A Setting Designed by Nature for Inner Clarity
          </h2>
          <div className="rainforest__grid">
            <div className="text__box text__box--1">
              <p className="">
                <em
                  style={{
                    fontStyle: "italic",
                    fontFamily: "BrittanySignature",
                    fontSize: 18,
                  }}
                >
                  Rain Drops
                </em>{" "}
                lies beside the <strong>Sinharaja UNESCO Rainforest</strong>, a
                living ecosystem where every sound, scent and movement carries a
                natural intelligence.
              </p>

              <ul className="list">
                <li>The rainforest air filters itself like medicine.</li>
                <li>The altitude sharpens sleep.</li>
                <li>The constant rhythm of water calms the emotional brain.</li>
                <li>
                  The forest lowers stress hormones by up to{" "}
                  <strong>60%</strong>, activates alpha waves linked to
                  creativity and peace and restores sensory balance without
                  effort.
                </li>
              </ul>
            </div>

            <div className="image__box image__box--1">
              <img
                src="/assets/images/sri lanka/sl13.png"
                alt="Sinharaja UNESCO Rainforest tea plantation"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80";
                }}
              />
            </div>

            <div className="image__box image__box--2">
              <img
                src="/assets/images/sri lanka/sl12.png"
                alt="Rainforest waterfall"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80";
                }}
              />
            </div>

            <div className="text__box text__box--2">
              <p >
                This is why original mindfulness flourished in these valleys.
                The landscape itself collaborates with your inner work.
              </p>

              <p >
                It is not simply beautiful.
                <br />
                It is <strong>biologically restorative</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .content__title {
          text-align: center;
          font-size: 2.2rem;
          margin-bottom: 40px;
        }
        
        .rainforest__section {
          padding: 60px 0;
        }

        .rainforest__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 0;
        }

        .text__box {
          background-color: #d8ddd0;
          padding: 50px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .text__box--1 {
          grid-column: 1;
          grid-row: 1;
        }

        .text__box--2 {
          grid-column: 2;
          grid-row: 2;
        }

        .image__box {
          overflow: hidden;
          position: relative;
        }

        .image__box--1 {
          grid-column: 2;
          grid-row: 1;
        }

        .image__box--2 {
          grid-column: 1;
          grid-row: 2;
        }

        .image__box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .image__box:hover img {
          transform: scale(1.05);
        }

        .content__subtitle {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #2d2d2d;
          margin-bottom: 25px;
        }

        .content__subtitle:last-child {
          margin-bottom: 0;
        }

        .content__subtitle ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .content__subtitle li {
          padding: 10px 0;
          color: #2d2d2d;
          font-size: 1rem;
          line-height: 1.7;
          position: relative;
          padding-left: 20px;
        }

        .content__subtitle li:before {
          position: absolute;
          left: 0;
          color: #2d2d2d;
          font-weight: bold;
          font-size: 1.2rem;
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .container {
            padding: 0 25px;
          }
          
          .content__title {
            font-size: 1.9rem;
            margin-bottom: 35px;
          }
          
          .rainforest__grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            gap: 0;
          }
          
          .text__box--1 {
            grid-column: 1;
            grid-row: 1;
          }
          
          .image__box--1 {
            grid-column: 1;
            grid-row: 2;
          }
          
          .image__box--2 {
            grid-column: 1;
            grid-row: 4;
          }
          
          .text__box--2 {
            grid-column: 1;
            grid-row: 3;
          }
          
          .text__box {
            padding: 40px 35px;
          }
          
          .image__box {
            min-height: 350px;
            max-height: 400px;
          }
          
          .content__subtitle {
            font-size: 1.05rem;
            line-height: 1.7;
          }
          
          .content__subtitle li {
            font-size: 1rem;
            line-height: 1.6;
          }
        }

        @media (min-width: 576px) and (max-width: 767px) {
          .container {
            padding: 0 20px;
          }
          
          .content__title {
            font-size: 1.75rem;
            margin-bottom: 30px;
          }
          
          .rainforest__grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            gap: 0;
          }
          
          .text__box--1 {
            grid-column: 1;
            grid-row: 1;
          }
          
          .image__box--1 {
            grid-column: 1;
            grid-row: 2;
          }
          
          .image__box--2 {
            grid-column: 1;
            grid-row: 4;
          }
          
          .text__box--2 {
            grid-column: 1;
            grid-row: 3;
          }
          
          .text__box {
            padding: 35px 30px;
          }
          
          .image__box {
            min-height: 300px;
            max-height: 350px;
          }
          
          .content__subtitle {
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 20px;
          }
          
          .content__subtitle li {
            font-size: 0.98rem;
            line-height: 1.6;
            padding: 8px 0;
            padding-left: 18px;
          }
        }

        @media (max-width: 575px) {
          .container {
            padding: 0 15px;
          }
          
          .rainforest__section {
            padding: 50px 0;
          }
          
          .content__title {
            font-size: 1.6rem;
            margin-bottom: 25px;
            line-height: 1.3;
          }
          
          .rainforest__grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            gap: 0;
          }
          
          .text__box--1 {
            grid-column: 1;
            grid-row: 1;
           
          }
          
          .image__box--1 {
            grid-column: 1;
            grid-row: 2;
          }
          
          .image__box--2 {
            grid-column: 1;
            grid-row: 4;
          }
          
          .text__box--2 {
            grid-column: 1;
            grid-row: 3;
          }
          
          .text__box {
            padding: 30px 25px;
          }
          
          .image__box {
            min-height: 250px;
            max-height: 300px;
          }
          
          .content__subtitle {
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 18px;
          }
          
          .content__subtitle li {
            font-size: 0.95rem;
            line-height: 1.6;
            padding: 6px 0;
            padding-left: 16px;
          }
          
          .content__subtitle li:before {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 375px) {
          .container {
            padding: 0 12px;
          }
          
          .rainforest__section {
            padding: 40px 0;
          }
          
          .content__title {
            font-size: 1.45rem;
            margin-bottom: 20px;
          }
          
          .text__box {
            padding: 25px 20px;
          }
          
          .image__box {
            min-height: 220px;
            max-height: 280px;
          }
          
          .content__subtitle {
            font-size: 0.9rem;
            line-height: 1.6;
          }
          
          .content__subtitle li {
            font-size: 0.9rem;
            line-height: 1.6;
            padding-left: 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .image__box img,
          .image__box:hover img {
            transition: none;
            transform: none;
          }
        }
      `}</style>
    </>
  );
}

export default RainforestSection;