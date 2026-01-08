import React from "react";
import Image from "next/image";
export default function TravelPartners() {
  return (
    <>
      <div className="travel-partners-section section__padding">
        <div className="container">
          <div className="content-wrapper">
            {/* Left side - Text content */}
            <div className="text-content wow fadeInUp">
              <h1 className="main-title">TRAVEL PARTNERS</h1>

              <h3 className="subtitle">
                Where Reputation Meets Meaningful Luxury
              </h3>

              <div className="description">
                <p>
                  <span className="raindrops-italic">RainDrops</span> Wellness
                  Villa was intentionally created for a new kind of luxury
                  traveller—and for travel partners who value trust, discretion
                  and long-term client relationships.
                </p>


                <p>
                  This is not mass wellness tourism. <br />
                  This is <strong>quiet, intentional luxury</strong>, designed
                  for clients who seek calmness, depth and authenticity in one
                  of the world's most pristine rainforest settings.
                </p>

                <p>
                  Located near the <strong>Sinharaja UNESCO Rainforest</strong>,
                  RainDrops offers a highly selective, low-inventory experience
                  that allows our travel partners to confidently recommend
                  something rare, refined and emotionally resonant.
                </p>


                <p>
                  We do not call our visitors "guests." <br />
                  We welcome <strong>Insight Partners</strong>—travelers who
                  value meaning, reflection and simplicity.
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="image-content wow fadeInUp" data-wow-delay="0.2s">
              <div className="image-container">
                <img
                  src="/assets/images/travelpartners/showingsth.png"
                  alt="Travel partners exploring nature with binoculars in rainforest" 
                  className="partner-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Base styles */
        .travel-partners-section {
          background-color: #ffffff;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section__padding {
          padding: 80px 0;
        }

        /* Content wrapper */
        .content-wrapper {
          display: flex;
          gap: 60px;
          align-items: flex-start;
        }

        /* Text content */
        .text-content {
          flex: 1;
          min-width: 300px;
        }

        .main-title {
          font-size: 2.5rem;
          font-weight: 400;
          letter-spacing: 3px;
          margin-bottom: 1.5rem;
          color: #2c2c2c;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .subtitle {
          font-size: 1.3rem;
          font-weight: 400;
          color: #666;
          margin-bottom: 2rem;
          line-height: 1.4;
        }

        .description {
          line-height: 1.8;
          color: #444;
        }

        .description p {
          margin-bottom: 1.2rem;
          font-size: 15px;
        }

        .description p:last-child {
          margin-bottom: 0;
        }

        .raindrops-italic {
          font-style: italic;
          font-family: "BrittanySignature", cursive;
          font-size: 1.3rem;
        }

        .description strong {
          font-weight: 600;
          color: #2c2c2c;
        }

        /* Image content */
        .image-content {
          flex: 1;
          min-width: 300px;
        }

        .image-container {
          width: 100%;
          height: 560px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .image-container:hover {
          transform: translateY(-8px);
        }

        .partner-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          margin-top: 85px;
        }

        /* Animation */
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

        /* Responsive Design */

        /* Large Desktop */
        @media (min-width: 1200px) {
          

          .main-title {
            font-size: 2.8rem;
            letter-spacing: 4px;
          }

          .subtitle {
            font-size: var(--p);
          }

          .description {
            font-size: 1.1rem;
            line-height: 1.9;
          }

          .content-wrapper {
            gap: 80px;
          }

          .image-container {
            height: 560px;
          }

          .section__padding {
            padding: 100px 0;
          }
        }

        /* Desktop - Tablet Landscape */
        @media (min-width: 1024px) and (max-width: 1199px) {
          

          .main-title {
            font-size: 2.3rem;
            letter-spacing: 2.5px;
          }

          .subtitle {
            font-size: 1.2rem;
          }

          .description {
            font-size: 1rem;
            line-height: 1.75;
          }

          .content-wrapper {
            gap: 50px;
          }

          .image-container {
            height: 560px;
          }

          .section__padding {
            padding: 70px 0;
          }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          

          .section__padding {
            padding: 60px 0;
          }

          .main-title {
            font-size: 2rem;
            letter-spacing: 2px;
          }

          .subtitle {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
          }

          .description {
            font-size: 0.95rem;
            line-height: 1.7;
          }

          .description p {
            margin-bottom: 1rem;
          }

          .content-wrapper {
            gap: 40px;
          }

          .image-container {
            height: 480px;
          }

          .raindrops-italic {
            font-size: 1.2rem;
          }
        }

        /* Mobile - Large */
        @media (max-width: 767px) {
          .section__padding {
            padding: 50px 0;
          }

          .content-wrapper {
            flex-direction: column;
            gap: 30px;
          }

          .text-content,
          .image-content {
            width: 100%;
            min-width: unset;
          }

          .main-title {
            font-size: 1.8rem;
            letter-spacing: 1.5px;
            margin-bottom: 1rem;
          }

          .subtitle {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }

          .description {
            font-size: 0.9rem;
            line-height: 1.65;
          }

          .description p {
            margin-bottom: 1rem;
          }

          .raindrops-italic {
            font-size: 1.1rem;
          }

          .image-container {
            height: 400px;
            border-radius: 6px;
          }
        }

        /* Mobile - Small */
        @media (max-width: 480px) {
        
          .section__padding {
            padding: 40px 0;
          }

          .main-title {
            font-size: 1.5rem;
            letter-spacing: 1px;
            line-height: 1.15;
          }

          .subtitle {
            font-size: 0.95rem;
            margin-bottom: 1.2rem;
          }

          .description {
            font-size: 0.85rem;
            line-height: 1.6;
          }

          .description p {
            margin-bottom: 0.9rem;
          }

          .raindrops-italic {
            font-size: 1rem;
          }

          .content-wrapper {
            gap: 25px;
          }

          .image-container {
            height: 320px;
          }
        }

        /* Mobile - Extra Small */
        @media (max-width: 360px) {
          .section__padding {
            padding: 35px 0;
          }

          .main-title {
            font-size: 1.3rem;
            letter-spacing: 0.5px;
          }

          .subtitle {
            font-size: 0.9rem;
          }

          .description {
            font-size: 0.8rem;
          }

          .image-container {
            height: 280px;
          }
        }
      `}</style>
    </>
  );
}
