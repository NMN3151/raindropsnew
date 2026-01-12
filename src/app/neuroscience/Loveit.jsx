"use client";
import React from "react";

export default function WhyYouLoveIt() {
  return (
    <div className="why-section">
      {/* Why You'll Love It Section */}
      <div className="why-love-container">
        <h2 className="section-title">Why You'll love It </h2>

        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card sage">
            <div className="feature-content">
              <strong>
                <p className="feature-heading">Eat With Awareness</p>
              </strong>
              <p className="feature-text">
                Mindful eating activates clarity in the prefrontal cortex and
                calms emotional stress in the amygdala, turning each bite into a
                gentle meditation.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature-card cream">
            <div className="feature-content">
              <strong>
                <p className="feature-heading">Food With Purpose</p>
              </strong>
              <p className="feature-text">
                With 90% of serotonin receptors in the gut, every thoughtfully
                crafted dish supports emotional balance, energy, and inner
                well-being.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="feature-card sage">
            <div className="feature-content">
              <strong>
                <p className="feature-heading">Wellness in Every Flavor</p>
              </strong>
              <p className="feature-text">
                Mindful dining improves digestion by 30–40%, letting your body
                absorb more nourishment. Each flavor offers calm, clarity, and
                quiet luxury.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="cta-section"> */}
      {/* <div className="cta-content"> */}
      {/* <h2 className="cta-title">Book Your Stay — Experience the Science of Calm.</h2> */}
      {/* <p className="cta-subtitle"> */}
      {/* Rain Drops Wellness Resort – The world's most peaceful connection between Mind, Nature, and You. */}
      {/* </p> */}
      {/* <button className="cta-button">Discover Now</button> */}
      {/* </div> */}
      {/* </div> */}

      <style jsx>{`
        .why-section {
          width: 100%;
        }

        /* Why You'll Love It Section */
        .why-love-container {
          padding: 6rem 2rem 6rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1255px;
          margin: 0 auto;
        }

        .feature-card {
          padding: 4rem 3rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 200px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .feature-card.sage {
          background-color: #a8b5a0;
        }

        .feature-card.cream {
          background-color: #e8e4d0;
        }

        .feature-content {
          text-align: center;
        }

        .feature-heading {
          font-size: 1.1rem;
          color: #2c2c2c;
          margin-bottom: 10px;
        }

        .feature-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #2c2c2c;
          margin: 0;
          font-weight: 400;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #d4d4d4 0%, #e0e0e0 100%);
          padding: 4rem 2rem;
          width: 100%;
          max-width: 1255px; /* Won't overflow on smaller screens */
          margin: 0 auto;
        }

        .cta-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .cta-title {
          font-size: 2.2rem;
          font-weight: 400;
          color: #2c2c2c;
          margin: 0 0 1.5rem;
          line-height: 1.4;
        }

        .cta-subtitle {
          font-size: 1.1rem;
          color: #4a4a4a;
          margin: 0 0 2.5rem;
          line-height: 1.6;
          font-weight: 300;
        }

        .cta-button {
          background: #b8a675;
          color: white;
          border: none;
          padding: 1rem 3rem;
          font-size: 1.1rem;
          font-weight: 500;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.02em;
        }

        .cta-button:hover {
          background: #a08f5f;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(184, 166, 117, 0.4);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .feature-card {
            padding: 2.5rem 1.5rem;
            min-height: 180px;
          }

          .feature-text {
            font-size: 1rem;
          }

          .cta-title {
            font-size: 1.8rem;
          }

          .cta-subtitle {
            font-size: 1rem;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .why-love-container {
            padding: 3rem 1.5rem 3rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .section-title {
            font-size: 1.5rem;
            margin-bottom: 2rem;
          }

          .feature-card {
            padding: 2rem 1.5rem;
            min-height: 150px;
          }

          .feature-text {
            font-size: 0.95rem;
          }

          .cta-section {
            padding: 3rem 1.5rem;
          }

          .cta-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          .cta-subtitle {
            font-size: 0.95rem;
            margin-bottom: 2rem;
          }

          .cta-button {
            padding: 0.875rem 2.5rem;
            font-size: 1rem;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .section-title {
            font-size: 1.3rem;
            letter-spacing: 0.05em;
          }

          .feature-card {
            padding: 1.75rem 1.25rem;
          }

          .feature-text {
            font-size: 0.9rem;
          }

          .cta-title {
            font-size: 1.3rem;
          }

          .cta-subtitle {
            font-size: 0.9rem;
          }

          .cta-button {
            padding: 0.75rem 2rem;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
}
