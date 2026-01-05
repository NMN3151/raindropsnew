"use client";
import React from "react";
function Setting2() {
  return (
    <>
      <div className="rts__section setting__section section__padding">
        <div className="container">
          <div className="setting-content-wrapper">
            <div className="setting-text-section">
              <div className="setting-description">
                <p className="raindrop-text" data-wow-delay="0.1s">
                  Throughout the year, our close relationship with nature is
                  deeply restorative – and sometimes a little wild. You may
                  share your stay with:
                </p>
                <p className="raindrop-text">
                  <ul className="raindrop-text" data-wow-delay="0.2s">
                    <li className="raindrop-text1">
                      Frogs singing in the evenings
                    </li>
                    <li className="raindrop-text1">
                      Fireflies dancing near the pathways
                    </li>
                    <li className="raindrop-text1">
                      Beetles and moths drawn to the light
                    </li>
                    <li className="raindrop-text1">
                      The occasional monkey troupe moving through the canopy
                    </li>
                    <li className="raindrop-text1">
                      Leeches on jungle trails after heavy rain
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="setting-images-section">
              <div
                className="side-by-side-images wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="image-container">
                  <div className="image-item">
                    <img
                      src="/assets/images/weather/wl20.png"
                      alt="Rainforest scenery"
                      className="setting-img"
                    />
                  </div>
                  <div className="image-item">
                    <img
                      src="/assets/images/weather/wl12.png"
                      alt="Rainforest scenery"
                      className="setting-img"
                    />
                  </div>
                  <div className="image-item">
                    <img
                      src="/assets/images/weather/wl11.png"
                      alt="Rainforest scenery"
                      className="setting-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
       
        .rts__section.setting__section {
          overflow: hidden;
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .raindrop-text {
          font-size: 16px !important;
          margin-bottom: 30px !important;
          line-height: 1.5 !important;
          color: #555 !important;
        }
        .raindrop-text1 {
          font-size: 16px !important;

          line-height: 1.7 !important;
        }
        .section__padding {
          padding: 80px 0;
        }

      
        .setting-content-wrapper {
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }

        .setting-text-section {
          flex: 1;
          min-width: 300px;
        }

        .setting-images-section {
          flex: 1;
          min-width: 300px;
        }

        .image-container {
          display: flex;
          gap: 20px;
          justify-content: flex-end;
        }

        .image-item {
          flex: 1;
          overflow: hidden;
          border-radius: 3px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .image-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .setting-img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: block;
        }

        .setting-description {
          margin-bottom: 2.5rem;
        }

        .setting-description p {
          font-size: 1.15rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          color: #333;
          font-weight: 300;
        }

        .setting-description ul {
          list-style-type: none;
          padding-left: 0;
        }

        .setting-description li {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #444;
          margin-bottom: 12px;
          padding-left: 25px;
          position: relative;
        }

        .setting-description li:before {
          content: "•";
          font-size: 1.5rem;
          position: absolute;
          left: 0;
          top: -2px;
        }

        @media (min-width: 1200px) {
          .container {
            max-width: 1300px;
            margin-top:-50px;
          }

          .setting-content-wrapper {
            gap: 60px;
          }

          .setting-img {
            height: 280px;
            width: 2oopx;
          }
        }

        @media (min-width: 1024px) and (max-width: 1199px) {
          .container {
            max-width: 1100px;
          }

          .setting-content-wrapper {
            gap: 50px;
          }

          .setting-img {
            height: 320px;
          }

          .setting-description p {
            font-size: 1.1rem;
          }

          .setting-description li {
            font-size: 1rem;
          }
        }

        @media (min-width: 992px) and (max-width: 1023px) {
          .setting-img {
            height: 300px;
          }

          .image-container {
            gap: 15px;
          }
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .section__padding {
            padding: 60px 0;
          }

          .setting-content-wrapper {
            flex-direction: column;
            gap: 40px;
          }

          .image-container {
            justify-content: center;
            gap: 20px;
          }

          .image-item {
            flex: 0 0 calc(33.333% - 14px);
          }

          .setting-img {
            height: 280px;
          }

          .setting-description p {
            font-size: 1.1rem;
          }
        }

        @media (min-width: 576px) and (max-width: 767px) {
          .section__padding {
            padding: 50px 0;
          }

          .image-container {
            gap: 15px;
          }

          .image-item {
            flex: 0 0 calc(33.333% - 10px);
            width: 200px;
          }

          .setting-img {
            height: 250px;
          }

          .setting-description p {
            font-size: 1.05rem;
          }

          .setting-description li {
            font-size: 1rem;
          }
        }

        @media (max-width: 575px) {
          .container {
            padding: 0 15px;
          }

          .section__padding {
            padding: 40px 0;
          }

          .setting-content-wrapper {
            flex-direction: column;
            gap: 30px;
          }

          .image-container {
            flex-direction: column;
            gap: 15px;
          }

          .image-item {
            flex: 1;
            width: 400px;
          }

          .setting-img {
           height: 350px;
 width:400px;
 object-fit:fill;
          }

          .setting-description p {
            font-size: 1rem;
            margin-bottom: 1.2rem;
          }

          .setting-description li {
            font-size: 0.95rem;
            margin-bottom: 10px;
            padding-left: 20px;
          }

          .setting-description li:before {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 375px) {
          .setting-img {
            height: 270px;
            width:300px;
            object-fit:fill;
          }
          .setting-images-section{
            margin-top:-40px;
            margin-left:-5px;
          
          }
          .setting-description p {
            font-size: 0.95rem;
          }

          .setting-description li {
            font-size: 0.9rem;
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

export default Setting2;
