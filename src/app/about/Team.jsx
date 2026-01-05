'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function OurTeam() {
  const [expandedCard, setExpandedCard] = useState({});

  const toggleReadMore = (cardId) => {
    setExpandedCard(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const teamMembers = [
    {
      id: 'shashika',
      name: "Shashika Malinda",
      role: "General Manager",
      image: "/assets/images/founders/1f.png",
      qualifications: "11+ Years Luxury Hospitality Experience | Qatar & Sri Lanka",
      shortText: "With 11+ years of luxury hospitality experience in Qatar and Sri Lanka, Shashika brings calm leadership and refined service shaped by brands like Taj, Eden, Villa Republic, Crowne Plaza, and Holiday Inn.",
      fullText: "With 11+ years of luxury hospitality experience in Qatar and Sri Lanka, Shashika brings calm leadership and refined service shaped by brands like Taj, Eden, Villa Republic, Crowne Plaza, and Holiday Inn. As the guardian of our \"Mind Meets Nature\" philosophy, he ensures every guest leaves Rain Drops with a meaningful insight that enriches their journey.\n\nHis guiding philosophy is simple: \"Every guest carries a story. My duty is to make Rain Drops a chapter that awakens wisdom and stays for life.\""
    },
    {
      id: 'chef',
      name: "Chef Sadha",
      role: "Wellness Cuisine Chef",
      image: "/assets/images/founders/4f.png",
      qualifications: "Former Presidential Chef | 20+ Years Elite Culinary Experience",
      shortText: "Former Presidential Chef with 20+ years of elite culinary experience, Chef Sadharuwan brings refined technique and soulful intention to Rain Drops.",
      fullText: "Former Presidential Chef with 20+ years of elite culinary experience, Chef Sadharuwan brings refined technique and soulful intention to Rain Drops. Having served state leaders and shaped menus across Sri Lanka's top luxury properties, he now transforms dining into a ritual of calm, clarity, and wellness — guided by rainforest ingredients and mindful cooking.\n\nHis guiding philosophy is simple: \"When food is created with awareness, it nourishes both the body and the mind.\""
    }
  ];

  return (
    <div className="team-container">
      <div className="team-wrapper">
        
     
        <div className="section-header">
          <h2 className="section_title">Our Team</h2>
          <div className="divider"></div>
        </div>

     
        <div className="team-row">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-image">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={380}
                  height={360}
                  className="team-img"
                />
              </div>
              <h2 className="team-name">{member.name}</h2>
              <p className="team-role">{member.role}</p>
              <div className="divider"></div>
              <p className="team-qualifications">
                <strong>{member.qualifications}</strong>
              </p>
              <p className="team-description">
                {expandedCard[member.id] ? member.fullText : member.shortText}
                {' '}
                <span
                  onClick={() => toggleReadMore(member.id)}
                  className="read-more-link"
                >
                  {expandedCard[member.id] ? 'see less' : 'see more'}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .team-container {
          background: #ffffff;
          min-height: 100vh;
          padding: 60px 0;
          font-family: 'Georgia', serif;
          color: #4a4a4a;
          line-height: 1.6;
        }

        .team-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .divider {
          width: 100px;
          height: 1px;
          background: #bda671;
          margin: 20px auto;
        }

        .team-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 60px;
          margin-bottom: 40px;
        }

        .team-card {
          width: 100%;
          max-width: 420px;
          text-align: center;
        }

        .team-image {
          width: 340px;
          height: 340px;
          margin: 0 auto 25px;
          flex-shrink: 0;
        }

        .team-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .team-name {
          font-size: 24px;
          font-weight: 400;
          color: #333;
          margin: 15px 0 10px;
        }

        .team-role {
          font-size: 16px;
          color: #bda671;
          font-style: italic;
          margin-bottom: 20px;
        }

        .team-qualifications {
          font-size: 14px;
          color: #333;
          margin-bottom: 15px;
        }

        .team-description {
          font-size: 14px;
          color: #666;
          line-height: 1.7;
          white-space: pre-line;
          margin-bottom: 20px;
        }

        .read-more-link {
          color: #bda671;
          cursor: pointer;
          font-style: italic;
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 14px;
        }

        .read-more-link:hover {
          color: #8d7a4f;
          text-decoration: underline;
        }

        @media (min-width: 768px) {
          .team-row { 
            gap: 80px; 
          }
          .team-card { 
            max-width: 450px; 
          }
          .team-name { 
            font-size: 26px; 
          }
          .team-role { 
            font-size: 17px; 
          }
          .team-description { 
            font-size: 15px; 
          }
        }

      
        @media (max-width: 767px) {
          .section_title {
            font-size: 28px;
          }

          .team-row {
            flex-direction: column;
            align-items: center;
            gap: 50px;
          }

          .team-image {
            width: 340px;
            height: 340px;
          }

          .team-img {
            width: 280px;
            height: 280px;
            object-fit: contain;
          }

          .team-description {
            padding: 0 20px;
            font-size: 14.5px;
          }

          .read-more-link {
            font-size: 14.5px;
          }
        }

        @media (max-width: 480px) {
          .team-card {
            max-width: 340px;
          }

          .team-image {
            width: 340px;
            height: 340px;
          }

          .team-img {
            width: 240px;
            height: 240px;
          }

          .team-name { 
            font-size: 21px; 
          }

          .team-description {
            padding: 0 15px;
          }
        }

        @media (max-width: 360px) {
          .team-card {
            max-width: 320px;
          }

          .team-image {
            width: 320px;
            height: 320px;
          }

          .team-img {
            width: 220px;
            height: 220px;
          }
        }
      `}</style>
    </div>
  )
}