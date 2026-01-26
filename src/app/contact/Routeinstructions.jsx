"use client";
import React from "react";

export default function RouteInstructions() {
  return (
    <>
      <div className="route__section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-9">
              <div className="route__content">
                <h2 className="route__title">
               Route Instructions To Raindrops Wellness Villa
                </h2>
                
                <p className="route__intro">
                  Please do not hesitate to contact us if you have any doubts regarding directions.
                </p>

                <div className="route__starting-point">
                  <p>After arriving in Deniyaya,</p>
                </div>

                <ul className="route__instructions">
                  <li>
                    <span className="bullet">•</span>
                    <span className="instruction-text">
                    Head to Pallegama Town along Deniyaya Pallegama Road
                    </span>
                  </li>
                  <li>
                    <span className="bullet">•</span>
                    <span className="instruction-text">
                      After arriving in Pallegama Town Head to Lankagama along Pallegama - Kolawenigama Rd
                    </span>
                  </li>
                  <li>
                    <span className="bullet">•</span>
                    <span className="instruction-text">
                      <strong>DO NOT</strong> go on Pallegama - Mideripitiya Rd 
                    </span>
                  </li>
                 
                  <li>
                    <span className="bullet">•</span>
                    <span className="instruction-text">
                      <strong>DO NOT</strong>  follow Sathmala Ella Rd
                    </span>
                  </li>
                  <li>
                    <span className="bullet">•</span>
                    <span className="instruction-text">
                     Go Along Kolawenigama Dombagoda Rd
                    </span>
                  </li>
                  <li>
                    <span className="bullet">•</span>
                    <span className="instruction-text">
                     Turn Right Onto Lankagama Deniyaya Rd
                    </span>
                  </li>

                  <li>
                    <span className="bullet">•</span>
                    <span className="instruction-text">
                   Then you will Arrive at Dombagoda towards entrance to Raindrops Wellness Villa
                    </span>
                  </li>

                </ul>
 
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .route__section {
          background: #ffffff;
          display: flex;
        }

        .container {
          margin: 0 auto;
          padding: 0 15px;
        }

        .route__content {
          background: #ffffff;
        }

        .route__title {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 30px;
          text-align: left;
          line-height: 1.3;
        }

        .route__intro {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 5px;
          text-align: left;
          line-height: 1.6;
        }

        .route__starting-point {
          font-size: 1.15rem;
          color: #2c3e50;
          margin-bottom: 25px;
          font-weight: 500;
        }

        .route__starting-point p {
          margin: 0;
        }

        .route__instructions {
          list-style: none;
          padding: 0;
          margin: 0 0 40px 0;
        }

        .route__instructions li {
          display: flex;
          align-items: flex-start;
          padding: 5px 0;
        }

        .route__instructions li:last-child {
          border-bottom: none;
        }

        .bullet {
          color: #000000;
          font-size: 1.5rem;
          margin-right: 15px;
          flex-shrink: 0;
          line-height: 1.4;
        }

        .instruction-text {
          font-size: var(--p);
          color: #535353;
          line-height: 1.6;
          flex: 1;
        }

        .route__instructions strong {
          font-weight: 700;
          color: #000000;
        }

        .route__contact-info {
          text-align: center;
          padding: 30px;
          background: #f8f9fa;
          margin-top: 30px;
        }

        .contact-text {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 15px;
        }

        .contact-details {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
        }

        .contact-link {
          color: #4a90e2;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: #2c5aa0;
          text-decoration: underline;
        }

        .separator {
          color: #ddd;
          font-size: 1.2rem;
        }

        /* Tablet Styles */
        @media screen and (max-width: 991px) {
           
 
          .route__title {
            font-size: 2rem;
          }

          .route__intro {
            font-size: 1rem;
          }

          .route__starting-point {
            font-size: 1.05rem;
          }

          .instruction-text {
            font-size: 1rem;
          }
        }

        /* Mobile Styles */
        @media screen and (max-width: 767px) {
           

         

          .route__title {
            font-size: 1.6rem;
            margin-bottom: 20px;
            line-height: 1.4;
          }

          .route__intro {
            font-size: 0.95rem;
            margin-bottom: 25px;
          }

          .route__starting-point {
            font-size: 1rem;
            margin-bottom: 20px;
          }

          .route__instructions li {
            padding: 5px 0;
            flex-direction: row;
          }

          .bullet {
            font-size: 1.3rem;
            margin-right: 10px;
            margin-top: 2px;
          }

          .instruction-text {
            font-size: 0.95rem;
            line-height: 1.5;
          }

          .route__contact-info {
            padding: 20px 15px;
          }

          .contact-text {
            font-size: 1rem;
            margin-bottom: 12px;
          }

          .contact-details {
            flex-direction: column;
            gap: 10px;
          }

          .separator {
            display: none;
          }

          .contact-link {
            font-size: 1rem;
          }
        }

        /* Small Mobile Styles */
        @media screen and (max-width: 575px) {
        
          .route__title {
            font-size: 1.4rem;
          }

          .route__intro {
            font-size: 0.9rem;
          }

          .route__starting-point {
            font-size: 0.95rem;
          }

          .instruction-text {
            font-size: 0.9rem;
          }

          .contact-text {
            font-size: 0.95rem;
          }

          .contact-link {
            font-size: 0.95rem;
          }
        }

        /* Large Desktop Styles */
        @media screen and (min-width: 1200px) {
          

          .route__title {
            font-size: 20px;
          }

          .route__intro {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </>
  );
}