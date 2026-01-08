import React, { useState } from "react";
import Image from "next/image";

function SideToSideContainers() {
  const [showPopup, setShowPopup] = useState(false);

  const sections = [
    {
      id: 1,
      title: "IDEAL CLIENT PROFILES",
      titleSecondLine: "(WHO IT SELLS BEST TO)",
      subtitle: "RainDrops is best suited for:",
      imagePosition: "right",
      image: "/assets/images/travelpartners/pickingteaplants.JPG",
      imageAlt: "Guest enjoying tea ceremony in lush garden setting",
      items: [
        "CEOs, founders and senior leaders",
        "Couples seeking quiet, meaningful escapes",
        "Conscious luxury travelers",
        "Nature-focused soft-adventure travelers",
        "Repeat guests seeking deeper reflection",
        "Clients who value privacy over activity density",
      ],
    },
    {
      id: 2,
      title: "WHAT ADVISORS NEED TO KNOW",
      titleSecondLine: "(TRANSPARENCY BUILDS TRUST)",
      subtitle: "",
      imagePosition: "left",
      image: "/assets/images/travelpartners/openpool.png",
      imageAlt: "Luxury villa with infinity pool overlooking rainforest",
      items: [
        "Only 6 villas—availability is limited",
        "Advance booking strongly recommended",
        "Children are welcome with a quiet-respect policy",
        "No spa or yoga studio (nature is the sanctuary)",
        "Experiences are optional—not fixed programs",
        "Ideal for 2–4 night immersive stays or longer retreats ",
      ],
    },
    {
      id: 3,
      title: "EXCLUSIVE BENEFITS FOR REGISTERED TRAVEL PARTNERS",
      subtitle: "",
      imagePosition: "right",
      image: "/assets/images/travelpartners/homeattheforest.png",
      imageAlt: "Scenic view of rainforest villas nestled in nature",
      items: [
        "Complimentary 1-night FAM stay",
        "One free villa night for every 15 Insight Partners booked",
        "Direct training with Dr. GB Hewawasam",
        "Co-branded sales and marketing tools",
        "Priority access to limited inventory",
        "Ongoing relationship-based support",
      ],
    },
    {
      id: 4,
      title: "WHY THIS WORKS FOR YOUR BRAND",
      subtitle:
        "RainDrops is not competing with hotels—we are not selling a stay. We are offering:",
      imagePosition: "left",
      image: "/assets/images/travelpartners/manwithpath.jpg",
      imageAlt: "Sunlit forest path with towering trees",
      items: [
        "Emotional assurance",
        "Authentic differentiation",
        "Long-term client satisfaction",
        "A partnership rooted in trust and consistency",
      ],
      footer:
        "RainDrops stands beside you—protecting your reputation while elevating the experience you deliver.",
    },
  ];

  const handleReadNowClick = () => {
    setShowPopup(true);
    document.body.style.overflow = "hidden";
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="side-to-side-section">
        {sections.map((section, index) => (
          <div
      key={section.id}
      className={`content-block ${
        section.imagePosition === "right" ? "image-right" : "image-left"
      } ${section.id === 4 ? "section-inline-layout" : ""}`}
    >
            <div className="container">
              <div className="content-wrapper wow fadeInUp">
                {/* Conditional layout for section 4 */}
                {section.id === 4 ? (
                  <div className="inline-header-container">
                    <div className="inline-header-content">
                      <div
                  className={`flex-container ${
                    index % 2 === 0 ? "bg-light-better" : "bg-white-better"
                  }`}
                >
                        <div
                          className={`text-content ${
                            section.imagePosition === "right"
                              ? "order-1"
                              : "order-2"
                          }`}
                        >
                          <h2 className="section-title inline-title">
                            {section.title}
                          </h2>

                          {section.subtitle && (
                            <h3 className="section-subtitle">
                              {section.subtitle}
                            </h3>
                          )}

                          <ul className="items-list">
                            {section.items.map((item, idx) => (
                              <li key={idx} className="list-item">
                                {item}
                              </li>
                            ))}
                          </ul>

                          {section.footer && (
                            <p className="section-footer">{section.footer}</p>
                          )}
                        </div>

                        <div
                          className={`image-content ${
                            section.imagePosition === "right"
                              ? "order-1"
                              : "order-2"
                          }`}
                        >
                          <img
                            src={section.image}
                            alt={section.imageAlt}
                            className="section-image-container-manwalking"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Title - Always on top */}
                    <h2 className="section-title">
                      {section.title}
                      {section.titleSecondLine && (
                        <>
                          <br />
                          <span className="title-second-line">
                            {section.titleSecondLine}
                          </span>
                        </>
                      )}
                    </h2>

                    <div
                  className={`flex-container ${
                    index % 2 === 0 ? "bg-light-better" : "bg-white-better"
                  }`}
                >
                      {/* Text Content */}
                      <div
                        className={`text-content ${
                          section.imagePosition === "right"
                            ? "order-1"
                            : "order-2"
                        }`}
                      >
                        {section.subtitle && (
                          <h3 className="section-subtitle">
                            {section.subtitle}
                          </h3>
                        )}

                        <ul className="items-list">
                          {section.items.map((item, idx) => (
                            <li key={idx} className="list-item">
                              {item}
                            </li>
                          ))}
                        </ul>

                        {section.footer && (
                          <p className="section-footer">{section.footer}</p>
                        )}
                      </div>

                      {/* Image */}
                      <div
                        className={`image-content ${
                          section.imagePosition === "right"
                            ? "order-2"
                            : "order-1"
                        }`}
                      >
                        <img
                          src={section.image}
                          alt={section.imageAlt}
                          className="section-image-container"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Join Us Section */}
        <div className="join-us-section">
          <div className="container">
            <div className="join-us-wrapper wow fadeInUp">
              {/* Left Content */}
              <div className="join-us-content">
                <h2 className="join-us-title">JOIN US</h2>

                <h3 className="join-us-subtitle">
                  Become A RainDrops Insight Partner
                </h3>

                <ul className="join-us-list">
                  <li>Experience the villas.</li>
                  <li>Share it with the right clients.</li>
                  <li>Understand the environment.</li>
                </ul>

                <p className="join-us-description">
                  RainDrops represents Sri Lanka's new luxury—defined by
                  calmness, clarity and nature intelligence.
                </p>
              </div>

              {/* Right Image with Button */}
              <div className="join-us-image-wrapper">
                <div className="magazine-stack">
                  {/* Magazine Cover - Top Layer */}
                  <div className="magazine-cover">
                    <Image
                      src="/assets/images/travelpartners/bookcoverimage.png"
                      alt="RainDrops Insight Quarterly Magazine"
                      width={350}
                      height={380}
                      className="magazine-img"
                    />
                  </div>

                  {/* Read Now Button */}
                  <button className="read-now-btn" onClick={handleReadNowClick}>
                    Read Now
                  </button>

                  {/* Open Magazine - Bottom Layer */}
                  <div className="open-magazine">
                    <Image
                      src="/assets/images/travelpartners/magazinecover.png"
                      alt="Open Magazine with Articles"
                      width={400}
                      height={200}
                      className="open-magazine-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClosePopup}>
              ✕
            </button>
            <div className="popup-content">
              <div
                style={{
                  position: "relative",
                  paddingTop: "max(60%,324px)",
                  width: "100%",
                  height: 0,
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    border: "none",
                    width: "100%",
                    height: "100%",
                    left: 0,
                    top: 0,
                  }}
                  src="https://online.fliphtml5.com/okzxa/1219-new-RD-TRAVEL-PARTNER/"
                  title="1219 new RD TRAVEL PARTNER"
                  seamless="seamless"
                  scrolling="no"
                  frameBorder="0"
                  allowTransparency="true"
                  allowFullScreen={true}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Base styles */
        .side-to-side-section {
          width: 100%;
        }

        .section-image-container {
          width: 500px;
          height: 300px;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .section-image-container-manwalking {
          width: 400px;
          height: 500px;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .content-block {
          padding: 60px 0;
          transition: background-color 0.3s ease;
        }

        .bg-light-better {
          background-color: #efefefaa;
          padding: 20px 5px 20px 50px;
        }

        .bg-white-better {
          background-color: #ffffffff;
          padding: 20px 5px 20px 50px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .content-wrapper {
          width: 100%;
        }

        /* Title - Always centered at top */
        .section-title {
          font-size: var(--h2);
          text-align: center;
          margin-bottom: 2.5rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 400;
          color: #2c2c2c;
          line-height: 1.3;
        }

        .title-second-line {
          display: block;
          margin-top: 0.5rem;
        }

        /* Inline layout for section 4 */
        .inline-header-container {
          display: flex;
          flex-direction: column;
        }

        .inline-title {
          text-align: left;
          margin-bottom: 2rem;
        }

        /* Flex container for text and image */
        .flex-container {
          display: flex;
          gap: 50px;
          align-items: center;
        }

        /* Text content */
        .text-content {
          flex: 1;
          min-width: 300px;
        }

        .order-1 {
          order: 1;
        }

        .order-2 {
          order: 2;
        }

        .section-subtitle {
          font-size: var(--p);
          margin-bottom: 1.5rem;
          color: #333;
          font-weight: bold;
          line-height: 1.5;
        }

        .items-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .list-item {
          font-size: 1rem;
          line-height: 1.8;
          color: #444;
          padding-left: 25px;
          position: relative;
          margin-bottom: 0.5rem;
        }

        .list-item:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #000000ff;
          font-size: 1.5rem;
          line-height: 1.4;
        }

        .section-footer {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #555;
          margin-top: 1.5rem;
          font-style: italic;
        }

        /* Image content */
        .image-content {
          flex: 1;
          justify-content: space-around;
          min-width: 200px;
          display: flex;
        }

        .image-container {
          width: 100%;
          height: 350px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }

        .image-container:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18);
        }

        /* Join Us Section */
        .join-us-section {
          background-color: #ffffff;
          padding: 20px 0;
        }

        .join-us-wrapper {
          display: flex;
          gap: 60px;
          align-items: center;
        }

        .join-us-content {
          flex: 1;
          max-width: 450px;
        }

        .join-us-title {
          font-size: 2.5rem;
          font-weight: 400;
          letter-spacing: 3px;
          color: #2c2c2c;
        }

        .join-us-subtitle {
          font-size: 1.2rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          color: #333;
        }

        .join-us-list {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
        }

        .join-us-list li {
          font-size: 1rem;
          color: #333;
          margin-bottom: 0.5rem;
          padding-left: 25px;
          position: relative;
        }

        .join-us-list li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #000000;
          font-size: 1.5rem;
          line-height: 1.4;
        }

        .join-us-description {
          font-size: 1rem;
          line-height: 1.7;
          color: #333;
        }

        /* Magazine Stack */
        .join-us-image-wrapper {
          flex: 1;
          position: relative;
        }

        .magazine-stack {
          position: relative;
          width: 100%;
          max-width: 650px;
          margin: 0 auto;
          min-height: 450px;
        }

        /* Magazine Cover - Top Layer */
        .magazine-cover {
          position: absolute;
          top: 0;
          left: 0;
          width: 280px;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease;
          margin-top: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .magazine-cover:hover {
          transform: translateY(-5px);
        }

        .magazine-img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Read Now Button */
        .read-now-btn {
          position: absolute;
          top: 45%;
          left: 240px;
          transform: translateY(-50%);
          background-color: #b89968;
          color: white;
          border: none;
          padding: 16px 40px;
          font-size: 1.05rem;
          font-weight: 500;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 4;
          white-space: nowrap;
        }

        .read-now-btn:hover {
          background-color: #a08758;
          transform: translateY(-50%) scale(1.05);
          box-shadow: 0 8px 25px rgba(184, 153, 104, 0.5);
        }

        .read-now-btn:active {
          transform: translateY(-50%) scale(0.98);
        }

        /* Open Magazine - Bottom Layer */
        .open-magazine {
          position: absolute;
          bottom: 0;
          right: 0;
          z-index: 1;
          width: 500px;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          justify-content: flex-end;
        }

        .open-magazine-img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Popup Modal Styles */
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.85);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .popup-container {
          position: relative;
          width: 100%;
          max-width: 1200px;
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          animation: slideUp 0.4s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .close-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 40px;
          height: 40px;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          transition: all 0.3s ease;
        }

        .close-btn:hover {
          background-color: #b89968;
          transform: rotate(90deg);
        }

        .popup-content {
          width: 100%;
          padding: 10px;
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

          .section-title {
            font-size: 2rem;
            margin-bottom: 3rem;
          }

          .inline-title {
            font-size: 2rem;
            margin-bottom: 2rem;
          }

          .flex-container {
            gap: 60px;
          }

          .image-container {
            height: 400px;
          }

          .magazine-cover {
            width: 300px;
          }

          .read-now-btn {
            left: 260px;
            padding: 18px 45px;
          }

          .open-magazine {
            width: 550px;
          }
        }

        /* Desktop - Tablet Landscape */
        @media (min-width: 1024px) and (max-width: 1199px) {
          .container {
            max-width: 960px;
          }

          .section-title {
            font-size: 1.7rem;
          }

          .inline-title {
            font-size: 1.7rem;
          }

          .flex-container {
            gap: 45px;
          }

          .image-container {
            height: 360px;
          }

          .content-block {
            padding: 70px 0;
          }

          .join-us-wrapper {
            gap: 50px;
          }

          .join-us-title {
            font-size: 2.2rem;
          }

          .magazine-cover {
            width: 260px;
          }

          .read-now-btn {
            left: 220px;
            padding: 14px 35px;
            font-size: 1rem;
          }

          .open-magazine {
            width: 450px;
          }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          .container {
            max-width: 720px;
          }

          .section-title {
            font-size: 1.5rem;
            letter-spacing: 1px;
            margin-bottom: 2rem;
          }

          .inline-title {
            font-size: 1.5rem;
          }

          .flex-container {
            gap: 35px;
          }

          .image-container {
            height: 320px;
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .list-item {
            font-size: 0.95rem;
          }

          .content-block {
            padding: 60px 0;
          }

          .join-us-section {
            padding: 60px 0;
          }

          .join-us-wrapper {
            flex-direction: column;
            gap: 40px;
          }

          .join-us-content {
            max-width: 100%;
            text-align: center;
          }

          .magazine-stack {
            max-width: 500px;
            min-height: 380px;
          }

          .read-now-btn {
            left: 180px;
            top: 40%;
          }

          .open-magazine {
            width: 400px;
          }
        }

        /* Mobile - Large */
        @media (max-width: 767px) {
          .content-block {
            padding: 50px 0;
          }

          .section-title {
            font-size: 1.3rem;
            letter-spacing: 0.5px;
            margin-bottom: 1.5rem;
            line-height: 1.25;
          }

          .inline-title {
            font-size: 1.3rem;
            text-align: center;
            margin-bottom: 1.5rem;
          }

          .title-second-line {
            font-size: 0.9em;
            margin-top: 0.3rem;
          }

          .flex-container {
            flex-direction: column;
            gap: 25px;
          }

          .text-content,
          .image-content {
            width: 100%;
            min-width: unset;
          }

          /* Reset order for mobile - always text first, then image */
          .order-1,
          .order-2 {
            order: initial;
          }

          .text-content {
            order: 1;
          }

          .image-content {
            order: 2;
          }

          .section-subtitle {
            font-size: 1rem;
            margin-bottom: 1.2rem;
          }

          .list-item {
            font-size: 0.9rem;
            line-height: 1.7;
            padding-left: 22px;
          }

          .list-item:before {
            font-size: 1.3rem;
          }

          .section-footer {
            font-size: 0.9rem;
            margin-top: 1.2rem;
          }

          .image-container {
            height: 280px;
            border-radius: 6px;
          }

          .join-us-section {
            padding: 50px 0;
          }

          .join-us-wrapper {
            flex-direction: column;
            gap: 50px;
          }

          .join-us-content {
            max-width: 100%;
          }

          .join-us-title {
            font-size: 2rem;
          }

          .magazine-stack {
            max-width: 100%;
            min-height: 320px;
          }

          .magazine-cover {
            position: relative;
            margin: 0 auto 20px;
          }

          .read-now-btn {
            position: static;
            transform: none;
            display: block;
            margin: 20px auto;
            padding: 14px 35px;
          }

          .read-now-btn:hover {
            transform: scale(1.05);
          }

          .open-magazine {
            width: 100%;
            position: relative;
            margin-top: 20px;
          }

          .popup-container {
            max-width: 95%;
          }
        }

        /* Mobile - Small */
        @media (max-width: 480px) {
        .bg-light-better {
          padding: 10px;
        }

        .bg-white-better {
         padding: 10px;
        }

        .section-image-container-manwalking {
          height: 300px; 
        }
          .container {
            padding: 0 15px;
          }

          .content-block {
            padding: 40px 0;
          }

          .section-title {
            font-size: 1.1rem;
            letter-spacing: 0.3px;
            margin-bottom: 1.2rem;
          }

          .inline-title {
            font-size: 1.1rem;
            text-align: center;
          }

          .title-second-line {
            font-size: 0.85em;
          }

          .flex-container {
            gap: 20px;
          }

          .section-subtitle {
            font-size: 0.95rem;
            margin-bottom: 1rem;
          }

          .list-item {
            font-size: 0.85rem;
            line-height: 1.6;
            padding-left: 20px;
            margin-bottom: 0.7rem;
          }

          .list-item:before {
            font-size: 1.2rem;
          }

          .section-footer {
            font-size: 0.85rem;
            line-height: 1.6;
            margin-top: 1rem;
          }

          .image-container {
            height: 240px;
          }

          .join-us-section {
            padding: 40px 0;
          }

          .join-us-title {
            font-size: 1.6rem;
            letter-spacing: 2px;
          }

          .join-us-subtitle {
            font-size: 1.05rem;
          }

          .read-now-btn {
            padding: 12px 30px;
            font-size: 0.95rem;
          }

          .popup-overlay {
            padding: 10px;
          }

          .close-btn {
            width: 35px;
            height: 35px;
            font-size: 20px;
            top: 10px;
            right: 10px;
          }
        }

        /* Mobile - Extra Small */
        @media (max-width: 360px) {
          .content-block {
            padding: 35px 0;
          }

          .section-title {
            font-size: 1rem;
            line-height: 1.2;
          }

          .inline-title {
            font-size: 1rem;
            text-align: center;
          }

          .section-subtitle {
            font-size: 0.9rem;
          }

          .list-item {
            font-size: 0.8rem;
          }

          .section-footer {
            font-size: 0.8rem;
          }

          .image-container {
            height: 220px;
          }

          .join-us-title {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </>
  );
}

export default SideToSideContainers;
