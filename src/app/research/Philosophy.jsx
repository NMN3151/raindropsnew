"use client";
import React from "react";

function mindmeets() {
  return (
    <div className="rts__section philosophy__section section__padding">
      <div className="container">
        <div className="row g-4 g-lg-5 align-items-center">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="philosophy-image-wrapper">
              <img
                src="/assets/images/research/rc5.png"
                alt="Mind Meets NeuroScience"
                className="philosophy-image w-0 rounded-3"
                style={{ width: "100%", height: "480px", objectFit: "fill" }}
                onError={(e) => {
                  e.target.style.backgroundColor = "#f5f5f5";
                  e.target.style.display = "flex";
                  e.target.style.alignItems = "center";
                  e.target.style.justifyContent = "center";
                  e.target.style.color = "#666";
                  e.target.style.fontSize = "1.2rem";
                  e.target.style.fontWeight = "500";
                  e.target.innerHTML = "Philosophy Image";
                  e.target.classList.add("fallback-image");
                }}
                loading="lazy"
              />
            </div>
          </div>

          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <div className="philosophy-content">
              <h2 className="">Our Philosophy</h2>
              <p className="philosophy__intro">Experience as Research</p>
              <p className="`philosophy__highlight`">
                Rain Drops is not just a retreat — it is a living research
                center where the rainforest and the human mind meet in
                observation. Inspired by the ManoLead Research Center, we
                explore how stillness, sensory awareness and nature’s
                intelligence restore human balance. Every guest becomes both a
                participant and a researcher, discovering through direct
                experience: “How does my mind behave when I am fully present?”
              </p>
              <p className="`philosophy__highlight`">
                Here, learning is not done through books or theories — it
                unfolds through breath, silence, and rain. Each moment becomes a
                mirror, revealing not just the forest, but the quiet
                intelligence within ourselves.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .philosophy__section {
          background: #ffffff;
          padding: 3rem 0;
        }

        .philosophy__intro,
        .philosophy__cta {
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .philosophy__intro {
          font-weight: 500;
        }

        .philosophy__cta {
          font-weight: 500;
          margin-bottom: 0;
        }

        .philosophy-image {
          width: 100%;
          border-radius: 12px;
          transition: transform 0.4s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .philosophy-image:hover {
          transform: translateY(-5px);
        }

        /* Mobile First (≤575px) */
        .philosophy-content {
          text-align: center;
          margin-bottom: 2rem;
        }

        .philosophy-image {
          height: 280px;
          margin: 0 auto;
        }

        @media (max-width: 375px) {
          .philosophy__section {
            padding: 2rem 0;
          }

          .philosophy-image {
            height: 240px;
          }

          .philosophy__intro,
          .philosophy__cta {
            margin-bottom: 1.25rem;
          }
        }

        @media (min-width: 576px) {
          .philosophy-content {
            text-align: left;
            margin-bottom: 0;
          }

          .philosophy-image {
            height: 200px;
          }

          .philosophy__intro {
            font-size: 1.15rem;
          }

          .philosophy__cta {
            font-size: 1.1rem;
          }
        }

        @media (min-width: 768px) {
          .philosophy__section {
            padding: 4rem 0;
          }

          .philosophy-image {
            height: 380px;
          }

          .philosophy__intro {
            font-size: 1.2rem;
          }

          .philosophy__cta {
            font-size: 1.15rem;
          }
        }

        @media (min-width: 992px) {
          .philosophy__section {
            padding: 5rem 0;
          }

          .philosophy-image {
            height: 480px;
          }

          .philosophy__intro {
            font-size: 1.25rem;
          }

          .philosophy__cta {
            font-size: 1.2rem;
          }
        }

        @media (min-width: 1200px) {
          .philosophy__section {
            padding: 6rem 0;
          }

          .philosophy-image {
            height: 560px;
          }

          .philosophy__intro {
            font-size: 1.3rem;
          }

          .philosophy__cta {
            font-size: 1.25rem;
          }
        }

        @media (min-width: 1400px) {
          .philosophy-image {
            height: 620px;
          }
        }

        /* Fallback image */
        .fallback-image {
          font-size: 1.2rem;
          font-weight: 500;
        }

        .container {
          padding-left: 15px;
          padding-right: 15px;
        }

        @media (max-width: 767px) {
          .philosophy__highlight {
            text-align: justify;
          }
        }
      `}</style>
    </div>
  );
}

export default mindmeets;
