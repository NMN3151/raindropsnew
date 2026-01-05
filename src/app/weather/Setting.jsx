"use client";
import React from "react";

function Setting() {
  return (
    <>
      <div className="rts__section setting__section section__padding">
        <div className="container">
          <div className="setting-content-wrapper">
            <div className="setting-text-section">
              <h2 className="content__title wow fadeInUp">
                OUR RAINFOREST SETTING
              </h2>

              <div className="setting-description">
                <p className="raindrop-text">
                  <span
                    style={{
                      fontStyle: "italic",
                      fontFamily: "BrittanySignature",
                      fontSize: 19,
                    }}
                  >
                    RainDrop
                  </span>{" "}
                  was designed to work with the forest, not against it. Villas
                  <br></br>are positioned to open toward the valley and trees,
                  allowing:
                </p>
              </div>
              <div
                className="setting-image-below wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <img
                  src="/assets/images/weather/wl15.png"
                  alt="Rainforest cloud view"
                  className="setting-img-1"
                />
              </div>
            </div>

            <div className="setting-images-column">
              <div
                className="side-by-side-images wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="image-item1">
                  <img
                    src="/assets/images/weather/wl14.png"
                    alt="Rainforest scenery"
                    className="setting-img-2"
                  />
                </div>

                <div className="image-item2">
                  <img
                    src="/assets/images/weather/wl13.png"
                    alt="Rainforest scenery"
                    className="setting-img-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .rts__section.setting__section {
          position: relative;

          overflow: hidden;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .section__padding {
          padding: 80px 0;
        }
        .setting-content-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 60px;
          align-items: flex-start;
        }
        .setting-text-section {
          flex: 1.5;
          min-width: 300px;
        }
        .raindrop-text {
          font-size: 16px !important;
          margin-bottom: 30px !important;
          line-height: 1.5 !important;
        }

        .setting-images-column {
          flex: 1;
          min-width: 250px;
          display: flex;

          align-items: center;
        }
        .side-by-side-images {
          width: 100%;
        }
        .images-container {
          display: flex;
          gap: 15px;
          width: 100%;

          align-items: flex-start;
        }
      
        .image-left {
          flex: 0 0 40%; /* Takes 40% width, fixed */
        }
       
        .image-right {
          flex: 0 0 60%; /* Takes 60% width, fixed */
        }
      
        .image-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }
       
        .setting-img-1,
        .setting-img-2,
        .setting-img-3 {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
       
        .content__title {
          font-size: 2.2rem;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 300;
          position: relative;
          padding-bottom: 15px;
        }
        .content__title:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 2px;
        }
       
        .setting-description {
          margin-bottom: 2.5rem;
        }
        .setting-description p {
          font-size: 1.15rem;
          line-height: 1.7;
          margin-bottom: 1rem;
          font-weight: 300;
        }
        .raindrop-text {
          font-weight: 500;
         
        }
       
        .setting-features {
          margin-top: 2rem;
          margin-bottom: 2.5rem;
        }
        .feature-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.2rem;
          padding-left: 5px;
        }
        .feature-icon {
          font-size: 1.8rem;
          line-height: 1;
          margin-right: 15px;
          font-weight: bold;
        }
        .feature-text {
          font-size: 1.1rem;
          line-height: 1.6;
          font-weight: 300;
          padding-top: 2px;
        }
       
        .setting-image-below {
          margin-top: 2rem;
        }
        .setting-image-below .image-item {
          width: 100%;
        }
        
        @media (max-width: 992px) {
          .setting-content-wrapper {
            gap: 40px;
          }
          .section__padding {
            padding: 60px 0;
          }
          .content__title {
            font-size: 1.8rem;
          }
          .setting-text-section,
          .setting-images-column {
            flex: 1;
          }
          .images-container {
            gap: 12px;
          }
          .image-left {
            flex: 0 0 38%;
          }
          .image-right {
            flex: 0 0 62%;
          }
          .image-left .image-item {
            height: 220px;
          }
          .image-right .image-item {
            height: 270px;
          }
          .setting-img-1 {
            height: 250px;
          }
        }
        @media (max-width: 768px) {
          .setting-content-wrapper {
            flex-direction: column;
            gap: 40px;
          }
          .section__padding {
            padding: 50px 0;
          }
          .content__title {
            font-size: 1.6rem;
            letter-spacing: 1px;
          }
          .setting-description p {
            font-size: 1.05rem;
          }
          .feature-text {
            font-size: 1rem;
          }
          .images-container {
            gap: 10px;
          }
          .setting-img-2 {
            height: 250px;
            width: 500px;
            margin-bottom: 20px;
          }
          .setting-img-3 {
            height: 250px;
          }
          .setting-img-1 {
            height: 250px;
          }
        }
        @media (max-width: 480px) {
          .container {
            padding: 0 15px;
          }
          .section__padding {
            padding: 40px 0;
          }
          .content__title {
            font-size: 1.4rem;
            margin-bottom: 1.5rem;
          }
          .setting-description {
            margin-bottom: 2rem;
          }
          .setting-description p {
            font-size: 1rem;
          }
          .feature-item {
            margin-bottom: 1rem;
          }
          .feature-text {
            font-size: 0.95rem;
          }
          .feature-icon {
            margin-right: 12px;
          }
          .images-container {
            flex-direction: column; /* Stack vertically on very small screens */
            gap: 15px;
          }
          .image-left,
          .image-right {
            flex: 0 0 100%;
            width: 100%;
          }
          .image-left .image-item {
            height: 180px;
          }
          .image-right .image-item {
            height: 220px;
          }
          .setting-img-1 {
            height: 200px;
          }
        }
        @media (min-width: 1200px) {
          .container {
            max-width: 1300px;
          }
          .image-item1 {
            height: 540px;
            border-radius: 3px;
            width: 350px;
            margin-left: -215px;
          }
          .image-item2 {
            height: 540px;
            width: 350px;
            margin-left: 150px;
            margin-top: -540px;
          }
          .image-item {
            height: 350px;
            width: 300px;
          }
          .setting-img-1 {
            height: 359px;
            width: 550px;
          }
        }
        @media (min-width: 1024px) and (max-width: 1199px) {
          .container {
            max-width: 1400px;
          }
          .content__title {
            font-size: 2.1rem;
          }
          .image-item1 {
            height: 470px;
            width: 200px;
            margin-left: -57px;
           
          }
          .image-item2 {
            height: 470px;
            width: 200px;
            margin-left: 150px;
            margin-top: -470px;
          }
          .setting-description p {
            font-size: 1rem;
            margin-bottom: 2rem;
          }
          .image-item {
            height: 350px;
            border-radius: 3px;
            width: 500px;
          }
          .setting-img-1 {
            height: 271px;
            width: 550px;
          }
        }
       
        @media (min-width: 768px) and (max-width: 1023px) {
          .container {
            max-width: 700px;
          }
          .content__title {
            font-size: 2.1rem;
          }
          .image-item1 {
            height: 360px;
            width: 200px;
            margin-left: 265px;
            margin-top: -400px;
          }
          .image-item2 {
            height: 360px;
            width: 200px;
            margin-left: 480px;
            margin-top: -360px;
          }
          .setting-description p {
            font-size: 1rem;
            line-height: 1.5;
            width: 50%;
            margin-top: -40px;
          }
          .image-item {
            height: 350px;
            width: 400px;
          }
          .setting-img-1 {
            height: 240px;
            object-fit: cover;
            width: 250px;
          }
          .setting-img-2 {
            height: 360px;
            object-fit: cover;
            width: 250px;
          }
          .setting-img-3 {
            height: 360px;
            object-fit: cover;
            width: 250px;
          }
        }
       
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
      `}</style>
    </>
  );
}

export default Setting;
