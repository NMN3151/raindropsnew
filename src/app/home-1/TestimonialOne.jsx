// 'use client'
// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; // Core Swiper styles
// import { Navigation } from 'swiper/modules';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';

// function TestimonialOne() {
//     return (
//         <>
//             {/* client testimonial  */}
//             <div className="rts__section section__padding testimonial has__shape">
//                 <div className="container">
//                     <div className="row mb-40">
//                         <div className="d-flex align-items-center justify-content-between position-relative">
//                             <div className="section__content__left">
//                                 <span className="h6 subtitle__icon__two d-block wow fadeInUp">
//                                     Testimonial
//                                 </span>
//                                 <h2 className="content__title h2 lh-1">What Our Client Say</h2>
//                             </div>
//                             <div className="slider__navigation">
//                                 <div className="nav__btn button-next">
//                                     <img src="/assets/images/icon/arrow-left-short.svg" alt="" />
//                                 </div>
//                                 <div className="nav__btn button-prev">
//                                     <img src="/assets/images/icon/arrow-right-short.svg" alt="" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-11">
//                             <div className="">
//                                 <Swiper
//                                     className="testimonial__slider overflow-hidden"
//                                     modules={[Navigation]}
//                                     direction="horizontal"
//                                     slidesPerView={1}
//                                     spaceBetween={0}
//                                     loop={true}
//                                     centeredSlides={true}
//                                     autoplay="false"
//                                     navigation={{
//                                         nextEl: ".button-next",
//                                         prevEl: ".button-prev",
//                                     }}
//                                     speed={1000}
//                                     effect="slide"
//                                 >
//                                     <SwiperSlide>
//                                         <div className="testimonial__item__content">
//                                             <div className="author__icon">
//                                                   <img src="https://i.postimg.cc/kgz1YJtL/ludema.jpg" alt="" />
//                                             </div>
//                                             <div className="testimonial__content">
//                                                 <div className="single__slider__item ">
//                                                     <div className="slider__rating mb-20">
//                                                         {/* <i className="flaticon-star" /> */}
//                                                         {/* <i className="flaticon-star" /> */}
//                                                         {/* <i className="flaticon-star" /> */}
//                                                         {/* <i className="flaticon-star" /> */}
//                                                         {/* <i className="flaticon-star-sharp-half-stroke" /> */}
//                                                          <h4 className="topic-title"style={{ fontSize: '1.8rem' }}>Where Beauty Meets Mindfulness</h4>
//                                                     </div>
//                                                    <span className="slider__text d-block mb-20" style={{ fontSize: '1.125rem', lineHeight: '1.3' }}>
//                                                        Lanka's natural beauty was both awe-inspiring and soothing. A true highlight for Beverly and me was discovering Buddhist mindfulness and meditation.
// That quiet moment of learning brought clarity, peace, and gratitude—something we'll carry with us long after this beautiful journey ends.

//                                                     </span>
//                                                     <div className="slider__author__info">
//                                                         <div className="slider__author__info__content">
//                                                             <h6 className="mb-0"style={{ fontSize: '1.2rem' }}>Dr. Jim Ludema</h6>
//                                                             {/* <span>COO of Apex Solutions</span> */}
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide>
//                                         <div className="testimonial__item__content">
//                                             <div className="author__icon">
//                                                 <img src="https://i.postimg.cc/XYGxCRDB/ludema2.jpg" alt="" />
//                                             </div>
//                                             <div className="testimonial__content">
//                                                 <div className="single__slider__item ">
//                                                     <div className="slider__rating mb-20">
//                                                         {/* <i className="flaticon-star" /> */}
//                                                         {/* <i className="flaticon-star" /> */}
//                                                         {/* <i className="flaticon-star" /> */}
//                                                         {/* <i className="flaticon-star" /> */}
//                                                         {/* <i className="flaticon-star-sharp-half-stroke" /> */}
//                                                          <h4 className="topic-title"style={{ fontSize: '1.8rem' }}>An Unforgettable Journey</h4>
//                                                     </div>
//                                                   <span className="slider__text d-block mb-20" style={{ fontSize: '1.125rem', lineHeight: '1.3' }}>
//                                                        The serene landscapes and rich cultural experiences in Lanka exceeded all our expectations. We found ourselves immersed in traditions that date back thousands of years.
//                                                        Each day brought new discoveries and moments of connection that transformed not just our vacation, but our perspective on life.
//                                                     </span>
//                                                     <div className="slider__author__info">
//                                                         <div className="slider__author__info__content">
//                                                             <h6 className="mb-0"style={{ fontSize: '1.2rem' }}>Dr. Beverly Ludema</h6>
//                                                             {/* <span>COO of Apex Solutions</span> */}
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </SwiperSlide>
//                                 </Swiper>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* client testimonial  end */}
//         </>

