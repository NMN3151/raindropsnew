"use client";
import React from "react";

function sre() {
  const researchExperiences = [
    {
      id: 1,
      title: "The Breath of the Forest Study",
      description:
        "Guided mindful-breath walks through secluded rainforest paths. Soft biometric tracking reveals how the breath naturally syncs with birdsong, light, and forest air.",
      purpose:
        "Purpose: To understand how nature restores clarity and emotional balance.",
      image: "/assets/images/research/rc1.png",
      imageSide: "left",
    },
    {
      id: 2,
      title: "Water And Mind - The Flow Project",
      description:
        "A serene exploration beside streams and waterfalls. Biometric insights capture how flowing water calms the heart, steadies the breath, and quiets the mind.",
      purpose:
        "Purpose: To study how water enhances stillness, focus, and inner ease.",
      image: "/assets/images/research/rc2.png",
      imageSide: "right",
    },
    {
      id: 3,
      title: "The Silence Experiment",
      description:
        "A structured half-day of silence inside Sinharaja, supported by facilitators trained in original mindfulness practices. Through guided orientation and gentle sensory cues, participants learn to observe sound, breath, and emotion as they arise and dissolve within the living rainforest.",
      purpose:
        "Purpose: To explore how nature restores attention and emotional regulation.",
      image: "/assets/images/research/rc3.png",
      imageSide: "left",
    },
    {
      id: 4,
      title: "The Human–Nature Dialogue Archive",
      description:
        "Each villa includes a Rain Journal — guests’ written reflections and sketches form part of an anonymous collective archive of lived experiences, feeding ongoing research with ManoLead Global.",
      purpose:
        "Purpose: To capture how stillness and nature reveal the mind’s patterns.",
      image: "/assets/images/research/rc4.png",
      imageSide: "right",
    },
  ];

  return (
    <div className="rts__section philosophy__section section__padding">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-10 text-center">
            <h2 className="main__title">Signature Research Experiences</h2>
          </div>
        </div>

        {researchExperiences.map((research, index) => (
          <div
            key={research.id}
            className="row g-4 g-lg-5 align-items-center mb-5"
          >
            <div
              className={`col-12 col-lg-6 order-2 ${
                research.imageSide === "left" ? "order-lg-1" : "order-lg-2"
              }`}
            >
              <div className="philosophy-image-wrapper">
                <img
                  src={research.image}
                  alt={research.title}
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
                    e.target.innerHTML = "Research Image";
                    e.target.classList.add("fallback-image");
                  }}
                  loading="lazy"
                />
              </div>
            </div>

            <div
              className={`col-12 col-lg-6 order-1 ${
                research.imageSide === "left" ? "order-lg-2" : "order-lg-1"
              }`}
            >
              <div className="philosophy-content">
                <p className="section__title">{research.title}</p>
                <p className="philosophy__highlight">{research.description}</p>
                <p className="philosophy__cta">{research.purpose}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .philosophy__section {
          background: #ffffff;
          padding: 3rem 0;
        }

        .main__subtitle {
          line-height: 1.6;
          font-weight: 300;
          max-width: 600px;
          margin: 0 auto;
        }

        .section__title {
          line-height: 1.2;
          margin-bottom: 1.5rem;
          font-weight: 400;
        }

        .philosophy-image {
          width: 100%;
          border-radius: 2px;
          transition: transform 0.4s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .philosophy-image:hover {
          transform: translateY(-5px);
        }

        .philosophy-content {
          text-align: center;
          margin-bottom: 2rem;
        }

        .main__subtitle {
          font-size: 1rem;
          padding: 0 1rem;
        }

        .section__title {
          font-size: 20px;
          text-align: center;
        }

        .philosophy-image {
          height: 220px;
          margin: 0 auto;
        }

        @media (max-width: 375px) {
          .philosophy__section {
            padding: 2rem 0;
          }

          .main__subtitle {
            font-size: 0.9rem;
          }

          .section__title {
            font-size: 20px;
          }

          .philosophy-image {
            height: 200px;
          }
        }

        @media (min-width: 576px) {
          .philosophy-content {
            text-align: left;
            margin-bottom: 0;
          }

          .main__subtitle {
            font-size: 1.1rem;
          }

          .section__title {
            font-size: 20px;
            text-align: left;
          }

          .philosophy-image {
            height: 250px;
          }
        }

        @media (min-width: 768px) {
          .philosophy__section {
            padding: 4rem 0;
          }

          .main__subtitle {
            font-size: 1.2rem;
          }

          .section__title {
            font-size: 20px;
          }

          .philosophy-image {
            height: 280px;
          }
        }

        @media (min-width: 992px) {
          .philosophy__section {
            padding: 5rem 0;
          }

          .main__subtitle {
            font-size: 1.3rem;
          }

          .main__title {
            margin-top: -100px;
          }

          .section__title {
            font-size: 20px;
          }

          .philosophy-image {
            height: 320px;
          }
        }

        @media (min-width: 1200px) {
          .philosophy__section {
            padding: 6rem 0;
          }

          .main__title {
            margin-top: -150px;
          }

          .philosophy-image {
            height: 350px;
          }
        }

        @media (min-width: 1400px) {
          .philosophy-image {
            height: 380px;
          }
        }

        .fallback-image {
          font-size: 1.2rem;
          font-weight: 500;
        }

        .container {
          padding-left: 15px;
          padding-right: 15px;
        }

        @media (max-width: 767px) {
          .philosophy__highlight {
            text-align: justify;
          }
        }

        .mb-5 {
          margin-bottom: 3rem !important;
        }

        @media (max-width: 768px) {
          .mb-5 {
            margin-bottom: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default sre;
