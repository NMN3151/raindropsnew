"use client";
import React, { useState } from "react";
import Modal from "../home-1/Modal";

function GalleryFive() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <style jsx>{`
        .gallery-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .gallery-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .gallery-subtitle {
          color: #8b5a2b;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 15px;
          display: block;
        }

        // .gallery-title {
        // font-size: 42px;
        // font-weight: 700;
        // color: #2c3e50;
        // margin-bottom: 20px;
        // }

        .gallery-description {
          font-size: 18px;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          padding: 20px 0;
        }

        .gallery-item {
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background: white;
          cursor: pointer;
        }

        .gallery-item:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }

        .gallery-item::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            rgba(139, 90, 43, 0.1),
            rgba(44, 62, 80, 0.1)
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
        }

        .gallery-item:hover::before {
          opacity: 1;
        }

        .gallery-image {
          width: 100%;
          height: 280px;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.1);
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          color: white;
          padding: 30px 20px 20px;
          transform: translateY(100%);
          transition: transform 0.3s ease;
          z-index: 3;
        }

        .gallery-item:hover .gallery-overlay {
          transform: translateY(0);
        }

        .gallery-icon {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.9);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.3s ease;
          z-index: 3;
        }

        .gallery-item:hover .gallery-icon {
          opacity: 1;
          transform: scale(1);
        }

        .gallery-icon svg {
          width: 20px;
          height: 20px;
          color: #8b5a2b;
        }

        @media (max-width: 768px) {
          .gallery-section {
            padding: 60px 0;
          }

          .gallery-title {
            font-size: 32px;
          }

          .gallery-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }

          .gallery-image {
            height: 220px;
          }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .gallery-title {
            font-size: 28px;
          }

          .gallery-description {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="gallery-section">
        <div className="container">
          <div className="gallery-header">
            <span className="gallery-subtitle">Gallery</span>
            <h2 className="gallery-title">Our Villa Gallery</h2>
            <p className="gallery-description">
              Nestled in the heart of Sinharaja Forest, our villa offers a
              serene escape in a cool climate. Experience ultimate comfort in
              our well-appointed rooms and charming cabanas, designed to provide
              a perfect blend of nature and luxury for an unforgettable stay.
            </p>
          </div>

          <div className="gallery-grid">
            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G.jpg")}
            >
              <img
                src="/assets/images/insta/G.jpg"
                alt="Luxury Villa Interior"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>

            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G1.jpg")}
            >
              <img
                src="/assets/images/insta/G1.jpg"
                alt="Modern Bedroom"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>

            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G2.jpg")}
            >
              <img
                src="/assets/images/insta/G2.jpg"
                alt="Elegant Bathroom"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>

            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G3.jpg")}
            >
              <img
                src="/assets/images/insta/G3.jpg"
                alt="Spacious Living Area"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>

            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G4.jpg")}
            >
              <img
                src="/assets/images/insta/G4.jpg"
                alt="Outdoor Patio"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>

            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G5.jpg")}
            >
              <img
                src="/assets/images/insta/G5.jpg"
                alt="Dining Area"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>

            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G6.jpg")}
            >
              <img
                src="/assets/images/insta/G6.jpg"
                alt="Modern Kitchen"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>

            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G16.jpg")}
            >
              <img
                src="/assets/images/insta/G16.jpg"
                alt="Swimming Pool"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>

            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G8.jpg")}
            >
              <img
                src="/assets/images/insta/G8.jpg"
                alt="Garden View"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>

            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G9.jpg")}
            >
              <img
                src="/assets/images/insta/G9.jpg"
                alt="Luxury Suite"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>
            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G10.jpg")}
            >
              <img
                src="/assets/images/insta/G10.jpg"
                alt="Luxury Suite"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>
            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G11.jpg")}
            >
              <img
                src="/assets/images/insta/G11.jpg"
                alt="Luxury Suite"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>
            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G12.jpg")}
            >
              <img
                src="/assets/images/insta/G12.jpg"
                alt="Luxury Suite"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>
            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G19.jpg")}
            >
              <img
                src="/assets/images/insta/G19.jpg"
                alt="Luxury Suite"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>
            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G14.jpg")}
            >
              <img
                src="/assets/images/insta/G14.jpg"
                alt="Luxury Suite"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>
            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G15.jpg")}
            >
              <img
                src="/assets/images/insta/G15.jpg"
                alt="Luxury Suite"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>
            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G7.jpg")}
            >
              <img
                src="/assets/images/insta/G7.jpg"
                alt="Luxury Suite"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>
            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G17.jpg")}
            >
              <img
                src="/assets/images/insta/G17.jpg"
                alt="Luxury Suite"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>
            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G18.jpg")}
            >
              <img
                src="/assets/images/insta/G18.jpg"
                alt="Luxury Suite"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>
            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G13.jpg")}
            >
              <img
                src="/assets/images/insta/G13.jpg"
                alt="Luxury Suite"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>
            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G20.png")}
            >
              <img
                src="/assets/images/insta/G20.png"
                alt="Luxury Suite"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>
            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G21.png")}
            >
              <img
                src="/assets/images/insta/G21.png"
                alt="Luxury Suite"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>
            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/N1.jpg")}
            >
              <img
                src="/assets/images/insta/N1.jpg"
                alt="Luxury Suite"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>
            <div
              className="gallery-item"
              onClick={() => openModal("assets/images/insta/G22.png")}
            >
              <img
                src="/assets/images/insta/G22.png"
                alt="Luxury Suite"
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 9v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3l1-2h6l1 2h3c1.1 0 2 .9 2 2z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>
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
