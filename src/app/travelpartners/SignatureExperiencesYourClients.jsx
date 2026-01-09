import React from "react";
import Image from "next/image";

function SignatureExperiencesYourClients() {
  const experiences = [
    {
      title: "Mind Meets Nature Trail",
      description: "guided rainforest immersion",
    },
    {
      title: "Tea Wisdom & Mindfulness Journey",
      description: "authentic community connection",
    },
    {
      title: "Mindful Creek Walking",
      description: "movement, balance, sensory reset",
    },
    {
      title: "Nature Mindfulness Retreat",
      description: "silent stillness for clarity",
    },
    {
      title: "Muse Neuro-Mindfulness Experience",
      description: "meditation meets neuroscience with real-time brain data",
    },
  ];

  const outcomes = [
    "Emotional balance",
    "Deep calmness",
    "Mental clarity",
    "Meaningful self-awareness",
    "A renewed relationship with nature",
  ];

  return (
    <>
      <div className="signature-section section__padding">
        <div className="container">
          <h2 className="main-title wow fadeInUp">
            SIGNATURE EXPERIENCES YOUR CLIENTS REMEMBER
          </h2>

          <div className="experiences-wrapper">
            {/* LEFT IMAGE – DESKTOP ONLY */}
            <div className="image-column left-image desktop-only">
              <div className="image-container">
                <img
                  src="/assets/images/travelpartners/bothwalking.png"
                  alt="Partners walking together"
                  className="partner-image"
                  loading="lazy"

                />
              </div>
            </div>

            {/* CENTER CONTENT */}
            <div className="content-column wow fadeInUp">
              <div className="intro-text">
                <p>
                  These are not tours. They are inner journeys, optional, gentle and non-structured.
                </p>
                <p>
                  Travel partners may recommend experiences individually or as curated combinations:
                </p>
              </div>

              <div className="experiences-list">
                {experiences.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <span className="bullet">•</span>
                    <div className="exp-content">
                      <strong>{exp.title}</strong> – {exp.description}
                    </div>
                  </div>
                ))}
              </div>

              <div className="outcomes-section">
                <p className="outcomes-intro">These experiences create:</p>
                <ul className="outcomes-list">
                  {outcomes.map((outcome, index) => (
                    <li key={index} className="outcome-item">
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ✅ MOBILE BOTTOM IMAGES */}
              <div className="mobile-bottom-images">
                <img
                  src="/assets/images/travelpartners/bothwalking.png"
                  alt="Partners walking together"
                  className="partner-image"
                  loading="lazy"
                />
                <img
                  src="/assets/images/travelpartners/rainforest.png"
                  alt="Rainforest experience"
                  className="partner-image"
                  loading="lazy"
                />
              </div>
            </div>

            {/* RIGHT IMAGE – DESKTOP ONLY */}
            <div className="image-column right-image desktop-only">
              <div className="image-container">
                <img
                  src="/assets/images/travelpartners/rainforest.png"
                  alt="Rainforest experience"
                  className="partner-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Base styles */
        .signature-section {
          position: relative;
          background-color: #f5f5f5;
          overflow: hidden;
        }
          .mobile-bottom-images {
          display: none;
          margin-top: 2rem;
          gap: 16px;
          flex-direction: column;
        }

          .partner-image{
            width: 100%;
            height: auto;
            object-fit: cover;
          }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section__padding {
          padding: 80px 0;
        }

        /* Title */
        .main-title {
          font-size: var(--h2);
          text-align: center;
          margin-bottom: 3rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 400;
          color: #2c2c2c;
        }

        /* Main wrapper - 3 columns */
        .experiences-wrapper {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        /* Image columns */
        .image-column {
          flex: 0 0 280px;
        }

        .image-container {
          width: 100%;
          height: 600px;
          border-radius: 8px;
          overflow: hidden;
        }

        .image-container:hover {
          transform: translateY(-8px);
        }

        .experience-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Content column */
        .content-column {
          flex: 1;
          min-width: 300px;
        }

        .intro-text {
          margin-bottom: 2rem;
        }

        .intro-text p {
          font-size: var(--p);
          line-height: 1.7;
          color: #333;
          margin-bottom: 1rem;
        }

        .intro-text strong {
          font-weight: 600;
          color: #2c2c2c;
        }

        .experience-item {
          display: flex;
          align-items: flex-start;
        }

        .bullet {
          color: #000000ff;
          font-size: 1.5rem;
          margin-right: 12px;
          line-height: 1.4;
          flex-shrink: 0;
        }

        .exp-content {
          font-size: 1rem;
          color: #333;
        }

        .exp-content strong {
          font-weight: 600;
          color: #2c2c2c;
        }

        .outcomes-intro {
          font-size: 1.05rem;
          color: #333;
          margin-top: 2rem;
        }

        .outcomes-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .outcome-item {
          font-size: 1rem;
          color: #333;
          padding-left: 25px;
          position: relative;
        }

        .outcome-item:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #000000ff;
          font-size: 1.5rem;
          line-height: 1.4;
        }

        /* Animation */
        .wow.fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
        }

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

        /* Responsive Design */

        /* Large Desktop */
        @media (min-width: 1200px) {
          .main-title {
            font-size: 2.3rem;
            margin-bottom: 3.5rem;
          }

          .image-column {
            flex: 0 0 300px;
          }

          
        }

        /* Desktop - Tablet Landscape */
        @media (min-width: 1024px) and (max-width: 1199px) {
          .container {
            max-width: 960px;
          }

          .main-title {
            font-size: 2rem;
          }

          .image-column {
            flex: 0 0 240px;
          }

          .image-container {
            height: 550px;
          }

          .experiences-wrapper {
            gap: 35px;
          }

          .intro-text p,
          .outcomes-intro {
            font-size: 1rem;
          }

          .exp-content {
            font-size: 0.95rem;
          }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          .section__padding {
            padding: 60px 0;
          }

          .main-title {
            font-size: 1.7rem;
            letter-spacing: 1.5px;
            margin-bottom: 2.5rem;
          }

          .experiences-wrapper {
            flex-direction: column;
            gap: 30px;
          }

          .image-column {
            flex: 0 0 auto;
            width: 100%;
          }

          .image-container {
            height: 350px;
          }

          .content-column {
            width: 100%;
            min-width: unset;
          }

          .intro-text p {
            font-size: 1rem;
          }

          .exp-content {
            font-size: 0.95rem;
          }
        }

        /* Mobile - Large */
        @media (max-width: 767px) {
        .experiences-wrapper {
            flex-direction: column;
          }

          .desktop-only {
            display: none;
          }

          .mobile-bottom-images {
          margin-top: 20px;
            display: flex;
            gap: 15px;
            flex-direction: row;
          }

          .mobile-bottom-images img {
            height: 220px;
          }
          .section__padding {
            padding: 50px 0;
          }

          .main-title {
            font-size: 1.4rem;
            letter-spacing: 1px;
            margin-bottom: 2rem;
            line-height: 1.3;
          }

          .experiences-wrapper {
            flex-direction: column;
            gap: 25px;
          }

          .image-column {
            width: 100%;
          }

          .image-container {
            height: 300px;
            border-radius: 6px;
          }

          .content-column {
            width: 100%;
            min-width: unset;
          }

          .intro-text {
            margin-bottom: 1.5rem;
          }

          .intro-text p {
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .experiences-list {
            margin-bottom: 2rem;
          }

          .experience-item {
            margin-bottom: 0.9rem;
          }

          .bullet {
            font-size: 1.3rem;
            margin-right: 10px;
          }

          .exp-content {
            font-size: 0.9rem;
          }

          .outcomes-intro {
            font-size: 0.95rem;
          }

          .outcome-item {
            font-size: 0.9rem;
            line-height: 1.7;
            padding-left: 22px;
          }

          .outcome-item:before {
            font-size: 1.3rem;
          }
        }

        /* Mobile - Small */
        @media (max-width: 480px) {
        .image-column {
          flex: 0 0 0;
        }
          .container {
            padding: 0 15px;
          }

          .section__padding {
            padding: 40px 0;
          }

          .main-title {
            font-size: 1.2rem;
            letter-spacing: 0.5px;
            margin-bottom: 1.5rem;
          }

          .image-container {
            height: 250px;
          }

          .intro-text p {
            font-size: 0.9rem;
            line-height: 1.5;
          }

          .experience-item {
            margin-bottom: 0.8rem;
          }

          .bullet {
            font-size: 1.2rem;
            margin-right: 8px;
          }

          .exp-content {
            font-size: 0.85rem;
            line-height: 1.6;
          }

          .outcomes-intro {
            font-size: 0.9rem;
          }

          .outcome-item {
            font-size: 0.85rem;
            padding-left: 20px;
          }

          .outcome-item:before {
            font-size: 1.2rem;
          }
        }

        /* Mobile - Extra Small */
        @media (max-width: 360px) {
          .main-title {
            font-size: 1.1rem;
            line-height: 1.25;
          }

          .image-container {
            height: 220px;
          }

          .intro-text p {
            font-size: 0.85rem;
          }

          .exp-content {
            font-size: 0.8rem;
          }

          .outcome-item {
            font-size: 0.8rem;
            line-height: 1.6;
          }
        }
      `}</style>
    </>
  );
}

export default SignatureExperiencesYourClients;
