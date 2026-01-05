"use client";
import React from "react";

function Landscapepage() {
  return (
    <>
      <div className="rts__section philosophy__section section__padding">
        <div className="container">
          <div
            className="horizontal-images-section wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="images-container">
              <div className="image-wrapper">
                <img
                  src="/assets/images/sri lanka/sl.png"
                  alt="Sri Lankan rainforest landscape"
                  className="landscape-image"
                />
                <div className="image-caption"></div>
              </div>

              <div className="image-wrapper1">
                <img
                  src="/assets/images/sri lanka/sl1.png"
                  alt="Tea gardens in Sri Lanka"
                  className="landscape-image"
                />
                <div className="image-caption"></div>
              </div>

              <div className="image-wrapper">
                <img
                  src="/assets/images/sri lanka/sl2.png"
                  alt="Temple architecture"
                  className="landscape-image"
                />
                <div className="image-caption"></div>
              </div>

              <div className="image-wrapper1">
                <img
                  src="/assets/images/sri lanka/sl3.png"
                  alt="Coastal scenery"
                  className="landscape-image"
                />
                <div className="image-caption"></div>
              </div>
            </div>
          </div>
          <br />
          <div className="landscape-text mt-20">
            <div className="philosophy-content">
              <p className="ontent__subtitle wow fadeInUp">
                Sri Lanka is an island shaped by rhythm: monsoon and sunlight,
                mountains and rainforest, tea gardens and temples. Its air is
                soft, its light is slow, and its people offer hospitality not as
                service, but as instinct. Here,
                <ul className="list">
                  <li className="li1">mornings begin with layered birdsong.</li>
                  <li className="li1">
                    Afternoons bring short, cleansing rain.
                  </li>
                  <li className="li1">
                    Evenings arrive gently, inviting your body to match the
                    island’s pace.
                  </li>
                </ul>
              </p>
              <p className="ontent__subtitle wow fadeInUp">
                Sri Lanka doesn’t ask you to escape your life. It reminds you
                how to return to it with ease. This is a place where nature
                still leads.
                <ul className="list">
                  <li className="li1">
                    Where silence is not emptiness, but medicine.
                  </li>
                  <li className="li1">
                    Where your attention settles without effort.
                  </li>
                  <li className="li1">
                    Where the mind—simply by being here—begins to soften.
                  </li>
                </ul>
                At RainDrops, we invite you to meet Sri Lanka not as a visitor,
                but as someone rediscovering a long-lost sense of calm.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .content__title {
          text-align: center;
        }
        .content__subtitle {
          max-width: 1200px;
        }

        .landscape-content {
          margin-bottom: 4rem;
        }

        .landscape-intro {
          font-size: 1.8rem;
          text-align: center;
          color: #4a7c59;
          font-weight: 300;
          margin-bottom: 2.5rem;
          font-style: italic;
          line-height: 1.4;
        }

        .landscape-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 3rem;
        }

        .landscape-description p {
          margin-bottom: 1.5rem;
        }

        .landscape-highlights {
          display: flex;
          justify-content: space-between;
          margin: 2rem 0;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .highlight-item {
          flex: 1;
          min-width: 200px;
          display: flex;
          align-items: flex-start;
          gap: 15px;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #4a7c59;
        }

        .highlight-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .highlight-item p {
          margin: 0;
          font-size: 1rem;
          color: #444;
        }

        .landscape-philosophy {
          font-size: 1.2rem;
          color: #2c5530;
          font-weight: 500;
          margin: 2.5rem 0;
          padding-left: 1rem;
          border-left: 3px solid #8a9a5b;
        }

        .philosophy-points {
          background: #f5f0e6;
          padding: 1.5rem 2rem;
          border-radius: 10px;
          margin: 2rem 0;
        }

        .philosophy-points p {
          margin: 0.8rem 0;
          color: #5d6d37;
          font-size: 1.05rem;
        }

        .raindrops-invitation {
          text-align: center;
          font-size: 1.3rem;
          color: #4a7c59;
          font-weight: 400;
          margin-top: 3rem;
          padding: 1.5rem;

          border-radius: 10px;
          border: 1px solid #dee2e6;
        }

        .horizontal-images-section {
          margin-top: 4rem;
        }

        .images-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 2rem;
        }

        .image-wrapper {
          overflow: hidden;
          border-radius: 5px;
          transition: all 0.3s ease;
          margin-top: 20px;
        }

        .image-wrapper1 {
          overflow: hidden;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .image-wrapper:hover {
          transform: translateY(-5px);
        }
        .image-wrapper1:hover {
          transform: translateY(-5px);
       
        }

        .landscape-image {
          width: 100%;
          height: 550px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .image-wrapper:hover .landscape-image {
          transform: scale(1.05);
        }
        .image-wrapper1:hover .landscape-image {
          transform: scale(1.05);
        }
        .image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;

          padding: 15px;
          font-size: 1rem;
          text-align: center;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        @media (max-width: 992px) {
          .images-container {
            grid-template-columns: repeat(2, 1fr);
          }

          .highlight-item {
            min-width: calc(50% - 1rem);
          }
        }

@media (max-width: 768px) {
  .content__title {
    font-size: 2rem;
  }

  .landscape-intro {
    font-size: 1.5rem;
  }

  .images-container {
    grid-template-columns: 1fr;
  }

  .highlight-item {
    min-width: 100%;
  }

  .landscape-image {
    height: 300px;
  }
  
  .list{
    text-align: left;
  }
  
  .image-wrapper{
    margin-top:0px;
  }  
  
  .content__subtitle {
    text-align: left;
  }
  
  .philosophy-content p {
    text-align: left;
  }
  
  .philosophy-content .content__subtitle {
    text-align: left;
  }
  
  .content__subtitle .list {
    text-align: left;
    padding-left: 20px;
  }
  
  .content__subtitle .li1 {
    text-align: left;
   
  }
    
 @media (min-width: 1024px) and (max-width: 1199px) {
   .container {
     max-width: 1400px;
   }
   .content__title {
     font-size: 2.1rem;
   }
        @media (max-width: 480px) {
          .container {
            padding: 0 15px;
          }

          .content__title {
            font-size: 1.8rem;
          }

          .landscape-intro {
            font-size: 1.3rem;
          }

          .landscape-description {
            font-size: 1rem;
          }
            .li{
           align-items: center;
            }      
        }
      `}</style>
    </>
  );
}

export default Landscapepage;
