"use client";
import React, { useState } from "react";
import Image from "next/image";

function PropertyAtAGlance() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    {
      src: "/assets/images/travelpartners/slider1.jpg",
      alt: "Rainforest villa exterior view",
    },
    {
      src: "/assets/images/travelpartners/slider2.jpg",
      alt: "Meditation deck with forest views",
    },
    {
      src: "/assets/images/travelpartners/slider3.jpg",
      alt: "Luxury bedroom with nature views",
    },
    {
      src: "/assets/images/travelpartners/slider4.jpg",
      alt: "Natural stream through property",
    },
    {
      src: "/assets/images/travelpartners/slider5.jpg",
      alt: "Natural stream through property",
    },
    {
      src: "/assets/images/travelpartners/slider6.jpg",
      alt: "Natural stream through property",
    },
  ];

  const features = [
    "6 private, luxury villas",
    "Designed for couples and solo travelers",
    " Rainforest & tea-estate views",
    "Private balconies / verandas",
    "Quiet-use infinity-edge nature pool",
    "Private natural creek sanctuary",
    "Walking meditation path (Sakman Bhavana)",
    "Resident naturalist",
    "Personalized hosting with attention to detail",
  ];

  const handlePrevious = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      <div className="property-glance-section">
        <div className="property-overlay"></div>

        <div className="container">
          <h2 className="main-title wow fadeInUp">
            THE PROPERTY AT A GLANCE (WHAT TO SELL)
          </h2>

          <div className="content-wrapper">
            {/* Left side - Features list */}
            <div
              className="features-section wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <h3 className="features-title">
                What makes RainDrops different:
              </h3>
              <ul className="features-list">
                {features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side - Main image */}
            <div
              className="main-image-section wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="main-image-container">
                <Image
                  src={images[selectedImageIndex].src}
                  alt={images[selectedImageIndex].alt}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={false}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Image slider/carousel */}
          <div className="slider-section wow fadeInUp" data-wow-delay="0.4s">
            <button
              className="slider-btn prev-btn"
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              <span>‹</span>
            </button>

            <div className="thumbnails-container">
              <div className="thumbnails-wrapper">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`thumbnail-item ${
                      index === selectedImageIndex ? "active" : ""
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="thumbnail-image"
                      loading="lazy"
                    />
                    {index === selectedImageIndex && (
                      <div className="active-overlay"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button
              className="slider-btn next-btn"
              onClick={handleNext}
              aria-label="Next image"
            >
              <span>›</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Base styles */
        .property-glance-section {
          position: relative;
          min-height: 100vh;
          background-image: url("/assets/images/travelpartners/backgroundimage.png");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding: 80px 0;
          overflow: hidden;
        }

        .property-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        /* Title */
        .main-title {
          font-size: 2rem;
          color: white;
          text-align: left;
          margin-bottom: 3rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 400;
        }

        /* Content wrapper */
        .content-wrapper {
          display: flex;
          gap: 60px;
          align-items: flex-start;
          margin-bottom: 3rem;
        }

        /* Features section */
        .features-section {
          flex: 1;
          min-width: 300px;
        }

        .features-title {
          color: white;
          font-size: var(--p);
          margin-bottom: 1.5rem;
          font-weight: bold;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          color: white;
          font-size: 1rem;
          margin-bottom: 0.3rem;
          padding-left: 25px;
          position: relative;
          font-weight: 300;
        }

        .feature-item:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #ffffffff;
          font-size: 1.5rem;
        }

        /* Main image section */
        .main-image-section {
          flex: 1;
          min-width: 300px;
        }

        .main-image-container {
          width: 100%;
          height: 400px;
          border-radius: 5px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .main-image-container:hover {
          transform: translateY(-5px);
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Slider section - Now uses relative positioning for absolute buttons */
        .slider-section {
          position: relative;
          margin-top: 2rem;
        }

        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          z-index: 10;
        }

        .prev-btn {
          left: -25px;
        }

        .next-btn {
          right: -25px;
        }

        .slider-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.6);
          transform: translateY(-50%) scale(1.1);
        }

        .slider-btn span {
          color: white;
          font-size: 2rem;
          line-height: 1;
          font-weight: 300;
        }

        /* Thumbnails */
        .thumbnails-container {
          width: 100%;
          overflow: hidden;
        }

        .thumbnails-wrapper {
          display: flex;
          gap: 15px;
          width: 100%;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 10px 0;
        }

        .thumbnails-wrapper::-webkit-scrollbar {
          height: 6px;
        }

        .thumbnails-wrapper::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }

        .thumbnails-wrapper::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }

        .thumbnails-wrapper::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        .thumbnail-item {
          position: relative;
          width: 150px;
          height: 100px;
          flex-shrink: 0;
          border-radius: 5px;
          overflow: hidden;
          cursor: pointer;
          border: 3px solid transparent;
          transition: all 0.3s ease;
        }

        .thumbnail-item:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .thumbnail-item.active {
          box-shadow: 0 5px 20px rgba(144, 238, 144, 0.17);
        }

        .thumbnail-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .active-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(144, 238, 144, 0.2);
          pointer-events: none;
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
          .container {
            max-width: 1100px;
          }

          .main-title {
            font-size: 2.2rem;
          }

          .main-image-container {
            height: 400px;
          }

          .thumbnail-item {
            width: 180px;
            height: 130px;
          }

          .prev-btn {
            left: -55px;
          }

          .next-btn {
            right: -55px;
          }
        }

        /* Desktop - Tablet Landscape */
        @media (min-width: 1024px) and (max-width: 1199px) {
          .container {
            max-width: 960px;
          }

          .main-title {
            font-size: 1.9rem;
          }

          .content-wrapper {
            gap: 40px;
          }

          .main-image-container {
            height: 380px;
          }

          .thumbnail-item {
            width: 140px;
            height: 95px;
          }

          .prev-btn {
            left: -20px;
          }

          .next-btn {
            right: -20px;
          }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          .property-glance-section {
            padding: 60px 0;
            background-attachment: scroll;
          }

          .main-title {
            font-size: 1.6rem;
            letter-spacing: 1.5px;
            margin-bottom: 2rem;
          }

          .content-wrapper {
            gap: 30px;
          }

          .features-title {
            font-size: 1.1rem;
          }

          .feature-item {
            font-size: 0.95rem;
          }

          .main-image-container {
            height: 320px;
          }

          .slider-btn {
            width: 45px;
            height: 45px;
          }

          .prev-btn {
            left: -15px;
          }

          .next-btn {
            right: -15px;
          }

          .thumbnail-item {
            width: 130px;
            height: 90px;
          }
        }

        /* Mobile - Large */
        @media (max-width: 767px) {
          .property-glance-section {
            padding: 50px 0;
            background-attachment: scroll;
          }

          .main-title {
            font-size: 1.3rem;
            letter-spacing: 1px;
            margin-bottom: 1.5rem;
            line-height: 1.4;
          }

          .content-wrapper {
            flex-direction: column;
            gap: 25px;
          }

          .features-section,
          .main-image-section {
            width: 100%;
            min-width: unset;
          }

          .features-title {
            font-size: 1rem;
            margin-bottom: 1rem;
          }

          .feature-item {
            font-size: 0.9rem;
            line-height: 1.7;
            padding-left: 20px;
          }

          .feature-item:before {
            font-size: 1.3rem;
          }

          .main-image-container {
            height: 280px;
          }

          .slider-btn {
            width: 40px;
            height: 40px;
          }

          .prev-btn {
            left: -10px;
          }

          .next-btn {
            right: -10px;
          }

          .slider-btn span {
            font-size: 1.8rem;
          }

          .thumbnail-item {
            width: 110px;
            height: 75px;
          }
        }

        /* Mobile - Small */
        @media (max-width: 480px) {
          .property-glance-section {
            padding: 40px 0;
          }

          .container {
            padding: 0 15px;
          }

          .main-title {
            font-size: 1.1rem;
            letter-spacing: 0.5px;
          }

          .features-title {
            font-size: 0.95rem;
          }

          .feature-item {
            font-size: 0.85rem;
            line-height: 1.6;
            padding-left: 18px;
          }

          .main-image-container {
            height: 240px;
            border-radius: 6px;
          }

          .slider-btn {
            width: 36px;
            height: 36px;
          }

          .prev-btn {
            left: -5px;
          }

          .next-btn {
            right: -5px;
          }

          .slider-btn span {
            font-size: 1.6rem;
          }

          .thumbnails-wrapper {
            gap: 10px;
          }

          .thumbnail-item {
            width: 90px;
            height: 65px;
            border-radius: 4px;
          }
        }

        /* Mobile - Extra Small */
        @media (max-width: 360px) {
          .main-title {
            font-size: 1rem;
          }

          .feature-item {
            font-size: 0.8rem;
          }

          .main-image-container {
            height: 220px;
          }

          .slider-btn {
            width: 32px;
            height: 32px;
          }

          .prev-btn {
            left: 0;
          }

          .next-btn {
            right: 0;
          }

          .thumbnail-item {
            width: 80px;
            height: 60px;
          }
        }
      `}</style>
    </>
  );
}

export default PropertyAtAGlance;