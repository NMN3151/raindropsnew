"use client";
import React, { useState, useEffect } from "react";

function ResearchImpact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const impactItems = [
    {
      id: 1,
      title: "Annual Calm Index Reports",
      description:
        "Measuring How Human Interaction With Nature Shapes Focus, Emotional Balance, And Well-Being.",
      color: "gold",
    },
    {
      id: 2,
      title: "Mind-Mature Data Collaborations",
      description:
        "Partnering With ManaLead Institute To Explore How Neurotransformational Insights Guide Leadership, Learning & Sustainable Living.",
      color: "blue",
    },
    {
      id: 3,
      title: "Workshops For Leaders & Educators",
      description:
        "Transforming Observations From The Field Into Actionable Strategies for Mindful, Resilient Organizations.",
      color: "gold",
    },
  ];

  return (
    <div className="impact__section section__padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div
              className={`impact-header text-center ${
                isVisible ? "fade-in" : ""
              }`}
            >
              <h2 className="section__title">From Obeservation To Action </h2>
              <p className="intro">
                The Insights Gathered At The Rain Drops Research & Action Center
                Go Beyond Study – They Are Translated into Real-World Impact:
              </p>
            </div>
          </div>
        </div>

      
        <div className="row g-4 g-lg-5 mt-4">
          {impactItems.map((item, index) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
              <div
                className={`impact-card card-${item.color} ${
                  isVisible ? "slide-up" : ""
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="impact-icon">{item.icon}</div>
                <h3 className="impact-card__title">{item.title}</h3>
                <p className="impact-card__description">{item.description}</p>
                <div className="impact-decoration">
                  <div className="decoration-line"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

    
        <br />
        <p className="text ">
          At Rain Drops, Every Observation Becomes A Step Toward Understanding,
          Applying, And Living The Wisdom Of The natural World
        </p>
      </div>

    
      <style jsx>{`
        .impact__section {
          padding: 5rem 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .impact__title {
          font-size: 2.8rem;
          font-weight: 300;
          letter-spacing: 3px;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }

        .intro {
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
          margin: 0 auto;
        }

        .impact-card {
          padding: 2.5rem 2rem;
          height: 100%;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          border: none;
        }

        .impact-card:hover {
          transform: translateY(-15px) scale(1.02);
        }

        .impact-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transition: left 0.6s ease;
        }

        .impact-card:hover::before {
          left: 100%;
        }

    
        .card-green {
          background: linear-gradient(135deg, #ffffffff 0%, #948157ff 70%);
          color: white;
        }

        .card-green .impact-card__title {
          color: #ffffff;
        }

        .card-green .impact-card__description {
          color: #e8f5e8;
        }

        .card-green .impact-decoration {
          background: linear-gradient(90deg, #bda671, #bda671);
        }

        /* Blue Card */
        .card-blue {
          color: white;
        }

        .card-blue .impact-card__title {
        }

        .card-blue .impact-card__description {
        }

        .card-blue .impact-decoration {
        }

      
        .card-gold {
          background: #c9b485ff;
          color: white;
        }

        .card-gold .impact-card__title {
          color: #ffffffff;
        }

        .card-gold .impact-card__description {
          color: #ffffffff;
        }

        .card-gold .impact-decoration {
        }

        .impact-icon {
          margin-bottom: 1.5rem;
          display: block;
          text-align: center;
          transition: transform 0.4s ease;
        }

        .impact-card:hover .impact-icon {
          transform: scale(1.2) rotate(5deg);
        }

        .impact-card__title {
          text-align: center;
          color: #000000ff;
          text-decoration: underline;
          text-underline-offset: 8px;
          text-decoration-thickness: 2px;
        }

        .impact-card__description {
          text-align: center;
          color: #000000ff;
        }

        .impact-decoration {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 4px;
          transition: width 0.4s ease;
          border-radius: 2px;
        }

        .impact-card:hover .impact-decoration {
          width: 80%;
        }

        .impact-statement {
          background: #ffffff;
          border-radius: 16px;
          padding: 3rem 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          margin-top: 3rem;
          border-left: 4px solid #a8915b;
        }

        .text {
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
          margin: 0 auto;
        }

       
        .fade-in {
          animation: fadeInUp 1s ease forwards;
        }

        .slide-up {
          animation: slideUp 0.8s ease forwards;
          opacity: 0;
          transform: translateY(40px);
        }

        .fade-in-delayed {
          animation: fadeIn 1.2s ease 0.6s forwards;
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

     
        .impact__section {
          padding: 3rem 0;
        }

        .impact__title {
          font-size: 2rem;
          letter-spacing: 2px;
        }

        .impact__intro {
          font-size: 1.1rem;
          padding: 0 1rem;
        }

        .impact-card {
          padding: 2rem 1.5rem;
          margin-bottom: 1.5rem;
        }

        .impact-card__title {
          font-size: 1.2rem;
        }

        .statement-text {
          font-size: 1.1rem;
        }

        @media (max-width: 375px) {
          .impact__section {
            padding: 2rem 0;
          }

          .impact__title {
            font-size: 1.8rem;
          }

          .impact-card {
            padding: 1.75rem 1.25rem;
          }

          .impact-card__title {
            font-size: 1.1rem;
          }

          .impact-card__description {
            font-size: 0.95rem;
          }
        }

       
        @media (min-width: 576px) {
          .impact__title {
            font-size: 2.3rem;
          }

          .impact__intro {
            font-size: 1.2rem;
          }

          .impact-card__title {
            font-size: 1.3rem;
          }
        }

      
        @media (min-width: 768px) {
          .impact__section {
            padding: 4rem 0;
          }

          .impact__title {
            font-size: 2.6rem;
          }

          .impact__intro {
            font-size: 1.25rem;
          }

          .impact-card__title {
            font-size: 1.35rem;
          }

          .statement-text {
            font-size: 1.3rem;
          }
        }

    
        @media (min-width: 992px) {
          .impact__section {
            padding: 5rem 0;
          }

          .impact__title {
            font-size: 2.8rem;
          }

          .impact-card__title {
            font-size: 1.4rem;
          }
        }

    
        @media (min-width: 1200px) {
          .impact__section {
            padding: 6rem 0;
          }

          .section__title {
            margin-top: -200px;
          }

          .impact__title {
            font-size: 3.2rem;
          }

          .statement-text {
            font-size: 1.4rem;
          }
        }

        @media (min-width: 1400px) {
          .impact__title {
            font-size: 3.5rem;
          }
        }

        .container {
          padding-left: 15px;
          padding-right: 15px;
        }
      `}</style>
    </div>
  );
}

export default ResearchImpact;
