"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image"; 

export default function Partnership() {
  return (
    <div className="rts__section neuroscience__section section__padding">
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* Content - Left on desktop, first on mobile */}
          <div className="col-12 col-lg-6 order-1 order-lg-1">
            <div className="neuroscience-content ">
              <h2 className="section__title">A Living Partnership</h2>
              <p>Where RainDrops Meet Our Community </p>

              <p className="neuroscience__description mb-4">
                A Shared Responsibility. A Shared Calm. A Shared Future.
              </p>

              <p className="neuroscience__tagline mb-3">
                RainDrops does not exist beside the rainforest. <br />
                RainDrops exists within a living relationship: with nature, with
                people, and with purpose.
              </p>

              <p className="neuroscience__tagline mb-3">
                At the edge of the Sinharaja UNESCO World Heritage Rainforest,
                RainDrops is part of a greater whole: the RainDrops Community:
                families, wisdom keepers, land stewards, and protectors who have
                lived in harmony with this forest long before the world named it
                a heritage.
              </p>

              <p className="neuroscience__tagline mb-3">
                <strong>
                  {" "}
                  We are not hosts and neighbors. <br />
                  We are one system.
                </strong>{" "}
                <br /> <br />
                Not Villages. Not Visitors. A Living Partnership. The people
                surrounding RainDrops are not “villages.” They are part of
                RainDrops itself.
              </p>

              <p className="neuroscience__tagline mb-3">
                Their lives, knowledge, and care are woven into how RainDrops
                exists - from how land is protected and food is grown, to how
                silence is respected and calm is cultivated. Likewise, those who
                journey here are not “clients” or “guests.” They are Insight
                Partners, individuals who come not to consume nature, but to
                understand it, protect it and learn from it.
              </p>

              <p className="neuroscience__tagline mb-3">
                Raindrops is where: <br />
                <ul>
                  <li>Insight Partners meet living wisdom</li>
                  <li>Nature meets respect</li>
                  <li>Calm is cultivated together</li>
                </ul>
              </p>
              {/* Button only in content on desktop */}
            </div>
          </div>

          {/* Image + Button (on mobile only) */}
          <div className="col-12 col-lg-6 order-2 order-lg-2">
            <div className="neuroscience-image-wrapper">
              <Image
                src="/assets/images/about/partnership/partner1.png"
                alt="Mindfulness Meets Neuroscience"
                width={450}
                height={671}
                className="neuroscience-image w-80"
                style={{ objectFit: "cover", height: "auto",  paddingTop: "70px"}}
                onError={(e) => {
                  e.target.style.backgroundColor = "#f5f5f5";
                  e.target.style.display = "flex";
                  e.target.style.alignItems = "center";
                  e.target.style.justifyContent = "center";
                  e.target.style.color = "#666";
                  e.target.style.fontSize = "1.2rem";
                  e.target.style.fontWeight = "500";
                  e.target.innerHTML = "Neuroscience Image";
                  e.target.classList.add("fallback-image");
                }}
                loading="lazy"
              />
            </div>

            {/* Button under image on mobile only */}
            <div className="d-block d-lg-none text-center mt-4">
              <Link href="/contact">
                <button
                  className="neuroscience__btn w-100"
                  style={{ maxWidth: "280px" }}
                >
                  Discover Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles - Mobile First */}
      <style jsx>{`
    
        .neuroscience__section {
          color: #4a4a4a;
          margin-top: -50px;
          
        }

        .content__title {
          line-height: 1.2;
          text-align: center;
          justify-content: center;
        }

        .neuroscience__subtitle,
        .neuroscience__description,
        .neuroscience__tagline,
        .neuroscience__cta-text {
          line-height: 1.6;
        
 markdown
        }

        .neuroscience__tagline,
        .neuroscience__cta-text {
          font-size: 15px;
        }

        .neuroscience-image {
          height: 671px;
          transition: transform 0.4s ease;
        }

        .neuroscience-image:hover {
          transform: translateY(-8px);
        }

        .neuroscience__btn {
          background-color: #a8915b;
          color: white;
          border: none;
          padding: 14px 36px;
          font-size: 16px;
          font-weight: 500;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(189, 166, 113, 0.3);
         
        }

        .neuroscience__btn:hover {
          background-color: #b8955e;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(189, 166, 113, 0.4);
        }

        .neuroscience__btn:active {
          transform: translateY(0);
        }

        /* Mobile (≤575px) */
        @media (max-width: 575.98px) {
          .content__title {
            font-size: 1.6rem;
            text-align: center;
          }

          .neuroscience__subtitle {
            font-size: 1.4rem;
            text-align: left;
          }

          .neuroscience__description {
            text-align: left;
          }

          .neuroscience__tagline,
          .neuroscience__cta-text {
            font-size: 0.9rem;
            text-align: left;
          }

          .neuroscience-image {
            height: 220px;
          
          }

          .neuroscience__btn {
            font-size: 15px;
            padding: 12px 28px;
          }
        }

        /* Mobile Large (576px - 767px) */
        @media (min-width: 576px) and (max-width: 767.98px) {
          .content__title {
            font-size: 1.8rem;
            text-align: left;
          }

          .neuroscience__subtitle {
            font-size: 1.6rem;
          }

       
          .neuroscience-image {
            height: 300px;
          }
        }

        /* Tablet (768px - 991px) */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .content__title {
            font-size: 2rem;
          }

          .neuroscience__subtitle {
            font-size: 1.8rem;
          }

      

          .neuroscience-image {
            height: 420px;
          }
        }

        /* Desktop (992px - 1199px) */
        @media (min-width: 992px) and (max-width: 1199.98px) {
          .content__title {
            font-size: 2.25rem;
          }

          .neuroscience__subtitle {
            font-size: 2rem;
          }

        

          .neuroscience-image {
            height: 550px;
          }
        }

        /* Large Desktop (≥1200px) - Desktop design preserved */
        @media (min-width: 1200px) {
         .neuroscience__section{
         padding-left: 150px;
         }
        padding: 4rem 2rem;
          width: 100%;
          max-width: 1350px; /* Won't overflow on smaller screens */
          margin: 0 auto;
          .content__title {
            font-size: 2.6rem;
           
          }

          .neuroscience__subtitle {
            font-size: 25px;
          }

        

          .neuroscience__tagline,
          .neuroscience__cta-text {
            font-size: 15px;
          }

          .neuroscience-image {
            height: 411px;
          
          }
        }

        .fallback-image {
          font-size: 1.2rem;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
