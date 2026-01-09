import React from "react";


function Promise() {
  return (
    <>
      <div className="rts__section setting__section section__padding">
        <div className="container" >
          <h2 className="content__title wow fadeInUp">
            Our Quiet Promise to the World
          </h2>
          <div className="setting-content-wrapper">
            {/* Two images SIDE BY SIDE - Now on LEFT side */}
            <div className="setting-images-column">
              <div
                className="side-by-side-images wow fadeInUp"
                data-wow-delay="0.4s"
              >
                {/* Image 3 on LEFT side */}
                <div className="image-item1">
                  <img
                    src="/assets/images/about/partnership/promise1.png"
                    alt="Rainforest scenery"
                    className="setting-img-2"
                    loading="lazy"
                  />
                </div>

                {/* Image 2 on RIGHT side */}
                <div className="image-item2">
                  <img
                    src="/assets/images/about/partnership/promise2.png"
                    alt="Rainforest scenery"
                    className="setting-img-3"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Text content section - Now on RIGHT side */}
            <div className="setting-text-section">
              <div className="setting-description">
                <p className="raindrop-text">
                  <span
                    style={{
                      fontStyle: "italic",
                      fontFamily: "BrittanySignature",
                      fontSize: 19,
                    }}
                  >
                    RainDrops
                  </span>{" "}
                  holds a responsibility, not spoken loudly, but lived daily:{" "}
                  <br /> <br />
                  We will grow only as nature allows. <br />
                  We will succeed only if our community thrives. <br />
                  We will protect what the world has trusted us to be part of.{" "}
                  <br /> <br />
                  This is not a program. <br />
                  This is our way of being. <br /> <br />
                  <span
                    style={{
                      fontStyle: "italic",
                      fontFamily: "BrittanySignature",
                      fontSize: 19,
                    }}
                  >
                    RainDrops
                  </span>{" "}
                  <br />
                  Where Insight Partners Belong. <br />
                  Where Community and Nature Are One. <br />
                  Where Calm Is Cultivated Together.
                </p>
              </div>
              {/* Large image under the text */}
              <div
                className="setting-image-below wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <img
                  src="/assets/images/about/partnership/promise3.png"
                  alt="Rainforest cloud view"
                  className="setting-img-1"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        /* Base styles */
        .rts__section.setting__section {
          position: relative;
          overflow: hidden;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .section__padding {
          padding: 80px 0;
        }
        /* Main layout - two columns */
        .setting-content-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 60px;
          align-items: flex-start;
        }
        .setting-text-section {
          flex: 1.5;
          min-width: 300px;
        }
        .raindrop-text {
          font-size: 16px !important;
          margin-bottom: 30px !important;
          line-height: 1.5 !important;
        }

        .setting-images-column {
          flex: 1;
          min-width: 250px;
          display: flex;
          align-items: center;
        }
        /* Side by side images container */
        .side-by-side-images {
          width: 100%;
        }
        .images-container {
          display: flex;
          gap: 10px;
          width: 100%;
          align-items: flex-start;
        }
        /* Image on LEFT side - wl13.png */
        .image-left {
          flex: 0 0 40%; /* Takes 40% width, fixed */
        }
        /* Image on RIGHT side - wl14.png */
        .image-right {
          flex: 0 0 60%; /* Takes 60% width, fixed */
        }
        /* Image styling */
        .image-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }
        /* Ensure images fill their containers */
        .setting-img-1{
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        }
        
        .setting-img-3 {
        margin-left: -10px;
        }
        
        .setting-img-2,
        .setting-img-3 {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
        /* Title styling */
        .content__title {
          font-size: 2.2rem;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 300;
          position: relative;
          padding-bottom: 15px;
          text-align: center;
        }
        .content__title:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 2px;
        }
        /* Description text */
        .setting-description {
          margin-bottom: 2.5rem;
        }
        .setting-description p {
          font-size: 1.15rem;
          line-height: 1.7;
          margin-bottom: 1rem;
          color: #333;
          font-weight: 300;
        }
        .raindrop-text {
          font-weight: 500;
          color: #555;
        }
        /* Features list */
        .setting-features {
          margin-top: 2rem;
          margin-bottom: 2.5rem;
        }
        .feature-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.2rem;
          padding-left: 5px;
        }
        .feature-icon {
          font-size: 1.8rem;
          line-height: 1;
          margin-right: 15px;
          font-weight: bold;
        }
        .feature-text {
          font-size: 1.1rem;
          line-height: 1.6;
          font-weight: 300;
          padding-top: 2px;
        }
        /* Large image below text */
        .setting-image-below {
          margin-top: 2rem;
        }
        .setting-image-below .image-item {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
        /* Responsive Design */
        @media (max-width: 992px) {
          .setting-content-wrapper {
            gap: 40px;
          }
          .section__padding {
            padding: 60px 0;
          }
          .content__title {
            font-size: 1.8rem;
          }
          .setting-text-section,
          .setting-images-column {
            flex: 1;
          }
          .images-container {
            gap: 12px;
          }
          .image-left {
            flex: 0 0 38%;
          }
          .image-right {
            flex: 0 0 62%;
          }
          .image-left .image-item {
            height: 220px;
          }
          .image-right .image-item {
            height: 270px;
          }
          .setting-img-1 {
            height: 250px;
          }
        }
        @media (max-width: 768px) {
          .setting-content-wrapper {
            flex-direction: column-reverse; /* Changed to column-reverse for better mobile flow */
            gap: 40px;
          }
          .section__padding {
            padding: 50px 0;
          }
          .content__title {
            font-size: 1.6rem;
            letter-spacing: 1px;
          }
          .setting-description p {
            font-size: 1.05rem;
          }
          .feature-text {
            font-size: 1rem;
          }
          .images-container {
            gap: 10px;
          }
          .setting-img-2 {
            height: 250px;
            width: 500px;
            margin-bottom: 20px;
          }
          .setting-img-3 {
            height: 250px;
          }
          .setting-img-1 {
            height: 250px;
          }
        }
        @media (max-width: 480px) {
          .container {
            padding: 0 15px;
          }
          .section__padding {
            padding: 40px 0;
          }
          .content__title {
            font-size: 1.4rem;
            margin-bottom: 1.5rem;
          }
          .setting-description {
            margin-bottom: 2rem;
          }
          .setting-description p {
            font-size: 1rem;
          }
          .feature-item {
            margin-bottom: 1rem;
          }
          .feature-text {
            font-size: 0.95rem;
          }
          .feature-icon {
            margin-right: 12px;
          }
          .images-container {
            flex-direction: column; /* Stack vertically on very small screens */
            gap: 15px;
          }
          .image-left,
          .image-right {
            flex: 0 0 100%;
            width: 100%;
          }
          .image-left .image-item {
            height: 180px;
          }
          .image-right .image-item {
            height: 220px;
          }
          .setting-img-1 {
            height: 200px;
            margin-top: 20px;
          }
         .setting-img-2{
         margin-top: -20px;
         }   

         .setting-img-3{
         margin-left: 2px;
         }
        }
        @media (min-width: 1200px) {
          .container {
            max-width: 1100px;
          }

          .setting-content-wrapper{
          margin-right:-500px;
          } 
          .image-item1 {
            height: 632px;
            border-radius: 3px;
            width: 350px;
            margin-left: -80px;
          }
          .image-item2 {
            height: 632px;
            width: 350px;
            margin-left: 300px;
            margin-top: -631px;
          }
          .image-item {
            height: 350px;
            width: 300px;
          }
          .setting-img-1 {
            height: 272px;
            width: 480px;
            object-fit: cover;
          }
        }
        @media (min-width: 1024px) and (max-width: 1199px) {
          .container {
            max-width: 1400px;
          }
          .content__title {
            font-size: 2.1rem;
          }
          .image-item1 {
            height: 470px;
            width: 200px;
            margin-left: -57px;
            margin-top: 10px;
          }
          .image-item2 {
            height: 470px;
            width: 200px;
            margin-left: 150px;
            margin-top: -470px;
          }
          .setting-description p {
            font-size: 1rem;
            margin-bottom: 2rem;
          }
          .image-item {
            height: 350px;
            border-radius: 3px;
            width: 500px;
          }
          .setting-img-1 {
            height: 271px;
            width: 550px;
          }
        }
        /* Tablet Only - iPads, Android tablets */
        @media (min-width: 768px) and (max-width: 1023px) {
          .container {
            max-width: 700px;
          }
          .content__title {
            font-size: 2.1rem;
          }
          .image-item1 {
            height: 360px;
            width: 200px;
            margin-left: 265px;
            margin-top: -400px;
          }
          .image-item2 {
            height: 360px;
            width: 200px;
            margin-left: 480px;
            margin-top: -360px;
          }
          .setting-description p {
            font-size: 1rem;
            line-height: 1.5;
            width: 50%;
            margin-top: -40px;
          }
          .image-item {
            height: 350px;
            width: 400px;
          }
          .setting-img-1 {
            height: 240px;
            object-fit: cover;
            width: 250px;
          }
          .setting-img-2 {
            height: 360px;
            object-fit: cover;
            width: 250px;
          }
          .setting-img-3 {
            height: 360px;
            object-fit: cover;
            width: 250px;
          }
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
      `}</style>
    </>
  );
}

export default Promise;