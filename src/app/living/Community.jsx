'use client';
import React from 'react';
import Image from 'next/image';

export default function Community() {
  const sections = [
    {
      title: "Mind meets Nature",
      description: "Insight Partners discover clarity, presence & inner calm",
      image: "/assets/images/about/abi.png",
    },
    {
      title: "RainDrops meets Community",
      description: "Shared livelihoods, trust, and continuity",
      image: "/assets/images/about/partnership/community2.png",
    },    
    {
      title: "Community meets Insight Partners",
      description: "Mutual respect, learning, and protection",
     image: "/assets/images/about/partnership/community3.png",
    },
    
  ];

  return (
    <div className="stillness-sections">
      <div className="container">
        <h2 className="content__title wow fadeInUp" style={{textAlign:"center"}}>
            RainDrops Meets Community. Community Meets Insight Partners.
          </h2>
        <div className="sections-grid">
          {sections.map((section, index) => (
            <div key={index} className="section-item">
              <div className="image-wrapper">
                <div className="image-container">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={350}
                    height={350}
                    className="section-image"
                    loading="lazy"
                    
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
       
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .sections-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0px;
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


        .section-title {
          font-size: 1.2rem;
          font-weight: 300;
          margin-bottom: 20px;
          line-height: 1.3;
          transition: all 0.3s ease;
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