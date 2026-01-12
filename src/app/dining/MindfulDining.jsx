'use client';
import React from 'react';
import Image from 'next/image';

export default function MindfulDining() {
  return (
    <div className="signature__outer">
      <div className="container">
        <div className="section_content_left" style={{justifyContent: 'center', textAlign: 'center', marginBottom: '3rem'}}>
          <h2 className="content__title h2 lh-1">Mindfulness Dining</h2>
        </div>
        
        <div className="layout-wrapper">
          
          {/* Left Side Text Column */}
          <div className="side-column left-column">
            <div className="text-box">
              <div className="text-content">
                <p className="text-description">
                  At Rain Drops, dining is an experience that connects your five senses with nature.We invite you to slow down, breathe, and truly enjoy each flavor — just as the rainforest does everything, calmly and completely.
                </p>
              </div>
            </div>
          </div>

          {/* Center Image Column */}
          <div className="center-column">
            <div className="image-container">
              <Image
                src="/assets/images/nutrition/tt.png"
                alt="Mindful Dining Experience"
                width={700}
                height={700}
                className="center-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* content */}
              <div className="image-fallback">
                <div className="fallback-content">
                  <span className="fallback-icon">🍽️</span>
                  <p>Mindful Dining Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Text Column */}
          <div className="side-column right-column">
            <div className="text-box">
              <div className="text-content-right">
                <p className="text-description">
                  <span style={{fontWeight: "600"}}> You'll find our meals: </span><br /><br />
                  <span style={{fontWeight: "600"}}> Naturally sourced - </span><br />
                  fresh, local, and pure <br /><br />
                  <span style={{fontWeight: "600"}}>Scientifically balanced - <br /></span>
                  designed to support energy, <br /> focus, and calm <br /><br />
                  <span style={{fontWeight: "600"}}>Mindfully prepared - <br /></span>
                  cooked with care and loving attention
                </p>
                <div className="feature-list">
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .signature__outer {
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 80px;
        }

        .layout-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.2fr 1fr;
          gap: 0;
          align-items: center;
          min-height: 500px;
          height: 500px;
          width: 100%;
          position: relative;
        }

        /* Side Columns - Text Boxes */
        .side-column {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }

        .text-box {
          width: 80%;
          height: 70%;
          min-height: 400px;
          max-height: 450px;
          background: #ffffffff;
          padding: 2.5rem 2rem;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          border-radius: 8px;
        }

        .text-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
        }

        .left-column .text-box {
          margin-right: -180px;
          z-index: 2;
          background: #A8B49C;
        }

        .right-column .text-box {
          margin-left: -180px;
          z-index: 2;
          background: #bda67194;
        }

        .text-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          gap: 1.5rem;
        }

        .text-content-right {
          text-align: left;
        }

        .text-title {
          color: #000000ff;
          font-size: 2rem;
          font-weight: 600;
          margin: 0;
          position: relative;
          padding-bottom: 1rem;
        }

        .text-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(135deg, #a8915b, #bda671);
          border-radius: 2px;
        }

        .text-description {
          font-size: 1.1rem;
          font-weight: 400;
          color: #000000ff;
          line-height: 1.7;
          margin: 0;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(168, 145, 91, 0.05);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          background: rgba(168, 145, 91, 0.1);
          transform: translateX(5px);
        }

        .feature-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .feature-item span:last-child {
          font-size: 1rem;
          font-weight: 500;
          color: #1b1b1b;
          text-align: left;
          flex: 1;
        }

        /* Center Column - Image Box */
        .center-column {
          padding: 0 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          position: relative;
          z-index: 3;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 550px;
          max-height: 600px;
          overflow: hidden;
          background: #f8f8f8;
          border-radius: 0;
          z-index: 3;
        }

        .center-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.4s ease;
          position: relative;
          z-index: 3;
        }

        .center-image:hover {
          transform: scale(1.05);
        }

        .image-fallback {
          display: none;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #8a8a6a, #a0a07a);
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          padding: 2rem;
          flex-direction: column;
          position: relative;
          z-index: 2;
        }

        .fallback-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .fallback-icon {
          font-size: 4rem;
          opacity: 0.9;
        }

        .image-fallback p {
          font-size: 1.3rem;
          font-weight: 500;
          margin: 0;
          opacity: 0.9;
        }

        /* Large Desktop (1601px - 2559px) */
        @media (min-width: 1601px) and (max-width: 2559px) {
          .layout-wrapper {
            min-height: 550px;
            height: 550px;
          }
          
          .text-box {
            min-height: 450px;
            max-height: 500px;
          }
          
          .image-container {
            min-height: 600px;
            max-height: 650px;
          }
          
          .left-column .text-box {
            margin-right: -200px;
          }

          .right-column .text-box {
            margin-left: -200px;
          }
        }

        /* ---------- LAPTOP FIX (1024px - 1600px) ---------- */
          @media (min-width: 1024px) and (max-width: 1600px) {

            .layout-wrapper {
              display: grid;
              grid-template-columns: 1fr 1.2fr 1fr;
              align-items: center;
              gap: 0px;
              width: 100%;
              padding: 20px 40px;

              /* IMPORTANT: Removes fixed height problems */
              height: auto;
              min-height: 420px;
            }

            /* ---- TEXT BOXES ---- */
            .text-box {
              padding: 2rem 1.6rem;
              width: 90%;
              
              /* Automatic, no forcing */
              height: auto;
            }

            /* 🔥 Overlap balanced (works on all laptops) */
            .left-column .text-box {
              margin-right: -80px;     /* Balanced overlap */
            }

            .right-column .text-box {
              margin-left: -80px;      /* Balanced overlap */
            }

            /* Font scaling safe */
            .text-description {
              font-size: 1rem;
              line-height: 1.6;
            }

            /* ---- CENTER IMAGE ---- */
            .center-column {
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .image-container {
              width: 100%;
              max-width: 520px;

              /* 🔥 Dynamic height — prevents tall image issue */
              height: auto;

              /* Maintain aspect ratio */
              aspect-ratio: 3 / 4;

              overflow: hidden;
             
            }

            .image-container img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }



        /* Tablet (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .signature__outer {
            padding: 6rem 0;
          }

          .container {
            padding: 0 40px;
          }

          .layout-wrapper {
            grid-template-columns: 1fr;
            gap: 3rem;
            min-height: auto;
            height: auto;
          }

          .center-column {
            order: -1;
            z-index: 1;
            height: 400px;
          }

          .image-container {
            min-height: 400px;
            max-height: 450px;
            border-radius: 20px;
            z-index: 1;
          }

          .text-box {
            min-height: 100%;
            max-height: none;
            padding: 2.5rem 2rem;
            border-radius: 20px;
            width: 100%;
            margin: 0;
            z-index: 1;
            height: auto;
          }

          .left-column .text-box,
          .right-column .text-box {
            margin: 0;
          }

          .text-content {
            gap: 1.5rem;
          }

          .text-title {
            font-size: 1.8rem;
          }

          .feature-list {
            gap: 0.8rem;
          }
        }

        /* Mobile (425px - 767px) */
        @media (min-width: 425px) and (max-width: 767px) {
          .signature__outer {
            padding: 4rem 0;
          }

          .container {
            padding: 0 20px;
          }

          .layout-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
            min-height: auto;
            height: auto;
          }

          .center-column {
            order: -1;
            z-index: 1;
            height: 350px;
          }

          .image-container {
            min-height: 350px;
            max-height: 400px;
            border-radius: 15px;
            z-index: 1;
          }

          .text-box {
            min-height: auto;
            max-height: none;
            padding: 2rem 1.5rem;
            border-radius: 15px;
            width: 100%;
            z-index: 1;
            height: auto;
          }

          .text-content {
            gap: 1.5rem;
          }

          .text-title {
            font-size: 1.6rem;
            padding-bottom: 0.75rem;
          }

          .text-title::after {
            width: 50px;
          }

          .text-description {
            font-size: 1rem;
            line-height: 1.6;
           
          }

          .feature-item {
            padding: 0.8rem;
          }

          .feature-icon {
            font-size: 1.3rem;
          }

          .feature-item span:last-child {
            font-size: 0.9rem;
          }
        }

        /* Small Mobile (≤424px) */
        @media (max-width: 425px) {
          .signature__outer {
            padding: 3rem 0;
          }
          .container {
            padding: 0 15px;
          }

          .layout-wrapper {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            min-height: auto;
            height: auto;
          }

          .center-column {
            order: -1;
            z-index: 1;
            height: 300px;
          }

          .image-container {
            min-height: 300px;
            max-height: 350px;
            border-radius: 5px;
            z-index: 1;
          }

          .text-box {
            min-height: auto;
            max-height: none;
            padding: 1.5rem 1rem;
            border-radius: 12px;
            width: 100%;
            z-index: 1;
            height: auto;
          }

          .right-column .text-box,
          .left-column .text-box {
            margin: 0;
            height: auto;
          }

          .text-content {
            gap: 1.25rem;
          }

          .text-title {
            font-size: 1.4rem;
            padding-bottom: 0.5rem;
          }

          .text-title::after {
            width: 40px;
            height: 2px;
          }

          .text-description {
            font-size: 0.9rem;
            line-height: 1.5;
          }

          .feature-list {
            gap: 0.5rem;
          }

          .feature-item {
            padding: 0.7rem;
            gap: 0.8rem;
          }

          .feature-icon {
            font-size: 1.2rem;
          }

          .feature-item span:last-child {
            font-size: 0.85rem;
          }
        }

        /* Animation for content */
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

        .left-column {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .center-column {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .right-column {
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }
      `}</style>
    </div>
  );
}