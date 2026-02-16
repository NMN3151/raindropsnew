"use client";
import React from "react";
import Image from "next/image";

export default function MindfulDining() {
  return (
    <div className="signature__outer">
      <div className="container">
        <div
          className="section_content_left"
          style={{
            justifyContent: "center",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <h2 className="content__title h2 lh-1">Mindfulness Dining</h2>
        </div>

        <div className="layout-wrapper">
          {/* Left Side Text Column */}
          <div className="side-column left-column">
            <div className="text-box">
              <div className="text-content">
                <p className="text-description">
                  At Rain Drops, dining is an experience that connects your five
                  senses with nature. We invite you to slow down, breathe, and
                  truly enjoy each flavor — just as the rainforest does
                  everything, calmly and completely.
                </p>
              </div>
            </div>
          </div>

          {/* Center Image Column */}
          <div className="center-column">
            <div className="image-container">
              <Image
                src="/assets/images/nutrition/tt.JPG"
                alt="Mindful Dining Experience"
                fill
                className="center-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.querySelector(
                    ".image-fallback"
                  ).style.display = "flex";
                }}
              />
              <div className="image-fallback">
                <div className="fallback-content">
                  <span className="fallback-icon">🍽️</span>
                  <p>Mindful Dining Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Text Column */}
          <div className="side-column right-column">
            <div className="text-box">
              <div className="text-content-right">
                <p className="text-description">
                  <span style={{ fontWeight: "600" }}>
                    You'll find our meals:
                  </span>
                  <br />
                  <br />
                  <span style={{ fontWeight: "600" }}>
                    Naturally sourced -{" "}
                  </span>
                  <br />
                  fresh, local, and pure
                  <br />
                  <br />
                  <span style={{ fontWeight: "600" }}>
                    Scientifically balanced -
                    <br />
                  </span>
                  designed to support energy,
                  <br /> focus, and calm
                  <br />
                  <br />
                  <span style={{ fontWeight: "600" }}>
                    Mindfully prepared -
                    <br />
                  </span>
                  cooked with care and loving attention
                </p>
                <div className="feature-list"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`

        /* ── Outer Section ── */
        .signature__outer {
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        /* ── Container ── */
        .container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* ── Grid Layout ── */
        .layout-wrapper {
          display: grid;
          grid-template-columns: 0.8fr 1.6fr 0.8fr;
          gap: 0;
          align-items: center;
          width: 100%;
          position: relative;
        }

        /* ── Side Columns ── */
        .side-column {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }

        .text-box {
          width: 85%;
          background: #ffffff;
          padding: 5.5rem 2rem;
          display: flex;
          height: 80%;
          align-items: center;
          transition: all 0.3s ease;
          border-radius: 8px;
        }

        .text-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
        }

        /* Left box overlaps image left edge */
        .left-column .text-box {
          margin-right: -100px;
          z-index: 2;
          position: relative;
          background: #a8b49c;
        }

        /* Right box overlaps image right edge */
        .right-column .text-box {
          margin-left: -100px;
          z-index: 2;
          position: relative;
          background: #bda67194;
        }

        .text-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          gap: 1.5rem;
        }

        .text-content-right {
          text-align: left;
        }

        .text-description {
          font-size: 1rem;
          font-weight: 400;
          color: #1a1a1a;
          line-height: 1.75;
          margin: 0;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        /* ── Center Image Column ── */
        .center-column {
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .image-container {
          position: relative;
          width: 95%;
          min-height: 500px;
          overflow: hidden;
          border-radius: 0;
        }

        /* Next.js Image fix — needs :global to apply through scoped jsx */
        :global(.center-image) {
          object-fit: cover !important;
          object-position: center !important;
          transition: transform 0.5s ease !important;
        }

        .image-container:hover :global(.center-image) {
          transform: scale(1.04);
        }

        .image-fallback {
          display: none;
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #8a8a6a, #a0a07a);
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          padding: 2rem;
          flex-direction: column;
          z-index: 2;
        }

        .fallback-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .fallback-icon {
          font-size: 4rem;
          opacity: 0.9;
        }

        .image-fallback p {
          font-size: 1.3rem;
          font-weight: 500;
          margin: 0;
          opacity: 0.9;
        }

        /* ── Large Desktop (1601px+) ── */
        @media (min-width: 1601px) {
          .layout-wrapper {
            grid-template-columns: 0.8fr 1.6fr 0.8fr;
          }

          .left-column .text-box {
            margin-right: -120px;
          }

          .right-column .text-box {
            margin-left: -120px;
          }

          .image-container {
            max-height: 580px;
          }
        }

        /* ── Laptop (1024px - 1600px) ── */
        @media (min-width: 1024px) and (max-width: 1600px) {
          .layout-wrapper {
            grid-template-columns: 0.8fr 1.6fr 0.8fr;
            padding: 0;
          }

          .text-box {
            padding: 2rem 1.5rem;
            width: 90%;
          }

          .left-column .text-box {
            margin-right: -80px;
          }

          .right-column .text-box {
            margin-left: -80px;
          }

          .image-container {
            min-height: 460px;
            max-height: 560px;
          }

          .text-description {
            font-size: 0.95rem;
          }
        }

        /* ── Tablet (768px - 1023px) ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .signature__outer {
            padding: 5rem 0;
          }

          .container {
            padding: 0 40px;
          }

          .layout-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .center-column {
            order: -1;
          }

          .image-container {
            aspect-ratio: 16 / 9;
            min-height: auto;
            max-height: none;
            border-radius: 12px;
          }

          .text-box {
            width: 100%;
            margin: 0 !important;
            border-radius: 12px;
          }

          .left-column .text-box,
          .right-column .text-box {
            margin: 0 !important;
          }
        }

        /* ── Mobile (425px - 767px) ── */
        @media (min-width: 425px) and (max-width: 767px) {
          .signature__outer {
            padding: 4rem 0;
          }

          .container {
            padding: 0 20px;
          }

          .layout-wrapper {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .center-column {
            order: -1;
          }

          .image-container {
            aspect-ratio: 4 / 3;
            min-height: auto;
            max-height: none;
            border-radius: 10px;
          }

          .text-box {
            width: 100%;
            padding: 1.8rem 1.5rem;
            border-radius: 10px;
          }

          .left-column .text-box,
          .right-column .text-box {
            margin: 0 !important;
          }

          .text-description {
            font-size: 0.95rem;
          }
        }

        /* ── Small Mobile (≤424px) ── */
        @media (max-width: 424px) {
          .signature__outer {
            padding: 3rem 0;
          }

          .container {
            padding: 0 15px;
          }

          .layout-wrapper {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .center-column {
            order: -1;
          }

          .image-container {
            aspect-ratio: 4 / 3;
            min-height: auto;
            max-height: none;
            border-radius: 8px;
          }

          .text-box {
            width: 100%;
            padding: 1.5rem 1.2rem;
            border-radius: 8px;
          }

          .left-column .text-box,
          .right-column .text-box {
            margin: 0 !important;
          }

          .text-description {
            font-size: 0.9rem;
            line-height: 1.6;
          }
        }

        /* ── Animations ── */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .left-column {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .center-column {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .right-column {
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }
      `}</style>
    </div>
  );
}