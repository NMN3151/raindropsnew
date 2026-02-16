"use client";
import React, { useState } from "react";
import Modal from "../home-1/Modal";

const IMAGES_PER_ROW = 3;
const INITIAL_ROWS = 2;
const LOAD_MORE_COUNT = 10;
const INITIAL_VISIBLE = IMAGES_PER_ROW * INITIAL_ROWS; // 6

const galleryImages = [
  { src: "assets/images/insta/G.jpg",   alt: "Luxury Villa Interior" },
  { src: "assets/images/insta/G1.jpg",  alt: "Modern Bedroom" },
  { src: "assets/images/insta/G8.jpg",  alt: "Elegant Bathroom" },
  { src: "assets/images/insta/G36.jpg",  alt: "Spacious Living Area" },
  { src: "assets/images/insta/G37.jpg",  alt: "Outdoor Patio" },
  { src: "assets/images/insta/G5.jpg",  alt: "Dining Area" },
  { src: "assets/images/insta/G6.jpg",  alt: "Modern Kitchen" },
  { src: "assets/images/insta/G16.jpg", alt: "Swimming Pool" },
  { src: "assets/images/insta/G2.jpg",  alt: "Garden View" },
  { src: "assets/images/insta/G9.jpg",  alt: "Luxury Suite" },
  { src: "assets/images/insta/G10.jpg", alt: "Forest Retreat" },
  { src: "assets/images/insta/G11.jpg", alt: "Nature Walk" },
  { src: "assets/images/insta/G12.jpg", alt: "Villa Exterior" },
  { src: "assets/images/insta/G19.jpg", alt: "Sunset View" },
  { src: "assets/images/insta/G14.jpg", alt: "Morning Mist" },
  { src: "assets/images/insta/G15.jpg", alt: "Poolside Deck" },
  { src: "assets/images/insta/G7.jpg",  alt: "Rain Forest" },
  { src: "assets/images/insta/G17.jpg", alt: "Garden Path" },
  { src: "assets/images/insta/G18.jpg", alt: "Villa Lounge" },
  { src: "assets/images/insta/G13.jpg", alt: "Stone Bathroom" },
  { src: "assets/images/insta/G20.png", alt: "Misty Morning" },
  { src: "assets/images/insta/G21.png", alt: "Forest Canopy" },
  { src: "assets/images/insta/N1.jpg",  alt: "Night View" },
  { src: "assets/images/insta/G22.png", alt: "Jungle Path" },
  { src: "assets/images/insta/G23.JPG", alt: "Villa Detail" },
  { src: "assets/images/insta/G24.JPG", alt: "Room Amenities" },
  { src: "assets/images/insta/G25.JPG", alt: "Balcony View" },
  { src: "assets/images/insta/G26.JPG", alt: "Tropical Garden" },
  { src: "assets/images/insta/G27.JPG", alt: "Waterfall Nearby" },
  { src: "assets/images/insta/G28.JPG", alt: "Forest Trail" },
  { src: "assets/images/insta/G29.JPG", alt: "Bird Watching" },
  { src: "assets/images/insta/G30.JPG", alt: "Sunrise Deck" },
  { src: "assets/images/insta/G31.JPG", alt: "Outdoor Dining" },
  { src: "assets/images/insta/G32.JPG", alt: "Hammock Rest" },
  { src: "assets/images/insta/G33.JPG", alt: "Pool at Dusk" },
  { src: "assets/images/insta/G34.JPG", alt: "Spa Corner" },
  { src: "assets/images/insta/G35.JPG", alt: "Lush Greenery" },
  { src: "assets/images/insta/G3.JPG", alt: "Evening Lights" },
  { src: "assets/images/insta/G4.JPG", alt: "Morning Dew" },
];

