"use client";
import React from "react";

function WhatToBring() {
  return (
    <div className="what-to-bring-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">WHAT TO BRING</h2>
        </div>

        <div className="content-wrapper">
          <div className="text-content">
            <div className="text-box">
              <p className="intro-text">
                To enjoy{" "}
                <span
                  style={{
                    fontStyle: "italic",
                    fontFamily: "BrittanySignature",
                    fontSize: 19,
                  }}
                >
                  Rain Drops
                </span>{" "}
                in comfort, we recommend packing:
              </p>

              <ul className="packing-list">
                <li>light, breathable clothing,</li>
                <li>a light sweater or shawl for cooler evenings,</li>
                <li>comfortable walking shoes or sandals,</li>
                <li>an extra pair of socks for nature walks,</li>
                <li>a rain jacket or poncho (especially in wetter months),</li>
                <li>a hat and reusable water bottle.</li>
              </ul>

              <p className="footer-text">
                If you forget something, our team will do their best to assist
                you locally.
              </p>
            </div>
          </div>

          <div className="image-content">
            <div className="image-wrapper">
              <img
                src="/assets/images/weather/wl17.png"
                alt="Hikers on nature trail in rainforest"
                className="hiking-image"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
            @media (max-width: 320px) {
  .image-content{
    margin-left:-32px;
      }
        .text-box {
         margin-left:-42px;
    }
     .section-title {
     text-align:center;
 }
      }
        .what-to-bring-section {
          padding: 80px 40px;
          background: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .section-header {
          margin-bottom: 40px;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 400;
          letter-spacing: 0.5px;
          color: #0a0a0aff;
          margin: 0;
        }

        
        .content-wrapper {
          display: flex;
          gap: 40px;
          align-items: stretch;
        }

        .text-content {
          flex: 1;
          min-width: 300px;
        }

        .text-box {
          background: #bccf5e82;
          padding: 40px;
          border-radius: 4px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .intro-text {
         font-size: 16px; 
          line-height: 1.6;
          color: #333;
          margin-bottom: 20px;
        }

        .italic-text {
          font-style: italic;
          font-weight: 500;
        }

       
        .packing-list {
          list-style: none;
          padding: 0;
          margin: 0 0 25px 0;
        }

        .packing-list li {
         font-size: 16px; 
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
         font-size: 16px; 
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

        @media (min-width: 1024px) and (max-width: 1199px) {
          .content-wrapper {
            gap: 30px;
          }

          .text-box {
            padding: 35px;
          }

          .image-wrapper {
            min-height: 350px;
          }
        }

        @media (max-width: 1023px) {
          .what-to-bring-section {
            padding: 60px 30px;
          }

          .content-wrapper {
            flex-direction: column;
            gap: 30px;
          }

          .text-content,
          .image-content {
            width: 100%;
            flex: none;
          }

          .image-wrapper {
            min-height: 400px;
            max-width: 700px;
            margin: 0 auto;
          }
        }
          @media (min-width: 1200px) {
            .container {
            margin-top:-50px;
    
          }
        @media (max-width: 767px) {
          .what-to-bring-section {
            padding: 50px 20px;
          }

          .section-title {
            font-size: 1.6rem;
          }

          .text-box {
            padding: 30px;
          }

          .image-wrapper {
            min-height: 350px;
          }
        }
 
 
 
 
       
        @media (max-width: 575px) {
          .what-to-bring-section {
            padding: 40px 15px;
          }

          .section-header {
            margin-bottom: 30px;
          }

          .section-title {
            font-size: 1.4rem;
            text-align:center;
          }

          .text-box {
            padding: 25px;
          }

          .intro-text,
          .footer-text,
          .packing-list li {
            font-size: 0.95rem;
          }

          .image-wrapper {
            min-height: 280px;
            border-radius: 4px;
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

export default WhatToBring;
