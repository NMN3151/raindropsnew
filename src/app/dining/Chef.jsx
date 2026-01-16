"use client";
import React from "react";
import Link from "next/link";

function Chef() {
  return (
    <>
      <div className="rts__section facility__area is__about has__background has__shape">
       
        <div className="section__shape wow fadeInRight" data-wow-delay=".5s">
          {/* <img src="/assets/images/pages/about-shape.svg" alt="" /> */}
        </div>
        
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-6 order-lg-1 order-2">
              <div className="facility__image jara-mask-3 jarallax mobile-image-container">
                <img
                  className="jarallax-img rellax rellax-img img-fluid chef-image"
                  src="/assets/images/nutrition/cheff.png"
                  alt="Chef Saffarunan - Rain Drops Wellness Resort"
                  loading="lazy"
                />
                
               
                <div className="chef-text-box-overlay">
                  <div className="text-box-content">
                    {/* <h3 className="text-box-signature">Chef Sadharuwan </h3> */}
                    {/* <p className="text-box-description"> */}
                      {/* Chef | Rain Drops Wellness Resort */}
                    {/* </p> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 order-lg-2 order-1">
              <div className="facility__content">
                
                <div className="section__content__left">
                  <h2 className="content__title h2 lh-1 chef-title" style={{fontFamily:"Highway"}}>Chef Sadha</h2>
                  <p className="chef-subtitle">The Presidential Standard Of Culinary Wellness</p>
                </div>
                

                <div
                  className="row mt-20 g-3 wow fadeInUp"
                  data-wow-delay=".5s"
                > 
                 <p className="content__subtitle wow fadeInUp" data-wow-delay=".3s">
                  At Rain Drops, your culinary journey is guided by a chef whose story is as extraordinary as his cuisine.With over 13 years of experience across high-end kitchens, and service as a Chef at the President's Office of Sri Lanka, he brings unmatched precision, 
                  dedication, and calm focus to the art of cooking.</p>

                   <p className="content__subtitle wow fadeInUp" data-wow-delay=".3s">
                  Trained in multicultural cuisines and known for exceptional performance under pressure, he has mastered the balance between flavor, nutrition, and artistry. His philosophy is simple:
                  "Healthy food must taste divine — and make your body feel lighter."
                  Every dish at Rain Drops reflects:</p>


               <p className="chef-quote wow fadeInUp" data-wow-delay=".3s">
                   Trained in multicultural cuisines and known for exceptional performance under pressure, he has mastered the balance between flavor, nutrition, and artistry. His philosophy is simple:
                  "Healthy food must taste divine — and make your body feel lighter."
                  Every dish at Rain Drops reflects:</p>



                  <blockquote className="chef-quote"></blockquote>



           

                  <ul className="chef-features">
                    <li> Fresh,seasonal,locally sourced ingredients</li>
                    <li> Wellness-driven preparation</li>
                    <li> Mindful,cooking inspired by nature</li>
                    <li> Presentation designed to elevate your inner calm</li>
                    <li> The same detail and dignity once reserved for a Head of State
                     </li>
                  </ul>
                   <p className="content__subtitle2 wow fadeInUp" data-wow-delay=".3s">
                  This is not restaurant dining.<br></br> 
                  This is Presidential Wellness Cuisine — crafted just for you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

    
        <style jsx>{`
          .facility__area.is__about {
    position: relative;
    padding: 60px 0;
    min-height: auto;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .content__subtitle {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .chef-quote {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    padding: 0;
    border: none;
    font-style: normal;
  }


          .facility__area.is__about::before {
            content: "";
            position: absolute;
            top: 0;
            right: 300px;
            width: 50vw;
            height: 100%;
            background: #f8f5f2ff;
            z-index: -1;
          }

          // .facility__area.is__about::after {
            // content: "";
            // position: absolute;
            // top: 0;
            // left: 0;
            // width: 100%;
            // height: 100%;
            // background: rgba(248, 245, 242, 0.85); /* Light overlay for better text readability */
            // z-index: -1;
          // }

          .section__shape {
            right: 5% !important;
            left: auto !important;
            transform: translateX(0);
          }

          .section__shape img {
            max-width: 600px;
            opacity: 0.7;
          }

          .img-fluid {
            max-width: 100%;
            height: auto;
            object-fit: cover;
          }

          .chef-title {
            font-family: Highway;
            margin-bottom: 0.5rem;
          }

          .chef-subtitle {
            margin-bottom: 1.5rem;
          }
 

           .chef-features {
              text-align: left;
              padding-left: 1.2rem;
              margin: 1rem 0;
            }

            .chef-features li {
              font-size: 0.95rem;
              line-height: 1.4;
              margin-bottom: 0.5rem;
            }


         
          .chef-text-box-overlay {
            position: absolute;
            bottom: 0px;
            top: 640px;
            left: 00px;
            padding: 55px;
            max-width: 320px;
            animation: fadeInUp 1s ease-out;
          }

          .text-box-content {
            color: white;
            text-align: left;
            
          }

          // .text-box-title {
            // font-size: 1.3rem;
            // color: white;
            // font-weight: 600;
            // margin-bottom: 10px;
            // font-family: 'Highway', sans-serif;
          //  
          // }

          .text-box-description {
            margin-bottom: 15px;
            opacity: 0.9;
          }

          .text-box-signature {
            opacity: 0.8;
            color: white;
            font-weight: 500;
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

        
          .mobile-image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          }

          @media (max-width: 767px) {
            .facility__area.is__about {
              padding: 40px 0;
              height: auto;
              background-attachment: scroll; /* Better performance on mobile */
            }

            .facility__content,
            .section__content__left {
              text-align: center;
            }
            
            .facility__image {
              margin-top: 2rem;
              text-align: center;
              display: block !important;
              position: relative;
            }

            .chef-image {
              height: 500px !important;
              width: 100% !important;
              max-width: 400px !important;
              object-fit: contain !important;
              display: block !important;
              margin: 0 auto !important;
              padding: 20px 0 !important;
            }

            /* Mobile Text Box Overlay */
            .chef-text-box-overlay {
              position: relative;
              bottom: auto;
              right: auto;
              max-width: 100%;
              margin: 20px auto 0;
              width: 90%;
              animation: fadeInUp 1s ease-out;
            }

            .mobile-image-container {
              min-height: 450px !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              background: transparent !important;
              flex-direction: column;
            }

            .section__shape {
              left: 50%;
              right: auto !important;
              transform: translateX(-50%);
              bottom: -50px;
            }

            .section__shape img {
              max-width: 300px;
              opacity: 0.5;
            }

           
            .facility__area.is__about::before {
              display: none;
            }

            .facility__area.is__about::after {
              background: rgba(248, 245, 242, 0.92); /* Stronger overlay for mobile readability */
            }

            /* Mobile typography adjustments */
            .chef-title {
              font-size: 1.8rem;
              line-height: 1.2;
              margin-bottom: 0.5rem;
            }

            .chef-subtitle {
              margin-bottom: 1rem;
            }

            
            
          }

          @media (max-width: 575px) {
            .facility__area.is__about {
              padding: 30px 0;
            }

            .container {
              padding-left: 15px;
              padding-right: 15px;
            }

            .row.g-5 {
              margin-left: -8px;
              margin-right: -8px;
            }

            .col-12 {
              padding-left: 8px;
              padding-right: 8px;
            }

            .chef-image {
              height: 650px !important;
              max-width: 350px !important;
              min-height: 350px !important;
            }

            .mobile-image-container {
              min-height: 400px !important;
            }

            .chef-text-box-overlay {
              padding: 20px;
              margin: 15px auto 0;
            }

            .text-box-title {
              font-size: 1.1rem;
            }

            .text-box-description {
              font-size: 0.85rem;
            }

            .chef-title {
              font-size: 1.6rem;
            }

            .chef-subtitle {
              font-size: 0.95rem;
            }

          
          
          }

          @media (min-width: 768px) and (max-width: 991px) {
            .facility__area.is__about {
              padding: 50px 0;
              height: auto;
            }

            .facility__area.is__about::before {
              width: 45vw;
              margin-right: 0;
            }

            .section__shape {
              right: 3% !important;
            }

            .section__shape img {
              max-width: 450px;
            }

            .chef-text-box-overlay {
              max-width: 280px;
              padding: 20px;
            }

            .text-box-title {
              font-size: 1.2rem;
            }

            .text-box-description {
              font-size: 0.85rem;
            }

            .chef-title {
              font-size: 2.2rem;
            }

            .chef-subtitle {
              font-size: 1.1rem;
            }

            .facility__image {
              margin-top: 1rem;
            }

            .chef-image {
              height: 500px;
              width: 100%;
              object-fit: contain;
            }

           

           
          }

      
          @media (min-width: 992px) {
            .chef-text-box-overlay {
              bottom: 30px;
              right: 30px;
              max-width: 300px;
            }
          }

          @media (min-width: 992px) and (max-width: 1199px) {
            .facility__area.is__about {
              padding: 70px 0;
              height: 800px;
             
              display: flex;
              align-items: center;
            }

            .facility__area.is__about::before {
              width: 70vw;
              right: 50px;
              
            }

            .chef-image {
              height: 850px;
              object-fit: cover;
            }

            .chef-text-box-overlay {
              top: 540px;
              bottom: auto;
              left: 0px;
              padding: 55px;
              max-width: 320px;
            }
          }

       
          @media (min-width: 1200px) {
            .facility__area.is__about {
              padding: 80px 0;
              height: 850px;
            }

            .facility__area.is__about::before {
               width: 70vw;
               right: 50px;
            }

            .section__shape {
              right: 5% !important;
            }

            .section__shape img {
              max-width: 600px;
            }

            

            .chef-subtitle {
              font-size: 1.2rem;
            }

            .chef-image {
              height: 735px;
              object-fit: cover;
            }

            .content__subtitle2 {
              font-size: 16px;
              font-weight: 600;
            }

           
          }

          @media (min-width: 1400px) {
            .facility__area.is__about {
              height: 900px;
            }

            .container {
              max-width: 1320px;
            }

            

            .chef-image {
              height: 900px;
            }

            .chef-text-box-overlay {
              max-width: 320px;
              padding: 30px;
            }
          }

          @media (max-height: 600px) and (orientation: landscape) {
            .facility__area.is__about {
              height: auto;
              padding: 40px 0;
            }

            .chef-image {
              height: 300px !important;
              max-width: 300px !important;
            }

            .mobile-image-container {
              min-height: 350px !important;
            }

            .chef-text-box-overlay {
              position: relative;
              margin-top: 15px;
            }
          }

          @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            .chef-image {
              image-rendering: -webkit-optimize-contrast;
            }
          }
        `}</style>
      </div>
    </>
  );
}
export default Chef;