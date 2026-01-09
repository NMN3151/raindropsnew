"use client";
import React from "react";

function Setting3() {
  return (
    <div className="rainforest-support-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-content">
            <div className="text-content-inner">
              <div className="paragraph-group">
                <p className="intro-text">
                  These beings are not harmful when respected; they are part of
                  the living rainforest you came to experience. Our team is
                  trained to help you feel safe and comfortable in this
                  environment.
                </p>
              </div>

              <div className="support-section">
                <p className="intro-text">To support you, we provide:</p>
                <ul className="">
                  <li>mosquito nets for sleeping comfort,</li>
                  <li>natural repellent on request,</li>
                  <li>leech socks for creek walks and jungle hikes,</li>
                  <li>well-lit main paths and guided night walks,</li>
                  <li>
                    a resident naturalist to answer your questions and accompany
                    you when needed
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="image-content">
            <div className="image-wrapper">
              <img
                src="/assets/images/weather/wl21.png"
                alt="Rainforest scenery showing safety features"
                className="support-image"
                 loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Base Styles */
        .rainforest-support-section {
          padding: 80px 40px;
          background: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
        }

      
        .content-wrapper {
          display: flex;
          flex-direction: row-reverse;
          align-items: flex-start;
          gap: 80px;
          justify-content: space-between;
        }

       
        .text-content {
          flex: 1;
          min-width: 300px;
          margin-top: 70px;
        }

        .text-content-inner {
          max-width: 600px;
        }

        .paragraph-group {
          margin-bottom: 50px;
        }

        .intro-text {
          font-size: 16px !important;
          margin-bottom: 30px !important;
          line-height: 1.5 !important;
        }

        .support-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .support-list li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 18px;
          line-height: 1.6;
        }

        .bullet {
          color: #000000ff;
          font-size: 1.5rem;
          margin-right: 15px;
          flex-shrink: 0;
          margin-top: -4px;
        }

        .text {
          font-size: 1.1rem;
          color: #444444;
        }

       
        .image-content {
          flex: 0 0 45%;
          min-width: 300px;
        }

        .image-wrapper {
          position: relative;
          border-radius: 5px;
          width: 580px;
         
        }

        .support-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .image-wrapper:hover .support-image {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          padding: 30px;
          color: white;
        }

        .overlay-text {
          font-size: 1.1rem;
          font-weight: 500;
          display: block;
          text-align: center;
        }


        @media (max-width: 991px) {
          .content-wrapper {
            flex-direction: column;
          }

          .image-content {
            order: -1; /* puts image above text */
            width: 100%;
            flex: none;
          }

          .text-content {
            width: 100%;
          }

          .image-wrapper {
            max-width: 700px;
            margin: 0 auto;
            min-height: 400px;
          }
        }

       
        @media (max-width: 767px) {
          .rainforest-support-section {
            padding: 50px 20px;
          }

          .support-section {
            padding: 30px;
          }

          .image-wrapper {
            min-height: 350px;
          }

         
          .image-content {
            order: 0; /* Reset to natural order */
          }
        }

        @media (max-width: 575px) {
          .rainforest-support-section {
            padding: 40px 15px;
          }
           .paragraph-group{
            margin-top:-100px;
           
           }
            .support-section{
              margin-top:-70px;
              text-align: left;
              margin-left:-30px;
 
            }
              .image-content{
                margin-top:-100px;
              }
          .image-wrapper {
            min-height: 300px;
            width: 100%;
            border-radius: 12px;
            item-align: center;
          }
          
          .overlay-text {
            font-size: 0.95rem;
          }

          .intro-text,
          .text {
            font-size: 1rem;
          }
        }
          @media (max-width: 320px) {
           .rainforest-support-section {
   padding: 20px 15px;
 }
  .paragraph-group{
   margin-top:-100px;
  
  }
   .support-section{
     margin-top:-70px;
     text-align: left;
     margin-left:-30px;
   }
     .image-content{
       margin-top:-100px;
       margin-left:-16px;
     }
 .image-wrapper {
   min-height: 300px;
   width: 300px;
   border-radius: 12px;
   object-fit: cover;
 }
 
 .overlay-text {
   font-size: 0.95rem;
 }
 .intro-text,
 .text {
   font-size: 1rem;
 }
          
          }
        @media (min-width: 1024px) and (max-width: 1199px) {
          .text-content {
            flex: 1;
            min-width: 300px;
            margin-top: 0px;
           
          }
          
          /* Image Content */
          .image-content {
            flex: 0 0 45%;
            min-width: 300px;
          }

          .image-wrapper {
            position: relative;
            border-radius: 10px;
            width: 480px;
          }

          .support-image {
            width: 600px;
            height: 370px;
            object-fit: cover;
            transition: transform 0.5s ease;
          }
        }

       @media (min-width: 1200px) {
        .container {
          max-width: 1300px;
         margin-top:-50px;
       }
     
        @media (prefers-reduced-motion: reduce) {
          .support-image,
          .image-wrapper:hover .support-image {
            transition: none;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Setting3;