"use client";
import React from "react";

function Mindmeets() {
  const icons = [
    "/assets/images/icon/meditation.png",
    "/assets/images/icon/brainstorm.png",
    "/assets/images/icon/leaf.png",
    "/assets/images/icon/target.png",
    "/assets/images/icon/candle.png",
  ];

  const points = [
    {
      text: "The Practice — Mindfulness of Breathing ",
      italic: "(Anapanasati),",
      text2: "— Loving-Friendliness ",
      italic2: "(Mettā).",
    },
    { text: "The Science — Calmness Creates Clarity" },
    { text: "The Environment — Nature as a Teacher" },
    { text: "The Experience — Personalized and Purposeful" },
    { text: "The Purpose — For Leaders, Thinkers, and Seekers" },
  ];

  // Adjust these values to change the phi1 image size
  const phi1Width = 410; // Change this value
  const phi1Height = 260; // Change this value

  return (
    <div className="rts__section philosophy__section section__padding">
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* Image - Left on desktop, below content on mobile */}
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="philosophy-image-wrapper position-relative">
              {/* Small image positioned at top */}
              <div
                className="small-top-image wow fadeInUp"
                style={{
                  position: "absolute",
                  top: "400px",
                  right: "-30px",
                  zIndex: 2,
                }}
              >
                <img
                  src="/assets/images/philosophy/p.png"
                  alt="Philosophy"
                  className="rounded-3"
                  style={{
                    width: `${phi1Width}px`,
                    height: `${phi1Height}px`,
                    objectFit: "cover",
                    border: "5px solid white",
                  }}
                />
              </div>

              {/* Main background image */}
              <img
                src="/assets/images/philosophy/phi1.png"
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
              />
            </div>
          </div>

          {/* Content - Right on desktop, first on mobile */}
          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <div className="philosophy-content">
              <h2 className="section__title">Mind Meets Nature - Philosophy</h2>

              <p className="philosophy__intro mb-4">
                At Rain Drops, wellness is not an escape — it's an awakening.
                Our philosophy combines the original mindfulness teachings of
                the Buddha with modern neuroscience to harmonize emotion and
                reason.
              </p>

              <div className="philosophy__points mb-4">
                <p></p>
              </div>

              <div className="philosophy__points mb-4">
                {points.map((p, index) => (
                  <div
                    key={index}
                    className="philosophy__point d-flex align-items-start mb-3"
                  >
                    <img
                      src={icons[index]}
                      alt="icon"
                      style={{
                        width: "24px",
                        height: "24px",
                        marginRight: "12px",
                      }}
                    />

                    <span className="point-text">
                      {p.text}
                      {p.italic && <i>{p.italic}</i>} <br />
                      <div className="text2">
                        {p.text2}

                        {p.italic && <i>{p.italic2}</i>}
                      </div>
                    </span>
                  </div>
                ))}
              </div>

              <p className="philosophy__highlight mb-3">
                Luxury meets consciousness — and together, they heal.
              </p>

              <p className="philosophy__description mb-3">
                At Rain Drops Wellness Resort, we blend Buddhist mindfulness and
                modern neuroscience to help you rediscover calm clarity. Every
                guided walk, mindful breath, and healthy meal is designed to
                align your rhythm with nature's flow.
              </p>

              <p className="philosophy__cta">
                {" "}
                <strong>@Rain Drops — Experience the Experience.</strong>
              </p>

              {/* 🔘 Read More Button */}
              <div className="mt-4">
                <a href="/research" className="learn-more-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Responsive Styles */}
      <style jsx>{`
        .philosophy__section {
          background: #ffffff;
          padding: 60px 0;
        }

        .philosophy__intro,
        .philosophy__description,
        .philosophy__highlight,
        .philosophy__cta,
        .point-text {
          line-height: 1.6;
        }

        .philosophy-image {
          height: 715px;
          transition: transform 0.4s ease;
        }

        .philosophy-image:hover {
          transform: translateY(-8px);
        }

        .small-top-image img {
          transition: transform 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .small-top-image img:hover {
          transform: scale(1.05);
        }

        /* ---- Button Styles ---- */
        .learn-more-btn {
          display: inline-block;
          background: #AB8A62;
          color: white;
          padding: 12px 28px;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 500;
          text-decoration: none;
          transition: 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .learn-more-btn:hover {
          background: #7a6432ff;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        /* Extra Small Mobile Devices (up to 375px) */
        @media (max-width: 375px) {
          .philosophy__section {
            padding: 30px 0;
          }

          .section__title {
            text-align: center;
            margin-bottom: 1rem;
          }

          .philosophy__intro,
          .philosophy__description,
          .philosophy__highlight,
          .philosophy__cta {
            font-size: 0.85rem;
            text-align: center;
          }

          .point-text {
            font-size: 0.85rem;
            text-align: left; /* Changed to left */
          }

          .philosophy-image {
            height: 200px;
            border-radius: 8px;
            margin-bottom: 1rem;
          }

          .small-top-image {
            position: absolute !important;
            top: 120px !important;
            right: -10px !important;
          }

          .small-top-image img {
            width: ${phi1Width * 0.3}px !important;
            height: ${phi1Height * 0.3}px !important;
            border: 3px solid white !important;
          }

          .philosophy__point {
            justify-content: flex-start;
            text-align: left; /* Changed to left */
            margin-bottom: 1rem;
          }

          .philosophy__point img {
            width: 20px !important;
            height: 20px !important;
            margin-right: 10px !important;
            flex-shrink: 0;
          }

          .learn-more-btn {
            align-items: center;
            margin-left: 70px;
            font-size: 15px;
            padding: 11px 24px;
          }
        }

        /* Small Mobile Devices (375px to 575px) */
        @media (min-width: 375px) and (max-width: 423px) {
          .philosophy__section {
            padding: 35px 0;
          }

          .section__title {
            font-size: 1.6rem;
            text-align: center;
            margin-bottom: 1.2rem;
          }

          .philosophy__intro,
          .philosophy__description,
          .philosophy__highlight,
          .philosophy__cta {
            font-size: 0.9rem;
            text-align: center;
          }

          .point-text {
            font-size: 0.9rem;
            text-align: left; /* Changed to left */
          }

          .philosophy-image {
            height: 220px;
            border-radius: 8px;
            margin-bottom: 1rem;
          }

          .small-top-image {
            position: absolute !important;
            top: 140px !important;
            right: -12px !important;
          }

          .small-top-image img {
            width: ${phi1Width * 0.35}px !important;
            height: ${phi1Height * 0.35}px !important;
            border: 3px solid white !important;
          }

          .philosophy__point {
            justify-content: flex-start;
            text-align: left; /* Changed to left */
            margin-bottom: 1rem;
          }

          .learn-more-btn {
            padding: 11px 24px;
            font-size: 0.95rem;
            width: auto;
            margin-left: 100px;
          }
          .text2 {
            margin-left: 85px;
          }
        }

        /* Mobile Large (576px to 767px) */
        @media (min-width: 424px) and (max-width: 767px) {
          .philosophy__section {
            padding: 40px 0;
          }

          .section__title {
            font-size: 1.8rem;
            text-align: center;
            margin-bottom: 1.5rem;
          }

          .philosophy__intro,
          .philosophy__description,
          .philosophy__cta {
            font-size: 0.95rem;
            text-align: center;
          }

          .philosophy__highlight {
            text-align: left;
          }

          .point-text {
            font-size: 0.95rem;
            text-align: left; /* Changed to left */
          }

          .philosophy-image {
            height: 280px;
            border-radius: 10px;
            margin-bottom: 1.5rem;
          }

          .small-top-image {
            position: absolute !important;
            top: 180px !important;
            right: -15px !important;
          }

          .small-top-image img {
            width: ${phi1Width * 0.45}px !important;
            height: ${phi1Height * 0.45}px !important;
            border: 4px solid white !important;
          }

          .philosophy__point {
            justify-content: flex-start;
            text-align: left; /* Changed to left */
          }

          .learn-more-btn {
            align-items: center;
            margin-left: 120px;
            font-size: 15px;
            padding: 11px 24px;
          }
          .text2 {
            margin-left: 90px;
          }
        }

        /* Tablet (768px to 991px) */
        @media (min-width: 768px) and (max-width: 991px) {
          .philosophy__section {
            padding: 50px 0;
          }

          .section__title {
            font-size: 2rem;
            text-align: left;
            margin-bottom: 1.5rem;
          }

          .philosophy__intro,
          .philosophy__description,
          .philosophy__highlight,
          .philosophy__cta,
          .point-text {
            font-size: 1rem;
            text-align: left;
          }

          .philosophy-image {
            height: 420px;
            border-radius: 12px;
          }

          .small-top-image {
            position: absolute !important;
            top: 280px !important;
            right: -20px !important;
          }

          .small-top-image img {
            width: ${phi1Width * 0.6}px !important;
            height: ${phi1Height * 0.6}px !important;
            border: 4px solid white !important;
          }

          .philosophy__point {
            justify-content: flex-start;
            text-align: left;
          }
          .text2 {
            margin-left: 95px;
          }
        }

        /* Small Laptop (992px to 1199px) */
        @media (min-width: 992px) and (max-width: 1199px) {
          .philosophy__section {
            padding: 60px 0;
          }

          .section__title {
            font-size: 2.5rem;
            text-align: left;
            margin-bottom: 1.8rem;
          }

          .philosophy__intro,
          .philosophy__description,
          .philosophy__highlight,
          .philosophy__cta,
          .point-text {
            text-align: left;
          }

          .philosophy-image {
            height: 700px;
            border-radius: 12px;
          }

          .small-top-image {
            position: absolute !important;
            top: 620px !important;
            right: -25px !important;
          }

          .small-top-image img {
            width: ${phi1Width * 0.75}px !important;
            height: ${phi1Height * 0.75}px !important;
            border: 4px solid white !important;
          }

          .text2 {
            margin-left: 95px;
          }
        }

        /* Desktop (1200px to 1399px) */
        @media (min-width: 1200px) and (max-width: 1399px) {
          .philosophy__section {
            padding: 70px 0;
          }

          .section__title {
            text-align: left;
            margin-bottom: 2rem;
          }

          .philosophy__intro,
          .philosophy__description,
          .philosophy__highlight,
          .philosophy__cta,
          .point-text {
            text-align: left;
          }

          .philosophy-image {
            height: 600px;
            border-radius: 15px;
          }

          .small-top-image {
            position: absolute !important;
            top: 450px !important;
            right: -25px !important;
          }

          .small-top-image img {
            width: ${phi1Width * 0.85}px !important;
            height: ${phi1Height * 0.85}px !important;
            border: 5px solid white !important;
          }

          .text2 {
            margin-left: 115px;
          }
        }

        /* Large Desktop (1400px and above) */
        @media (min-width: 1400px) {
          .philosophy__section {
            padding: 80px 0;
          }
          .text2 {
            margin-left: 95px;
          }

          .section__title {
            text-align: left;
            margin-bottom: 2.2rem;
          }

          .philosophy__intro,
          .philosophy__description,
          .philosophy__highlight,
          .philosophy__cta,
          .point-text {
            text-align: left;
            line-height: 1.7;
          }

          .philosophy-image {
            height: 615px;
            border-radius: 15px;
          }

          .small-top-image {
            position: absolute !important;
            top: 420px !important;
            right: -30px !important;
          }

          .small-top-image img {
            width: ${phi1Width}px !important;
            height: ${phi1Height}px !important;
            border: 5px solid white !important;
          }
        }

        /* Landscape Mobile Optimization */
        @media (max-height: 500px) and (orientation: landscape) {
          .philosophy-image {
            height: 250px !important;
          }

          .small-top-image {
            top: 160px !important;
          }
        }

        .fallback-image {
          font-size: 1.2rem;
          font-weight: 500;
        }

        /* Ensure proper spacing and alignment */
        .philosophy-image-wrapper {
          margin-bottom: 2rem;
        }

        .philosophy-content {
          padding: 0 15px;
        }

        /* Improve list item alignment */
        .philosophy__point {
          align-items: flex-start;
        }

        .point-text {
          flex: 1;
        }
      `}</style>
    </div>
  );
}

export default Mindmeets;
