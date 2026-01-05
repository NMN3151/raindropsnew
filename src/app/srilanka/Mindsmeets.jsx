"use client";
import React from "react";

function Mindmeetspage() {
  return (
    <>
      <div className="Mind-meets">
        <div className="container">
          <h2 className="content__title wow fadeInUp">
            Where Mind Meets Nature - And You Meet Sri Lanka
          </h2>
          <div className="text-1">
            <p className="">
              <em
                style={{
                  fontStyle: "italic",
                  fontFamily: "BrittanySignature",
                  fontSize: 18,
                }}
              >
                Rain Drops
              </em>{" "}
              is not simply a villa.<br></br>It is an invitation:
              <ul className="list">
                <li>to meet the country,</li>
                <li>to meet the forest,</li>
                <li>
                  and to meet yourself - with clarity, curiosity, and presence.
                </li>
              </ul>
              Here, original wisdom becomes practical.<br></br>Nature becomes
              your guide.<br></br>And calmness becomes a skill you can carry
              home.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .Mind-meets {
          padding: 100px 20px;
          background: #ffffff;
          color: #333;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .content__title {
          text-align: center;
          font-size: 2.2rem;
          margin-bottom: 30px;
          line-height: 1.3;
        }

        .content__subtitle {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #2d2d2d;
        }

        .list {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }

        .list li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .list li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #2d2d2d;
          font-weight: bold;
          font-size: 1.2rem;
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .Mind-meets {
            padding: 70px 25px;
          }

          .container {
            max-width: 900px;
          }

          .content__title {
            font-size: 1.9rem;
            margin-bottom: 25px;
          }

          .content__subtitle {
            font-size: 1rem;
            line-height: 1.6;
          }

          .list li {
            font-size: 1rem;
            line-height: 1.6;
          }
        }

        @media (min-width: 576px) and (max-width: 767px) {
          .Mind-meets {
            padding: 60px 20px;
          }

          .container {
            max-width: 100%;
          }

          .content__title {
            font-size: 1.75rem;
            margin-bottom: 20px;
          }

          .content__subtitle {
            font-size: 0.98rem;
            line-height: 1.6;
          }

          .list {
            margin: 18px 0;
          }

          .list li {
            font-size: 0.98rem;
            line-height: 1.5;
            padding-left: 18px;
          }

          .list li:before {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 575px) {
          .Mind-meets {
            padding: 50px 15px;
          }

          .content__title {
            font-size: 1.6rem;
            margin-bottom: 20px;
            line-height: 1.3;
          }

          .content__subtitle {
            font-size: 0.95rem;
            line-height: 1.6;
            text-align: left;
          }

          .list {
            margin: 15px 0;
            text-align: left;
          }

          .list li {
            font-size: 0.95rem;
            line-height: 1.5;
            padding-left: 16px;
            margin-bottom: 6px;
          }

          .list li:before {
            font-size: 1rem;
          }
        }

        @media (max-width: 375px) {
          .Mind-meets {
            padding: 40px 12px;
          }

          .content__title {
            font-size: 1.45rem;
            margin-bottom: 15px;
          }

          .content__subtitle {
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .list li {
            font-size: 0.9rem;
            line-height: 1.5;
            padding-left: 15px;
          }
        }
      `}</style>
    </>
  );
}

export default Mindmeetspage;
