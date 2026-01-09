"use client";
import React from "react";

function Guardians() {
  const researchExperiences = [
    {
      id: 2,
      title: "The RainDrops Community is not a surrounding village.",
      description: (
        <div className="text-content-inner">
          <div className="paragraph-group">
            <p className="intro-text">
              They are part of RainDrops itself- land stewards, food growers,
              knowledge holders, and guardians of
            </p>
          </div>

          <div className="support-section mt-10">
            <p className="intro-text font-medium border-b-2 border-gray-300 inline-block pb-1">
              We protect and uplift the community because:
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start">
                They are the forest’s first protectors
              </li>
              <li className="flex items-start">
                {" "}
                Their dignity ensures the forest’s survival
              </li>
              <li className="flex items-start">
                Their continuity prevents exploitation
              </li>
            </ul>
            <p>
              When communities thrive, forests are protected - not by force, but
              by belonging. Your presence strengthens this system.
            </p>
          </div>
        </div>
      ),
      purpose: "",
      image: "/assets/images/about/ab5.png",
      imageSide: "right",
    },

    {
      id: 3,
      title: "You Protect Nature by Uplifting People",
      description: (
        <div className="text-content-inner">
          <div className="paragraph-group">
            <p className="intro-text">
              Protection does not begin with restriction. It begins with
              economic dignity, knowledge continuity and shared purpose. By
              participating at RainDrops, you help:
            </p>
          </div>
          <div className="support-section mt-10">
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start">
                Sustain livelihoods that protect the rainforest
              </li>
              <li className="flex items-start">
                {" "}
                Preserve traditional ecological knowledge
              </li>
              <li className="flex items-start">
                {" "}
                Empower youth to choose stewardship over extraction
              </li>
            </ul>
            <p>This is how conservation becomes enduring.</p>
          </div>
        </div>
      ),
      purpose: "",
      image: "/assets/images/about/ab4.png",
      imageSide: "left",
    },
    {
      id: 2,
      title: "You Experience Research-Informed Calm in a Living System",
      description: (
        <div className="text-content-inner">
          <div className="paragraph-group">
            <p className="intro-text">
              Mindfulness research shows that calm deepens when:
            </p>
          </div>
          <div className="support-section mt-10">
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start">The environment is safe</li>
              <li className="flex items-start">Relationships are respectful</li>
              <li className="flex items-start">The mind is not overloaded</li>
            </ul>
            <p>
              RainDrops integrates these conditions naturally — through
              community partnership, protected nature, and mindful living.
            </p>
          </div>
        </div>
      ),
      purpose: "",
      image: "/assets/images/about/ab3.png",
      imageSide: "right",
    },
  ];

  return (
    <div className="rts__section philosophy__section section__padding">
      <div className="container">
        {/* Main Title Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-10 text-center">
            <h2 className="main__title">Guardians of World Heritage</h2>
          </div>
        </div>

        {/* Research Experiences Sections */}
        {researchExperiences.map((research, index) => (
          <div
            key={research.id}
            className="row g-4 g-lg-5 align-items-center mb-5"
          >
            {/* Image - Alternating sides */}
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

            {/* Content - Alternating sides */}
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

      {/* Responsive Styles - Mobile First */}
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

        /* Mobile First (≤575px) */
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

        /* Small Mobile (≤375px) */
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

        /* Mobile Large (576px - 767px) */
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

        /* Tablet (768px - 991px) */
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

        /* Laptop (992px - 1199px) */
        @media (min-width: 992px) {
          .philosophy__section {
            padding: 5rem 0;
          }
          .main__title {
            font-size: 2rem;
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

        /* Large Desktop (≥1200px) */
        @media (min-width: 1200px) {
          .philosophy__section {
            padding: 5rem 0;
          }

          .main__title {
            margin-top: -50px;
          }

          .philosophy-image {
            height: 350px;
          }
        }

        /* Extra Large Screens (≥1400px) */
        @media (min-width: 1400px) {
          .philosophy-image {
            height: 380px;
          }
        }

        /* Fallback image */
        .fallback-image {
          font-size: 1.2rem;
          font-weight: 500;
        }

        /* Ensure proper spacing on all devices */
        .container {
          padding-left: 15px;
          padding-right: 15px;
        }

        /* Improve readability on mobile */
        @media (max-width: 767px) {
          .philosophy__highlight {
            text-align: justify;
          }
        }

        /* Add spacing between sections */
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

export default Guardians;
