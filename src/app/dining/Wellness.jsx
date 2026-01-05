// 'use client';
// import React, { useEffect } from 'react';
// import Rellax from 'rellax';
// import Link from 'next/link';

// function Wellness() {
//     useEffect(() => {
//         if (typeof window !== "undefined") {
//             new Rellax(".rellax", { speed: 1 });
//         }
//     }, []);
//     return (
//         <div className="rts__section about__area is__home__main section__padding">
//             <div className="section__shape d-none d-xl-block">
//                 <img src="/assets/images/about/section__shape.svg" alt="" />
//             </div>
//             <div className="container">
//                 <div className="row">
//                     <div className="about__wrapper">
//                         <div className="image">
//                             <div className="position-relative radius wow fadeInUp overflow-hidden" data-wow-delay=".3s">
//                                 <div className="jara-mask-1 jarallax image-height pt-0" data-rellax-speed="2">
//                                     {/* Ensure rellax-img is present */}
//                                     <img
//                                         src="/assets/images/nutrition/healthy1.png"
//                                         className="jarallax-img rellax rellax-img"
//                                         alt="Background"
//                                     />
//                                 </div>
//                             </div>
//                             {/* <div className="image__card radius-10 wow fadeInUp" data-wow-delay=".5s">
//                                 <div className="icon radius-10 center-item">
//                                    <img src="/assets/images/nutrition/healthy3.png" style={{height:100, width:100}} alt="" />
//                                 </div> 
//                                 <div className="content">
//                                     <span className="h5">20+</span>
//                                     <p>Experience Staff</p>
//                                 </div>
//                             </div> */}
//                             <div className="image__card__image wow fadeInUp">
//                                 <img
//                                     src="/assets/images/nutrition/healthy2.png"
//                                     width={312} 
//                                     alt="About"
//                                 />
//                             </div>
//                         </div>
//                         <div className="content">
//                             {/* <span className="h6 subtitle__icon__two d-block wow fadeInUp">About Us</span> */}
//                             <h2 className="content__title wow fadeInUp">
//                                Helthy Eating At Raindrops
//                             </h2>
//                              <p className="content__subtitle wow fadeInUp" data-wow-delay=".3s">Mind Meets Nature — Eat Well, Live Clear.</p>
//                             <p className="content__subtitle wow fadeInUp" data-wow-delay=".3s">
//                                At Rain Drops Wellness Resort, every meal tells a story — a story of balance, care, and mindful living. Our approach to dining is built on one simple truth: when you eat with awareness and harmony, your body begins to heal naturally. Here, food isn’t just served — it’s crafted for your mind and body.
                               
//                             </p>
//                             {/* <Link href="#" className="theme-btn btn-style fill no-border wow fadeInUp" data-wow-delay=".5s"> */}
//                                 {/* <span>Learn More</span> */}
//                             {/* </Link> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Wellness;



'use client';
import React from 'react';

export default function Wellness() {
  return (
    <div className="foodpurpose__section section__padding">
      <div className="container">
        <div className="row g-5 align-items-start">

          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="foodpurpose-image-wrapper">
              <img
                src="/assets/images/nutrition/wellness1.png"
                alt="Food with Purpose"
                className="foodpurpose-image w-100 rounded-3"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <div className="foodpurpose-content">
              <h2 className="section__title">Your Wellness, Your Way</h2>

              <p className="foodpurpose__description mb-4">
                Before your arrival, we take time to understand your preferences, sensitivities,
                and wellness priorities. From there, we design meals that align with your goals —
                whether you wish to feel lighter, calmer, or more energized. Everything we serve is
                meant to help you feel good, think clearly, and live with ease.
              </p>

              
            </div>
          </div>

        </div>
      </div>

     <style jsx>{`
          .foodpurpose__section {
            background: #ffffff;
            padding: 80px 0;
          }

          .section__title {
            line-height: 1.2;
            margin-bottom: 20px;
          }

          .foodpurpose__description {
            line-height: 1.7;
          }

          .foodpurpose-image {
            height: 500px;
            transition: transform 0.4s ease;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            object-fit: cover;
          }

          .foodpurpose-image:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          }

          .foodpurpose-content {
            padding-right: 30px;
          }

          @media (max-width: 991.98px) {
            .foodpurpose-content {
              padding-right: 0;
              margin-bottom: 30px;
            }
          }

          @media (max-width: 575.98px) {
            .section__title {
              font-size: 1.8rem;
              text-align: center;
            }
            .foodpurpose__description,
            .foodpurpose__tagline {
              text-align: center;
            }
            .foodpurpose-image {
              height: 250px;
            }
          }

          @media (min-width: 768px) and (max-width: 991.98px) {
            .foodpurpose-image {
              height: 400px;
            }
          }

          
          @media (min-width: 992px) {
            .foodpurpose-image {
              height: 500px;
            }
          }  
            
`}</style>

    </div>
  );
}
