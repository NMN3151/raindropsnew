"use client";
import React from "react";

function SBannerOne() {
  return (
    <div className="Closer-ThanYou-Imagine">
      <div className="container">
        <div className="image-container">
          <div className="image-wrapper">
            <img
              src="/assets/images/sri lanka/sl10.png"
              alt="Sri Lanka landscape"
            />
          </div>

          {/* Text Container */}
          <div className="text-box-container">
            <div className="text-box">
              <div className="text__box text__box--1">
                <h2 className="content__title wow fadeInUp">
                  Closer Than You Imagine
                </h2>
                <p className="content__subtitle">
                  Direct flights connect Sri Lanka to 
                  <strong>Europe, the Middle East, Asia, Australia,</strong>
                  and major global hubs.<br></br>
                  In less than a day, you can move from the noise of your city
                  to the quiet of our valley.<br></br>
                  At Rain Drops, the journey mirrors the philosophy:
                  <strong>less friction, more flow</strong>.<br></br>
                </p>
                <p className="content__subtitle">
                  You arrive not exhausted — but already halfway calm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .Closer-ThanYou-Imagine {
          padding: 40px 20px;
          background: #ffffff;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .image-container {
          position: relative;
          min-height: 600px;
        }

        .image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 400px;
          overflow: hidden;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .text-box-container {
          position: relative;
          height: 100%;
          z-index: 10;
          pointer-events: none;
        }

        .text-box {
          position: absolute;
          top: 200px;
          right: 500px;
          transform: translateY(-50%);
          pointer-events: auto;
        }

        .text__box {
          background-color: #fefffd78;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 60px 50px;
          display: flex;
          width: 550px;
          min-height: 400px;
          flex-direction: column;
          justify-content: center;
          transition: min-height 0.3s ease;
        }

        .text__box--1 {
          min-height: 450px;
        }

        .content__title {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 25px;
          color: #070706c2;
        }

        .content__subtitle {
          text-align: center;
          color: #070706c2;
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .content__subtitle:last-child {
          margin-bottom: 0;
        }

        .content__subtitle strong {
          font-weight: 700;
          color: #2c3e50;
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .Closer-ThanYou-Imagine {
            padding: 35px 25px;
          }

          .container {
            max-width: 900px;
          }

          .image-container {
            min-height: 500px;
          }

          .image-wrapper {
            height: 350px;
          }

          .text-box {
            position: absolute;
            top: 180px;
            right: 50px;
            transform: translateY(-50%);
            width: auto;
          }

          .text__box {
            width: 450px;
            padding: 45px 35px;
            min-height: 380px;
          }

          .content__title {
            font-size: 1.8rem;
            margin-bottom: 20px;
          }

          .content__subtitle {
            font-size: 1rem;
            line-height: 1.6;
          }
        }

        @media (min-width: 576px) and (max-width: 767px) {
          .Closer-ThanYou-Imagine {
            padding: 30px 20px;
          }

          .container {
            max-width: 100%;
          }

          .image-container {
            min-height: 450px;
          }

          .image-wrapper {
            height: 300px;
          }

          .text-box {
            position: absolute;
            top: 160px;
            right: 20px;
            transform: translateY(-50%);
            width: auto;
            max-width: 400px;
          }

          .text__box {
            width: 380px;
            padding: 40px 30px;
            min-height: 350px;
          }

          .content__title {
            font-size: 1.6rem;
            margin-bottom: 18px;
          }

          .content__subtitle {
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 18px;
          }
        }

        @media (max-width: 575px) {
          .Closer-ThanYou-Imagine {
            padding: 25px 15px;
          }

          .image-container {
            min-height: 400px;
          }

          .image-wrapper {
            height: 250px;
            position: relative;
          }

          .text-box-container {
            position: static;
            height: auto;
            margin-top: 30px;
          }

          .text-box {
            position: relative;
            top: 0;
            right: 0;
            transform: none;
            width: 100%;
            max-width: 100%;
            margin-top: 0;
          }

          .text__box {
            width: 100%;
            padding: 35px 25px;
            min-height: 300px;
            max-width: 500px;
            margin: 0 auto;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
          }

          .content__title {
            font-size: 1.5rem;
            margin-bottom: 15px;
          }

          .content__subtitle {
            font-size: 0.9rem;
            line-height: 1.6;
            margin-bottom: 15px;
          }
        }

        @media (max-width: 375px) {
          .Closer-ThanYou-Imagine {
            padding: 20px 12px;
          }

          .image-container {
            min-height: 350px;
          }

          .image-wrapper {
            height: 220px;
          }

          .text__box {
            padding: 30px 20px;
            min-height: 280px;
          }

          .content__title {
            font-size: 1.35rem;
            margin-bottom: 12px;
          }

          .content__subtitle {
            font-size: 0.85rem;
            line-height: 1.6;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .text__box {
            transition: none;
          }
        }
        @media (min-width: 1024px) and (max-width: 1199px) {
          .text-box-container {
            margin-right: -150px;
          }
        }
        @media (prefers-reduced-transparency: reduce) {
          .text__box {
            background-color: #fefffd;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
          }
        }
      `}</style>
    </div>
  );
}

export default SBannerOne;
