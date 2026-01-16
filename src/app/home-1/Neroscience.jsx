'use client';
import Link from 'next/link';
import React from 'react';

export default function MindfulnessNeurosciencePage() {
  return (
    <div className="rts__section neuroscience__section section__padding">
      <div className="container">
        <div className="row g-5 align-items-start">

          {/* Content - Left on desktop, first on mobile */}
          <div className="col-12 col-lg-6 order-1 order-lg-1">
            <div className="neuroscience-content">
              <h2 className="section__title"> Mindfulness Meets Neuroscience at Rain drops</h2>   
              {/* <h2 className="content__title h2 mb-4 lh-1"> */}
                {/* Mindfulness Meets Neuroscience */}
              {/* </h2> */}
               
              <p className="neuroscience__subtitle mb-4">
                Experience Calm, Measured by Nature and Mind
              </p>

              <p className="neuroscience__description mb-4">
                At Rain Drops Wellness Resort, ancient mindfulness meets modern science. Join our signature Mindfulness of Breathing and Loving-Friendliness Session, guided by Dr. GB Hewawasam and enhanced by Muse™ neurofeedback headbands — the same technology used by neuroscientists to track real-time calm and focus. Each guest receives a complimentary one-hour session, surrounded by the living serenity of the Sinharaja Rainforest. Feel your mind settle, your breath deepen, and your awareness expand — as nature, science, and mindfulness become one.
              </p>

              <p className="neuroscience__description wow fadeInUp" style={{fontStyle: 'italic'}}>
               <strong>Rain Drops — Where the Mind Learns to Breathe.</strong> 
              </p>

              <p className="neuroscience__description wow fadeInUp" style={{fontStyle: 'italic' }}  >
               <strong> Discover the Experience — Book Your Stay Today.</strong>
              </p>

              {/* Button only in content on desktop */}
              <div className="d-none d-lg-block">
                <Link href="/neuroscience">
                <button className="neuroscience__btn">
                  Discover Now
                </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Image + Button (on mobile only) */}
          <div className="col-12 col-lg-6 order-2 order-lg-2">
            <div className="neuroscience-image-wrapper">
              <img
                src="/assets/images/neroscience/muse2.jpg"
                alt="Mindfulness Meets Neuroscience"
                className="neuroscience-image w-100 rounded-3"
                style={{ objectFit: 'cover' }}
                onError={(e) => {
                  e.target.style.backgroundColor = '#f5f5f5';
                  e.target.style.display = 'flex';
                  e.target.style.alignItems = 'center';
                  e.target.style.justifyContent = 'center';
                  e.target.style.color = '#666';
                  e.target.style.fontSize = '1.2rem';
                  e.target.style.fontWeight = '500';
                  e.target.innerHTML = 'Neuroscience Image';
                  e.target.classList.add('fallback-image');
                }}
              />
            </div>

            {/* Button under image on mobile only */}
            <div className="d-block d-lg-none text-center mt-4">
              <Link href="/neuroscience">
              <button className="neuroscience__btn w-100" style={{ maxWidth: '280px' }}>
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
          background: #f8f5f0;
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
        
          font-size: var(--p);
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
          background-color: #ab8a62;
          color: white;
          border: none;
          margin-top: 30px;
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
 .neuroscience__section {
   background: #f8f5f0;
   margin-top: 20px;
 }
           .section__title {
            text-align: center;
            margin-bottom: 1rem;
          } 
          .neuroscience__subtitle {
            font-size: 1.5rem;
            text-align: center;
          }
 

          .neuroscience__tagline,
          .neuroscience__cta-text {
            font-size: 0.9rem;
            text-align: center;
          }

          .neuroscience-image {
            height: 220px;
            border-radius: 8px;
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
          .content__title {
            font-size: 2.6rem;
          }

          .neuroscience__subtitle {
            font-size:  20px;
          }

         

          .neuroscience__tagline,
          .neuroscience__cta-text {
            font-size: 15px;
          }

          .neuroscience-image {
            height: 671px;
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