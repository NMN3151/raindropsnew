"use client";
import React from "react";

function Location() {
 
  const phi1Width = 280; 
  const phi1Height = 250; 

  return (
    <div className="rts__section philosophy__section section__padding">
      <div className="container">
        <h2 className="content__title wow fadeInUp">
          Location - RainDrops Wellness Villa
        </h2>
        <p
          className="location__title wow fadeInUp subtitle"
          style={{ fontSize: "1.25rem", marginBottom: "25px", lineHeight: 1.5 }}
        >
          Where Mind Meets Nature at the Edge of a Living Rainforest
        </p>
        <div className="row g-5 align-items-start">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="philosophy-image-wrapper position-relative">
              <div
                className="small-top-image wow fadeInUp d-none d-lg-block"
                style={{
                  position: "absolute",
                  top: "420px",
                  right: "-90px",
                  zIndex: 2,
                }}
              >
                <img
                  src="/assets/images/weather/wl4.png"
                  alt="Philosophy"
                  className="rounded-3 small-image-philosophy"
                  loading="lazy"
                />
              </div>
              <div
                className="small-top-image2 wow fadeInUp d-none d-lg-block"
                style={{
                  position: "absolute",
                  top: "420px",
                  right: "-380px",
                  zIndex: 2,
                }}
              >
                <img
                  src="/assets/images/weather/wl5.png"
                  alt="Philosophy"
                  className="rounded-3 small-image-philosophy"
                  loading="lazy"
                />
              </div>
              <div
                className="small-top-image3 wow fadeInUp d-none d-lg-block"
                style={{
                  position: "absolute",
                  top: "420px",
                  right: "-670px",
                  zIndex: 2,
                }}
              >
                <img
                  src="/assets/images/weather/wl6.png"
                  alt="Philosophy"
                  className="rounded-3 small-image-philosophy"
                  loading="lazy"
                />
              </div>
             
              <img
                src="/assets/images/weather/wl3.png"
                alt="Mind Meets Nature"
                className="philosophy-image w-100 rounded-3"
                style={{ objectFit: "cover" }}
                onError={(e) => {
                  e.target.style.backgroundColor = "#f5f5f5";
                  e.target.style.display = "flex";
                  e.target.style.alignItems = "center";
                  e.target.style.justifyContent = "center";
                  e.target.style.color = "#666";
                  e.target.style.fontSize = "1.2rem";
                  e.target.style.fontWeight = "500";
                  e.target.innerHTML = "Philosophy Image";
                  e.target.classList.add("fallback-image");
                }}
                loading="lazy"
              />
            </div>
          </div>

          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <div className="philosophy-content">
              <p className="content__text wow fadeInUp">
                <span
                  style={{
                    fontStyle: "italic",
                    fontFamily: "BrittanySignature",
                    fontSize: 19,
                  }}
                >
                  RainDrops
                </span>
                &nbsp;Wellness Villa is nestled on the edge of the 
                <strong>Sinharaja UNESCO Rainforest</strong>, in the village
                of Mederipitiya, Deniyaya in southern Sri Lanka. Hidden within a
                valley of tea, pepper and rainforest hills, Rain Drops sits on
                the former family estate of Dolagahawaththa, a landscape shaped
                by mountain streams, lush jungle and year-round misty rain.<br></br><br></br>
                From here, the rainforest is not a postcard view in the distance
                - it is your neighbor, your soundtrack and your teacher.
              </p>
              <div className="content__text wow fadeInUp">
                <p>
                  <strong>Villa Location – Sri Lanka</strong>
                  <br />
                  <br />
                  Rain Drops Wellness Villa
                  <br />
                  Sinharaja, Dolagahawaththa,
                  <br />
                  Mederipitiya, Deniyaya, Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="content__subtitle wow fadeInUp">
          This region carries the quiet charm of rural Sri Lanka: small
          villages, terraced paddy fields, spice gardens and temple bells
          carried on the evening breeze. It is still largely untouched by mass
          tourism, making it an ideal setting for deep rest, original
          mindfulness practice and genuine nature connection.
        </p>
        <div className="contact__map mt-4">
          <iframe
            className="w-100"
            height={480}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.350663147313!2d80.5570833!3d6.3424847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e34ae8877483%3A0x880f5da096aa17b9!2sRain%20Drops%20Villa!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
            title="Map showing the location of Dolagahawatte, Mediripitiya, Deniyaya"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <style jsx>{`
        .philosophy__section {
          background: #ffffff;
          padding: 60px 0;
        }

        .philosophy-image {
          height: 715px;
          transition: transform 0.4s ease;
          border-radius: 12px;
        }

        .philosophy-image:hover {
          transform: translateY(-8px);
        }

        .content__title {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #333;
        }

        .content__title.subtitle {
          font-size: 16px !important;
          margin-bottom: 25px !important;
          line-height: 1.5 !important;
        }

        .content__text {
          font-size: 16px !important;
          margin-bottom: 30px !important;
          line-height: 1.5 !important;
        }

       
        .small-image-philosophy {
          width: ${phi1Width}px;
          height: ${phi1Height}px;
          object-fit: cover;
        }
        @media (min-width: 992px) and (max-width: 1199px) {
          .philosophy__section {
            padding: 60px 0;
          }

         
          .philosophy-image {
            height: 550px;
          }

          .content__title {
            font-size: 2.3rem;
          }
          .content__title.subtitle {
            font-size: 1.35rem;
          }
          .content__text {
            font-size: 1.08rem;
            line-height: 1.3;
          }

          .small-top-image {
            top: 420px !important;
            right: -70px !important;
          }
          .small-top-image2 {
            top: 420px !important;
            right: -280px !important;
          }
          .small-top-image3 {
            top: 420px !important;
            right: -490px !important;
          }

          .small-image-philosophy {
            width: 200px !important; 
            height: 120px !important;
          }
        }

    
        .philosophy-image-wrapper {
          margin-bottom: 2rem;
        }

        .philosophy-content {
          padding: 0;
        }

        .fallback-image {
          font-size: 1.2rem;
          font-weight: 500;
          padding: 20px;
          text-align: center;
        }

        .contact__map {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .contact__map iframe {
          border-radius: 12px;
        }
      @media (max-width: 320px){  
    .philosophy-image
      height:100px;
    }
      }
      `}</style>
    </div>
  );
}

export default Location;
