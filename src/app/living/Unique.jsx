"use client";
import React from "react";

function Unique() {
  return (
    <>
      <div className="rts__section philosophy__section section__padding">
        <div className="container">
          {/* Text content section */}
          <h2 className="content__title wow fadeInUp">
            What Makes RainDrops Truly Unique
          </h2>

          {/* Horizontal images section */}
          <div
            className="horizontal-images-section wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="images-container">
              <div className="text-container">
                <p>
                  RainDrops is not luxury placed into nature. It is luxury
                  shaped by restraint, relationship, and responsibility.
                </p>
                <p>What sets RainDrops apart:</p>
                <ul>
                  <li>
                    The community is inside the experience, not outside it
                  </li>
                  <li>Nature is honored, not extracted</li>

                  <li>Insight Partners become contributors, not observers</li>
                </ul>

                <p>Every RainDrops experience quietly supports:</p>
                <ul>
                  <li>
                    A community that can thrive without harming the forest
                  </li>
                  <li>Knowledge systems that protect biodiversity</li>

                  <li>
                    A future where the next generation chooses stewardship over
                    sacrifice
                  </li>
                </ul>

                <p>
                  <strong>
                    No slogans | No performances | Just alignment.
                  </strong>
                </p>

                <p>
                  Cultivating Calmness - Together. Calm does not arise in
                  isolation. At RainDrops, calm is cultivated through:
                </p>
                <ul>
                  <li>Forests left untouched</li>
                  <li>Water sources protected upstream</li>
                  <li>Communities living with dignity</li>
                  <li>Insight Partners slowing down with awareness</li>
                </ul>
              </div>

              <div className="image-wrapper">
                <img
                  src="/assets/images/about/partnership/teaworkers.png"
                  alt="Temple architecture"
                  className="landscape-image"
                />
                <div className="image-caption"></div>
              </div>

              <div className="image-wrapper1">
                <img
                  src="/assets/images/about/partnership/treeclimb.png"
                  alt="Coastal scenery"
                  className="landscape-image small"
                />
                <p className="image-text">
                  When the community is secure, the forest is protected. When
                  the forest is protected, minds settle. When minds settle,
                  wiser choices emerge. <br /> <br />
                  <strong>
                    This is not an offering. <br />
                    This is a shared process.
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .text-container {
          max-width: 600px;
          margin-bottom: 20px;
          grid-column: span 2;
        }
        .content__title {
          text-align: center;
        }

        .landscape-content {
          margin-bottom: 4rem;
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

        /* Horizontal images styling */
        .horizontal-images-section {
          margin-top: 4rem;
        }

        .images-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0px;
          margin-top: 2rem;
        }

        .image-wrapper {
          display: flex;
          overflow: hidden;
          transition: all 0.3s ease;
          width: 400px;
          height: 600px;
          grid-column: 3;
          grid-row: 1;
        }

        .image-wrapper1 {
          transition: all 0.3s ease;
          height: 600px;
          object-fit: fill;
          grid-column: 4;
          grid-row: 1;
          display: flex;
          flex-direction: column;
        }

        .landscape-image {
          height: 550px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
          width: 90%;
        }

        .landscape-image.small {
          height: 300px;
          width: 100%;
          object-fit: cover;
        }

        .image-text {
          height: 200px;
          padding: 20px;
          font-size: 1rem;
          line-height: 1.6;
          color: #444;
          align-items: center;
          margin-top: 20px;
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

        /* Mobile Responsive Styles - Only added these */
        @media (max-width: 768px) {
          .container {
            padding: 0 15px;
          }

          .content__title {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
          }

          .horizontal-images-section {
            margin-top: 2rem;
          }

          .images-container {
            display: flex;
            flex-direction: column;
            gap: 30px;
            margin-top: 1rem;
          }

          .text-container {
            max-width: 100%;
            margin-bottom: 30px;
            grid-column: 1;
          }

          .text-container p {
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 1rem;
          }

          .text-container ul {
            padding-left: 20px;
            margin-bottom: 1.5rem;
          }

          .text-container li {
            margin-bottom: 0.5rem;
            font-size: 0.95rem;
          }

          .text-container strong {
            font-size: 1rem;
          }

          .image-wrapper {
            width: 100%;
            height: auto;
            grid-column: 1;
            grid-row: auto;
            margin: 0;
            order: 2;
          }

          .image-wrapper1 {
            width: 100%;
            height: auto;
            grid-column: 1;
            grid-row: auto;
            order: 3;
            display: flex;
            flex-direction: column;
          }

          .landscape-image {
            height: 300px;
            width: 100%;
          }

          .landscape-image.small {
            height: 250px;
            width: 100%;
          }

          .image-text {
            height: auto;
            padding: 15px;
            font-size: 0.95rem;
            line-height: 1.5;
            margin-top: 15px;
            text-align: center;
          }

          .image-text br {
            display: none;
          }

          .image-text strong {
            display: block;
            margin-top: 10px;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .content__title {
            font-size: 1.6rem;
          }

          .container {
            padding: 0 12px;
          }

          .images-container {
            gap: 25px;
          }

          .text-container p {
            font-size: 0.95rem;
          }

          .text-container li {
            font-size: 0.9rem;
          }

          .landscape-image {
            height: 250px;
          }

          .landscape-image.small {
            height: 250px;
            object-fit: cover;
          }

          .image-text {
            font-size: 0.9rem;
            padding: 12px;
          }

          .image-text strong {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 360px) {
          .content__title {
            font-size: 1.4rem;
          }

          .text-container p,
          .text-container li {
            font-size: 0.85rem;
          }

          .landscape-image {
            height: 200px;
          }

          .landscape-image.small {
            height: 170px;
          }

          .image-text {
            font-size: 0.85rem;
            padding: 10px;
          }
        }

        /* Keep existing media queries for larger screens */
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

          .images-container {
            grid-template-columns: 1fr;
          }

          .highlight-item {
            min-width: 100%;
          }

          .landscape-image {
            height: 300px;
          }

          .list {
            text-align: left;
          }

          .image-wrapper {
            margin-top: 0px;
          }
        }

        @media (min-width: 1024px) and (max-width: 1199px) {
          .container {
            max-width: 1400px;
          }
          .content__title {
            font-size: 2.1rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 15px;
          }

          .content__title {
            font-size: 1.8rem;
          }

          .li {
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}

export default Unique;