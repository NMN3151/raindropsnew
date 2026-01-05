"use client";
import React from "react";

function PrivacyPolicy() {
  return (
    <>
      <style jsx>{`
        .privacy-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 20px;
          color: #333;
          line-height: 1.5;
        }

        .content__title1 {
          font-size: 20px; /* Default font size for desktop */
          margin-bottom: 20px;
          color: #000000ff;
          padding-bottom: 10px;
          border-bottom: 2px solid #ecf0f1;
          text-align: left; /* Default alignment */
        }

        .privacy-header {
          text-align: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
        }

        .privacy-title {
          font-size: 24px;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 10px;
          letter-spacing: 0.5px;
        }

        .privacy-subtitle {
          font-size: 18px;
          color: #7f8c8d;
          font-weight: 400;
        }

        .section {
          margin-bottom: 60px;
        }

        .section-content {
          font-size: 16px;
          color: #555;
          line-height: 1.7;
        }

        .section-content p {
          margin-bottom: 15px;
        }

        .section-content strong {
          color: #2c3e50;
          font-weight: 600;
        }

        .section-content em {
          font-style: italic;
          color: #7f8c8d;
        }

        .bullet-list {
          margin: 20px 0;
          padding-left: 20px;
        }

        .bullet-list li {
          margin-bottom: 10px;
          position: relative;
        }

        .highlight-box strong .p {
          color: #000000ff;
          font-weight: 600;
        }

        .payment-terms {
          background-color: #c0a6691f;
          padding: 25px;
          border-radius: 8px;
          margin: 25px 0;
        }

        .payment-subtitle {
          font-size: 18px;

          color: #222221ff;
          margin-bottom: 15px;
        }

        .payment-list {
          list-style-type: none;
          padding-left: 0;
        }

        .payment-list li {
          margin-bottom: 12px;
          padding-left: 25px;
          position: relative;
        }

        .payment-list li:before {
          content: "▸";
          color: #000000ff;
          position: absolute;
          left: 0;
        }

        .check-time {
          background-color: #c0a6691f;
          padding: 20px;
          border-radius: 6px;
          margin: 20px 0;
        }

        .check-time li {
          margin-bottom: 8px;
          font-weight: 500;
        }

        .feature-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin: 25px 0;
        }

        .feature-item {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #3498db;
        }

        .feature-item h4 {
          color: #2c3e50;
          margin-bottom: 10px;
          font-size: 16px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .privacy-container {
            padding: 20px 15px;
            text-align: left;
          }

          .privacy-title {
            font-size: 22px;
            text-align: left;
          }

          .privacy-subtitle {
            font-size: 16px;
            text-align: left;
          }

          .section {
            margin-bottom: 60px;
          }

          .section-content {
            font-size: 15px;
            text-align: left;
          }

          .section-content p {
            text-align: left;
          }

          .payment-terms {
            padding: 20px 15px;
            margin: 20px 0;
            text-align: left;
          }

          .bullet-list {
            padding-left: 15px;
            margin: 15px 0;
            text-align: left;
          }

          .bullet-list li {
            padding-left: 15px;
            text-align: left;
          }

          .bullet-list li:before {
            left: 0;
          }

          .payment-list {
            max-width: 100%;
            text-align: left;
          }

          .payment-list li {
            padding-left: 20px;
            text-align: left;
          }

          .feature-list {
            flex-direction: column;
            align-items: flex-start;
          }

          .feature-item {
            max-width: 100%;
            margin-bottom: 15px;
            text-align: left;
          }

          .highlight-box {
            padding: 15px;
            margin: 20px 0;
            text-align: left;
          }

          .content__subtitle {
            text-align: left;
          }

          .payment-subtitle {
            text-align: left;
          }

          .feature-list ul.bullet-list {
            text-align: left;
          }

          .content__subtitle p {
            text-align: left;
          }

          ul.bullet-list li {
            text-align: left;
          }
          .content__title {
            font-size: 20px !important;
          }
        }

        @media (max-width: 480px) {
          .content__title1 {
            font-size: 18px !important;
            line-height: 1.3rem;
            text-align: left !important;
          }
          .privacy-title {
            font-size: 20px;
          }

          .privacy-subtitle {
            font-size: 14px;
          }

          .section-content {
            font-size: 14px;
          }

          .bullet-list {
            padding-left: 20px; 
          }

          .bullet-list li {
            padding-left: 5px;
            margin-bottom: 8px;
            text-align: left;
          }

          .payment-subtitle {
            font-size: 16px;
          }

          .payment-list li {
            font-size: 14px;
          }

          .highlight-box {
            padding: 12px;
          }
        }
      `}</style>

      <div className="privacy-container">
        <div className="privacy-header">
          <h2 className="content__title wow fadeInUp">
            RAIN DROPs WELLNESS VILLA — GUEST POLICIES
          </h2>
          <p className="content__subtitle wow fadeInUp">
            Mind Meets Nature — Eat Well, Live Clear.
          </p>
        </div>
        <div className="section">
          <p className="content__subtitle1 wow fadeInUp">
            At Rain Drops, we believe true hospitality begins long before you
            arrive. Our villa sits beside the ancient{" "}
            <strong style={{ color: "#AB8A62" }}>
              Sinharaja UNESCO Rainforest
            </strong>
            , a place where the mind softens, the senses open, and calmness
            becomes a skill. These policies are designed not only for smooth
            operations, but also to help every guest experience mindfulness,
            presence, safety, and deep rest.
          </p>
        </div>

        {/* Sec 1 */}
        <div className="section">
          <h2 className="content__title1 wow fadeInUp">
            1. RAIN DROPs WELLNESS VILLA — GUEST POLICIES
          </h2>
          <div className="content__subtitle wow fadeInUp">
            <p>We warmly welcome guests of all ages, including children.</p>
            <p>
              Rain Drops is a place of quiet nature, gentle silence, and mindful
              living, and we kindly request families to help children maintain:
            </p>
            <ul className="bullet-list">
              <li>respect for the rainforest environment</li>
              <li>gentle noise levels</li>
              <li>care for nature and fellow guests</li>
            </ul>
            <p>
              This helps preserve the serenity that guests come here to
              cultivate.
            </p>
            <div className="content__subtitle wow fadeInUp">
              <p>
                We do provide extra beds inside some of our rooms based on
                availability. Recommended occupancy per villa is
                <strong style={{ color: "#AB8A62" }}>
                  {" "}
                  &nbsp;2 adults or 2 adults + 1 child (sharing existing
                  bedding)
                </strong>
                . If you are travelling with children, please let our
                reservation team know in advance so we can support you in
                creating a comfortable stay.
              </p>
            </div>
          </div>
        </div>

        {/* Sec 2 */}
        <div className="section">
          <h2 className="content__title1 wow fadeInUp">
            2. NO SPA FACILITY — NATURE IS YOUR HEALER
          </h2>
          <div className="content__subtitle wow fadeInUp">
            <p>We do not have a spa. This is intentional.</p>
            <p>
              Rain Drops is created as a sanctuary for{" "}
              <strong style={{ color: "#AB8A62" }}>
                original mindfulness
              </strong>
              , deep rest, neuro-mindfulness, mindful dining, and nature-based
              healing rather than spa treatments. Here, the{" "}
              <strong style={{ color: "#AB8A62" }}>forest</strong>, the&nbsp;
              <strong style={{ color: "#AB8A62" }}>quiet</strong>, and your{" "}
              <strong style={{ color: "#AB8A62" }}>own breath </strong>own
              breath offer the deepest form of restoration.
            </p>
          </div>
        </div>

        {/* Sec 3 */}
        <div className="section">
          <h2 className="content__title1 wow fadeInUp">
            3. PERSONAL CONNECTION BEFORE ARRIVAL (REQUIRED FOR ALL CHANNELS)
          </h2>
          <div className="content__subtitle wow fadeInUp">
            <p>
              No matter where or how you booked —through our website, a travel
              partner, an OTA, a wellness curator, or a tour company —we kindly
              request that{" "}
              <strong style={{ color: "#AB8A62" }}>
                all guests contact us directly before arrival
              </strong>{" "}
              . Why? Because your stay is customized around you, including
            </p>
            <ul className="bullet-list">
              <li>your expectations</li>
              <li>your personality</li>
              <li>your emotional goals</li>
              <li>your wellness intentions</li>
              <li>your comfort levels</li>
              <li>any fears, sensitivities, or preferences</li>
            </ul>
            <div className="content__subtitle wow fadeInUp">
              <p>
                Our team will connect with you to understand
                <strong style={{ color: "#AB8A62" }}>&nbsp;who you are </strong>who
                you are, so we can shape the journey that most supports your
                calmness, clarity, and inner discovery. This is a core part of
                our&nbsp;
                <strong style={{ color: "#AB8A62" }}>
                  mindfulness philosophy
                </strong>{" "}
                and the reason Rain Drops is globally valued as a personalized
                sanctuary.
              </p>
            </div>
          </div>
        </div>

        {/* Sec 4 */}
        <div className="section">
          <h2 className="content__title1 wow fadeInUp">4. PAYMENT TERMS</h2>
          <div className="">
            <p className="payment-subtitle">Standard Period</p>
            <ul className="payment-list">
              <li>30% deposit required to guarantee the reservation</li>
              <li>Remaining 70% due 30 days prior to arrival</li>
            </ul>

            <p className="payment-subtitle" style={{ marginTop: "25px" }}>
              Peak Season & Holiday Periods
            </p>
            <ul className="payment-list">
              <li>60% non-refundable deposit required at booking</li>
              <li>Remaining payment due 60 days before arrival</li>
            </ul>
          </div>
        </div>

        {/* Sec 5 */}
        <div className="section">
          <h2 className="content__title1 wow fadeInUp">
            5. FLEXIBLE CANCELLATION POLICY
          </h2>
          <div className="content__subtitle wow fadeInUp">
            <p>
              We strive to stay supportive and flexible. Until further notice:
            </p>
            <ul className="bullet-list">
              <li>
                All new bookings can be rescheduled without
                restrictions.
              </li>
              <li>
                If you cannot travel due to government restrictions, our team
                will help you:
                <ul className="bullet-list">
                  <li> reschedule your stay.</li>
                 
                </ul>
              </li>
            </ul>
            <div className="content__subtitle wow fadeInUp">
              <p>
                We deeply value our guests and loyal repeat travelers and will
                do our best to assist during challenging situations.
              </p>
            </div>
          </div>
        </div>

        {/* Sec 6 */}
        <div className="section">
          <h2 className="content__title1 wow fadeInUp">
            6. CHECK-IN / CHECK-OUT
          </h2>
          <div className="">
            <ul className="bullet-list">
              <li>
                <strong style={{ color: "#AB8A62" }}>Check-in</strong> :from
                14:00
              </li>
              <li>
                <strong style={{ color: "#AB8A62" }}>Check-out</strong>
                :Check-out at 12:00 noon
              </li>
            </ul>
            <p style={{ marginTop: "15px", color: "#666" }}>
              Early check-ins or late check-outs are subject to availability.
            </p>
          </div>
        </div>

        {/* Sec 7 */}
        <div className="section">
          <h2 className="content__title1 wow fadeInUp">7. SPECIAL REQUESTS</h2>
          <div className="content__subtitle wow fadeInUp">
            <p>To personalize your stay, please inform our team of:</p>
            <div className="feature-list">
              <ul className="bullet-list">
                <li>dietary preferences</li>
                <li>food allergies</li>
                <li>accessibility needs</li>
                <li>emotional or wellness goals</li>
                <li>special celebrations</li>
                <li>mindfulness or meditation intentions</li>
                <li>nature sensitivities (leeches, insects, mobility, etc.)</li>
              </ul>
            </div>
            <div className="content__subtitle wow fadeInUp">
              <p>
                We design every arrival and experience with
                <strong style={{ color: "#AB8A62" }}>&nbsp;mindful detail</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Sec 8 */}
        <div className="section">
          <h2 className="content__title1 wow fadeInUp">
            8. TECHNOLOGY, SILENCE, AND MINDFULNESS
          </h2>
          <div className="content__subtitle wow fadeInUp">
            <p>
              Rain Drops is a place to reconnect with yourself. To maintain a
              calm and mindful environment:
            </p>
            <ul className="bullet-list">
              <li>WiFi is available in villas</li>
              <li>Electronic devices are allowed inside rooms only</li>
              <li>
                Devices should not be used on trails, dining areas, or
                relaxation spaces
              </li>
              <li>We encourage digital detox during experiences</li>
              <li>Smoking is allowed only in designated outdoor areas</li>
            </ul>
            <p>Mindful silence supports deep rest — for you and for others.</p>
          </div>
        </div>

        {/* Sec 9 */}
        <div className="section">
          <h2 className="content__title1 wow fadeInUp">
            9. NATURE AWARENESS & SAFETY
          </h2>
          <div className="content__subtitle wow fadeInUp">
            <p>
              Our villa shares its land with the rainforest. You may encounter:
            </p>

            <ul className="bullet-list">
              <li>frogs</li>
              <li>fireflies</li>
              <li>insects</li>
              <li>Leeches</li>
              <li>harmless snakes</li>
              <li>monkeys</li>
              <li>moths and beetles</li>
            </ul>
            <p>
              These are part of the living Sinharaja ecosystem. Our paths are
              well lit and our team is available 24/7 for assistance. Leech
              socks are provided for nature trails.
            </p>
          </div>
        </div>

        {/* Sec 10 */}
        <div className="section">
          <h2 className="content__title1 wow fadeInUp">
            10. MINIMUM STAY RECOMMENDATION
          </h2>
          <div className="content__subtitle wow fadeInUp">
            <p>
              While we accept one-night stays, we strongly recommend at least
              two nights, especially for:
            </p>
            <div className="">
              <ul className="bullet-list">
                <li>mindfulness journeys</li>
                <li>inner discovery series</li>
                <li>neuro-mindfulness programs</li>
                <li>leadership mindfulness retreats</li>
              </ul>
            </div>
            <div className="content__subtitle wow fadeInUp">
              <p>
                This gives your mind and body time to adjust, settle, and truly
                benefit from the environment.
              </p>
            </div>
          </div>
        </div>

        {/* Sec 11 */}
        <div className="section">
          <h2 className="content__title1 wow fadeInUp">
            11. Maximum Occupancy
          </h2>
          <div className="content__subtitle wow fadeInUp">
            <div className="">
              <ul className="bullet-list">
                <li>
                  Each villa accommodates recommends a maximum of
                  <strong style={{color: "#AB8A62"}}>&nbsp;2 guests</strong>
                </li>
                <li>Extra beds are based on availability</li>
                <li>Families booking multiple rooms are welcome</li>
              </ul>
            </div>
            <div className="highlight-box"></div>
          </div>
        </div>

        {/*Sec 12 */}
        <div className="section">
          <h2 className="content__title1 wow fadeInUp">12. QUIET HOURS</h2>
          <div className="content__subtitle wow fadeInUp">
            <p>
              Out of respect for nature and fellow guests:
              <ul className="bullet-list">
                <li>
                  Quiet hours are from{" "}
                  <strong style={{ color: "#AB8A62" }}>
                    9:00 PM to 7:00 AM
                  </strong>
                </li>
              </ul>
            </p>

            <div className="content__subtitle wow fadeInUp">
              <p>
                Even outside these hours, we invite guests to move and speak
                with mindful gentleness.
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="content__title1 wow fadeInUp">Our Promise to You</h2>
          <div className="content__subtitle wow fadeInUp">
            <p></p>
            <div className="content__subtitle wow fadeInUp">
              <p>
                At Rain Drops, every policy is created with one purpose:
                <br></br>
                To protect your calmness, elevate your clarity, and help you
                cultivate the inner quiet that stays with you long after you
                leave.<br></br>
                <br></br>
                Nature will calm you.<br></br>Mindfulness will guide you.
                <br></br>We will support you every step of the way.
              </p>
            </div>
          </div>
        </div>
        {/* F Note */}
        <div
          className="section"
          style={{
            marginTop: "50px",
            paddingTop: "20px",
            borderTop: "1px solid #eaeaea",
          }}
        >
          <p
            className="content__subtitle wow fadeInUp"
            style={{ textAlign: "center", color: "#7f8c8d", fontSize: "14px" }}
          >
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p
            className="content__subtitle wow fadeInUp"
            style={{ textAlign: "center", color: "#7f8c8d", fontSize: "14px" }}
          >
            For any questions regarding these policies, please contact us at
            info@raindrops.lk
          </p>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
