"use client";
import React, { useState, useEffect } from "react";

function ProtectiveCycleSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cards = [
    {
      id: 1,
      title: '"You Become Part of a Protective Cycle"',
      content: [
        "When you cultivate calm, you act with clarity.",
        "When you act with clarity, communities thrive.",
        "When communities thrive, the forest remains whole.",
        "",
        "This cycle protects more than a place. It protects a future."
      ]
    },
    {
      id: 2,
      title: '"A Quiet Truth"',
      content: [
        'RainDrops does not "help" communities.',
        "RainDrops stands with them.",
        "We uplift the RainDrops Community because:",
        "Protecting people is the most effective way to protect nature."
      ]
    }
  ];

  return (
    <div className="protective-cycle__section">
      <div className="container">
        {/* Cards Row */}
        <div className="row g-4 g-lg-5">
          {cards.map((card, index) => (
            <div key={card.id} className="col-12 col-lg-6">
              <div
                className={`cycle-card ${isVisible ? "slide-up" : ""}`}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <h3 className="cycle-card__title">{card.title}</h3>
                <div className="cycle-card__content">
                  {card.content.map((line, idx) => (
                    <p key={idx} className="cycle-card__text">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="row mt-5">
          <div className="col-12">
            <div
              className={`statement-section ${
                isVisible ? "fade-in-delayed" : ""
              }`}
            >
              <p className="cycle-card__text">
                At RainDrops,
              </p>
              <p className="cycle-card__text">
                Research guides the mind, community protects the land and you complete the circle.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .protective-cycle__section {
          padding: 5rem 0;
       
        }

        .cycle-card {
          background: linear-gradient(135deg, #c9b485 0%, #a89560 100%);
          padding: 3rem 2.5rem;
          border-radius: 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          min-height: 350px;
          display: flex;
          flex-direction: column;
        }

        .cycle-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        .cycle-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.6s ease;
        }

        .cycle-card:hover::before {
          left: 100%;
        }

        .cycle-card__title {
          font-size: 1.5rem;
          color: #2c2c2c;
          margin-bottom: 2rem;
          text-align: center;
          line-height: 1.4;
        }

        .cycle-card__content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cycle-card__text {
         
          text-align: center;
 color: #000000be;
         
         
         
        }

        .cycle-card__text:empty {
          margin-bottom: 1rem;
        }

        .statement-section {
          background: #e8e8e8;
          padding: 2.5rem 3rem;
          border-radius: 0;
          text-align: center;
        }

        .statement-text {
          font-size: 1.3rem;
          color: #2c2c2c;
          line-height: 1.8;
          margin-bottom: 0.5rem;
          font-weight: 400;
        }

        .statement-text:last-child {
          margin-bottom: 0;
        }

        /* Animation Classes */
        .slide-up {
          animation: slideUp 0.8s ease forwards;
          opacity: 0;
          transform: translateY(40px);
        }

        .fade-in-delayed {
          animation: fadeIn 1s ease 0.8s forwards;
          opacity: 0;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Mobile First (≤575px) */
        .protective-cycle__section {
          padding: 3rem 0;
        }

        .cycle-card {
          padding: 2rem 1.5rem;
          min-height: 300px;
        }

        .cycle-card__title {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
        }

        .cycle-card__text {
          font-size: 1rem;
        }

        .statement-section {
          padding: 2rem 1.5rem;
        }

        .statement-text {
          font-size: 1.1rem;
        }

        /* Small Mobile (≤375px) */
        @media (max-width: 375px) {
          .protective-cycle__section {
            padding: 2rem 0;
          }

          .cycle-card {
            padding: 1.75rem 1.25rem;
          }

          .cycle-card__title {
            font-size: 1.1rem;
          }

          .cycle-card__text {
            font-size: 0.95rem;
          }

          .statement-text {
            font-size: 1rem;
          }
        }

        /* Mobile Large (576px - 767px) */
        @media (min-width: 576px) {
          .cycle-card__title {
            font-size: 1.3rem;
          }

          .cycle-card__text {
            font-size: 1.05rem;
          }

          .statement-text {
            font-size: 1.15rem;
          }
        }

        /* Tablet (768px - 991px) */
        @media (min-width: 768px) {
          .protective-cycle__section {
            padding: 4rem 0;
          }

          .cycle-card {
            padding: 2.5rem 2rem;
          }

          .cycle-card__title {
            font-size: 1.4rem;
          }

          .cycle-card__text {
            font-size: 1.1rem;
          }

          .statement-text {
            font-size: 1.2rem;
          }
        }

        /* Laptop (992px - 1199px) */
        @media (min-width: 992px) {
          .protective-cycle__section {
            padding: 5rem 0;
          }

          .cycle-card {
            padding: 3rem 2.5rem;
            min-height: 350px;
          }

          .cycle-card__title {
            font-size: 1.5rem;
          }

          .cycle-card__text {
            font-size: 1.1rem;
          }

          .statement-section {
            padding: 2.5rem 3rem;
          }

          .statement-text {
            font-size: 1.3rem;
          }
          
          .cycle-card{
          height: 100px;
          }
        }

        /* Large Desktop (≥1200px) */
        @media (min-width: 1200px) {
          .protective-cycle__section {
            padding: 6rem 0;
          }

          .cycle-card {
            min-height: 380px;
          }

          .cycle-card__title {
            font-size: 1.6rem;
          }

          .statement-text {
            font-size: 1.4rem;
          }
        }

        /* Extra Large Screens (≥1400px) */
        @media (min-width: 1400px) {
          .cycle-card__title {
            font-size: 1.7rem;
          }

          .cycle-card__text {
            font-size: 1.15rem;
          }

          .statement-text {
            font-size: 1.5rem;
          }
        }

        /* Container spacing */
        .container {
          padding-left: 15px;
          padding-right: 15px;
        }
      `}</style>
    </div>
  );
}

export default ProtectiveCycleSection;