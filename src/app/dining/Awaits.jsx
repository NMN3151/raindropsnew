'use client';
import React from 'react';

export default function WhatAwaits() {
  const cards = [
    "Mindful Morning Meals that awaken your focus",
    "Rainforest Lunch Platters rich in freshness and balance",
    "Evening Dinners that calm, restore, and inspire reflection",
    "Herbal infusions & teas designed to relax the body & cleanse the mind",
  ];

 const sectionStyle = {
  position: 'relative',
  backgroundImage: "url('/assets/images/nutrition/awaits_bg.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  color: 'black',
  textAlign: 'center',
  padding: '6rem 1rem',
};

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(46, 42, 42, 0.6)',
  };

  const containerStyle = {
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
    zIndex: 10,
  };

  const titleStyle = {
    fontWeight: '500',
    letterSpacing: '0.1em',
    marginBottom: '2.5rem',
    fontSize: '2.8rem',
    color: '#ffffffff', 
  };

  const cardsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '4rem',
    marginBottom: '4rem',
    justifyItems: 'center',
  };

 const cardStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.96)',
  borderRadius: '50%',
  height: '14rem',
  width: '14rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  textAlign: 'center',
  transition: 'transform 0.3s, background-color 0.3s',
  cursor: 'default',
  border: '3px solid #BDA671',
};


  const cardHoverStyle = {
    transform: 'scale(1.05)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#ffffff',
  };

  const descriptionStyle = {
    maxWidth: '768px',
    margin: '0 auto',
    lineHeight: '1.7',
    fontSize: '1.275rem',
    fontWeight: '500',
    color: '#d1d5db',
  };

  const [hoverIndex, setHoverIndex] = React.useState(null);

  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}></div>

      <div style={containerStyle}>
        <h2 style={titleStyle}>What Awaits You</h2>

        <div style={cardsGridStyle}>
          {cards.map((text, index) => (
            <div
              key={index}
              style={{
                ...cardStyle,
                ...(hoverIndex === index ? cardHoverStyle : {}),
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <p style={{ fontSize: '0.985rem', fontWeight: 500 }}>{text}</p>
            </div>
          ))}
        </div>

       
        <p style={descriptionStyle}>
          Each Menu Is Seasonal, Creative, And Deeply Nourishing – The Perfect Blend Of Science, Mindfulness, And Sri Lankan Flavor
        </p>
      </div>
    </section>
  );
}
