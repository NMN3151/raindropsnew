'use client';
import React from 'react';
import Image from 'next/image';

export default function Icons() {
  const sections = [
    {
      title: "Eat with Awareness",
      description: "Every bite invites presence. Here, nourishment meets mindfulness, turning each meal into a graceful pause for the senses.",
      image: "/assets/images/nutrition/icon1.png",
    },
    {
      title: "Food with Purpose",
      description: "Our dishes are crafted with intention — blending science, seasonal ingredients, and nature’s wisdom to support balance, vitality, and inner well-being.",
      image: "/assets/images/nutrition/icon2.png",
    },    
    {
      title: "Wellness in Every Flavor",
      description: "Experience clarity and calm in every taste. Each mindful meal is a journey into simplicity, elegance, and quiet luxury — one exquisite bite at a time.",
     image: "/assets/images/nutrition/icon3.png",
    },
    
  ];

  return (
    <div className="stillness-sections">
      <div className='content'>
        <div className="section-header">
          <h2 className="section_title">Feel Natural, Be Natural</h2>
        </div>
        <p className='content__subtitle'
          data-wow-delay=".3s"
          style={{
            textAlign: "center",
            maxWidth: "1200px",
            margin: "0 auto",
            lineHeight: "1.8",
            marginBottom: "60px",
            
          }}>
            At RainDrops, dining becomes a quiet sanctuary — where refined flavors meet the gentle stillness of the rainforest. Each moment at the table is designed to calm the mind, open the heart, and reconnect you with nature’s effortless harmony.
          </p>
      </div>
      <div className="container">
        <div className="sections-grid">
          {sections.map((section, index) => (
            <div key={index} className="section-item">
              <div className="image-wrapper">
                <div className="image-container">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={60}
                    height={60}
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
          background: #ffffffff;
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
          font-size: 1.4rem;
          margin-bottom: 20px;
          line-height: 1.3;
          transition: all 0.3s ease;
        }

        .section-item:hover .section-title {
          color: #a8915b;
          transform: scale(1.05);
        }

        .content p{
          max-width: 1200px;
          line-height: 1.7;
          margin: 0;
          transition: all 0.3s ease;
          }

          .content h2{
          text-align: center;
          margin-bottom: 20px;
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