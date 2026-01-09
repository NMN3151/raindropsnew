"use client";
import React from "react";
import Image from "next/image";

export default function FoundersVisionaries() {
  return (
    <div className="founders-container">
      <div className="founders-wrapper">
        {/* Header */}
        <div className="section-header">
          <h2 className="section_title">Founders & Visioneries</h2>
          <div className="divider"></div>
        </div>

        {/* Top Row: 2 Founders */}
        <div className="top-row">
          {/* Dr. G. B. Hewawasam */}
          <div className="founder-card">
            <div className="founder-image">
              <Image
                src="/assets/images/founders/GB2nd_img.png"
                alt="Dr.GB. Hewawasam"
                width={380}
                height={360}
                className="founder-img"
                loading="lazy"
              />
            </div>
            <a href="https://www.linkedin.com/in/gaminihewawasam">
              <h2 className="founder-name"> Dr. GB Hewawasam</h2>{" "}
            </a>
            
            <p className="founder-role">
              Founder of the "Mind Meets Nature" Philosophy
            </p>
            <div>
            <a href="https://www.forbes.com/councils/forbescoachescouncil/people/gaminihewawasam/">
              <img
                className="forbes"
                src="/assets/images/logo/forbes_logo.png"
                alt=""
                loading="lazy"
              />
            </a>
            </div>
            <div className="divider"></div>
            <p className="founder-qualifications">
              <strong>
                Ph.D., MBA, CTIE - Leadership Scholar | Global Wellness
                Strategist
              </strong>
            </p>
            <p className="founder-description">
              Dr Hewawasam bridges mindfulness, neuroscience, and leadership.
              Under his guidance, Rain Drops has become a living ecosystem of
              clarity, compassion, and purpose.
            </p>
            
          </div>

          {/* Dian Gomes */}
          <div className="founder-card">
            <div className="founder-image">
              <Image
                src="/assets/images/founders/3f.png"
                alt="Dian Gomes"
                width={380}
                height={360}
                className="founder-img"
                loading="lazy"
              />
            </div>
            <a href="https://diangomes.com/">
              <h2 className="founder-name">Dian Gomes</h2>
            </a>
            
            <p className="founder-role">
              Founding Visionary | Advisor to Rain Drops Wellness Resort
            </p>
            <div>
              <a href="https://diangomes.com/">
                <img
                  className="gomeslogo"
                  src="/assets/images/logo/gomes_logo.png"
                  alt=""
                  loading="lazy"
                />
              </a>
            </div>
            <div className="divider"></div>
            <p className="founder-qualifications">
              <strong>
                Business Icon | Philanthropist | Mentor in Purposeful Living
              </strong>
            </p>
            <p className="founder-description">
              Dian envisioned Rain Drops as a space where architecture breathes
              with nature. Though he now serves as advisor, his spirit continues
              to guide the team.
            </p>
          </div>
        </div>

        {/* Bottom Center: Shashika Malinda */}
      </div>

      <style jsx>{`
        .founders-container {
          background: #ffffffff;
          min-height: 100vh;
          padding: 60px 0;
          font-family: "Georgia", serif;
          color: #4a4a4a;
          line-height: 1.6;
        }

        .founders-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .divider {
          width: 100px;
          height: 1px;
          background: #bda671;
          margin: 20px auto;
        }

        .top-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 60px;
          margin-bottom: 60px;
        }

        .center-row {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .founder-card {
          width: 100%;
          max-width: 420px;
          text-align: center;
        }

        .center-card {
          max-width: 680px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Normal rectangular image container */
        .founder-image {
          width: 340px;
          height: 340px;
          margin: 0 auto 25px;
          flex-shrink: 0;
        }

        /* Desktop image size */
        .founder-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .founder-name {
          font-size: 22px;
          font-weight: 400;
          color: #333;
          margin: 15px 0 10px;
        }

        .founder-role {
          font-size: 16px;
          color: #bda671;
          font-style: italic;
          margin-bottom: 20px;
        }

        .founder-qualifications {
          font-size: 14px;
          color: #333;
          margin-bottom: 15px;
        }

        .founder-description {
          font-size: 14px;
          color: #666;
          line-height: 1.7;
        }

        .forbes {
          max-width: 400px;
          width: 70%;
          cursor: pointer;
        }

        .gomeslogo {
          max-width: 400px;
          width: 65%;
          cursor: pointer;
        }

        .linkedin {
          max-width: 60px;
          width: 70%;
          cursor: pointer;
        }

        .center-description {
          font-size: 15px;
          max-width: 680px;
          margin: 0 auto;
          text-align: center;
        }

        /* Desktop & Laptop - NO CHANGES */
        @media (min-width: 768px) {
          .top-row {
            gap: 140px;
          }
          .founder-card {
            max-width: 380px;
          }
          .center-card {
            max-width: 680px;
          }
          .founder-name {
            font-size: 24px;
          }
          .founder-role {
            font-size: 18px;
          }
          .founder-description,
          .center-description {
            font-size: 15px;
          }
        }

        /* Mobile - ONLY IMAGE SIZE CHANGES */
        @media (max-width: 767px) {
          .top-row {
            flex-direction: column;
            align-items: center;
          }

          .center-row {
            justify-content: center;
            display: flex;
          }

          .center-card {
            max-width: 420px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          /* IMAGE CONTAINER REMAINS SAME - 340px */
          .founder-image {
            width: 340px;
            height: 340px;
          }

          /* ONLY IMAGE GETS SMALLER */
          .founder-img {
            width: 280px;
            height: 280px;
            object-fit: contain;
          }

          .section_title {
            font-size: 28px;
          }
          .center-description {
            padding: 0 20px;
            font-size: 14.5px;
            text-align: center;
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .center-card {
            max-width: 340px;
          }

          /* IMAGE CONTAINER REMAINS SAME - 340px */
          .founder-image {
            width: 340px;
            height: 340px;
          }

          /* IMAGE GETS SMALLER */
          .founder-img {
            width: 240px;
            height: 240px;
          }

          .founder-name {
            font-size: 21px;
          }
          .center-description {
            padding: 0 15px;
          }
        }

        /* Extra small mobile */
        @media (max-width: 360px) {
          .center-card {
            max-width: 320px;
          }

          /* IMAGE CONTAINER REMAINS SAME - 340px */
          .founder-image {
            width: 320px;
            height: 320px;
          }

          /* IMAGE GETS SMALLEST */

          .founder-img {
            width: 220px;
            height: 220px;
            content-justify: center;
          }
        }
      `}</style>
    </div>
  );
}
