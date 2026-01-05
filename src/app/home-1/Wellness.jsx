"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";

// Flipbook URLs — Replace these with your actual Heyzine flipbook links
const FLIPBOOK_LINKS = [
  "https://heyzine.com/flip-book/ba6fbfb2b0.html", // Book 1: Mind Meets Nature Trail
  "https://heyzine.com/flip-book/9772cfaea3.html", // Book 2: Tea Wisdom & Mindfulness
  "https://heyzine.com/flip-book/7e20eb164f.html", // Book 3: Mindful Creek Walking
  "https://heyzine.com/flip-book/13f4971e5b.html", // Book 4: Nature Mindfulness Retreat
  "https://heyzine.com/flip-book/61737cbd91.html", // Book 5: Muse Neuro-Mindfulness
];

const programs = [
  {
    id: 1,
    title: "MIND MEETS NATURE TRAIL",
    image: "/assets/images/wellness/book 1.png",
  },
  {
    id: 2,
    title: "TEA WISDOM & MINDFULNESS JOURNEY",
    image: "/assets/images/wellness/book 2.png",
  },
  {
    id: 3,
    title: "MINDFUL CREEK WALKING",
    image: "/assets/images/wellness/book 3.png",
  },
  {
    id: 4,
    title: "NATURE MINDFULNESS RETREAT",
    image: "/assets/images/wellness/book 4.png",
  },
  {
    id: 5,
    title: "MUSE NEURO-MINDFULNESS EXPERIENCE",
    image: "/assets/images/wellness/book 5.png",
  },
];

