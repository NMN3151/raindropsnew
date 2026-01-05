"use client";
import React from "react";
import Image from "next/image";

export default function Wicons() {
  const sections = [
    {
      title: "Mind can slow down",
      image: "/assets/images/weather/wli.png",
    },
    {
      title: "Nature can speak clearly",
      image: "/assets/images/weather/wlii.png",
    },
    {
      title: "You can finally hear yourself again",
      image: "/assets/images/weather/wlii (2).png",
    },
  ];

  return (
    <div className="stillness-sections">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">A PLACE DESIGNED FOR STILLNESS</h2>
          <p className="section-intro">
            <span className="italic-text">Rain Drops</span> is not a city hotel
            relocated to the jungle. It is a rainforest wellness villa
            intentionally placed where:
          </p>
        </div>

        <div className="sections-grid">
          {sections.map((section, index) => (
            <div key={index} className="section-item">
              <div className="image-wrapper">
                <div className="image-container">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={80}
                    height={80}
                    className="section-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
              <p className="section-description">{section.title}</p>
            </div>
          ))}
        </div>

        <div className="footer-text">
          <p>
            The location and weather are not background details here — they are
            part of your practice, part of your healing, and part of why
            RainDrops exists. When you are ready to experience where mind truly
            meets nature, we will be here, listening to the same rain you will
            soon hear from your villa.
          </p>
        </div>
      </div>

      <style jsx>{`
        .stillness-sections {
          padding: 80px 0;
          background: #ffffff;
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 20px;
        }

      
        .section-header {
          margin-bottom: 60px;
          text-align: left;
        }

        .section-title {
          font-size: 1.8rem;
          font-weight: 400;
          letter-spacing: 1px;
          color: #0a0a0a;
          margin: 0 0 30px 0;
          text-transform: uppercase;
        }

        .section-intro {
          font-size: 16px 
          line-height: 1.6;
          color: #333;
          margin: 0;
          max-width: 900px;
        }

        .italic-text {
          font-style: italic;
          font-weight: 500;
        }

      
        .sections-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px;
          align-items: start;
          margin-bottom: 60px;
        }

        .section-item {
          text-align: center;
          padding: 0 20px;
          transition: all 0.4s ease;
          cursor: default;
        }

        .section-item:hover {
          transform: translateY(-10px);
        }

        .image-wrapper {
          margin-bottom: 30px;
          display: inline-block;
          position: relative;
        }

        .image-container {
          position: relative;
          display: inline-block;
          cursor: pointer;
          border-radius: 50%;
          transition: all 0.5s ease;
        }

        .image-container::before {
          content: "";
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          background: linear-gradient(135deg, #a8915b, #bda671);
          border-radius: 50%;
          opacity: 0;
          transition: all 0.4s ease;
          z-index: 0;
        }

        .image-container:hover::before {
          opacity: 0.3;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
        }

        .section-image {
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-radius: 50%;
          object-fit: cover;
          position: relative;
          z-index: 1;
          cursor: pointer;
        }

        .image-container:hover .section-image {
          transform: scale(1.15) rotate(8deg);
          filter: brightness(1.15) contrast(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(168, 145, 91, 0.2),
            rgba(189, 166, 113, 0.1)
          );
          border-radius: 50%;
          opacity: 0;
          transition: all 0.4s ease;
          z-index: 2;
        }

        .image-container:hover .image-overlay {
          opacity: 1;
        }

        .section-description {
          font-size: 16px 
          line-height: 1.6;
          color: #333;
          margin: 0;
          transition: all 0.3s ease;
        }

        .section-item:hover .section-description {
          color: #5a5a5a;
          transform: scale(1.02);
        }

        /* Footer Text */
        .footer-text {
          text-align: left;
          max-width: 1300px;
          margin: 0 auto;
        }

        .footer-text p {
           font-size: 16px 
          line-height: 1.8;
          color: #333;
          margin: 0;
        }

    
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .image-container:hover .section-image {
          animation: float 3s ease-in-out infinite;
        }


        @media (max-width: 991.98px) {
          .stillness-sections {
            padding: 60px 0;
          }

          .section-header {
            margin-bottom: 50px;
          }

          .sections-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 50px;
            margin-bottom: 50px;
          }

          .section-item:last-child {
            grid-column: 1 / -1;
            max-width: 400px;
            margin: 0 auto;
          }
        }

      
        @media (max-width: 767.98px) {
          .stillness-sections {
            padding: 50px 0;
          }

          .section-header {
            margin-bottom: 40px;
          }

          .section-title {
            font-size: 1.4rem;
            margin-bottom: 25px;
          }

          .section-intro {
            font-size: 0.95rem;
          }

          .sections-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            margin-bottom: 40px;
          }

          .section-item:last-child {
            max-width: 100%;
          }

          .image-wrapper {
            margin-bottom: 20px;
          }

          .section-description {
            font-size: 0.95rem;
          }

          .footer-text p {
            font-size: 0.9rem;
          }
        }

      
        @media (max-width: 575px) {
          .stillness-sections {
            padding: 40px 0;
            margin-top: -200px;
          }

          .section-title {
            font-size: 1.8rem;
            margin-bottom: 20px;
            text-align: center;
          }

          .section-intro {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}
