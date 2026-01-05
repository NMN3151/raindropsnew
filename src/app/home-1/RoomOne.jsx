"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import RoomCardOne from "../room/RoomCardOne";
import posts from "../data/data-room.json";

function RoomOne({ className }) {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.update();
    }
  }, [swiperInstance]);

  return (
    <div className={`rts__section ${className}`}>
      <div className="container">
        <div className="row justify-content-center text-center mb-40">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div className="section__topbar">
              <span className="h6 subtitle__icon__three mx-auto">Rooms</span>
              <h2 className="section__title"> Our Rooms</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="row position-relative">
        <Swiper
          className="main__room__slider wow fadeInUp"
          data-wow-delay=".5s"
          modules={[Pagination, Autoplay, Navigation]}
          slidesPerView={3}
          spaceBetween={30}
          loop={posts.length > 1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            stopOnLastSlide: false,
          }}
          pagination={{ el: ".rts-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          speed={1000}
          breakpoints={{
            0: { slidesPerView: 1 },
            575: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 2.5 },
            1200: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
          grabCursor={true}
          centeredSlides={false}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            console.log("Autoplay started");
          }}
        >
          {posts
            .filter((data) => data.id >= 1 && data.id <= 7)
            .map((data) => (
              <SwiperSlide key={data.id}>
                <RoomCardOne
                  Slug={data.slug}
                  Img={data.image}
                  Title={data.title}
                  Title2={data.title2}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        <button
          className="swiper-button-prev custom-swiper-button"
          style={{
            background: "#ffffff7a",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            color: "#cdb375ff",
            fontSize: "8px",
            padding: "10px",
            cursor: "pointer",
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            zIndex: 10,
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#a8915b";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#ffffff7a";
            e.currentTarget.style.color = "#a8915b";
          }}
        >
          <i className="fas fa-chevron-left"style={{ fontSize: "8px" }}></i>
        </button>
        <button
          className="swiper-button-next custom-swiper-button"
          style={{
            background: "#ffffff6a",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            color: "#cdb375ff",
            cursor: "pointer",
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            zIndex: 10,
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#a8915b";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#ffffff7a";
            e.currentTarget.style.color = "#a8915b";
          }}
        >
          <i className="fas fa-chevron-right" ></i>
        </button>

        <div className="rts__pagination">
          <div className="rts-pagination" />
        </div>
      </div>
    </div>
  );
}

export default RoomOne;