//     )
// }

// export default TestimonialOne

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
                          alt=""
                        />
                      </div>
                      <div className="testimonial__content">
                        <div className="single__slider__item ">
                          <div className="slider__rating mb-20">
                            <h4
                              className="topic-title"
                              style={{ fontSize: "1.8rem" }}
                            >
                              Where Beauty Meets Mindfulness
                            </h4>
                          </div>
                          <span
                            className="slider__text d-block mb-20"
                            style={{ fontSize: "1.125rem", lineHeight: "1.3" }}
                          >
                            Sri Lanka's natural beauty was both awe-inspiring
                            and soothing. A true highlight for Beverly and me
                            was discovering Buddhist mindfulness and meditation.
                            That quiet moment of learning brought clarity,
                            peace, and gratitude—something we'll carry with us
                            long after this beautiful journey ends.
                          </span>
                          <div className="slider__author__info">
                            <div className="slider__author__info__content">
                              <h6
                                className="mb-0"
                                style={{ fontSize: "1.2rem" }}
                              >
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
                          alt=""
                        />
                      </div>
                      <div className="testimonial__content">
                        <div className="single__slider__item ">
                          <div className="slider__rating mb-20">
                            <h4
                              className="topic-title"
                              style={{ fontSize: "1.8rem" }}
                            >
                              An Unforgettable Journey
                            </h4>
                          </div>
                          <span
                            className="slider__text d-block mb-20"
                            style={{ fontSize: "1.125rem", lineHeight: "1.3" }}
                          >
                            The serene landscapes and rich cultural experiences
                            in Lanka exceeded all our expectations. We found
                            ourselves immersed in traditions that date back
                            thousands of years. Each day brought new discoveries
                            and moments of connection that transformed not just
                            our vacation, but our perspective on life.
                          </span>
                          <div className="slider__author__info">
                            <div className="slider__author__info__content">
                              <h6
                                className="mb-0"
                                style={{ fontSize: "1.2rem" }}
                              >
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
      
        @media (max-width: 768px) {
          .testimonial__item__content {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          
          .author__icon {
            display: flex !important;
            justify-content: center !important;
            margin-bottom: 25px !important;
          }
          
          .author__icon img {
            width: 100px !important;
            height: 300px !important;
            border-radius: 50% !important;
            object-fit: cover !important;
            border: 4px solid #c8b08a !important;
          }
          
          .testimonial__content {
            width: 100% !important;
            text-align: center !important;
          }
          
          .slider__rating {
            text-align: center !important;
            margin-bottom: 15px !important;
          }
          
          .slider__rating h4 {
            font-size: 1.4rem !important;
            text-align: center !important;
            margin: 0 auto !important;
          }
          
          .slider__text {
            text-align: center !important;
            font-size: 1rem !important;
            line-height: 1.5 !important;
            margin-bottom: 20px !important;
            padding: 0 10px !important;
          }
          
          .slider__author__info {
            justify-content: center !important;
            text-align: center !important;
          }
          
          .slider__author__info__content h6 {
            text-align: center !important;
            font-size: 1.1rem !important;
          }
          
          @media (max-width: 320px) {
            .author__icon img {
              width: 50px ;
              height: 50px ;
              border-radius: 50% !important;
              object-fit: cover ;
              border: 3px solid #c8b08a !important;
            }
            
            .testimonial__item__content {
              align-items: center !important;
              justify-content: center !important;
              gap: 15px !important;
              padding: 20px 0 !important;
            }
            
            .slider__rating h4 {
              font-size: 1.2rem !important;
            }
            
            .slider__text {
              font-size: 0.9rem !important;
              padding: 0 5px !important;
            }
            
            .slider__author__info__content h6 {
              font-size: 1rem !important;
            }
  
       
        @media (min-width: 769px) and (max-width: 1024px) {
          .author__icon img {
            width: 140px !important;
            height: 140px !important;
          }
          
          .slider__rating h4 {
            font-size: 1.6rem !important;
          }
          
          .slider__text {
            font-size: 1.1rem !important;
          }
        }
        
      
        .testimonial__item__content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          padding: 30px 0;
        }
        
        .author__icon img {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid #c8b08a;
        }
        
        .testimonial__content {
          flex: 1;
          max-width: 700px;
        }
      `}</style>

    </>
  );
}

export default TestimonialOne;
