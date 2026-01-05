"use client";
import React from "react";

function Culture() {
  return (
    <div className="what-to-bring-section">
      <div className="container">
        {/* Section Title */}
        <div className="content-wrapper">
          {/* Left Column */}
          <div className="text-content">
            <div className="text-box">
              <h2 className="content__title wow fadeInUp">
                A Culture Built on Kindness & Attention
              </h2>
              <p className="tt">
                Sri Lanka's most defining quality is its people. Warm, curious,
                gentle — often asking questions not out of formality, but
                genuine interest.
                <br></br>
                Here, hospitality is not taught. It is felt.
              </p>

              <ul className="">
                <li>Every conversation is slower.</li>
                <li>Every gesture is softer.</li>
                <li>Every smile is sincere.</li>
              </ul>

              <p>
                For many guests, meeting Sri Lankan hospitality becomes an
                unexpected moment of emotional healing:the experience of
                being seen, respected, and welcomed as you are.
              </p>
            </div>
          </div>

          {/* Right Column Image */}
          <div className="image-content">
            <div className="image-wrapper">
              <img
                src="/assets/images/sri lanka/sl11.png"
                alt="Hikers on nature trail in rainforest"
                className="hiking-image"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .what-to-bring-section {
          padding: 80px 40px;
          background: #ffffff;
        }

        .container {
          margin: 0 auto;
        }

        .section-header {
          margin-bottom: 40px;
        }

        .content-wrapper {
          display: flex;
          gap: 20px;
          align-items: stretch;
        }

        .text-content {
          flex: 1;
          min-width: 300px;
        }

        .text-box {
          padding: 40px;
          border-radius: 4px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .content__title {
          font-size: 2.2rem;
          font-weight: 400;
          letter-spacing: 0.5px;
          color: #0a0a0aff;
          margin: 0 0 25px 0;
          line-height: 1.3;
        }

        .intro-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
          margin-bottom: 20px;
        }

        .packing-list {
          list-style: none;
          padding: 0;
          margin: 0 0 25px 0;
        }

        .packing-list li {
          font-size: 1rem;
          line-height: 1.8;
          color: #333;
          padding-left: 20px;
          position: relative;
          margin-bottom: 8px;
        }

        .packing-list li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #333;
          font-size: 1.2rem;
        }

        .footer-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
          margin: 0;
        }

        .image-content {
          flex: 1;
          min-width: 300px;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 400px;
          border-radius: 4px;
          overflow: hidden;
        }

        .hiking-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .image-wrapper:hover .hiking-image {
          transform: scale(1.05);
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .what-to-bring-section {
            padding: 60px 30px;
          }

          .content-wrapper {
            flex-direction: column;
            gap: 40px;
            align-items: center;
          }

          .text-content,
          .image-content {
            width: 100%;
            max-width: 700px;
            flex: none;
          }

          .text-box {
            padding: 35px;
          }

          .content__title {
            font-size: 1.9rem;
            margin-bottom: 20px;
          }

          .image-wrapper {
            min-height: 380px;
            height: 380px;
          }
        }

        @media (min-width: 576px) and (max-width: 767px) {
          .what-to-bring-section {
            padding: 50px 25px;
          }

          .content-wrapper {
            flex-direction: column;
            gap: 35px;
          }

          .text-content,
          .image-content {
            width: 100%;
            flex: none;
          }

          .text-box {
            padding: 30px;
          }

          .content__title {
            font-size: 1.75rem;
            margin-bottom: 20px;
          }

          .intro-text,
          .footer-text,
          .packing-list li {
            font-size: 0.98rem;
            line-height: 1.6;
          }

          .image-wrapper {
            min-height: 350px;
            height: 350px;
          }
        }

        @media (max-width: 575px) {
          .what-to-bring-section {
            padding: 40px 20px;
            max-width: 1400px;
          }

          .content-wrapper {
            flex-direction: column;
            gap: 30px;
          }

          .text-content,
          .image-content {
            width: 100%;
            max-width: 100%;
          }

          .text-box {
            padding: 25px;
            text-align: left; 
          }

          .content__title,
          .tt,
          p,
          .intro-text,
          .footer-text {
            text-align: left !important;
            text-align: -webkit-left !important;
          }

          .packing-list {
            text-align: left;
            padding-left: 0;
            margin-left: 0;
          }

          .packing-list li {
            text-align: left;
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 6px;
          }

          .image-wrapper {
            min-height: 280px;
            height: 280px;
            border-radius: 4px;
          }

          .packing-list li:before {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 375px) {
          .what-to-bring-section {
            padding: 35px 15px;
          }

          .text-box {
            padding: 22px;
          }

          .content__title {
            font-size: 1.45rem;
            margin-bottom: 16px;
            max-width: 1300px;
          }

          .intro-text,
          .footer-text {
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .packing-list li {
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .image-wrapper {
            min-height: 250px;
            height: 250px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hiking-image,
          .image-wrapper:hover .hiking-image {
            transition: none;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Culture;
