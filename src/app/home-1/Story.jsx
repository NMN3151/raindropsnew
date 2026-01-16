"use client";
import React, { useEffect, useRef, useState } from "react";

export default function SignaturePrograms() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeHover, setActiveHover] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % 3;
        // Reset hover state when image changes
        setActiveHover(null);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle pillar hover to change image
  const handlePillarHover = (index) => {
    setCurrentImageIndex(index);
    setActiveHover(null);
  };

  const images = [
    "/assets/images/story/s6.jpg",
    "/assets/images/story/s5.jpg",
    "/assets/images/story/s7.jpeg",
  ];

  const pillars = [
    {
      id: 0,
      title: "Study",
      description:
        "Understanding yourself through quiet observation and the natural wisdom of the forest.",
    },
    {
      id: 1,
      title: "Investigate",
      description:
        "Exploring moments, patterns, and experiences with curiosity to see life more clearly.",
    },
    {
      id: 2,
      title: "Practice",
      description:
        "Applying awareness in daily actions, turning simple moments into mindful living.",
    },
  ];

  return (
    <div className="signature__outer" ref={sectionRef}>
      <div className="container">
        {/* Header Section */}
        <div className="header-section">
          <span className="h6 subtitle__icon__three mx-auto">Story</span>
          <h2 className="section__title" style={{ marginBottom: "70px" }}>
            {" "}
            The Story
          </h2>
        </div>

        {/* Story Content */}
        <div
          className={`story-content ${isVisible ? "animate-in delay-2" : ""}`}
        >
          <p className="story-text1">
            <span
              style={{
                fontStyle: "italic",
                fontFamily: "BrittanySignature",
                fontSize: 19,
              }}
            >
              {" "}
              Rain Drops
            </span>{" "}
            was born from a simple but powerful idea:{" "}
            <strong>
              when nature and the human mind meet, clarity happens.
            </strong>
          </p>

          <p className="story-text">
            Business icon{" "}
            <a href="https://diangomes.com/">
              <strong style={{ color: "#AB8A62" }}>Dian Gomes</strong>
            </a>{" "}
            first created this sanctuary beside the Sinharaja Rainforest,
            designing spaces that breathe with the trees, mist, and quiet rhythm
            of the forest. When{" "}
            <a href="https://www.linkedin.com/in/gaminihewawasam">
              <strong style={{ color: "#AB8A62" }}>Dr. GB Hewawasam</strong>
            </a>{" "}
            experienced the property, he saw a deeper purpose: Rain Drops could
            become a living classroom for the mind. Today, Dian guides us as
            Founding Advisor while Dr. GB Hewawasam leads the resort with three
            practical pillars inspired by the Original Buddha's teaching
            (presented without religious form):
          </p>
          <p className="story-text"></p>
        </div>

        {/* Three Pillars Section - Slideshow with Interactive Overlay */}
        <div
          className={`pillars-hero ${isVisible ? "animate-in delay-3" : ""}`}
        >
          <div className="hero-image-container">
            {/* Slideshow Images */}
            <div className="slideshow-wrapper">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Pillar ${index + 1}`}
                  className={`hero-image ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                />
              ))}
            </div>

            {/* Interactive Overlay with Pillars */}
            <div className="pillars-overlay">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.id}
                  className={`pillar-overlay-item ${
                    currentImageIndex !== index ? "disabled" : ""
                  }`}
                  onMouseEnter={() => {
                    handlePillarHover(index);
                    setActiveHover(pillar.id);
                  }}
                  onMouseLeave={() => setActiveHover(null)}
                >
                  <div
                    className={`pillar-content ${
                      activeHover === pillar.id ? "show-description" : ""
                    }`}
                    onClick={() =>
                      setActiveHover(
                        activeHover === pillar.id ? null : pillar.id
                      )
                    }
                  >
                    <h3
                      className="pillar-overlay-title"
                      style={{ fontWeight: "600" }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className="pillar-overlay-description"
                      style={{ fontWeight: "600" }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div
          className={`bottom-content ${isVisible ? "animate-in delay-6" : ""}`}
        >
          <h2 className="story-text-des"   style={{ fontSize: "18px" }}>Study, Investigate, practice</h2>
          <p className="story-text-des">
            These principles shape everything we do, from mindful architecture
            to the way we help guests understand themselves through nature. Rain
            Drops is not just a place to stay. It is a place to slow down,
            learn, and transform. Come experience the rainforest in quiet
            luxury. Discover a new skill, new insight, or new clarity that
            travels home with you. Because at Rain Drops, we believe:
          </p>

          <p className="story-text2">
            <strong>"Nature is not outside of you — it is within you."</strong>
          </p>
        </div>
      </div>

      <style jsx>{`
        .signature__outer {
          padding: 6rem 0 120px;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Header Section */
        .header-section {
          text-align: center;
          margin-bottom: 1rem;
          transform: translateY(-20px);
        }

        .header-section.animate-in {
          animation: fadeInDown 0.8s ease forwards;
        }

        .section_title::before,
        .section_title::after {
          content: "⟡";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          color: #c9a961;
          font-size: 1.5rem;
        }
        .section_title1 {
          // font-size: 40px;
          margin-bottom: -1rem;
        }

        .section_title::before {
          left: 0;
        }

        .section_title::after {
          right: 0;
        }

        .subtitle {
          text-align: center;
          font-size: 16px;
          color: #666;
          margin-bottom: 5rem;
          opacity: 0;
          transform: translateY(-20px);
        }

        .subtitle.animate-in {
          animation: fadeInDown 0.8s ease forwards 0.2s;
        }

        /* Story Content */
        .story-content {
          max-width: 1200px;
          margin: 0 auto 5rem;
          opacity: 0;
          transform: translateY(20px);
        }

        .story-content.animate-in {
          animation: fadeInUp 0.8s ease forwards 0.4s;
        }
        .story-text1 {
          text-align: center;
          margin-top: -50px;
          font-size: 16px;
        }
        .story-text2 {
          text-align: center;
        }
        .story-text {
          font-size: 16px;
          color: #444;
          text-align: left;
          margin-bottom: 2rem;
        }

        .story-text-des {
          font-size: 16px;
          margin-top: -30px;
          color: #444;
          text-align: left;
          margin-bottom: 2rem;
        }

        .story-text.highlight {
          font-size: 1.3rem;
          color: #333;
          font-weight: 400;
        }

        .story-text strong {
          color: #000;
          font-weight: 600;
        }

        /* Pillars Hero Section */
        .pillars-hero {
          margin: 5rem 0;
          opacity: 0;
          transform: translateY(30px);
        }

        .pillars-hero.animate-in {
          animation: fadeInUp 0.8s ease forwards 0.6s;
        }

        .hero-image-container {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          border-radius: 4px;
          overflow: hidden;
        }

        /* Slideshow */
        .slideshow-wrapper {
          position: relative;
          width: 100%;
          min-height: 600px;
        }

        .hero-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          min-height: 600px;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .hero-image.active {
          opacity: 1;
        }

        /* Interactive Overlay */
        .pillars-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          padding: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.6) 0%,
            transparent 100%
          );
          z-index: 5;
        }

        .pillar-overlay-item {
          flex: 1;
          color: white;
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: flex-end;
          min-height: 120px;
        }

        .pillar-overlay-item.disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .pillar-overlay-item.disabled:hover .pillar-content {
          transform: translateY(0);
        }

        .pillar-overlay-item.disabled .pillar-content {
          cursor: default;
        }

        .pillar-overlay-item:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: 40px;
          width: 40px;
          height: 100px;
          background-image: url("/assets/images/story/png.png");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }

        .pillar-content {
          width: 100%;
          padding: 2rem;
          transition: transform 0.4s ease;
          transform: translateY(0);
          cursor: pointer;
        }

        .pillar-content.show-description {
          transform: translateY(-30px);
        }

        .pillar-overlay-item.disabled .pillar-content {
          cursor: default;
        }

        .pillar-overlay-title {
          font-size: 1.5rem;
          font-weight: 300;
          color: white;
          font-family: var(--jost);
          margin: 0 0 1rem 0;
          letter-spacing: 2px;
          text-transform: capitalize;
          transition: all 0.3s ease;
        }

        .pillar-overlay-description {
          font-size: 1rem;
          margin: 0;
          line-height: 1.6;
          font-weight: 300;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.4s ease;
          text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.9);
        }

        .pillar-content.show-description .pillar-overlay-description {
          max-height: 150px;
          opacity: 1;
        }

        /* Bottom Content */
        .bottom-content {
          max-width: 1200px;
          margin: 4rem auto 0;
          opacity: 0;
          transform: translateY(20px);
        }

        .bottom-content.animate-in {
          animation: fadeInUp 0.8s ease forwards 1.2s;
        }

        /* Animations */
        @keyframes fadeInDown {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .section_title {
            padding: 0 3rem;
            font-size: 2.2rem;
          }

          .pillar-overlay-title {
            font-size: 2rem;
          }

          .pillar-content {
            padding: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .signature__outer {
            padding: 4rem 0;
          }

          .container {
            padding: 0 1.5rem;
          }

          .section_title {
            font-size: 1.8rem;
            letter-spacing: 2px;
            padding: 0 2.5rem;
          }

          .section_title::before,
          .section_title::after {
            font-size: 1.2rem;
          }

          .slideshow-wrapper,
          .hero-image {
            min-height: 500px;
          }

          .pillars-overlay {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }

          .pillar-overlay-item {
            min-height: 100px;
          }

          .pillar-overlay-item:not(:last-child)::after {
            display: none;
          }

          .pillar-overlay-title {
            font-size: 1.8rem;
          }

          .pillar-content {
            padding: 1.5rem;
          }

          .story-text {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .signature__outer {
            padding: 6rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .section_title {
            font-size: 1.4rem;
            letter-spacing: 1px;
            padding: 0 2rem;
          }

          .section_title::before,
          .section_title::after {
            font-size: 1rem;
          }

          .subtitle {
            font-size: 1rem;
            margin-bottom: 5rem;
          }

          .slideshow-wrapper,
          .hero-image {
            min-height: 400px;
          }

          .pillar-overlay-item {
            min-height: 80px;
          }

          .pillar-overlay-title {
            font-size: 1.5rem;
          }

          .pillar-overlay-description {
            font-size: 0.9rem;
          }

          .pillar-content {
            padding: 1rem;
          }

          .pillar-content.show-description {
            transform: translateY(-20px);
          }

          .story-text {
            font-size: 0.95rem;
            text-align: center;
            justify-content: center;
          }
            .story-text-des{
             font-size: 0.95rem;
             text-align: center;
             justify-content: center;
            }
        }
      `}</style>
    </div>
  );
}
