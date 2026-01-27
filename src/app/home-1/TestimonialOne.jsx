"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; 
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"; 

function TestimonialOne() {
  const [expandedSlides, setExpandedSlides] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleReadMore = (slideIndex) => {
    const isExpanding = !expandedSlides[slideIndex];
    
    setExpandedSlides(prev => ({
      ...prev,
      [slideIndex]: !prev[slideIndex]
    }));

    // Control autoplay based on expand/collapse
    if (swiperRef.current && swiperRef.current.autoplay) {
      if (isExpanding) {
        // Stop autoplay when expanding
        swiperRef.current.autoplay.stop();
      } else {
        // Resume autoplay when collapsing
        swiperRef.current.autoplay.start();
      }
    }
  };

  // Handle slide change - only collapse if user navigated away from expanded slide
  const handleSlideChange = (swiper) => {
    const newSlide = swiper.realIndex;
    
    // Only collapse and resume if moving to a different slide
    if (newSlide !== currentSlide) {
      setCurrentSlide(newSlide);
      setExpandedSlides({});
      
      if (swiperRef.current && swiperRef.current.autoplay) {
        swiperRef.current.autoplay.start();
      }
    }
  };

  const testimonials = [
    {
      id: 0,
      image: "https://i.postimg.cc/kgz1YJtL/ludema.jpg",
      alt: "Dr. Jim Ludema",
      title: "Where Beauty Meets Mindfulness",
      text: "Sri Lanka's natural beauty was both awe-inspiring and soothing. A true highlight for Beverly and me was discovering Buddhist mindfulness and meditation. That quiet moment of learning brought clarity, peace, and gratitude—something we'll carry with us long after this beautiful journey ends.",
      author: "Dr. Jim Ludema",
      shortText: "Sri Lanka's natural beauty was both awe-inspiring and soothing. A true highlight for Beverly and me was discovering Buddhist mindfulness and meditation..."
    },
    {
      id: 1,
      image: "https://i.postimg.cc/XYGxCRDB/ludema2.jpg",
      alt: "Dr. Beverly Ludema",
      title: "An Unforgettable Journey",
      text: "The serene landscapes and rich cultural experiences in Lanka exceeded all our expectations. We found ourselves immersed in traditions that date back thousands of years. Each day brought new discoveries and moments of connection that transformed not just our vacation, but our perspective on life.",
      author: "Dr. Beverly Ludema",
      shortText: "The serene landscapes and rich cultural experiences in Lanka exceeded all our expectations. We found ourselves immersed in traditions that date back thousands of years..."
    },
    {
      id: 2,
      image: "/assets/images/travelpartners/MariaRakhmanova.jpeg",
      alt: "Rainforest retreat experience",
      title: "Heaven-like Nature & Deep Mindful Moments",
      text: "Rain Drops Wellness Villa felt like heaven from the moment I arrived. The location is absolutely beautiful, surrounded by nature in a way that feels rare and deeply peaceful.\n\nWhat truly stood out to me was the service. The staff were incredibly friendly, attentive, and genuinely caring. I felt that every request was handled with warmth and respect, and it honestly felt like each guest is truly valued. In my opinion, the level of service here is a strong contender for some of the best hospitality in Sri Lanka.\n\nThe mindfulness experiences were another highlight of my stay. Walking through the Sinharaja rainforest with a very knowledgeable and professional guide they arranged for me, learning about the flora and fauna, spending time by a creek, enjoying a meal by the river, and even experiencing the natural fish therapy in the water. all of it felt thoughtfully arranged and deeply calming.\n\nRain Drops is not just a place to stay, but an experience that connects you to nature, mindfulness, and genuine hospitality",
      author: "Maria Rakhmanova",
      shortText: "Rain Drops Wellness Villa felt like heaven from the moment I arrived. The location is absolutely beautiful, surrounded by nature in a way that feels rare and deeply peaceful..."
    }
  ];

  const shouldShowButton = (testimonial) => {
    // Mobile: Show for all testimonials
    if (isMobile) {
      return true;
    }
    // Desktop: Show only for Maria (id: 2)
    return testimonial.id === 2;
  };

  const getDisplayText = (testimonial) => {
    // If expanded, always show full text
    if (expandedSlides[testimonial.id]) {
      return testimonial.text;
    }
    
    // If collapsed
    // For Maria (id: 2): Always show shortText when collapsed (both mobile and desktop)
    if (testimonial.id === 2) {
      return testimonial.shortText;
    }
    
    // For others on mobile: show shortText
    if (isMobile) {
      return testimonial.shortText;
    }
    
    // For others on desktop: show full text
    return testimonial.text;
  };

  return (
    <>
      <div className="rts__section section__padding testimonial has__shape">
        <div className="container">
          <div className="row ">
            <div className="row justify-content-center text-center mb-40">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div className="section__topbar">
                  <span className="h6 subtitle__icon__three mx-auto">
                    Testimonial
                  </span>
                  <h2 className="content__title h2 lh-1">
                    what our client say
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-11">
              <div className="">
                <Swiper
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  onSlideChange={handleSlideChange}
                  className="testimonial__slider overflow-hidden"
                  modules={[Navigation, Autoplay]} 
                  direction="horizontal"
                  slidesPerView={1}
                  spaceBetween={0}
                  loop={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 5000, 
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false, 
                  }}
                  navigation={{
                    nextEl: ".button-next",
                    prevEl: ".button-prev",
                  }}
                  speed={1000}
                  effect="slide"
                >
                  {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="testimonial__item__content">
                        <div className="author__icon">
                          <img
                            src={testimonial.image}
                            alt={testimonial.alt}
                            loading="lazy"
                          />
                        </div>
                        <div className="testimonial__content">
                          <div className="single__slider__item">
                            <div className="slider__rating">
                              <h4 className="topic-title">
                                {testimonial.title}
                              </h4>
                            </div>
                            <div className="slider__text__wrapper">
                              <p className={`slider__text ${expandedSlides[testimonial.id] ? 'expanded' : 'collapsed'}`}>
                                {getDisplayText(testimonial)}
                              </p>

                              {/* Show button based on logic */}
                              {shouldShowButton(testimonial) && (
                                <button 
                                  className="see-more-btn"
                                  onClick={() => toggleReadMore(testimonial.id)}
                                >
                                  {expandedSlides[testimonial.id] ? 'See less' : 'See more'}
                                </button>
                              )}
                            </div>
                            <div className="slider__author__info">
                              <div className="slider__author__info__content">
                                <h6 className="author-name">
                                  {testimonial.author}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        /* ========== DESKTOP STYLES (Default) ========== */
        .testimonial__item__content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          padding: 40px 20px;
        }
        
        .author__icon {
          flex-shrink: 0;
        }
        
        .author__icon img {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid #c8b08a;
          transition: transform 0.3s ease;
        }
        
        .author__icon img:hover {
          transform: scale(1.05);
        }
        
        .testimonial__content {
          flex: 1;
          max-width: 700px;
        }
        
        .single__slider__item {
          text-align: left;
        }
        
        .slider__rating {
          margin-bottom: 20px;
        }
        
        .topic-title {
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.3;
          margin: 0;
          color: #1b1b1b;
        }
        
        .slider__text__wrapper {
          position: relative;
        }
        
        .slider__text {
          font-size: 1rem;
          margin-bottom: 12px;
          line-height: 1.7;
          color: #333;
          white-space: pre-line;
          transition: all 0.4s ease-in-out;
        }
        
        /* Desktop: Apply line clamp to collapsed text */
        .slider__text.collapsed {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        /* Desktop: Show full text when expanded */
        .slider__text.expanded {
          display: block;
          -webkit-line-clamp: unset;
        }
        
        /* See More Button - Desktop (inline style) */
        .see-more-btn {
          display: inline;
          background: none;
          border: none;
          color: #c8b08a;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          padding: 0;
          margin-left: 5px;
          transition: all 0.2s ease;
          font-family: inherit;
        }
        
        .see-more-btn:hover {
          color: #a08960;
          text-decoration: underline;
        }
        
        .slider__author__info {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 20px;
        }
        
        .author-name {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
          color: #1b1b1b;
        }

        /* ========== TABLET (769px - 1024px) ========== */
        @media (min-width: 769px) and (max-width: 1024px) {
          .testimonial__item__content {
            gap: 30px;
            padding: 35px 15px;
          }
          
          .author__icon img {
            width: 140px;
            height: 140px;
            border: 4px solid #c8b08a;
          }
          
          .topic-title {
            font-size: 1.35rem;
          }
          
          .slider__text {
            font-size: 0.95rem;
            line-height: 1.6;
          }
          
          .see-more-btn {
            font-size: 0.95rem;
          }
          
          .author-name {
            font-size: 1.05rem;
          }
        }

        /* ========== MOBILE (max-width: 768px) ========== */
        @media (max-width: 768px) {
          .testimonial__item__content {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 20px;
            padding: 30px 20px;
          }
          
          .author__icon {
            display: flex;
            justify-content: center;
            margin-bottom: 0;
          }
          
          .author__icon img {
            width: 140px;
            height: 140px;
            border: 5px solid #c8b08a;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          }
          
          .testimonial__content {
            width: 100%;
            max-width: 100%;
            text-align: center;
          }
          
          .single__slider__item {
            text-align: center;
          }
          
          .slider__rating {
            text-align: center;
            margin-bottom: 16px;
          }
          
          .topic-title {
            font-size: 1.25rem;
            text-align: center;
            line-height: 1.4;
          }
          
          .slider__text {
            font-size: 0.95rem;
            text-align: center;
            margin-bottom: 12px;
            line-height: 1.65;
          }
          
          /* Show truncated text on mobile when collapsed */
          .slider__text.collapsed {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          /* Show full text when expanded */
          .slider__text.expanded {
            display: block;
            -webkit-line-clamp: unset;
          }
          
          /* See More Button - Mobile (pill button) */
          .see-more-btn {
            display: block;
            background: linear-gradient(135deg, #c8b08a 0%, #b39975 100%);
            border: none;
            color: white;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            padding: 12px 28px;
            margin: 12px auto 0;
            border-radius: 30px;
            width: fit-content;
            box-shadow: 0 3px 10px rgba(200, 176, 138, 0.3);
            transition: all 0.3s ease;
            font-family: inherit;
          }
          
          .see-more-btn:hover {
            background: linear-gradient(135deg, #b39975 0%, #a08960 100%);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(200, 176, 138, 0.4);
          }

          .see-more-btn:active {
            transform: translateY(0);
            box-shadow: 0 2px 8px rgba(200, 176, 138, 0.3);
          }
          
          .slider__author__info {
            justify-content: center;
            text-align: center;
            margin-top: 18px;
          }
          
          .author-name {
            font-size: 1.05rem;
            text-align: center;
            font-weight: 700;
          }
        }

        /* ========== SMALL MOBILE (max-width: 480px) ========== */
        @media (max-width: 480px) {
          .testimonial__item__content {
            gap: 18px;
            padding: 25px 15px;
          }
          
          .author__icon img {
            width: 120px;
            height: 120px;
            border: 4px solid #c8b08a;
          }
          
          .topic-title {
            font-size: 1.15rem;
            line-height: 1.35;
          }
          
          .slider__text {
            font-size: 0.9rem;
            line-height: 1.6;
            margin-bottom: 10px;
          }
          
          .slider__text.collapsed {
            -webkit-line-clamp: 3;
          }
          
          .see-more-btn {
            font-size: 0.875rem;
            padding: 11px 26px;
          }
          
          .author-name {
            font-size: 1rem;
          }

          .slider__rating {
            margin-bottom: 14px;
          }

          .slider__author__info {
            margin-top: 16px;
          }
        }

        /* ========== EXTRA SMALL MOBILE (max-width: 360px) ========== */
        @media (max-width: 360px) {
          .testimonial__item__content {
            gap: 15px;
            padding: 20px 12px;
          }
          
          .author__icon img {
            width: 100px;
            height: 100px;
            border: 3px solid #c8b08a;
          }
          
          .topic-title {
            font-size: 1.05rem;
            line-height: 1.3;
          }
          
          .slider__text {
            font-size: 0.85rem;
            line-height: 1.55;
            margin-bottom: 8px;
          }
          
          .slider__text.collapsed {
            -webkit-line-clamp: 3;
          }
          
          .see-more-btn {
            font-size: 0.85rem;
            padding: 10px 24px;
          }
          
          .author-name {
            font-size: 0.95rem;
          }

          .slider__rating {
            margin-bottom: 12px;
          }

          .slider__author__info {
            margin-top: 14px;
          }
        }
      `}</style>
    </>
  );
}

export default TestimonialOne;