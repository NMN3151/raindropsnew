'use client';
import React from 'react';
import Image from 'next/image';

export default function Icons() {
  const sections = [
    {
      title: "Think with Stillness",
      description: "Discover how mindfulness & nature reshape brain patterns - turning quiet moments into mental clarity and resilience.",
      image: "/assets/images/neroscience/icons/ic2.png",
    },
    {
      title: "Science of Serenity",
      description: "Explore the neuroscience behind calm: how forest air, sensory awareness & slow breathing restore the nervous system.",
      image: "/assets/images/neroscience/icons/ic1.png",
    },    
    {
      title: "Balance Beyond the Mind",
      description: "Experience harmony between body, brain & environment - where awareness becomes your natural state of wellbeing.",
     image: "/assets/images/neroscience/icons/ic.png",
    },
    
  ];

  return (
    <div className="stillness-sections">
      <div className="container">
        <div className="sections-grid">
          {sections.map((section, index) => (
            <div key={index} className="section-item">
              <div className="image-wrapper">
                <div className="image-container">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={100}
                    height={100}
                    className="section-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
              <p className="section-title">{section.title}</p>
              <p className="section-description">{section.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stillness-sections {
          padding: 80px 0;
          background: #f8f5f0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .sections-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px;
          align-items: start;
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
          content: '';
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
          background: linear-gradient(135deg, rgba(168, 145, 91, 0.2), rgba(189, 166, 113, 0.1));
          border-radius: 50%;
          opacity: 0;
          transition: all 0.4s ease;
          z-index: 2;
        }

        .image-container:hover .image-overlay {
          opacity: 1;
        }

        .section-title {
          font-size: 1.6rem;
          font-weight: 300;
          margin-bottom: 20px;
          line-height: 1.3;
          transition: all 0.3s ease;
        }

        .section-item:hover .section-title {
          color: #a8915b;
          transform: scale(1.05);
        }

        .section-description {
          line-height: 1.7;
          font-weight: 300;
          margin: 0;
          transition: all 0.3s ease;
        }

        .section-item:hover .section-description {
          color: #5a5a5a;
          transform: scale(1.02);
        }

        /* Floating animation */
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .image-container:hover .section-image {
          animation: float 3s ease-in-out infinite;
        }

        /* Tablet */
        @media (max-width: 991.98px) {
          .sections-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 50px;
          }
        }

        /* Mobile */
        @media (max-width: 767.98px) {
          .sections-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </div>
  );
}