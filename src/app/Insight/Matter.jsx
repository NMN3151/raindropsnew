"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Matter() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="partnership-section">
      {/* Background Image */}
      <div className="background-image-container">
        <Image
          src="/assets/images/about/ab2.png"
          alt="Partnership Background"
          className="background-image"
          fill
          sizes="100vw"
          style={{ 
            objectFit: "cover",
            objectPosition: "center"
          }}
          onError={() => setImgError(true)}
          priority
        />
        {imgError && <div className="background-fallback"></div>}
      </div>

      {/* Content Overlay */}
      <div className="content-overlay">
        <div className="container">
          {/* Main Blur Box Container */}
          <div className="blur-box">
            <div className="blur-content">
              {/* Main Header */}
              <div className="header-section">
                <h2 className="section__title">
                  Why Community Partnership Matters
                </h2>
              </div>

              {/* Partnership Description */}
              <div className="description-section">
                <p className="partnership-desc">
                  <ul>
                    <li>Communities are the forest's first guardians</li>
                    <li className="li1">Dignity protects ecosystems</li>
                    <li>Research-guided calm supports wise action</li>
                    <li className="li1">Insight Partners strengthen a living system</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .partnership-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .background-image-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .background-image {
          position: relative !important;
        }

        .background-fallback {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            #1a3a1a 0%,
            #2d5a2d 50%,
            #1a3a1a 100%
          );
          z-index: 1;
        }

        .content-overlay {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 4rem 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Main Blur Box */
        .blur-box {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 20px;
          padding: 3rem 2.5rem;
          width: 100%;
          max-width: 900px;
          height: auto;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .blur-content {
          text-align: center;
          color: white;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* Header Section */
        .header-section {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .section__title {
          font-size: 1.8rem;
          font-weight: 400;
          margin: 0;
          letter-spacing: 0.02em;
          line-height: 1.3;
          color: #ffffff;
        }

        /* Description Section */
        .description-section {
          max-width: 800px;
          margin: 0 auto;
        }

        .partnership-desc {
          font-size: 0.95rem;
          line-height: 1.7;
          margin: 0;
          font-weight: 300;
          letter-spacing: 0.01em;
        }

        /* Mobile responsive for image - prevents cropping */
        @media (max-width: 767px) {
          .background-image-container {
            height: 100vh;
          }
          
          .background-image {
            object-fit: cover !important;
            object-position: center !important;
          }
           .li1 {
   text-align: left;
 }
          .content-overlay {
            min-height: 100vh;
            padding: 2rem 0;
          }
        }

        /* Small mobile optimization */
        @media (max-width: 480px) {
          .background-image-container {
            height: 100vh;
          }
           .li1 {
   text-align: left;
 }
          .background-image {
            object-fit: cover !important;
            object-position: center center !important;
          }
        }
 @media (min-width: 1023px) and (max-width: 1199px) {
                   .li1 {
  text-align: left;
}
      }
        /* Very small screens */
        @media (max-width: 320px) {
          .background-image-container {
            height: 100vh;
          }
             .li1 {
   text-align: left;
 }
          
          .background-image {
            object-fit: cover !important;
            object-position: center center !important;
          }
        }

        /* Tablet (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .blur-box {
            padding: 2.5rem 2rem;
            max-width: 700px;
          }

          .section__title {
            font-size: 1.5rem;
          }
 .li1 {
   text-align: left;
 }
          .partnership-desc {
            font-size: 0.9rem;
          }
        }

        /* Mobile (≤767px) */
        @media (max-width: 767px) {
          .content-overlay {
            padding: 2rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .blur-box {
            padding: 2rem 1.5rem;
            border-radius: 16px;
          }

          .blur-content {
            gap: 1.5rem;
          }

          .section__title {
            font-size: 1.3rem;
            letter-spacing: 0.01em;
          }
 .li1 {
   text-align: left;
 }
          .partnership-desc {
            font-size: 0.85rem;
            line-height: 1.5;
          }
        }

        /* Large Desktop (1200px+) */
        @media (min-width: 1200px) {
          .blur-box {
            padding: 3.5rem 3rem;
            max-width: 900px;
          }
 .li1 {
   text-align: left;
 }
          .section__title {
            font-size: 2rem;
          }
          .li1 {
            text-align: left;
          }
          .partnership-desc {
            font-size: 1rem;
          }
        }

        /* Extra Small Mobile */
        @media (max-width: 480px) {
          .blur-box {
            padding: 1.5rem 1.25rem;
          }

          .section__title {
            font-size: 1.1rem;
          } .li1 {
   text-align: left;
 }

          .partnership-desc {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}