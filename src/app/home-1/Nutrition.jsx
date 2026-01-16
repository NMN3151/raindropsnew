"use client";
import React from "react";
import Link from "next/link";

function NutritionPage() {
  return (
    <div className="rts__section nutrition__section section__padding position-relative">
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* Image */}
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="nutrition-image-wrapper">
              <img
                src="/assets/images/nutrition/nutrition.png"
                alt="Mindful Dining"
                className="nutrition-image w-100 rounded-3"
                style={{ objectFit: "cover" }}
                onError={(e) => {
                  e.target.style.backgroundColor = "#f5f5f5";
                  e.target.style.display = "flex";
                  e.target.style.alignItems = "center";
                  e.target.style.justifyContent = "center";
                  e.target.style.color = "#666";
                  e.target.style.fontSize = "1.2rem";
                  e.target.style.fontWeight = "500";
                  e.target.innerHTML = "Nutrition Image";
                  e.target.classList.add("fallback-image");
                }}
              />
            </div>

            <div className="d-block d-lg-none text-center mt-4">
              <Link href="/dining">
                <button
                  className="nutrition__btn w-100"
                  style={{ maxWidth: "280px" }}
                >
                  Discover Our Menu
                </button>
              </Link>
            </div>
          </div>

          {/* Text + Watermark */}
          <div className="col-12 col-lg-6 order-1 order-lg-2 position-relative">
            <div className="nutrition-content">
              <h2 className="section__title">
                Mindful Eating — Crafted by a Presidential Chef
              </h2>
              <p className="nutrition__subtitle mb-2">
                Where Culinary Art Meets Inner Clarity
              </p>{" "}
              <br />
              {/* Long paragraph */}
              <p className="nutrition__description mb-3">
                At Rain Drops, dining becomes a mindful ritual. Every dish is
                designed to calm the mind, awaken the senses, and nourish the
                body from within. At the center of this experience is Chef
                Sadha, Sri Lanka’s Presidential Chef, whose rare mastery
                elevates food into wellness. Guided by intention, compassion,
                and the rhythm of nature, he creates cuisine that harmonizes
                luxury with purity. <br /> <br />
              </p>
              {/* This div now has mt-2 instead of big gap */}
              <div className="mt-1 our-kitchen-list">
                Our kitchen draws from:
                <ul className="mt-2">
                  <li>Rainforest-fresh, locally sourced ingredients</li>
                  <li>Menus shaped by neuroscience and original mindfulness</li>
                  <li>Guidance from our U.S.-based nutrition advisor</li>
                  <li>
                    Seasonal dishes that promote calm, clarity, and natural
                    energy
                  </li>
                </ul>
                <p className="_subtitle">
                  From sunrise teas to serene evening meals, every plate at
                  RainDrops gently brings you back to yourself.
                  <br /> <br />
                </p>
              </div>
              <p className="_subtitle">
                <strong>
                  “Food becomes healing when cooked with intention and eaten
                  with awareness.” -
                </strong>
                <span className="chef-signature">Chef Sadha</span>
              </p>
              <div className="d-none d-lg-block mt-3">
                <Link href="/dining">
                  <button className="nutrition__btn">Discover Our Menu</button>
                </Link>
              </div>
            </div>

            {/* Watermark - Bottom Right */}
            <div className="watermark_img">
              <img src="/assets/images/nutrition/wm.png" alt="Mindful Eating" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Your original styles + only gap fix */
        .nutrition__section {
          background: #ffffff;
          padding: 6rem 0 120px;

        }
          .our-kitchen-list{
            font-size: var(--p);
          }

        .nutrition__subtitle {
          font-size: 20px;
          line-height: 1.5;
        }
        @font-face {
          font-family: "BrittanyAngella-Ear54";
          src: url("/font/BrittanySignature.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        /* STEP 5: Apply the font */
        .chef-signature {
          font-family: "BrittanyAngella-Ear54", "Great Vibes", cursive;
          font-size: 1.9rem;
          line-height: 1.8;
          letter-spacing: 0.02em;
          display: inline-block;
          margin-left: 8px;
          margin-bottom: 20px;
          color: #b19852;
          font-style: italic;
        }
     

        /* Reduced the big gap you highlighted */
        .nutrition__description.mb-3 {
          margin-bottom: 0.75rem !important;
          font-size: var(--p);
        }
        .mt-2 {
          margin-top: 0.5rem !important;
        }
        .mt-3 {
          margin-top: 1rem;
        }

        /* Watermark - Perfect on all devices */
        .watermark_img {
          position: absolute;
          bottom: -40px;
          right: -100px;
          width: 420px;
          height: 420px;
          pointer-events: none;
          z-index: 10;
          opacity: 0.92;
        }

        .watermark_img img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        @media (max-width: 1399px) {
          .watermark_img {
            width: 380px;
            height: 380px;
            bottom: -80px;
            right: -80px;
          }
        }
        @media (max-width: 1199px) {
          .watermark_img {
            width: 340px;
            height: 340px;
            bottom: 0px;
            right: -60px;
          }
          .chef-signature {
            display: block;
          }
        }
        @media (max-width: 991px) {
          .watermark_img {
            width: 280px;
            height: 280px;
            bottom: -60px;
            right: -40px;
          }
        }
        @media (max-width: 767px) {
          .watermark_img {
            width: 240px;
            height: 240px;
            bottom: -30px;
            right: -30px;
          }
        }
        @media (max-width: 575px) {
          .watermark_img {
            width: 200px;
            height: 200px;
            bottom: 10px;
            right: 10px;
            opacity: 0.7;
          }
          .section__title {
            text-align: center;
          }
          .nutrition__subtitle {
            text-align: center;
          }
          .nutrition__description {
            text-align: center;
          }
          ._subtitle {
            text-align: center;
          }
          .nutrition-image-wrapper img {
            height: 80%;
          }
        }

        .nutrition-image {
          height: 760px;
          transition: transform 0.4s;
        }
        .nutrition-image:hover {
          transform: translateY(-8px);
        }

        .nutrition__btn {
          background-color: #Ab8a62;
          color: white;
          border: none;
          padding: 12px 32px;
          font-size: 16px;
          font-weight: 500;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(217, 119, 6, 0.2);
          transition: all 0.3s;
        }
      
      
      
        .nutrition__btn:hover {
          background-color: #b8955e;
          transform: translateY(-2px);
        }
    @media (max-width: 575px) {
    .watermark_img {
      width: 250px;
      height: 250px;
      bottom: 60px;
      opacity: 0.7;
    }
      `}</style>
    </div>
  );
}

export default NutritionPage;
