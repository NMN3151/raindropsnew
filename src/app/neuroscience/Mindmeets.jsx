"use client";
import React from "react";

function mindmeets() {
  return (
    <div className="rts__section philosophy__section section__padding">
      <div className="container">
        <div className="row g-4 g-lg-5 align-items-center">
          {/* Image - Left on desktop, below content on mobile */}
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div
              className="philosophy-image-wrapper"
              style={{ height: "auto" }}
            >
              <img
                src="/assets/images/neroscience/mindmeets/mind.png"
                alt="Mind Meets NeuroScience"
                className="philosophy-image w-0 rounded-3"
                style={{ width: "100%", height: "480px", objectFit: "cover" }}
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
              />
            </div>
          </div>

          {/* Content - Right on desktop, first on mobile */}
          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <div className="philosophy-content">
              <h2 className="section__title">Mind Meets NeuroScience</h2>
              <p className="philosophy__intro">
                Experience Mindfulness of Breathing and Loving-Friendliness —
                Powered by Nature and Guided by Science.
              </p>
              <p className="philosophy__highlight">
                At Rain Drops Wellness Resort, mindfulness is more than a
                practice — it's a way of living. Surrounded by the calm rhythm
                of the Sinharaja Rainforest, we invite every guest to experience
                how breathing and kindness can reshape the mind. This unique
                session combines the original teachings of mindfulness and
                loving-friendliness with cutting-edge neurofeedback technology
                from our partner, MUSE — a world leader in meditation headbands
                that measure and train your brain's calm and focus in real time.
              </p>
              <p className="philosophy__cta">
                "Where nature guides your breath, and science mirrors your
                peace."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles - Mobile First */}
      <style jsx>{`
        .philosophy__section {
          background: #ffffff;
          padding: 3rem 0;
        }

        .philosophy__intro {
          font-size: 20px;
          line-height: 1.5;
        }

        .philosophy__cta {
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

        /* Small Mobile (≤375px) */
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

        /* Mobile Large (576px - 767px) */
        @media (min-width: 576px) {
          .philosophy-content {
            text-align: left;
            margin-bottom: 0;
          }

          .philosophy-image {
            height: 320px;
          }
        }

        /* Tablet (768px - 991px) */
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
            font-weight: 600;
          }
        }

        /* Laptop (992px - 1199px) */
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
        }

        /* Large Desktop (≥1200px) */
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
        }

        /* Extra Large Screens (≥1400px) */
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

        /* Ensure proper spacing on all devices */
        .container {
          padding-left: 15px;
          padding-right: 15px;
        }

        /* Improve readability on mobile */
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
