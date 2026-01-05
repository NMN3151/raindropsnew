"use client";
import React from "react";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function SignaturePrograms() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Auto-play prevented:", error);
        // Fallback: User interaction required
      });
    }
  }, []);
  return (
    <div className="signature__outer">
      <div className="signature__container">
        <div className="signature__header">
          <h2 className="section__title"> Signature Programs</h2>
        </div>

        <div className="signature__content">
          {/* Programs Grid */}
          <div className="signature__grid">
            <div className="signature__card signature__card--featured">
              <div className="signature__card-icon">
                <div className="signature__card-number">01</div>
              </div>
              <h4 className="signature__card-title">The Clarity Retreat</h4>
              <p className="signature__card-desc">
                For leaders, creators, and seekers.
              </p>
            </div>

            <div className="signature__card">
              <div className="signature__card-icon">
                <div className="signature__card-number">02</div>
              </div>
              <h4 className="signature__card-title">The Mindfulness Reset</h4>
              <p className="signature__card-desc">
                Calmness training rooted in neuroscience & Anāpānasati.
              </p>
            </div>

            <div className="signature__card">
              <div className="signature__card-icon">
                <div className="signature__card-number">03</div>
              </div>
              <h4 className="signature__card-title">
                Rainforest Immersion Journey
              </h4>
              <p className="signature__card-desc">
                Guided nature experiences designed to harmonize mind and body.
              </p>
            </div>

            <div className="signature__card">
              <div className="signature__card-icon">
                <div className="signature__card-number">04</div>
              </div>
              <h4 className="signature__card-title">
                The Leader Within Program
              </h4>
              <p className="signature__card-desc">
                Purpose, self-awareness, and mental clarity for decision-makers.
              </p>
            </div>
          </div>

          {/* Featured Image Section */}
          <div className="signature__feature">
            <div className="signature__feature-image">
              {/* <video
                ref={videoRef}
                src="/assets/images/signature/Rain banner.mp4"
                autoPlay
                muted
                loop
                playsInline
                // style={{ width: "100%", height: "auto" }}
              ></video> */}

              <Image
                src="/assets/images/signature/signature.png"
                alt="Rainforest retreat experience"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="signature__feature-overlay">
              {/* Optional overlay content */}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .signature__outer {
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

        // .section__title {
        // font-size: 3rem;
        // font-weight: 300;
        // color: #1b1b1b;
        // letter-spacing: 0.05em;
        // margin-bottom: 20px;
        // line-height: 1.2;
        // }

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

        .signature__card {
          background-color: #ffffff;
          padding: 40px 25px;
          border-radius: 4px;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.06);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          border-top: 4px solid transparent;
        }

        .signature__card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: #ab8a62;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .signature__card:hover {
          transform: translateY(-8px);
        }

        .signature__card:hover::before {
          transform: scaleX(1);
        }

        .signature__card--featured {
          background: linear-gradient(135deg, #ab8a62 0%, #ab8a62 100%);
          color: #ffffff;
          border-top-color: #ffffff;
        }

        .signature__card--featured .signature__card-number {
          color: rgba(255, 255, 255, 0.4);
        }

        .signature__card--featured .signature__card-title {
          color: #ffffff;
        }

        .signature__card--featured .signature__card-desc {
          color: rgba(255, 255, 255, 0.95);
        }

        .signature__card--featured::before {
          background: rgba(255, 255, 255, 1);
        }

        .signature__card-icon {
          margin-bottom: 20px;
        }

        .signature__card-number {
          font-size: 3rem;
          font-weight: 200;
          color: #e8e8e0;
          line-height: 1;
          transition: color 0.3s ease;
        }

        .signature__card:hover .signature__card-number {
          color: #a8915b;
        }

        .signature__card--featured:hover .signature__card-number {
          color: rgba(255, 255, 255, 0.6);
        }

        .signature__card-title {
          font-size: 1.3rem;
          font-weight: 500;
          color: #1b1b1b;
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .signature__card-desc {
          font-size: 1rem;
          color: #4a4a4a;
          line-height: 1.6;
          font-weight: 300;
        }

        .signature__feature {
          position: relative;
          height: 400px;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);

        }

        .signature__feature-image {
          margin-top: -100px;
          position: relative;
          width: 100%;
          height: 150%;
          object-fit: fill;
        }

        .signature__feature-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          // background: linear-gradient(
          //   to top,
          //   rgba(0, 0, 0, 0.8) 0%,
          //   rgba(0, 0, 0, 0.4) 60%,
          //   transparent 100%
          // );
          padding: 40px 30px;
          color: white;
        }

        /* Mobile Small (≤575px) */
        @media (max-width: 575.98px) {
          .signature__outer {
            padding: 40px 15px;
            margin-top: -60px;
          }

          .signature__container {
            padding: 40px 20px;
          }

          .section__title {
            font-size: 2rem;
          }

          .signature__header {
            margin-bottom: 30px;
          }

          .signature__content {
            gap: 30px;
          }

          .signature__grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .signature__card {
            padding: 30px 20px;
            text-align: center;
          }

          .signature__card-number {
            font-size: 2.5rem;
          }

          .signature__card-title {
            font-size: 1.2rem;
          }

          .signature__card-desc {
            font-size: 0.95rem;
          }

          .signature__feature {
            height: 250px;
          }

          .signature__feature-overlay {
            padding: 25px 20px;
          }
        }

        /* Mobile Large (576px - 767px) */
        @media (min-width: 425px) and (max-width: 767.98px) {
          .signature__outer {
            padding: 50px 20px;
          }

          .signature__container {
            padding: 50px 30px;
          }

          .section__title {
            font-size: 2.4rem;
          }

          .signature__header {
            margin-bottom: 40px;
          }

          .signature__content {
            gap: 40px;
          }

          .signature__grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .signature__card {
            padding: 35px 25px;
          }

          .signature__card-number {
            font-size: 2.8rem;
          }

          .signature__card-title {
            font-size: 1.25rem;
          }

          .signature__feature {
            height: 200px;
          }

          .signature__feature-image {
            position: relative;
            width: 100%;
            height: 200%;
            object-fit: contain;
          }
       
        }

        /* Tablet (768px - 991px) */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .signature__outer {
            padding: 60px 30px;
          }

          .signature__container {
            padding: 60px 40px;
          }

          .section__title {
            font-size: 2.8rem;
          }

          .signature__header {
            margin-bottom: 45px;
          }

          .signature__content {
            gap: 45px;
          }

          .signature__grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }

          .signature__card {
            padding: 40px 30px;
          }

          .signature__card-number {
            font-size: 3rem;
          }

          .signature__card-title {
            font-size: 1.35rem;
          }

          .signature__feature {
            height: 350px;
          }

          .signature__feature-overlay {
            padding: 40px 35px;
          }
        }

        /* Laptop (992px - 1199px) - FIXED */
        @media (min-width: 992px) and (max-width: 1199.98px) {
          .signature__outer {
            padding: 70px 40px;
          }

          .signature__container {
            padding: 70px 50px;
          }

          .section__title {
            font-size: 3rem;
          }

          .signature__header {
            margin-bottom: 50px;
            margin-top: -60px;
          }

          .signature__feature-image {
            margin-top: -60px;
          }

          .signature__content {
            gap: 50px;
          }

          .signature__grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .signature__card {
            padding: 35px 20px;
          }

          .signature__card-number {
            font-size: 2.8rem;
          }

          .signature__card-title {
            font-size: 1.25rem;
          }

          .signature__card-desc {
            font-size: 0.95rem;
          }

          .signature__feature {
            height: 380px; /* Reduced from 430px to prevent banner-like size */
          }

          .signature__feature-overlay {
            padding: 35px 30px;
          }
        }

        /* Large Desktop (≥1200px) */
        @media (min-width: 1200px) {
          .signature__outer {
            padding: 80px 50px;
          }

          .signature__container {
            padding: 80px 60px;
          }

          .signature__header {
            margin-bottom: 60px;
            margin-top: -140px;
          }

          .signature__content {
            gap: 60px;
          }

          .signature__grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
          }

          .signature__card {
            padding: 45px 30px;
          }

          .signature__card-number {
            font-size: 3.2rem;
          }

          .signature__card-title {
            font-size: 1.4rem;
          }

          .signature__card-desc {
            font-size: 1.05rem;
          }

          .signature__feature {
            height: 530px;
          }

          .signature__feature-overlay {
            padding: 50px 40px;
          }
        }
      `}</style>
    </div>
  );
}
