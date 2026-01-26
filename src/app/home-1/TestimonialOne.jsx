"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; 
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"; 

function TestimonialOne() {
  const [expandedSlides, setExpandedSlides] = useState({});
  const swiperRef = useRef(null);

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

  const testimonials = [
    {
      id: 0,
      image: "https://i.postimg.cc/kgz1YJtL/ludema.jpg",
      alt: "Dr. Jim Ludema",
      title: "Where Beauty Meets Mindfulness",
      text: "Sri Lanka's natural beauty was both awe-inspiring and soothing. A true highlight for Beverly and me was discovering Buddhist mindfulness and meditation. That quiet moment of learning brought clarity, peace, and gratitude—something we'll carry with us long after this beautiful journey ends.",
      author: "Dr. Jim Ludema",
      shortText: "Sri Lanka's natural beauty was both awe-inspiring and soothing. A true highlight for Beverly and me was discovering Buddhist mindfulness and meditation. That quiet moment of learning brought clarity, peace, and gratitude—something we'll carry with us long after this beautiful journey ends."
    },
    {
      id: 1,
      image: "https://i.postimg.cc/XYGxCRDB/ludema2.jpg",
      alt: "Dr. Beverly Ludema",
      title: "An Unforgettable Journey",
      text: "The serene landscapes and rich cultural experiences in Lanka exceeded all our expectations. We found ourselves immersed in traditions that date back thousands of years. Each day brought new discoveries and moments of connection that transformed not just our vacation, but our perspective on life.",
      author: "Dr. Beverly Ludema",
      shortText: "The serene landscapes and rich cultural experiences in Lanka exceeded all our expectations. We found ourselves immersed in traditions that date back thousands of years. Each day brought new discoveries and moments of connection that transformed not just our vacation, but our perspective on life."
    },
    {
      id: 2,
      image: "/assets/images/travelpartners/MariaRakhmanova.jpeg",
      alt: "Rainforest retreat experience",
      title: "Heaven-like Nature & Deep Mindful Moments",
      text: "Rain Drops Wellness Villa felt like heaven from the moment I arrived. The location is absolutely beautiful, surrounded by nature in a way that feels rare and deeply peaceful.\n\nWhat truly stood out to me was the service. The staff were incredibly friendly, attentive, and genuinely caring. I felt that every request was handled with warmth and respect, and it honestly felt like each guest is truly valued. In my opinion, the level of service here is a strong contender for some of the best hospitality in Sri Lanka.\n\nThe mindfulness experiences were another highlight of my stay. Walking through the Sinharaja rainforest with a very knowledgeable and professional guide they arranged for me, learning about the flora and fauna, spending time by a creek, enjoying a meal by the river, and even experiencing the natural fish therapy in the water. all of it felt thoughtfully arranged and deeply calming.\n\nRain Drops is not just a place to stay, but an experience that connects you to nature, mindfulness, and genuine hospitality",
      author: "Maria Rakhmanova",
      shortText: "Rain Drops Wellness Villa felt like heaven from the moment I arrived. The location is absolutely beautiful, surrounded by nature in a way that feels rare and deeply peaceful. What truly stood out to me was the service. The staff were incredibly friendly, attentive..."
    }
  ];

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
                  className="testimonial__slider overflow-hidden"
                  modules={[Navigation, Autoplay]} 
                  direction="horizontal"
                  slidesPerView={1}
                  spaceBetween={0}
                  loop={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 3000, 
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true, 
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
                            <div className="slider__rating mb-20">
                              <h4 className="topic-title">
                                {testimonial.title}
                              </h4>
                            </div>
                            <div className="slider__text__wrapper">
                              <p className={`slider__text ${expandedSlides[testimonial.id] ? 'expanded' : 'collapsed'}`}>
                                {expandedSlides[testimonial.id] 
                                  ? testimonial.text 
                                  : testimonial.shortText}

                                {testimonial.text !== testimonial.shortText && (
                                  <span 
                                    className="see-more-link"
                                    onClick={() => toggleReadMore(testimonial.id)}
                                  >
                                    {expandedSlides[testimonial.id] ? ' See less' : ' See more'}
                                  </span>
                                )}
                              </p>
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
          padding: 40px 0;
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
          font-size: var(--p);
          margin-bottom: 8px;
          line-height: 1.6;
          color: #333;
          white-space: pre-line;
          transition: max-height 0.4s ease-in-out;
        }
        
        .slider__text.collapsed {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          max-height: 6.4em;
        }
        
        .slider__text.expanded {
          display: block;
          max-height: none;
        }
        
        .see-more-link {
          display: inline;
          color: #c8b08a;
          font-size: var(--p);
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
          font-family: inherit;
        }
        
        .see-more-link:hover {
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
            padding: 35px 0;
          }
          
          .author__icon img {
            width: 140px;
            height: 140px;
            border: 4px solid #c8b08a;
          }
          
          .topic-title {
            font-size: 1.4rem;
          }
          
          .slider__text {
            font-size: 0.95rem;
          }
          
          .see-more-link {
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
            gap: 25px;
            padding: 30px 15px;
          }
          
          .author__icon {
            display: flex;
            justify-content: center;
            margin-bottom: 0;
          }
          
          .author__icon img {
            width: 120px;
            height: 120px;
            border: 4px solid #c8b08a;
          }
          
          .testimonial__content {
            width: 100%;
            text-align: center;
          }
          
          .single__slider__item {
            text-align: center;
          }
          
          .slider__rating {
            text-align: center;
            margin-bottom: 15px;
          }
          
          .topic-title {
            font-size: 1.3rem;
            text-align: center;
          }
          
          .slider__text {
            font-size: 0.95rem;
            text-align: center;
            margin-bottom: 8px;
          }
          
          .slider__text.collapsed {
            max-height: 5.7em;
          }
          
          .see-more-link {
            display: inline;
            text-align: center;
            font-size: 0.95rem;
          }
          
          .slider__author__info {
            justify-content: center;
            text-align: center;
          }
          
          .author-name {
            font-size: 1rem;
            text-align: center;
          }
        }

        /* ========== SMALL MOBILE (max-width: 480px) ========== */
        @media (max-width: 480px) {
          .testimonial__item__content {
            gap: 20px;
            padding: 25px 10px;
          }
          
          .author__icon img {
            width: 100px;
            height: 100px;
            border: 3px solid #c8b08a;
          }
          
          .topic-title {
            font-size: 1.2rem;
          }
          
          .slider__text {
            font-size: 0.9rem;
          }
          
          .slider__text.collapsed {
            max-height: 5.4em;
          }
          
          .see-more-link {
            font-size: 0.9rem;
          }
          
          .author-name {
            font-size: 0.95rem;
          }
        }

        /* ========== EXTRA SMALL MOBILE (max-width: 320px) ========== */
        @media (max-width: 320px) {
          .testimonial__item__content {
            gap: 15px;
            padding: 20px 8px;
          }
          
          .author__icon img {
            width: 80px;
            height: 80px;
            border: 3px solid #c8b08a;
          }
          
          .topic-title {
            font-size: 1.1rem;
          }
          
          .slider__text {
            font-size: 0.85rem;
          }
          
          .slider__text.collapsed {
            max-height: 5.1em;
          }
          
          .see-more-link {
            font-size: 0.85rem;
          }
          
          .author-name {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}

export default TestimonialOne;