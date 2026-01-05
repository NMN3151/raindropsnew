"use client";
import React, { useState } from "react";
import Image from "next/image";

function CMSSC() {
  const [imgError, setImgError] = useState(false);

  return (
    <>
      <div className="body">
        <div className="container ">
          <h2 className="c__title" style={{ textAlign: "center", marginTop:"150px" ,}}>
            Calm minds support strong communities
          </h2>
          <Image
            src="/assets/images/about/ab6.png"
            alt="Partnership Background"
            className="background-image"
            width={1920}
            height={650}
            onError={() => setImgError(true)}
            priority
            style={{ width: '100%', height: 'auto',marginBottom:"100px" }}
          />
        </div>
       
      </div>
      <style jsx>{`
 .c__title {
     font-size: 2rem;
 }
 /* Mobile First (≤575px) */
 .philosophy-content {
   text-align: center;
   margin-bottom: 2rem;
 }
 .philosophy-image {
   height: 280px;
   margin: 0 auto;
 }
 /* Small Mobile (≤375px) */
 @media (max-width: 375px) {
   .philosophy__section {
     padding: 2rem 0;
   }
   .philosophy-image {
     height: 240px;
   }
   .philosophy__intro,
   .philosophy__cta {
     margin-bottom: 1.25rem;
   }
   /* Only mobile responsive for image */
   .background-image {
     width: 100% !important;
     height: auto !important;
     max-height: 250px;
     object-fit: cover;
   }
 }
 /* Mobile Large (576px - 767px) */
 @media (min-width: 425px) {
   .philosophy-content {
     text-align: left;
     margin-bottom: 0;
   }
   .philosophy-image {
     height: 320px;
   }
   /* Mobile responsive for image */
   .background-image {
     width: 100% !important;
     height: auto !important;
     max-height: 300px;
     object-fit: cover;
   }
 }
 /* Tablet (768px - 991px) */
 @media (min-width: 768px) {
   .philosophy__section {
     padding: 4rem 0;
   }
   .philosophy-image {
     height: 380px;
   }
   .philosophy__intro {
     font-size: 1.2rem;
   }
   .philosophy__cta {
     font-weight: 600;
   }
   /* Reset for tablet and above */
   .background-image {
     width: auto !important;
     height: auto !important;
     max-height: none;
   }
 }
 /* Laptop (992px - 1199px) */
 @media (min-width: 992px) {
   .philosophy__section {
     padding: 5rem 0;
   }
   .background-image {
     height: 480px;
   }
   .philosophy__intro {
    
   }
     .section__title{
         font-size: 2rem;
         margin-bottom: 25px;
     }
 }
 /* Large Desktop (≥1200px) */
 @media (min-width: 1200px) {
   .philosophy__section {
     padding: 6rem 0;
   }
   .philosophy-content {
     margin-left: -100px;
   }
   .philosophy-image {
     height: 560px;
   }
   .philosophy__intro {
     font-size: 1.3rem;
   }
 }
 /* Extra Large Screens (≥1400px) */
 @media (min-width: 1400px) {
   .philosophy-image {
     height: 620px;
   }
 }
 /* Fallback image */
 .fallback-image {
   font-size: 1.2rem;
   font-weight: 500;
 }
 /* Ensure proper spacing on all devices */
 .container {
   padding-left: 15px;
   padding-right: 15px;
 }
 /* Improve readability on mobile */
 @media (max-width: 767px) {
   .philosophy__highlight {
     text-align: justify;
   }
 }
        /* Smooth fade-in animation */
        .content__title {
          animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        /* Subtitle animation */
        .text-white\\/90 {
          animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        /* Button animation */
        button {
          animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Ensure Next.js Image fills container properly */
        .relative > span {
          position: absolute !important;
          width: 100% !important;
          height: 100% !important;
        }

        /* Mobile button adjustments */
        @media (max-width: 640px) {
          button {
            padding: 0.5rem 1rem !important;
            font-size: 0.75rem !important;
          }
        }

        /* For very small screens */
        @media (max-width: 320px) {
          .content__title {
            font-size: 1.4rem;
            padding: 0 0.25rem;
          }
          /* Only mobile responsive for image */
          .background-image {
            max-height: 200px;
          }
        }
      `}</style>
    </>
  );
}

export default CMSSC;