// Reusable Flipbook Modal (same behavior as your Itineraries modal)
const FlipbookModal = ({ isOpen, onClose, iframeUrl }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            className="relative bg-white w-full max-w-6xl h-[90vh] mx-4 rounded-lg overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-6 z-50 text-5xl font-bold text-white bg-black/50 hover:bg-black/70 rounded-full w-14 h-14 flex items-center justify-center transition-all"
              aria-label="Close"
            >
              ×
            </button>

            {/* Flipbook Iframe */}
            <iframe
              src={iframeUrl}
              className="w-full h-full"
              allowFullScreen
              title="Program Preview"
              style={{ border: "none" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Main Component
function InnerDiscoverySection() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Modal state
  const [showFlipbook, setShowFlipbook] = useState(false);
  const [activeFlipbookUrl, setActiveFlipbookUrl] = useState("");

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "aa39bee9-9e73-4513-94ec-9e2f1ee08aa6");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  const prevSlide = () => swiperRef.current?.swiper.slidePrev();
  const nextSlide = () => swiperRef.current?.swiper.slideNext();
  const goToSlide = (i) => swiperRef.current?.swiper.slideToLoop(i);

  const openFlipbook = (index) => {
    setActiveFlipbookUrl(FLIPBOOK_LINKS[index]);
    setShowFlipbook(true);
  };

  return (
    <>
      <section className="inner-discovery-section">
        <div className="container">
          {/* MOBILE VERSION - Magazines first, then form */}
          <div className="mobile-layout">
            {/* Title for mobile */}
            <div className="mobile-title-section">
              <h2 className="main-title">
                THE{" "}
                <span
                  style={{
                    fontStyle: "italic",
                    fontFamily: "BrittanySignature",
                    fontSize: "1.5em",
                  }}
                >
                  Rain Drops
                </span>{" "}
                INNER
                <br />
                DISCOVERY SERIES
              </h2>
              <p className="subtitle">
                Tell Us What You Seek — We'll Shape the Journey.
              </p>
            </div>

            {/* Magazines Carousel (Top on Mobile) */}
            <div className="mobile-carousel-wrapper">
              <div className="swiper-container-custom">
                {isClient && (
                  <Swiper
                    ref={swiperRef}
                    modules={[Autoplay]}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                    speed={800}
                    centeredSlides={true}
                    onSlideChange={(s) => setActiveIndex(s.realIndex)}
                    slidesPerView={1.2}
                    spaceBetween={15}
                    className="mobile-cards-swiper"
                  >
                    {programs.map((p, idx) => (
                      <SwiperSlide key={p.id}>
                        <div
                          className="program-card cursor-pointer group"
                          onClick={() =>
                            window.open(
                              FLIPBOOK_LINKS[idx],
                              "_blank",
                              "fullscreen=yes"
                            )
                          }
                        >
                          <img
                            src={p.image}
                            alt={p.title}
                            className="program-img"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                            <span className="text-white font-medium text-sm bg-black/60 px-4 py-2 rounded-full">
                              Click to Preview
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}

                <div className="custom-bullets">
                  {programs.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToSlide(i)}
                      className={`custom-bullet ${
                        activeIndex === i ? "active" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Form (Below on Mobile) */}
            <div className="mobile-form-section">
              <form className="discovery-form" onSubmit={onSubmit}>
                <select
                  className="input-field"
                  style={{ color: "black" }}
                  name="program"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Programs
                  </option>
                  {programs.map((p) => (
                    <option key={p.id}>{p.title}</option>
                  ))}
                </select>

                <div className="grid-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input-field"
                    name="name"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="input-field"
                    name="email"
                    required
                  />
                </div>

                <div className="grid-3">
                  <input
                    type="date"
                    placeholder=""
                    className="input-field"
                    name="from"
                    required
                    value={fromDate}
                    max={toDate || ""}
                    onChange={(e) => {
                      setFromDate(e.target.value);
                      if (toDate && e.target.value > toDate) {
                        setToDate("");
                      }
                    }}
                  />
                  <input
                    type="date"
                    placeholder=""
                    className="input-field"
                    name="to"
                    required
                    value={toDate}
                    min={fromDate || ""}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </div>

                <input
                  type="text"
                  placeholder="Fitness Level"
                  className="input-field"
                  name="fitness"
                />
                <input
                  type="text"
                  placeholder="Food Preferences"
                  className="input-field"
                  name="food"
                />

                <textarea
                  placeholder="Any Health Notes"
                  className="input-field textarea"
                  rows="2"
                  name="health"
                ></textarea>
                <textarea
                  placeholder="Any Additional Requests"
                  className="input-field textarea"
                  rows="2"
                  name="requests"
                ></textarea>

                <div className="guidance-row">
                  <span>Do you want mindfulness guidance?</span>
                  <div className="radio-group">
                    <label>
                      <input type="radio" name="guide" value="Yes" /> Yes
                    </label>
                    <label>
                      <input type="radio" name="guide" value="No" /> No
                    </label>
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  Submit Now
                </button>
                <span className="result-message">{result}</span>
              </form>
            </div>
          </div>

          {/* DESKTOP VERSION - Original side-by-side layout (hidden on mobile) */}
          <div className="desktop-layout">
            <div className="content-grid">
              {/* LEFT — FORM */}
              <div className="form-section">
                <h2 className="main-title">
                  THE{" "}
                  <span
                    style={{
                      fontStyle: "italic",
                      fontFamily: "BrittanySignature",
                      fontSize: 35,
                    }}
                  >
                    Rain Drops
                  </span>{" "}
                  INNER
                  <br />
                  DISCOVERY SERIES
                </h2>
                <p className="subtitle">
                  Tell Us What You Seek — We'll Shape the Journey.
                </p>
                <form className="discovery-form" onSubmit={onSubmit}>
                  <select
                    className="input-field"
                    style={{ color: "black" }}
                    name="program"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Programs
                    </option>
                    {programs.map((p) => (
                      <option key={p.id}>{p.title}</option>
                    ))}
                  </select>

                  <div className="grid-2">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="input-field"
                      name="name"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="input-field"
                      name="email"
                      required
                    />
                  </div>

                  <div className="grid-3">
                    <input
                      type="date"
                      placeholder=""
                      className="input-field"
                      name="from"
                      required
                      value={fromDate}
                      max={toDate || ""}
                      onChange={(e) => {
                        setFromDate(e.target.value);
                        if (toDate && e.target.value > toDate) {
                          setToDate("");
                        }
                      }}
                    />
                    <input
                      type="date"
                      placeholder=""
                      className="input-field"
                      name="to"
                      required
                      value={toDate}
                      min={fromDate || ""}
                      onChange={(e) => setToDate(e.target.value)}
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Fitness Level"
                    className="input-field"
                    name="fitness"
                  />
                  <input
                    type="text"
                    placeholder="Food Preferences"
                    className="input-field"
                    name="food"
                  />

                  <textarea
                    placeholder="Any Health Notes"
                    className="input-field textarea"
                    rows="2"
                    name="health"
                  ></textarea>
                  <textarea
                    placeholder="Any Additional Requests"
                    className="input-field textarea"
                    rows="2"
                    name="requests"
                  ></textarea>

                  <div className="guidance-row">
                    <span>Do you want mindfulness guidance?</span>
                    <div className="radio-group">
                      <label>
                        <input type="radio" name="guide" value="Yes" /> Yes
                      </label>
                      <label>
                        <input type="radio" name="guide" value="No" /> No
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="submit-btn">
                    Submit Now
                  </button>
                  <span className="result-message">{result}</span>
                </form>
              </div>

              {/* RIGHT — CAROUSEL */}
              <div className="carousel-wrapper">
                <div className="swiper-container-custom">
                  {isClient && (
                    <Swiper
                      ref={swiperRef}
                      modules={[Autoplay]}
                      autoplay={{ delay: 4000, disableOnInteraction: false }}
                      loop={true}
                      speed={800}
                      centeredSlides={false}
                      onSlideChange={(s) => setActiveIndex(s.realIndex)}
                      breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 15 },
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 25 },
                      }}
                      className="fixed-cards-swiper"
                    >
                      {programs.map((p, idx) => (
                        <SwiperSlide key={p.id}>
                          <div
                            className="program-card cursor-pointer group"
                            onClick={() =>
                              window.open(
                                FLIPBOOK_LINKS[idx],
                                "_blank",
                                "fullscreen=yes"
                              )
                            }
                          >
                            <img
                              src={p.image}
                              alt={p.title}
                              className="program-img"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                              <span className="text-white font-medium text-lg bg-black/60 px-6 py-3 rounded-full">
                                Click to Preview
                              </span>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}

                  <div className="custom-bullets">
                    {programs.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`custom-bullet ${
                          activeIndex === i ? "active" : ""
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flipbook Modal */}
        <FlipbookModal
          isOpen={showFlipbook}
          onClose={() => setShowFlipbook(false)}
          iframeUrl={activeFlipbookUrl}
        />

        <style jsx>{`
          .inner-discovery-section {
            background: url("/assets/images/wellness/wellness_back.png")
              center/cover no-repeat;
            padding: 60px 20px;
            color: white;
            min-height: auto;
          }
          .radio-group {
            display: grid;
            grid-template-columns: auto auto;
            gap: 10px;
            justify-content: start;
          }
          .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
          }
            
          /* DESKTOP LAYOUT - Original code (unchanged) */
          .desktop-layout .content-grid {
            display: grid;
            grid-template-columns: 1fr 1.1fr;
            gap: 50px;
            align-items: start;
          }

          /* MOBILE LAYOUT - New for mobile only */
          .mobile-layout {
            display: none; /* Hidden by default, shown only on mobile */
          }

          /* FORM — optimized (unchanged from original) */
          .main-title {
            color: #ffffff;
            line-height: 1.1;
            letter-spacing: 2.5px;
            margin-bottom: 10px;
          }
          .highlight {
            font-family: "Dancing Script", cursive;
          }
          .subtitle {
            font-size: 14px;
            opacity: 0.9;
            margin-bottom: 30px;
            line-height: 1.4;
          }
          .discovery-form {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }
          .form-section {
            max-width: 600px;
            width: 100%;
          }
          .grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          .grid-3 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
            gap: 14px;
          }
          .input-field {
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(0, 0, 0, 1);
            border-radius: 6px;
            padding: 12px 16px;
            color: black;
            font-size: 0.95rem;
            min-height: 46px;
          }
          .input-field::placeholder {
            color: rgba(37, 3, 3, 1);
            font-size: 0.9rem;
          }
          .textarea {
            min-height: 70px;
            resize: vertical;
            padding-top: 12px;
          }
          .guidance-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.9rem;
            margin-top: 8px;
            color: white;
          }
          .guidance-row span {
            font-size: 0.9rem;
            color: white;
          }
          .submit-btn {
            margin-top: 10px;
            background: #ab8a62;
            color: #ffffffff;
            padding: 14px 40px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            align-self: flex-start;
            transition: 0.3s;
          }
          .submit-btn:hover {
            transform: translateY(-2px);
          }
          .result-message {
            text-align: center;
            margin-top: 10px;
            font-size: 0.9rem;
            color: white;
          }

          /* Radio button styles */
          .radio-group label {
            display: flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            font-size: 0.9rem;
            color: white;
          }
          
          .radio-group input[type="radio"] {
            width: 16px;
            height: 16px;
            accent-color: #ab8a62;
            cursor: pointer;
          }

          /* CAROUSEL — OPTIMIZED (unchanged) */
          .carousel-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .mobile-carousel-wrapper {
            width: 100%;
            margin-bottom: 40px;
          }
          .swiper-container-custom {
            position: relative;
            width: 100%;
            max-width: 1200px;
          }

          .fixed-cards-swiper :global(.swiper-slide) {
            width: 340px !important;
            height: auto;
          }

          .mobile-cards-swiper :global(.swiper-slide) {
            width: 300px !important;
            height: auto;
          }

          .program-card {
            position: relative;
            border-radius: 5px;
            overflow: hidden;
            transition: transform 0.3s ease;
            height: 100%;
            width: 80%;
          }
          .program-card:hover {
            transform: translateY(-8px);
          }

          .program-img {
            width: 100%;
            height: 420px;
            object-fit: cover;
            display: block;
          }

          /* Mobile specific carousel */
          .mobile-cards-swiper .program-card {
            width: 100%;
            margin: 0 auto;
          }

          .mobile-cards-swiper .program-img {
            height: 380px;
          }

          .overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 40px 15px 20px;
            text-align: center;
          }
          .program-title {
            font-size: 1.2rem;
            letter-spacing: 1.2px;
            text-transform: uppercase;
            font-weight: 400;
            color: white;
            line-height: 1.3;
          }

          /* Arrows - optimized (unchanged) */
          .custom-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 48px;
            height: 48px;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            color: #b49a54;
            transition: all 0.3s;
            border: none;
          }
          .custom-arrow:hover {
            background: white;
            transform: translateY(-50%) scale(1.1);
          }
          .prev {
            left: -20px;
          }
          .next {
            right: -20px;
          }

          /* Bullets (unchanged) */
          .custom-bullets {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 25px;
          }
          .custom-bullet {
            width: 8px;
            height: 8px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            transition: all 0.3s;
            border: none;
            padding: 0;
            cursor: pointer;
          }
          .custom-bullet.active {
            background: #d4af37;
            transform: scale(1.2);
          }

          /* ==================== */
          /* MOBILE RESPONSIVE ONLY - FIXED BOOK IMAGE HEIGHT */
          /* ==================== */
          @media (max-width: 768px) {
            /* Hide desktop layout on mobile */
            .desktop-layout {
              display: none;
            }
            
            /* Show mobile layout */
            .mobile-layout {
              display: block;
            }
            
            .mobile-title-section {
              text-align: center;
              margin-bottom: 30px;
            }
            
            .inner-discovery-section {
              padding: 50px 15px;
            }
            
            .main-title {
              font-size: 2.2rem;
              letter-spacing: 1.5px;
              text-align: center;
            }
            
            .subtitle {
              font-size: 0.95rem;
              margin-bottom: 25px;
              text-align: center;
            }
            
            .mobile-form-section {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
            }
            
            .grid-2,
            .grid-3 {
              grid-template-columns: 1fr;
              gap: 12px;
            }
            
            .discovery-form {
              gap: 12px;
            }
            
            .input-field {
              padding: 11px 14px;
              font-size: 0.9rem;
              min-height: 44px;
              width: 100%;
            }
            
            .textarea {
              min-height: 65px;
            }
            
            /* FIXED: Mobile book image height and cropping */
            .mobile-cards-swiper :global(.swiper-slide) {
              width: 280px !important;
              height: 450px !important;
            }
            
            .mobile-cards-swiper .program-card {
              width: 100%;
              height: 100%;
              margin: 0 auto;
            }
            
            .mobile-cards-swiper .program-img {
              height: 100% !important;
              width: 100%;
              object-fit: contain !important;
              background: #f5f5f5;
              border-radius: 8px;
            }
            
            .custom-arrow {
              width: 42px;
              height: 42px;
            }
            
            /* FIXED: Mobile radio button visibility */
            .guidance-row {
              flex-direction: column;
              gap: 10px;
              align-items: flex-start;
              font-size: 0.9rem !important;
              margin-top: 8px;
              color: white !important;
            }
            
            .guidance-row span {
              font-size: 0.9rem;
              color: white;
              display: block;
            }
            
            .radio-group {
              display: flex;
              gap: 20px;
              width: 100%;
               align-items: center;
            }
            
            .radio-group label {
              font-size: 0.9rem;
              color: white;
              display: flex;
              align-items: center;
              gap: 8px;
            }
            
            .radio-group input[type="radio"] {
              width: 16px;
              height: 16px;
              accent-color: #ab8a62;
            }
            
            .submit-btn {
              align-self: center;
              width: 200px;
              height: 60px;
              border-radius: 5px;
              margin: 0 auto;
              display: block;
            }
            
            .result-message {
              text-align: center;
              display: block;
            }
          }

          /* Smaller mobile screens */
          @media (max-width: 480px) {
            .main-title {
              font-size: 1.6rem;
            }
            
            .mobile-cards-swiper :global(.swiper-slide) {
              width: 260px !important;
              height: 420px !important;
            }
            
            .mobile-cards-swiper .program-img {
              object-fit: contain !important;
            }
            
            .input-field {
              font-size: 0.85rem;
              padding: 10px 12px;
            }
            
            .input-field::placeholder {
              font-size: 0.85rem;
            }
            
            .fixed-cards-swiper :global(.swiper-slide) {
              width: 260px !important;
            }
            
            .guidance-row {
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size: 0.9rem !important;
              margin-top: 8px;
              color: white;
            }
            
            .guidance-row span {
              font-size: 0.85rem;
            }
            
            .radio-group label {
              font-size: 0.85rem;
               align-items: center;
            }
          }

          /* Very small mobile screens */
          @media (max-width: 360px) {
            .main-title {
              font-size: 1.4rem;
            }
            
            .mobile-cards-swiper :global(.swiper-slide) {
              width: 240px !important;
              height: 400px !important;
            }
            
            .mobile-cards-swiper .program-img {
              object-fit: contain !important;
            }
            
            .fixed-cards-swiper :global(.swiper-slide) {
              width: 240px !important;
            }
            
            .guidance-row {
              font-size: 0.8rem !important;
            }
            
            .guidance-row span {
              font-size: 0.8rem;
            }
            
            .radio-group label {
              font-size: 0.8rem;
            }
          }

          /* Desktop responsive - unchanged */
          @media (max-width: 1200px) {
            .desktop-layout .content-grid {
              gap: 40px;
            }
            .main-title {
              font-size: 2.5rem;
            }
          }

          @media (max-width: 1024px) {
            .desktop-layout .content-grid {
              grid-template-columns: 1fr;
              gap: 60px;
              text-align: center;
            }
            .main-title {
              font-size: 2.8rem;
            }
            .prev {
              left: 5px;
            }
            .next {
              right: 5px;
            }
            .desktop-layout .submit-btn {
              align-self: center;
            }
          }

          @media (max-width: 640px) {
            .inner-discovery-section {
              background: url("/assets/images/wellness/wellness_back.png")
                center/cover no-repeat;
              padding: 40px 16px;
              color: white;
              width: 100%;
              overflow: hidden;
            }

            .container {
              max-width: 1440px;
              margin: 0 auto;
              padding: 0 16px;
              width: 100%;
            }

            .desktop-layout .content-grid {
              display: flex;
              flex-direction: column;
              gap: 40px;
              width: 100%;
            }

            .desktop-layout .form-section {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
            }

            .desktop-layout .main-title {
              font-family: "Inter", sans-serif;
              font-weight: 300;
              font-size: clamp(1.8rem, 5vw, 2.8rem);
              line-height: 1.2;
              letter-spacing: 1.5px;
              margin-bottom: 12px;
              color: #ffffff;
              text-align: center;
            }
          }
        `}</style>
      </section>
    </>
  );
}

// Make sure to export the component
export default InnerDiscoverySection;