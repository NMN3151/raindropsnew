"use client";
import React from "react";
import Image from "next/image";
import Rellax from "rellax";

export default function Meal() {
  return (
    <div className="signature__outer">
      <div className="signature__container">
        <div className="signature__header">
          <h2 className="section__title"> More Than a Meal</h2>
        </div>

        {/* Centered Paragraph */}
        <div className="content">
          <p
            className="content__subtitle wow fadeInUp"
            data-wow-delay=".3s"
            style={{
              textAlign: "center",
              maxWidth: "1000px",
              margin: "0 auto",
              lineHeight: "1.8",
              marginBottom: "60px",
            }}
          >
            Healthy eating at Rain Drops is not a diet - it’s a way of
            reconnecting. You’ll leave not just feeling lighter, but with a
            clearer mind, calmer emotions, and a deeper appreciation for what
            mindful living truly means. “When the mind meets nature, every meal
            becomes medicine.”
          </p>
        </div>

        <div className="signature__content">
          {/* Programs Grid - Now Image Only */}
          <div className="signature__grid">
            <div className="signature__card">
              <div className="signature__card-image">
                <Image
                  src="/assets/images/nutrition/meal1.png"
                  alt="Meal 1"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="signature__card">
              <div className="signature__card-image">
                <Image
                  src="/assets/images/nutrition/meal2.png"
                  alt="Meal 2"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="signature__card">
              <div className="signature__card-image">
                <Image
                  src="/assets/images/nutrition/meal3.png"
                  alt="Meal 3"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="signature__card">
              <div className="signature__card-image">
                <Image
                  src="/assets/images/nutrition/meal4.png"
                  alt="Meal 4"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .signature__outer {
          background: #ffffffff;
          padding: 60px 20px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .signature__container {
          max-width: 1400px;
          width: 100%;
          padding: 60px 55px;
          margin: 0 auto;
        }

        .signature__header {
          text-align: center;
          margin-bottom: 50px;
        }

        .content p {
          font-size: 1.1rem;
          max-width: 1200px;
          line-height: 1.7;
          margin: 0;
          transition: all 0.3s ease;
        }

        .signature__content {
          display: flex;
          flex-direction: column;
          gap: 50px;
        }

        .signature__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        /* Image Card */
        .signature__card {
          background-color: #ffffff;
          padding: 0;
          border-radius: 6px;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .signature__card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
        }

        .signature__card-image {
          width: 100%;
          height: 250px;
          position: relative;
          border-radius: 6px;
          overflow: hidden;
        }

        /* Mobile Small */
        @media (max-width: 575.98px) {
          .signature__grid {
            grid-template-columns: 1fr;
          }
          .signature__card-image {
            height: 200px;
          }
          .signature__feature {
            height: 250px;
          }

          .signature__outer {
            padding: 40px 0px;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        /* Mobile Large */
        @media (min-width: 576px) and (max-width: 767.98px) {
          .signature__grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .signature__card-image {
            height: 220px;
          }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .signature__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Laptop */
        @media (min-width: 992px) and (max-width: 1199.98px) {
          .signature__feature {
            height: 380px;
          }
        }

        /* Desktop */
        @media (min-width: 1200px) {
          .signature__feature {
            height: 450px;
          }
        }
      `}</style>
    </div>
  );
}
