"use client";
import React from "react";
import Image from "next/image";

export default function Setting4() {
  return (
    <div className="signature__outer">
      <div className="container">
        <div className="layout-wrapper">
          <div className="side-column left-column">
            <div className="image-container">
              <Image
                src="/assets/images/weather/bsnake.jpg"
                alt="Mindfulness Practice"
                width={600}
                height={600}
                className="side-image"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="image-fallback">
                <div className="fallback-content"></div>
              </div>
            </div>
          </div>

          <div className="center-column">
            <div className="content-box">
              <div className="content-wrapper">
                <div className="main-header"></div>
                <div className="programs-section">
                  <div className="programs-list">
                    <div className="program-item">
                      <div className="program-content">
                        <p className="program-audience">
                          Snakes also play an important ecological role here.
                          Most species are shy and avoid humans, and encounters
                          are rare. Even so, our staff is trained in safety
                          protocols, and paths around the villa are kept clear
                          and lit in the evenings for your peace of mind.
                        </p>
                      </div>
                    </div>

                    <div className="program-item">
                      <div className="program-content">
                        <p className="program-desc">
                          This is true rainforest living – softened by
                          thoughtful design, gentle service and mindful safety
                        </p>
                      </div>
                    </div>
                    <div className="program-item">
                      <div className="program-content"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="side-column right-column">
            <div className="image-container">
              <Image
                src="/assets/images/weather/snake-6704375_1280.jpg"
                alt="Leadership Development"
                width={600}
                height={600}
                className="side-image"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="image-fallback">
                <div className="fallback-content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .signature__outer {
          padding: 9rem 0;
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0;
        }

        .layout-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.2fr 1fr;
          gap: 0;
          align-items: stretch;
          min-height: 650px;
          width: 100%;
        }

        .side-column {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 80%;
          min-height: 550px;
          max-height: 650px;
          overflow: hidden;
          background: #bccf5e;
        }

        .left-column .image-container {
          border-radius: 0;
        }

        .right-column .image-container {
          border-radius: 0;
        }

        .side-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .left-column .side-image {
          border-radius: 0;
        }

        .right-column .side-image {
          border-radius: 0;
        }

        .side-image:hover {
          transform: scale(1.02);
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
        }

        .left-column .image-fallback {
          border-radius: 0;
        }

        .right-column .image-fallback {
          border-radius: 0;
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
          font-size: 16px;
          font-weight: 500;
          margin: 0;
          opacity: 0.9;
        }

        .center-column {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
        }

        .content-box {
          width: 100%;
          min-width: 100%;
          max-width: 100%;
          height: 100%;
          min-height: 550px;
          max-height: 650px;
          background: #8a8a6a;
          padding: 3rem 2.5rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          border-radius: 0;
        }

        .content-wrapper {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          gap: 1rem;
          height: 100%;
          justify-content: space-between;
        }

        .main-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          width: 100%;
        }

        .section__title {
          color: #ffffff;
        }

        /* Programs Section */
        .programs-section {
          width: 100%;
          flex: 1;
          display: flex;
          align-items: center;
        }

        .programs-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        .program-item {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .program-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          max-width: 600px;
          text-align: center;
          width: 100%;
        }

        .program-audience {
          font-size: 16px;
          font-weight: 400;
          color: #e0e0e0;
          line-height: 1.6;
          margin: 0;
        }

        .program-desc {
          font-size: 16px;
          text-align: left;
          font-weight: 300;
          color: #e0e0e0;
          line-height: 1.4;
          margin: 0;
          letter-spacing: 0.01em;
        }

        .bullet-item {
          display: block;
          margin-bottom: 0.5rem;
        }

        @media (min-width: 1024px) and (max-width: 1199px) {
          .container {
            padding: 0;
          }

          .layout-wrapper {
            min-height: 600px;
          }

          .content-box {
            padding: 2.5rem 2rem;
            min-height: 500px;
            max-height: 600px;
          }

          .program-audience {
            font-size: 1.1rem;
          }

          .program-desc {
            font-size: 0.95rem;
          }

          .image-container {
            min-height: 500px;
            max-height: 600px;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .signature__outer {
            padding: 4rem 0;
          }

          .container {
            padding: 0;
          }

          .layout-wrapper {
            grid-template-columns: 1fr;
            gap: 0;
            min-height: auto;
          }

          .side-column {
            display: none;
          }

          .center-column {
            width: 100%;
          }

          .content-box {
            min-height: auto;
            max-height: none;
            padding: 2.5rem 2rem;
            border-radius: 0;
            width: 100%;
            margin: 0;
          }

          .content-wrapper {
            gap: 2rem;
          }

          .programs-list {
            gap: 1.5rem;
          }

          .program-audience {
            font-size: 1.1rem;
          }

          .program-desc {
            font-size: 0.95rem;
            text-align: center;
          }

          .bullet-item {
            text-align: left;
          }
        }

        @media (min-width: 1200px) {
          .container {
            margin-top: -50px;
          }
        }

        @media (min-width: 425px) and (max-width: 767px) {
          .signature__outer {
            padding: 1rem 0;
          }

          .container {
            padding: 0;
          }

          .layout-wrapper {
            grid-template-columns: 1fr;
            gap: 0;
            min-height: auto;
          }

          .side-column {
            display: none;
          }

          .center-column {
            width: 100%;
          }

          .content-box {
            min-height: auto;
            max-height: none;
            padding: 2rem 1.5rem;
            border-radius: 0;
            width: 100%;
          }

          .content-wrapper {
            gap: 2rem;
          }

          .programs-list {
            gap: 1.5rem;
          }

          .program-audience {
            font-size: 1rem;
            line-height: 1.5;
          }

          .program-desc {
            font-size: 0.9rem;
            text-align: center;
            line-height: 1.5;
          }

          .bullet-item {
            text-align: left;
            margin-bottom: 0.75rem;
          }
        }

        @media (max-width: 424px) {
          .signature__outer {
            padding: 2rem 0;
          }

          .container {
            padding: 0;
          }

          .layout-wrapper {
            grid-template-columns: 1fr;
            gap: 0;
            min-height: auto;
          }

          .side-column {
            display: none;
          }

          .center-column {
            width: 100%;
          }

          .content-box {
            min-height: auto;
            max-height: none;
            padding: 1.5rem 1rem;
            border-radius: 0;
            width: 100%;
          }

          .content-wrapper {
            gap: 1.5rem;
          }

          .programs-list {
            gap: 1.25rem;
          }

          .program-audience {
            font-size: 0.95rem;
            line-height: 1.5;
          }

          .program-desc {
            font-size: 0.85rem;
            text-align: center;
            line-height: 1.5;
          }

          .bullet-item {
            text-align: left;
            margin-bottom: 0.75rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
}
