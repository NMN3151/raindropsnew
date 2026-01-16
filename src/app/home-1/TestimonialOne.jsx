"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; 
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"; 

function TestimonialOne() {
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
                  <SwiperSlide>
                    <div className="testimonial__item__content">
                      <div className="author__icon">
                        <img
                          src="https://i.postimg.cc/kgz1YJtL/ludema.jpg"
                          alt="Dr. Jim Ludema"
                          loading="lazy"
                        />
                      </div>
                      <div className="testimonial__content">
                        <div className="single__slider__item">
                          <div className="slider__rating mb-20">
                            <h4 className="topic-title">
                              Where Beauty Meets Mindfulness
                            </h4>
                          </div>
                          <p className="slider__text">
                            Sri Lanka's natural beauty was both awe-inspiring
                            and soothing. A true highlight for Beverly and me
                            was discovering Buddhist mindfulness and meditation.
                            That quiet moment of learning brought clarity,
                            peace, and gratitude—something we'll carry with us
                            long after this beautiful journey ends.
                          </p>
                          <div className="slider__author__info">
                            <div className="slider__author__info__content">
                              <h6 className="author-name">
                                Dr. Jim Ludema
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial__item__content">
                      <div className="author__icon">
                        <img
                          src="https://i.postimg.cc/XYGxCRDB/ludema2.jpg"
                          alt="Dr. Beverly Ludema"
                          loading="lazy"
                        />
                      </div>
                      <div className="testimonial__content">
                        <div className="single__slider__item">
                          <div className="slider__rating mb-20">
                            <h4 className="topic-title">
                              An Unforgettable Journey
                            </h4>
                          </div>
                          <p className="slider__text">
                            The serene landscapes and rich cultural experiences
                            in Lanka exceeded all our expectations. We found
                            ourselves immersed in traditions that date back
                            thousands of years. Each day brought new discoveries
                            and moments of connection that transformed not just
                            our vacation, but our perspective on life.
                          </p>
                          <div className="slider__author__info">
                            <div className="slider__author__info__content">
                              <h6 className="author-name">
                                Dr. Beverly Ludema
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
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
        
        .slider__text {
          font-size: var(--p);
          margin-bottom: 20px;
          line-height: 1.6;
        }
        
        .slider__author__info {
          display: flex;
          align-items: center;
          gap: 15px;
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
            margin-bottom: 15px;
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
          
          .author-name {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}

export default TestimonialOne;