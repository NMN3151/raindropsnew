"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";
import Modal from "./Modal";

function GalleryOne() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [currentSet, setCurrentSet] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const gallerySets = [
    [
      "/assets/images/insta/G.jpg",
      "/assets/images/insta/G1.jpg",
      "/assets/images/insta/G2.jpg",
      "/assets/images/insta/G3.jpg",
      "/assets/images/insta/G4.jpg",
    ],
    [
      "/assets/images/insta/G5.jpg",
      "/assets/images/insta/G6.jpg",
      "/assets/images/insta/G7.jpg",
      "/assets/images/insta/G8.jpg",
      "/assets/images/insta/G9.jpg",
    ],
    [
      "/assets/images/insta/G10.jpg",
      "/assets/images/insta/G11.jpg",
      "/assets/images/insta/G12.jpg",
      "/assets/images/insta/G13.jpg",
      "/assets/images/insta/G14.jpg",
    ],
    [
      "/assets/images/insta/G15.jpg",
      "/assets/images/insta/G16.jpg",
      "/assets/images/insta/G17.jpg",
      "/assets/images/insta/G18.jpg",
      "/assets/images/insta/G19.jpg",
    ],
  ];

  // Flatten gallery sets for mobile swiper
  const allGalleryImages = gallerySets.flat();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible && !isMobile) {
      const interval = setInterval(() => {
        setCurrentSet((prev) => (prev + 1) % gallerySets.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isMobile, gallerySets.length]);

  const openModal = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const styles = `
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeInDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes scaleIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
    @keyframes slideOut { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(-100%); } }
    @keyframes slideIn { from { opacity: 0; transform: translateX(100%); } to { opacity: 1; transform: translateX(0); } }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
    @keyframes floatReverse { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(15px); } }

    .animate-fade-in-up { animation: fadeInUp 1.2s ease-out forwards; }
    .animate-fade-in-down { animation: fadeInDown 1.2s ease-out forwards; }
    .animate-scale-in { animation: scaleIn 1s ease-out forwards; }
    .animate-slide-out { animation: slideOut 1.2s ease-in-out forwards; }
    .animate-slide-in { animation: slideIn 1.2s ease-in-out forwards; }
    .animate-float { animation: float 8s ease-in-out infinite; }
    .animate-float-reverse { animation: floatReverse 10s ease-in-out infinite; }

    .gallery-item { transition: all 0.5s ease; }
    .gallery-item:hover { transform: scale(1.05) rotateY(5deg); }
    .gallery-overlay { opacity: 0; transition: opacity 0.5s ease; }
    .gallery-item:hover .gallery-overlay { opacity: 1; }
    .instagram-icon { transition: all 0.5s ease; }
    .gallery-item:hover .instagram-icon { transform: scale(1.1) rotate(15deg); }

    .stagger-animation:nth-child(1) { animation-delay: 0.2s; }
    .stagger-animation:nth-child(2) { animation-delay: 0.4s; }
    .stagger-animation:nth-child(3) { animation-delay: 0.6s; }
    .stagger-animation:nth-child(4) { animation-delay: 0.8s; }
    .stagger-animation:nth-child(5) { animation-delay: 1s; }

    .title-underline { width: 0; animation: growWidth 1.5s ease-out 1.2s forwards; }
    @keyframes growWidth { to { width: 80px; } }

    .gallery-set {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 20px;
      position: relative;
    }

    .set-transition { transition: all 1.2s ease-in-out; }

    /* Mobile Responsive Styles */
    @media (max-width: 768px) {
      .gallery-set {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 12px !important;
        padding: 0 12px !important;
      }

      .mobile-gallery-swiper {
        padding: 0 10px 40px !important;
      }

      .mobile-gallery-swiper .swiper-slide {
        display: flex;
        gap: 12px;
        height: 220px;
      }

      .mobile-gallery-swiper .gallery-item {
        flex: 1;
        height: 220px;
        margin: 0 !important;
        animation: none !important;
      }

      .mobile-gallery-swiper .gallery-item img {
        height: 220px !important;
        width: 100% !important;
      }

      .mobile-gallery-swiper .gallery__popup {
        padding: 10px !important;
      }

      .mobile-gallery-swiper .instagram-icon {
        width: 20px !important;
        height: 20px !important;
      }

      .gallery-set-container {
        height: auto !important;
        min-height: 240px !important;
      }

      .section__title {
        font-size: 32px !important;
        text-align: center !important;
      }

      .subtitle__icon__three {
        font-size: 16px !important;
      }

      .gallery-item {
        box-shadow: 0 6px 20px rgba(0,0,0,0.1);
      }

      /* Mobile swiper pagination */
      .mobile-gallery-swiper .swiper-pagination {
        bottom: 0 !important;
      }

      .mobile-gallery-swiper .swiper-pagination-bullet {
        width: 10px !important;
        height: 10px !important;
        background: #ddd !important;
        opacity: 1 !important;
        margin: 0 5px !important;
      }

      .mobile-gallery-swiper .swiper-pagination-bullet-active {
        background: #bda671 !important;
      }
    }

    @media (max-width: 575.98px) {
      .mobile-gallery-swiper .swiper-slide {
        height: 200px;
      }

      .mobile-gallery-swiper .gallery-item {
        height: 200px;
      }

      .mobile-gallery-swiper .gallery-item img {
        height: 200px !important;
      }

      .section__title {
        font-size: 28px !important;
      }

      .gallery-set {
        gap: 10px !important;
        padding: 0 8px !important;
      }
    }

    /* Desktop Styles */
    @media (min-width: 769px) {
      .gallery-set {
        grid-template-columns: repeat(5, 1fr) !important;
        gap: 20px !important;
      }

      .gallery-item img {
        height: 300px !important;
      }

      .gallery-set-container {
        height: 320px !important;
      }
    }
  `;

  return (
    <>
      <style jsx>{styles}</style>

      <div
        ref={sectionRef}
        className="rts__section is__home__main"
        style={{
          background: "linear-gradient(135deg, #f8f5f0 0%, #f0ebe3 100%)",
          padding: isMobile ? "60px 0" : "100px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container-fluid">
          {/* Header */}
          <div className="row position-relative justify-content-center text-center mb-30">
            <div className="col-lg-6">
              <div className="row justify-content-center text-center mb-40">
                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="section__topbar">
                    <span className="h6 subtitle__icon__three mx-auto">
                      Gallery
                    </span>
                    <h2 className="section__title">Explore our villa</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Sets - Different layout for mobile vs desktop */}
          {isMobile ? (
            // Mobile Swiper (2 images per slide)
            <div className="row">
              <div className="col-12">
                <Swiper
                  className="mobile-gallery-swiper"
                  modules={[Autoplay]}
                  slidesPerView={1}
                  spaceBetween={20}
                  loop={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  speed={800}
                >
                  {/* Group images in pairs for mobile swiper */}
                  {(() => {
                    const slides = [];
                    for (let i = 0; i < allGalleryImages.length; i += 2) {
                      const imagePair = allGalleryImages.slice(i, i + 2);
                      slides.push(
                        <SwiperSlide key={i}>
                          <div
                            style={{
                              display: "flex",
                              gap: "12px",
                              height: "220px",
                            }}
                          >
                            {imagePair.map((image, index) => (
                              <div
                                key={`mobile-${i}-${index}`}
                                className="gallery-item"
                                style={{
                                  position: "relative",
                                  overflow: "hidden",
                                  borderRadius: "12px",
                                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                                  flex: 1,
                                }}
                                onClick={() => openModal(image)}
                              >
                                <img
                                  src={image}
                                  alt={`Gallery image ${i + index + 1}`}
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "12px",
                                    transition: "all 0.5s ease",
                                  }}
                                />
                                <a
                                  href="#0"
                                  className="gallery__popup"
                                  style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    background: "rgba(189, 166, 113, 0.9)",
                                    borderRadius: "50%",
                                    padding: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textDecoration: "none",
                                  }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    openModal(image);
                                  }}
                                >
                                  <img
                                    src="/assets/images/icon/instagram.svg"
                                    height={20}
                                    width={20}
                                    alt="Instagram icon"
                                    className="instagram-icon"
                                  />
                                </a>
                                <div
                                  className="gallery-overlay"
                                  style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background:
                                      "linear-gradient(45deg, rgba(189, 166, 113, 0.2), rgba(0,0,0,0.1))",
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                        </SwiperSlide>
                      );
                    }
                    return slides;
                  })()}
                </Swiper>
              </div>
            </div>
          ) : (
            // Desktop Gallery Sets (5 images in grid with auto-rotate)
            <>
              <div className="row">
                <div
                  className="gallery-set-container"
                  style={{ position: "relative", height: "320px" }}
                >
                  {gallerySets.map((set, setIndex) => (
                    <div
                      key={setIndex}
                      className={`gallery-set set-transition ${
                        setIndex === currentSet ? "active" : "hidden"
                      }`}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        opacity: setIndex === currentSet ? 1 : 0,
                        transform:
                          setIndex === currentSet
                            ? "translateX(0)"
                            : "translateX(100%)",
                        transition: "all 1.2s ease-in-out",
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 1fr)",
                        gap: "20px",
                        padding: "0 20px",
                      }}
                    >
                      {set.map((image, imageIndex) => (
                        <div
                          key={`${setIndex}-${imageIndex}`}
                          className={`gallery-item stagger-animation ${
                            isVisible ? "animate-scale-in" : ""
                          }`}
                          style={{
                            position: "relative",
                            overflow: "hidden",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                            opacity:
                              isVisible && setIndex === currentSet ? 1 : 0,
                            animationDelay: `${imageIndex * 0.2}s`,
                          }}
                        >
                          <img
                            src={image}
                            height={300}
                            width={300}
                            alt={`Gallery image ${
                              setIndex * 5 + imageIndex + 1
                            }`}
                            style={{
                              width: "100%",
                              height: "300px",
                              objectFit: "cover",
                              transition: "all 0.5s ease",
                            }}
                            onClick={() => openModal(image)}
                          />
                          <a
                            href="#0"
                            className="gallery__popup"
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              background: "rgba(189, 166, 113, 0.9)",
                              borderRadius: "50%",
                              padding: "15px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              textDecoration: "none",
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              openModal(image);
                            }}
                          >
                            <img
                              src="/assets/images/icon/instagram.svg"
                              height={24}
                              width={24}
                              alt="Instagram icon"
                              className="instagram-icon"
                            />
                          </a>
                          <div
                            className="gallery-overlay"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background:
                                "linear-gradient(45deg, rgba(189, 166, 113, 0.2), rgba(0,0,0,0.1))",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots - Desktop only */}
              <div style={{ textAlign: "center", marginTop: "40px" }}>
                {gallerySets.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSet(index)}
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      border: "none",
                      margin: "0 5px",
                      backgroundColor:
                        currentSet === index ? "#bda671" : "#ddd",
                      transition: "background-color 0.5s ease",
                    }}
                  />
                ))}
              </div>
            </>
          )}

          {/* Floating Decor */}
          <div
            style={{
              position: "absolute",
              top: isMobile ? "10%" : "20%",
              left: isMobile ? "2%" : "5%",
              width: isMobile ? "30px" : "40px",
              height: isMobile ? "30px" : "40px",
              background: "rgba(189, 166, 113, 0.1)",
              borderRadius: "50%",
              animation: "float 8s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: isMobile ? "10%" : "20%",
              right: isMobile ? "2%" : "5%",
              width: isMobile ? "40px" : "60px",
              height: isMobile ? "40px" : "60px",
              background: "rgba(189, 166, 113, 0.05)",
              borderRadius: "50%",
              animation: "floatReverse 10s ease-in-out infinite 1s",
            }}
          />
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

export default GalleryOne;
