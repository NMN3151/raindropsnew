"use client";
import React from "react";

function Countrypage() {
  return (
    <>
      <div className="rts__section philosophy__section section__padding">
        <div className="container">
          <h2 className="content__title wow fadeInUp">
            A COUNTRY ROOTED IN ORIGINAL WISDOM
          </h2>
          <p
            className="location__title wow fadeInUp subtitle"
            style={{
              fontSize: "1.25rem",
              marginBottom: "25px",
              lineHeight: 1.5,
            }}
          >
            Understanding Original Mindfulness — Without Religion, Without
            Modification
          </p>
          <div className="country_text">
            <p className="content__subtitle wow fadeInUp">
              Long before mindfulness became a global trend, Sri Lanka carried
              an unbroken connection to the{" "}
              <strong>original teachings of the Buddha</strong>, preserved in
              their earliest form for over 2,600 years. RainDrops and ManoLead
              honor the <strong>first discourse</strong> — the{" "}
              <em>Dhammacakkappavattana Sutta</em> — not as religion, but as a{" "}
              <strong>human technology for understanding the mind</strong>. The
              original teaching explains:
            </p>
          </div>

          <div className="content_layout">
            <div className="img_container">
              <div className="image-wrapper">
                <img
                  src="/assets/images/sri lanka/sl17.png"
                  alt="Ancient Buddhist site in Sri Lanka"
                />
              </div>
            </div>

            <div className="text_container">
              <div className="text_box">
                <ul className="tcontent__subtitle wow fadeInUp">
                  <li>how perception works</li>
                  <li>how suffering arises</li>
                  <li>how calmness becomes a trainable skill</li>
                  <li>how clarity leads to wise action</li>
                </ul>

                <div className="">
                  <p>
                    This is the foundation of our work. Not modern adaptations.
                    Not diluted interpretations. Just the{" "}
                    <strong>original human science of the mind</strong> —
                    practical, observable, evidence-based. We respect the
                    teaching not as faith, but as{" "}
                    <strong>a psychological model that works</strong>, no matter
                    your culture, background, or belief system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Base Styles - Desktop/Laptop (unchanged) */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0px 20px;
        }

        .content__title {
          text-align: center;
          font-size: 2.2rem;
          margin-bottom: 15px;
        }

        .subtitle {
          text-align: center;
          font-size: 1.25rem;
          margin-bottom: 25px;
          line-height: 1.5;
        }

        .country_text {
          margin: 40px 0;
        }

        .content__subtitle {
          text-align: justify;
          font-size: 1.05rem;
          line-height: 1.7;
          color: #2d2d2d;
        }

        .content_layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin-top: 40px;
          align-items: start;
        }

        .img_container {
          order: 1;
        }

        .text_container {
          order: 2;
        }

        .text_box {
          background-color: #d4dacb;
          padding: 40px 35px;
          border-radius: 5px;
          height: 460px;
          width: 400px;
        }

        .tcontent__subtitle {
          list-style: none;
          padding: 0;
        }

        .tcontent__subtitle li {
          padding: 12px 0;
          color: #2d2d2d;
          font-size: 1.05rem;
          line-height: 1.6;
          position: relative;
          padding-left: 20px;
        }

        .tcontent__subtitle li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #2d2d2d;
          font-weight: bold;
          font-size: 1.3rem;
        }

        .image-wrapper {
          width: 758px;
          height: 400px;
          margin-top: 35px;
          overflow: hidden;
          border-radius: 5px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        @media (min-width: 1024px) and (max-width: 1199px) {
          .text_box {
            width: 500px;
            height: 480px;

            margin: 0 auto;
            max-width: 600px;
          }
            
          .text_container {
            margin-left: -300px;
          }
        }

        @media (min-width: 992px) and (max-width: 1023px) {
          .text_box {
            width: 100%;
            height: auto;
            min-height: 380px;
            padding: 35px 30px;
            margin: 0 auto;
            max-width: 600px;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .container {
            padding: 0 25px;
          }

          .content__title {
            font-size: 1.9rem;
            margin-bottom: 12px;
          }

          .subtitle {
            font-size: 1.15rem;
            margin-bottom: 20px;
          }

          .country_text {
            margin: 35px 0;
          }

          .content_layout {
            grid-template-columns: 1fr;
            margin-top: 30px;
            gap: 30px;
          }

          .img_container {
            order: 1;
            width: 100%;
          }

          .text_container {
            order: 2;
            width: 100%;
          }

          .text_box {
            width: 100%;
            height: auto;
            min-height: 380px;
            padding: 35px 30px;
            margin: 0 auto;
            max-width: 600px;
          }

          .image-wrapper {
            width: 100%;
            margin-top: 0;
            max-width: 600px;
            margin: 0 auto;
          }

          .image-wrapper img {
            height: 100%;
          }

          .content__subtitle,
          .tcontent__subtitle li {
            font-size: 1rem;
            line-height: 1.6;
          }
        }

        @media (min-width: 576px) and (max-width: 767px) {
          .container {
            padding: 0 20px;
          }

          .content__title {
            font-size: 1.75rem;
            margin-bottom: 10px;
          }

          .subtitle {
            font-size: 1.1rem;
            margin-bottom: 18px;
          }

          .country_text {
            margin: 30px 0;
          }

          .content_layout {
            grid-template-columns: 1fr;
            margin-top: 25px;
            gap: 25px;
          }

          .text_box {
            width: 100%;
            height: auto;
            min-height: 350px;
            padding: 30px 25px;
            max-width: 500px;
            margin: 0 auto;
          }

          .image-wrapper {
            width: 100%;
            margin-top: 0;
            max-width: 500px;
            margin: 0 auto;
          }

          .image-wrapper img {
            height: 100%;
          }

          .content__subtitle {
            font-size: 0.98rem;
            line-height: 1.6;
          }

          .tcontent__subtitle li {
            font-size: 0.98rem;
            line-height: 1.5;
            padding: 10px 0;
            padding-left: 18px;
          }

          .tcontent__subtitle {
            margin-bottom: 25px;
          }
        }

        @media (max-width: 575px) {
          .container {
            padding: 0 15px;
          }

          .content__title {
            font-size: 1.6rem;
            margin-bottom: 8px;
            line-height: 1.3;
          }

          .subtitle {
            font-size: 1rem;
            margin-bottom: 15px;
            line-height: 1.4;
          }

          .country_text {
            margin: 25px 0;
          }

          .content__subtitle {
            font-size: 0.95rem;
            line-height: 1.6;
            text-align: left;
          }

          .content_layout {
            grid-template-columns: 1fr;
            margin-top: 20px;
            gap: 20px;
          }

          .text_box {
            width: 100%;
            height: auto;
            min-height: 320px;
            padding: 25px 20px;
            margin: 0 auto;
          }

          .image-wrapper {
            width: 100%;
            margin-top: 0;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
          }

          .image-wrapper img {
            height: 100%;
          }

          .tcontent__subtitle li {
            font-size: 0.95rem;
            line-height: 1.5;
            padding: 8px 0;
            padding-left: 16px;
          }

          .tcontent__subtitle li:before {
            font-size: 1.2rem;
          }

          .tcontent__subtitle {
            margin-bottom: 20px;
          }
        }

        @media (max-width: 375px) {
          .container {
            padding: 0 12px;
          }

          .content__title {
            font-size: 1.45rem;
          }

          .subtitle {
            font-size: 0.95rem;
            margin-bottom: 12px;
          }

          .country_text {
            margin: 20px 0;
          }

          .content__subtitle {
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .text_box {
            padding: 22px 18px;
            min-height: 300px;
          }

          .image-wrapper img {
            height: 200px;
          }

          .tcontent__subtitle li {
            font-size: 0.9rem;
            line-height: 1.5;
            padding-left: 15px;
          }
        }
      `}</style>
    </>
  );
}

export default Countrypage;
