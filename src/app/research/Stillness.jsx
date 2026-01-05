"use client";
import React, { useState, useEffect } from "react";

const ScienceOfStillness = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="stillness__section section__padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div
              className={`stillness-header text-center ${
                isVisible ? "fade-in" : ""
              }`}
            >
              <h2 className="section__title">The Science of Stillness</h2>
              <p className="stillness__intro">
                Stillness is not the absence of activity – it is the most
                profound form of observation. At Rain Drops, science and silence
                coexist, allowing us to understand how nature subtly rewires the
                human mind.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4 g-lg-5 mt-4">
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className={`stillness-card card-1 ${isVisible ? "slide-up" : ""}`}
              style={{ animationDelay: "0.1s" }}
            >
              <div className="card-icon">
                <i className="fas fa-wind"></i>
              </div>
              <h3 className="card-title">Mindfulness in Motion</h3>
              <p className="card-description">
                Studying how awareness unfolds through breath, movement, and
                sensory experience in nature.
              </p>
              <div className="card-decoration">
                <div className="decoration-line"></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div
              className={`stillness-card card-2 ${isVisible ? "slide-up" : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="card-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3 className="card-title">Neuroscience of Calm</h3>
              <p className="card-description">
                Tracking how time in natural environments enhances cognitive
                clarity, emotional stability, and focus.
              </p>
              <div className="card-decoration">
                <div className="decoration-line"></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div
              className={`stillness-card card-3 ${isVisible ? "slide-up" : ""}`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="card-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="card-title">Ecological Intelligence</h3>
              <p className="card-description">
                Understanding how observing natural systems can teach
                sustainable patterns for leadership and living.
              </p>
              <div className="card-decoration">
                <div className="decoration-line"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-12 col-lg-8"></div>
        </div>
      </div>

      <style jsx>{`
        .stillness__section {
          padding: 4rem 0;
          display: flex;
          align-items: center;
        }

        .stillness__title {
          letter-spacing: 3px;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }

        .stillness__intro {
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
        }

        .stillness-card {
          padding: 2.5rem 1.5rem;
          height: 100%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          border-top: 4px solid transparent;
        }

        .card-1 {
          background: linear-gradient(135deg, #bda671 0%, #a8915b 100%);
          border: 1px solid #bda671;
        }

        .card-1:hover {
          border-top: 4px solid #ffffff;
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(189, 166, 113, 0.3);
        }

        .card-1 .card-icon {
          color: #ffffff;
        }

        .card-1 .card-title {
          text-align: center;
          color: #ffffff;
          text-decoration: underline;
          text-underline-offset: 8px;
          text-decoration-thickness: 2px;
        }

        .card-1 .card-description {
          text-align: center;
          color: #f0f0f0;
        }

        .card-1 .card-decoration {
          background: linear-gradient(90deg, #ffffff, #ffffff);
        }

        .card-2 {
          background: #ffffff;
        }

        .card-2:hover {
          border-top: 4px solid #a8915b;
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(168, 145, 91, 0.15);
        }

        .card-2 .card-icon {
          color: #a8915b;
        }

        .card-2 .card-title {
          text-align: center;
          text-decoration: underline;
          text-underline-offset: 8px;
          text-decoration-thickness: 2px;
        }

        .card-2 .card-description {
          text-align: center;
        }

        .card-2 .card-decoration {
          background: linear-gradient(90deg, #a8915b, #d4c19c);
        }

        .card-3 {
          background: linear-gradient(135deg, #bda671 0%, #a8915b 100%);
          border: 1px solid #bda671;
        }

        .card-3:hover {
          border-top: 4px solid #ffffff;
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(189, 166, 113, 0.3);
        }

        .card-3 .card-icon {
          color: #ffffff;
        }

        .card-3 .card-title {
          text-decoration: underline;
          text-underline-offset: 8px;
          text-decoration-thickness: 2px;
          text-align: center;
          color: #ffffff;
        }

        .card-3 .card-description {
          text-align: center;
          color: #f0f0f0;
        }

        .card-3 .card-decoration {
          background: linear-gradient(90deg, #ffffff, #ffffff);
        }

        .card-icon {
          font-size: 2.5rem;
          transition: transform 0.3s ease;
        }

        .stillness-card:hover .card-icon {
          transform: scale(1.1);
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 1rem;
        }

        .card-description {
          line-height: 1.6;
          font-size: 1rem;
          font-weight: 300;
        }

        .card-decoration {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .stillness-card:hover .card-decoration {
          opacity: 1;
        }

        /* Animation Classes */
        .fade-in {
          animation: fadeIn 1s ease forwards;
        }

        .slide-up {
          animation: slideUp 0.8s ease forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        .fade-in-delayed {
          animation: fadeIn 1s ease 0.5s forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stillness__section {
          padding: 2rem 0;
        }

        .stillness__title {
          font-size: 1.8rem;
          letter-spacing: 2px;
        }

        .stillness__intro {
          font-size: 1rem;
          padding: 0 1rem;
        }

        .stillness-card {
          padding: 2rem 1.25rem;
          margin-bottom: 1.5rem;
        }

        .card-title {
          font-size: 1.3rem;
        }

        @media (max-width: 375px) {
          .stillness__title {
            font-size: 1.6rem;
          }

          .stillness-card {
            padding: 1.75rem 1rem;
          }

          .card-title {
            font-size: 1.2rem;
          }
        }

        @media (min-width: 576px) {
          .stillness__title {
            font-size: 2rem;
          }

          .stillness__intro {
            font-size: 1.1rem;
          }

          .card-title {
            font-size: 1.4rem;
          }
        }

       
        @media (min-width: 768px) {
          .stillness__section {
            padding: 4rem 0;
          }

          .stillness__title {
            font-size: 2.3rem;
          }

          .stillness__intro {
            font-size: 1.15rem;
          }

          .card-title {
            font-size: 1.5rem;
          }
        }

        @media (min-width: 992px) {
          .stillness__section {
            padding: 5rem 0;
          }

          .stillness__title {
            font-size: 2.5rem;
          }
        }

      
        @media (min-width: 1200px) {
          .stillness__section {
            padding: 6rem 0;
          }
        }

        
        @media (min-width: 1400px) {
          .stillness__title {
          }
        }

        .container {
          padding-left: 15px;
          padding-right: 15px;
        }
      `}</style>
    </div>
  );
};

export default ScienceOfStillness;
