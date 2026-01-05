// components/MindfulnessExperienceWithIcons.js (Alternative)
'use client';
import React from 'react';

export default function MindfulnessExperience() {
  const sessionHighlights = [
    {
      image: "/assets/images/neroscience/icons/ic1.png",
      title: "Mindfulness of Breathing ", italic: "(Anapanasati)",
      description: "The original meditation technique that teaches awareness through natural breathing."
    },
    {
      image: "/assets/images/neroscience/icons/metta.jpg",
      title: "Loving-Friendliness ", italic: "(Mettā)",
      description: "Guided practice to awaken warmth, gratitude, and compassion toward self and others."
    },
    {
      image: "/assets/images/neroscience/icons/ic2.png",
      title: "Neurofeedback with Muse",
      description: "Real-time brainwave insights that show you when your mind is calm, active, or balanced."
    },
    {
      image: "/assets/images/neroscience/icons/nm.png",
      title: "Nature Immersion",
      description: "Each session is conducted in our open meditation deck, surrounded by the living energy of the rainforest."
    }
  ];

  return (
    <div className="mindfulness-experience">
      <div className="container">
        <div className="experience-header">
          <h2 className="section__title">The Rain drops Mindfulness Experience</h2>   
          <p className="experience-intro">
            Each guest at Rain Drops is offered a complimentary 1-hour session during their stay - 
            a personalized journey designed to quiet the mind, open the heart, and synchronize 
            the brain with nature's stillness. Session Highlights
          </p>
        </div>

        <div className="session-highlights">
          <div className="highlights-grid">
            {sessionHighlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <div className="card-icon">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="icon-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'icon-fallback';
                      // Different fallback icons for each card
                      const fallbackIcons = ['🌬️', '💖', '🧠', '🌿'];
                      fallback.innerHTML = fallbackIcons[index] || '🌿';
                      e.target.parentNode.appendChild(fallback);
                    }}
                  />
                </div>
                <div className="card-content">
                 <h4 className="highlight-title">
                    {highlight.title} <span style={{ fontStyle: 'italic' }}>{highlight.italic}</span>
                  </h4>
                  <p className="highlight-description">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .mindfulness-experience {
          background: linear-gradient(135deg, #f8f5f0 0%, #f0ebe0 100%);
          padding: 3rem 0;
          
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* Mobile First */
        .experience-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }


        .experience-intro {
          line-height: 1.6;
          margin: 0 auto;
          max-width: 900px;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .highlight-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .highlight-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(135deg, #a8915b, #bda671);
        }

        .highlight-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .card-icon {
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80px;
        }

        .icon-image {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: contain;
          transition: all 0.3s ease;
        }

        .highlight-card:hover .icon-image {
          transform: scale(1.1);
        }

        .icon-fallback {
          font-size: 3rem;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #a8915b, #bda671);
          border-radius: 50%;
          color: white;
        }

        .highlight-title {
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .highlight-description {
          line-height: 1.5;
          font-weight: 300;
          margin: 0;
        }

        /* Tablet & Laptop responsive styles remain the same */
        @media (min-width: 768px) {
          .highlights-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .icon-image {
            width: 90px;
            height: 90px;
          }
        }

        @media (min-width: 1024px) {
          .icon-image {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </div>
  );
}