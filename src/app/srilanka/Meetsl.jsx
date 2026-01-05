"use client";
import React from "react";

function Meetsl() {
  return (
    <div className="beyond-stay-section">
      <div className="container">
        <h2 className="content__title wow fadeInUp">
          BEYOND YOUR STAY - MEETING SRI LANKA IN EVERY DIRECTION
        </h2>

        <div className="content-grid">
          {/* 1st Row */}
          <div className="text-box">
            <p className="intro-text">
              When your stay ends, the journey does not. Sri Lanka offers:
            </p>
            <ul className="">
              <li>rainforest trails,</li>
              <li>mountain meditation sites,</li>
              <li>tea estates layered like green sculpture,</li>
              <li>ancient stupas and cave monasteries,</li>
              <li>spice gardens,</li>
              <li>quiet southern beaches,</li>
              <li>and coastal villages where time moves kindly.</li>
            </ul>
          </div>

          <div className="image-box">
            <img
              src="/assets/images/sri lanka/sl25.png"
              alt="Golden sunset through trees"
            />
          </div>

          <div className="image-box large">
            <img
              src="/assets/images/sri lanka/sl18.png"
              alt="Ancient Buddhist temple interior"
            />
          </div>

          {/* 2nd Row */}
          <div className="image-box">
            <img
              src="/assets/images/sri lanka/sl19.png"
              alt="Tea plantation workers"
            />
          </div>

          <div className="text-box center">
            <p className="philosophy-text">
              You can walk, breathe, reflect, learn, or simply rest.
            </p>
            <p className="philosophy-text">
              Wherever you go, Sri Lanka reminds you that stillness and vitality can coexist.
            </p>
            <p className="closing-statement">
              Beyond your stay, meet Sri Lanka in every direction
            </p>
          </div>

          {/* 3rd row */}
          <div className="image-box row3-img span-left">
            <img
              src="/assets/images/sri lanka/sl29.jpg"
              alt="Lake view with temple"
            />
          </div>

          <div className="image-box row3-img span-right">
            <img
              src="/assets/images/sri lanka/sl30.jpg"
              alt="Traditional stilt fishermen"
            />
          </div>

          {/* 4th Row */}
          <div className="image-box">
            <img
              src="/assets/images/sri lanka/sl20.png"
              alt="Coastal paradise"
            />
          </div>

          <div className="image-box">
            <img
              src="/assets/images/sri lanka/sl23.png"
              alt="Beach resort"
            />
          </div>

          <div className="image-box">
            <img
              src="/assets/images/sri lanka/sl24.png"
              alt="Rainforest trail"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .beyond-stay-section {
          padding: 20px 20px;
          background: #ffffff;
          color: #333;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .content__title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 40px;
          line-height: 1.3;
        }

        .content-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .text-box {
          background: #e8e8e0;
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .text-box.center {
          text-align: center;
          align-items: center;
        }

        .intro-text {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 20px;
          color: #2c2c2c;
        }

        .offers-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .offers-list li {
          font-size: 1rem;
          line-height: 1.8;
          color: #2c2c2c;
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
        }

        .offers-list li:before {
          content: "•";
          position: absolute;
          left: 0;
        }

        .philosophy-text {
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 20px;
          color: #2c2c2c;
        }

        .closing-statement {
          font-size: 1rem;
          line-height: 1.7;
          margin-top: 10px;
          font-style: italic;
          color: #2c2c2c;
        }

        .image-box {
          overflow: hidden;
          position: relative;
          min-height: 250px;
        }

        .image-box.large {
          grid-row: span 2;
        }

        .image-box.row3-img.span-left {
          grid-column: 1 / 3;
        }

        .image-box.row3-img.span-right {
          grid-column: 3 / 4;
        }

        .image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }

        .image-box:hover img {
          transform: scale(1.05);
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .container {
            max-width: 900px;
            padding: 0 20px;
          }
          
          .content__title {
            font-size: 1.8rem;
            margin-bottom: 35px;
          }
          
          .content-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
            margin-top: 30px;
          }
          
          .image-box.large {
            grid-row: span 1;
          }
          
          .image-box.row3-img.span-left,
          .image-box.row3-img.span-right {
            grid-column: span 1;
          }
          
          .text-box {
            padding: 35px 25px;
          }
          
          .intro-text,
          .philosophy-text,
          .closing-statement,
          .offers-list li {
            font-size: 0.98rem;
            line-height: 1.6;
          }
          
          .image-box {
            min-height: 220px;
          }
          
          .offers-list li {
            margin-bottom: 6px;
            padding-left: 18px;
          }
        }

        @media (min-width: 576px) and (max-width: 767px) {
          .beyond-stay-section {
            padding: 60px 15px;
          }
          
          .content__title {
            font-size: 1.6rem;
            margin-bottom: 30px;
            line-height: 1.3;
          }
          
          .content-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-top: 25px;
          }
          
          .image-box.large {
            grid-row: span 1;
          }
          
          .image-box.row3-img.span-left,
          .image-box.row3-img.span-right {
            grid-column: span 1;
          }
          
          .text-box {
            padding: 30px 20px;
          }
          
          .intro-text,
          .philosophy-text,
          .closing-statement,
          .offers-list li {
            font-size: 0.95rem;
            line-height: 1.5;
          }
          
          .image-box {
            min-height: 200px;
          }
          
          .offers-list li {
            margin-bottom: 5px;
            padding-left: 16px;
          }
        }

        @media (max-width: 575px) {
          .beyond-stay-section {
            padding: 50px 12px;
          }
          
          .content__title {
            font-size: 1.45rem;
            margin-bottom: 25px;
            line-height: 1.3;
          }
          
          .content-grid {
            grid-template-columns: 1fr;
            gap: 15px;
            margin-top: 20px;
          }
          
          .image-box.large {
            grid-row: span 1;
          }
          
          .image-box.row3-img.span-left,
          .image-box.row3-img.span-right {
            grid-column: span 1;
          }
          
          .text-box {
            padding: 25px 20px;
          }
          
          .intro-text,
          .philosophy-text,
          .closing-statement,
          .offers-list li {
            font-size: 0.9rem;
            line-height: 1.5;
          }
          
          .image-box {
            min-height: 180px;
          }
          
          .offers-list li {
            margin-bottom: 4px;
            padding-left: 15px;
          }
          
          .closing-statement {
            margin-top: 8px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 375px) {
          .beyond-stay-section {
            padding: 40px 10px;
          }
          
          .content__title {
            font-size: 1.3rem;
            margin-bottom: 20px;
          }
          
          .content-grid {
            gap: 12px;
          }
          
          .text-box {
            padding: 22px 18px;
          }
          
          .intro-text,
          .philosophy-text,
          .closing-statement,
          .offers-list li {
            font-size: 0.85rem;
            line-height: 1.5;
          }
          
          .image-box {
            min-height: 160px;
          }
          
          .offers-list li {
            padding-left: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .image-box img,
          .image-box:hover img {
            transition: none;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Meetsl;