function GalleryFive() {
  const [isModalOpen, setIsModalOpen]   = useState(false);
  const [modalImage, setModalImage]     = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [loading, setLoading]           = useState(false);

  const openModal  = (src) => { setModalImage(src); setIsModalOpen(true); };
  const closeModal = () => setIsModalOpen(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, galleryImages.length));
      setLoading(false);
    }, 400);
  };

  const visibleImages  = galleryImages.slice(0, visibleCount);
  const hasMore        = visibleCount < galleryImages.length;
  const remaining      = galleryImages.length - visibleCount;

  return (
    <>
      <style jsx>{`

        /* ── Section ── */
        .gallery-section {
          padding: 100px 0 80px;
          background: #faf9f7;
          position: relative;
          overflow: hidden;
        }

        .gallery-section::before {
          content: "";
          position: absolute;
          top: -120px;
          right: -120px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139,115,85,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Header ── */
        .gallery-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .gallery-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #8b7355;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .gallery-eyebrow::before,
        .gallery-eyebrow::after {
          content: "";
          display: block;
          width: 32px;
          height: 1px;
          background: #8b7355;
          opacity: 0.6;
        }

        .gallery-title {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 300;
          color: #1a1a1a;
          letter-spacing: -0.5px;
          margin-bottom: 18px;
          line-height: 1.15;
        }

        .gallery-title strong {
          font-weight: 700;
        }

        .gallery-description {
          font-size: 16px;
          line-height: 1.75;
          color: #666;
          max-width: 560px;
          margin: 0 auto;
        }

        .gallery-count {
          display: inline-block;
          margin-top: 14px;
          font-size: 12px;
          color: #aaa;
          letter-spacing: 1px;
        }

        /* ── Grid ── */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        /* ── Item ── */
        .gallery-item {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          background: #e8e4df;
          aspect-ratio: 4 / 3;
        }

        .gallery-item::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            transparent 50%,
            rgba(20, 15, 10, 0.55) 100%
          );
          opacity: 0;
          transition: opacity 0.35s ease;
          z-index: 1;
        }

        .gallery-item:hover::after {
          opacity: 1;
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.08);
        }

        /* ── Zoom Icon ── */
        .gallery-zoom {
          position: absolute;
          bottom: 14px;
          right: 14px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(6px) scale(0.85);
          transition: all 0.3s ease;
          z-index: 2;
        }

        .gallery-item:hover .gallery-zoom {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .gallery-zoom svg {
          width: 16px;
          height: 16px;
          color: #3a2e1e;
        }

        /* ── New-item fade-in animation ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .gallery-item.animate-in {
          animation: fadeUp 0.45s ease forwards;
        }

        /* ── Load More Area ── */
        .load-more-area {
          text-align: center;
          margin-top: 56px;
        }

        .load-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 42px;
          background: transparent;
          border: 1.5px solid #3a2e1e;
          color: #3a2e1e;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .load-more-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: #3a2e1e;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          z-index: 0;
        }

        .load-more-btn:hover::before {
          transform: translateX(0);
        }

        .load-more-btn span,
        .load-more-btn svg {
          position: relative;
          z-index: 1;
          transition: color 0.3s ease;
        }

        .load-more-btn:hover span,
        .load-more-btn:hover svg {
          color: #fff;
        }

        .load-more-btn:disabled {
          opacity: 0.5;
          cursor: default;
        }

        .load-more-btn svg {
          width: 16px;
          height: 16px;
          color: inherit;
        }

        /* spinning loader inside button */
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .btn-spinner {
          width: 14px;
          height: 14px;
          border: 2px solid currentColor;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          position: relative;
          z-index: 1;
        }

        .load-more-meta {
          display: block;
          margin-top: 16px;
          font-size: 12px;
          color: #aaa;
          letter-spacing: 0.5px;
        }

        .all-loaded {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #aaa;
          letter-spacing: 1px;
        }

        .all-loaded::before,
        .all-loaded::after {
          content: "";
          display: block;
          width: 24px;
          height: 1px;
          background: #ddd;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
        }

        @media (max-width: 560px) {
          .gallery-section {
            padding: 70px 0 60px;
          }

          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }

          .gallery-header {
            margin-bottom: 40px;
          }

          .load-more-btn {
            padding: 13px 30px;
            font-size: 11px;
          }
        }
      `}</style>

      <div className="gallery-section">
        <div className="container">

          {/* Header */}
          <div className="gallery-header">
            <div className="gallery-eyebrow">Gallery</div>
            <h2 className="gallery-title">
              A Place Where <strong>Nature Breathes</strong>
            </h2>
            <p className="gallery-description">
              Nestled in the heart of Sinharaja Forest, our villa offers a serene
              escape in a cool climate. Experience the perfect blend of nature and
              luxury for an unforgettable stay.
            </p>
            <span className="gallery-count">
              Showing {visibleCount} of {galleryImages.length} photos
            </span>
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {visibleImages.map((img, index) => (
              <div
                key={img.src}
                className={`gallery-item${index >= visibleCount - LOAD_MORE_COUNT && index >= INITIAL_VISIBLE ? " animate-in" : ""}`}
                style={
                  index >= visibleCount - LOAD_MORE_COUNT && index >= INITIAL_VISIBLE
                    ? { animationDelay: `${(index % LOAD_MORE_COUNT) * 60}ms` }
                    : {}
                }
                onClick={() => openModal(img.src)}
              >
                <img
                  src={`/${img.src}`}
                  alt={img.alt}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-zoom">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7" />
                    <line x1="16.5" y1="16.5" x2="22" y2="22" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Load More / All Loaded */}
          <div className="load-more-area">
            {hasMore ? (
              <>
                <button
                  className="load-more-btn"
                  onClick={handleLoadMore}
                  disabled={loading}
                >
                  {loading ? (
                    <div className="btn-spinner" />
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                  <span>{loading ? "Loading..." : "Load More Photos"}</span>
                </button>
                <span className="load-more-meta">
                  {remaining} more photo{remaining !== 1 ? "s" : ""} to explore
                </span>
              </>
            ) : (
              <span className="all-loaded">You've seen them all</span>
            )}
          </div>

        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        imageSrc={modalImage}
      />
    </>
  );
}

export default GalleryFive;