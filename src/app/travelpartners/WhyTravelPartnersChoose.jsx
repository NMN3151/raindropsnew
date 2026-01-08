import React from "react";
import Image from "next/image";
function WhyTravelPartnersChoose() {
  return (
    <>
      <div className="rts__section partners__section section__padding">
        <div className="container">
          <h2 className="content__title wow fadeInUp">
            WHY TRAVEL PARTNERS CHOOSE RAINDROPS
          </h2>

          <p className="subtitle wow fadeInUp" data-wow-delay="0.2s">
            <span className="raindrops-italic">RainDrops</span> is designed to
            protect your reputation while elevating the value you deliver to
            your most discerning clients.
          </p>

          <div className="partners-content-wrapper">
            {/* Left side - Text content */}
            <div className="partners-text-section">
              <h3
                className="section-subtitle wow fadeInUp"
                data-wow-delay="0.3s"
              >
                What makes RainDrops different:
              </h3>

              <ul className="features-list wow fadeInUp" data-wow-delay="0.4s">
                <li>Only 6 private rainforest villas – true scarcity</li>
                <li>Not a hotel, not mass wellness</li>
                <li>High emotional satisfaction and repeat-stay potential</li>
                <li>Calm-driven, non-religious mindfulness experiences</li>
                <li>Science-guided, nature-based inner discovery</li>
                <li>Discreet, highly personalized hosting</li>
                <li>Designed for privacy, silence and depth—not crowds</li>
              </ul>
            </div>

            {/* Right side - Images */}
            <div className="partners-images-section">
              <div
                className="image-container large-image wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <img
                  src="/assets/images/travelpartners/blackhouse.png"
                  alt="Travel partners exploring nature with binoculars in rainforest"
                 
                  className="partner-img"
                />
              </div>

              <div
                className="image-container small-image wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <img
                  src="/assets/images/travelpartners/footsongrass.png"
                  alt="Travel partners exploring nature with binoculars in rainforest"
                  
                  className="partner-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Base styles */
        .rts__section.partners__section {
          position: relative;
          overflow: hidden;
          background-color: #f9f9f9;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section__padding {
          padding: 80px 0;
        }

        /* Title styling */
        .content__title {
          font-size: var(--h2);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 400;
          text-align: left;
          color: #2c2c2c;
        }

        /* Subtitle */
        .subtitle {
          text-align: left;
          font-size: 15px;
          line-height: 1.6;
          color: #555;
          max-width: 1000px;
        }

        .raindrops-italic {
          font-style: italic;
          font-family: "BrittanySignature", cursive;
          font-size: 1.3rem;
        }

        /* Main content wrapper */
        .partners-content-wrapper {
          display: flex;
          gap: 60px;
          align-items: flex-start;
          margin-top: 40px;
        }

        /* Left text section */
        .partners-text-section {
          flex: 1;
          min-width: 300px;
        }

        .section-subtitle {
          font-size: 15px;
          margin-bottom: 1.5rem;
          color: #333;
          font-weight: bold;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .features-list li {
          font-size: 1.05rem;
          color: #444;
          margin-bottom: 0.3rem;
          padding-left: 25px;
          position: relative;
          font-weight: 300;
        }

        .features-list li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #000000ff;
          font-size: 1.5rem;
          line-height: 1.4;
        }

        /* Right images section */
        .partners-images-section {
          flex: 1;
          min-width: 300px;
          flex-direction: row;
          display: flex;
          flex-direction: row;
          gap: 20px;
        }

        .image-container {
          overflow: hidden;
          border-radius: 4px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .image-container:hover {
          transform: translateY(-5px);
        }

        .large-image {
          height: 400px;
        }

        .small-image {
          height: 250px;
        }

        .partner-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
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
          .container {
            max-width: 1100px;
          }

          .partners-content-wrapper {
            gap: 80px;
          }

       

          .small-image {
            height: 280px;
          }
        }

        /* Desktop - Tablet Landscape */
        @media (min-width: 1024px) and (max-width: 1199px) {
          .container {
            max-width: 960px;
          }

          .content__title {
            font-size: 2rem;
          }

          .partners-content-wrapper {
            gap: 50px;
          }

          .large-image {
            height: 380px;
          }

          .small-image {
            height: 240px;
          }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          .container {
            max-width: 720px;
          }

          .section__padding {
            padding: 60px 0;
          }

          .content__title {
            font-size: 1.8rem;
            letter-spacing: 1.5px;
          }

          .subtitle {
            font-size: 1rem;
            margin-bottom: 2.5rem;
          }

          .partners-content-wrapper {
            gap: 40px;
          }

          .section-subtitle {
            font-size: 1.2rem;
          }

          .features-list li {
            font-size: 1rem;
          }

          .large-image {
            height: 320px;
          }

          .small-image {
            height: 200px;
          }
        }

        /* Mobile - Large */
        @media (max-width: 767px) {
          .section__padding {
            padding: 50px 0;
          }

          .content__title {
            font-size: 1.5rem;
            letter-spacing: 1px;
            margin-bottom: 1rem;
          }

          .subtitle {
            font-size: 0.95rem;
            margin-bottom: 2rem;
            padding: 0 10px;
          }

          .raindrops-italic {
            font-size: 1.1rem;
          }

          .partners-content-wrapper {
            flex-direction: column;
            gap: 30px;
          }

          .partners-text-section,
          .partners-images-section {
            width: 100%;
            min-width: unset;
          }

          .section-subtitle {
            font-size: 1.1rem;
            margin-bottom: 1.2rem;
          }

          .features-list li {
            font-size: 0.95rem;
            line-height: 1.7;
            margin-bottom: 0.7rem;
            padding-left: 20px;
          }

          .features-list li:before {
            font-size: 1.3rem;
          }

          .large-image {
            height: 280px;
          }

          .small-image {
            height: 200px;
          }
        }

        /* Mobile - Small */
        @media (max-width: 480px) {
        .partner-img {
         border-radius: 6;
          object-fit: cover;
          display: block;
        }
          .container {
            padding: 0 15px;
          }

          .section__padding {
            padding: 40px 0;
          }

          .content__title {
            font-size: 1.3rem;
            letter-spacing: 0.5px;
          }

          .subtitle {
            font-size: 0.9rem;
            line-height: 1.5;
          }

          .raindrops-italic {
            font-size: 1rem;
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .features-list li {
            font-size: 0.9rem;
            line-height: 1.6;
            padding-left: 18px;
          }

          .large-image {
            height: 240px;
          }

          .small-image {
            height: 180px;
          }

          .image-container {
            border-radius: 3px;
          }
        }

        /* Mobile - Extra Small */
        @media (max-width: 360px) {
          .content__title {
            font-size: 1.1rem;
          }

          .subtitle {
            font-size: 0.85rem;
          }

          .features-list li {
            font-size: 0.85rem;
          }

          .large-image {
            height: 220px;
          }

          .small-image {
            height: 160px;
          }
        }
      `}</style>
    </>
  );
}

export default WhyTravelPartnersChoose;
