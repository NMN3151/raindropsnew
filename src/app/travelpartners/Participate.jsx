"use client";
import React from "react";

export default function Participate() {
  return (
    <div className="foodpurpose__section section__padding">
      <div className="container">
         <h2 className="section__title">How Insight Partners Participate</h2>
        <div className="background row g-5 align-items-start">
         
          {/* Content - Left on desktop, first on mobile */}
          <div className="col-12 col-lg-6 order-1 order-lg-1">
            <div className="foodpurpose-content">
              <p className="foodpurpose__description mb-4">
                At RainDrops, participation is not an activity. It is a way of
                being. Insight Partners participate by:
              </p>

              <p className="foodpurpose__description mb-4">
                <ul>
                  <li>Arriving with intention and presence</li>
                  <li>Living gently within the RainDrops Community</li>
                  <li>Protecting nature through restraint, not intrusion</li>
                  <li>Supporting a living system without performance</li>
                  <li>Cultivating calm- together</li>
                </ul>
              </p>

              <p className="foodpurpose__description mb-3">
                No instructions | No expectations | Just alignment.
              </p>
              <p className="foodpurpose__description mb-3">
                <strong>
                  Be present. Be respectful. Be part of the whole.
                </strong>
              </p>
            </div>
          </div>

          {/* Image + Button (on mobile only) */}
          <div className="col-12 col-lg-6 order-2 order-lg-2">
            <div className="foodpurpose-image-wrapper">
              <img
                src="/assets/images/about/partnership/participate1.png"
                alt="Food with Purpose"
                className="foodpurpose-image"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
               
              />
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles - Mobile First */}
      <style jsx>{`
      .background{
      background-color: #f9f9f9;
      }
        .foodpurpose__section {
          background: #ffffff;
          padding: 80px 0;
        }

        .section__title {
          line-height: 1.2;
          margin-bottom: 60px;
          font-weight: 300;
          text-align: center;
        }

        .foodpurpose__subtitle {
          font-weight: 400;
          line-height: 1.4;
          margin-bottom: 25px;
        }

        .foodpurpose__cta-text {
          line-height: 1.6;
        }

        .foodpurpose-image {
          height: 300px;
          transition: transform 0.4s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .foodpurpose-image:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .foodpurpose__btn {
          background-color: #a8915b;
          color: white;
          border: none;
          padding: 14px 36px;
          font-size: 16px;
          font-weight: 500;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(168, 145, 91, 0.3);
        }

        .foodpurpose__btn:hover {
          background-color: #b8955e;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(168, 145, 91, 0.4);
        }

        .foodpurpose__btn:active {
          transform: translateY(0);
        }

        /* Mobile (≤575px) */
        @media (max-width: 575.98px) {
          .foodpurpose__section {
            padding: 60px 0;
          }

          .section__title {
            font-size: 1.8rem;
            text-align: center;
            margin-bottom: 15px;
          }

          .foodpurpose__subtitle {
            font-size: 1.1rem;
            text-align: center;
            margin-bottom: 20px;
          }

          .foodpurpose__description {
            font-size: 0.95rem;
            text-align: left;
            margin-bottom: 20px;
          }

          .foodpurpose__tagline,
          .foodpurpose__cta-text {
            font-size: 0.9rem;
            text-align: center;
          }

          .foodpurpose-image {
            height: 250px;
            border-radius: 8px;
          }

          .foodpurpose__btn {
            font-size: 15px;
            padding: 12px 28px;
          }
        }

        /* Mobile Large (576px - 767px) */
        @media (min-width: 576px) and (max-width: 767.98px) {
          .section__title {
            font-size: 2rem;
            text-align: left;
          }

          .foodpurpose__subtitle {
            font-size: 1.2rem;
            text-align: left;
          }

          .foodpurpose__description {
            font-size: 1rem;
            text-align: left;
          }

          .foodpurpose__tagline,
          .foodpurpose__cta-text {
            text-align: left;
          }

          .foodpurpose-image {
            height: 320px;
          }
        }

        /* Tablet (768px - 991px) */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .section__title {
            font-size: 2.2rem;
          }

          .foodpurpose__subtitle {
            font-size: 1.4rem;
          }

          .foodpurpose__description {
            font-size: 1.05rem;
          }

          .foodpurpose-image {
            height: 400px;
          }
        }

        /* Desktop (992px - 1199px) */
        @media (min-width: 992px) and (max-width: 1199.98px) {
          .section__title {
            font-size: 2.4rem;
          }

          .foodpurpose__subtitle {
            font-size: 1.1rem;
          }

          .foodpurpose-image {
            height: 450px;
          }
        }

        /* Large Desktop (≥1200px) */
        @media (min-width: 1200px) {
          .section__title {
          }

          .foodpurpose-content {
            margin-top: 25px;
            padding-bottom: 50px;
          
          }

          .foodpurpose__subtitle {
            font-size: 1.2rem;
          }

          .foodpurpose__tagline,
          .foodpurpose__cta-text {
            font-size: 18px;
            font-weight: 600;
          }

          .foodpurpose-image {
            height: 500px;
          }
        }

        .fallback-image {
          font-size: 1.2rem;
          font-weight: 500;
          background: linear-gradient(135deg, #f8f5f0, #e8e1d5);
          border: 2px dashed #a8915b;
        }

        /* Additional spacing for better readability */
        .foodpurpose-content {
          padding-right: 30px;
        }

        @media (max-width: 991.98px) {
          .foodpurpose-content {
            padding-right: 0;
            margin-bottom: 30px;
          }
        }
      `}</style>
    </div>
  );
}
