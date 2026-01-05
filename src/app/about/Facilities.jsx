"use client";
import React, { useEffect } from "react";
import Rellax from "rellax";
import Link from "next/link";

function FacilitiesSeven() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      new Rellax(".rellax", { speed: 1 });
    }
  }, []);
  return (
    <>
      <div className="rts__section facility__area is__about has__background has__shape">
        <div className="section__shape wow fadeInRight" data-wow-delay=".5s">
          <img src="/assets/images/pages/about-shape.svg" alt="" />
        </div>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="facility__content">
                <div className="section__content__left">
                  <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                    Facilities
                  </span>
                  <h2 className="content__title h2 lh-1">Hotel Facilities</h2>
                </div>
                <div
                  className="row mt-20 g-5 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="col-lg-6 col-md-6">
                    <div className="card rts__card no-border is__home__three">
                      <div className="card-body">
                        <div className="icon">
                          <img src="/assets/images/icon/bed.svg" alt="" />
                        </div>
                        <Link href="#">
                          <h6 className="card-title h6 mb-15">
                            Rooms and Suites
                          </h6>
                        </Link>
                        <p className="card-text">
                          Varied types of rooms, from standard to luxury suites,
                          equipped with essentials like beds.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="card rts__card no-border is__home__three">
                      <div className="card-body">
                        <div className="icon">
                          <img src="/assets/images/icon/security.svg" alt="" />
                        </div>
                        <Link href="#">
                          <h6 className="card-title h6 mb-15">
                            24-Hour Security
                          </h6>
                        </Link>
                        <p className="card-text">
                          On-site security personnel and best surveillance. from
                          standard to luxury suites,Secure storage for
                          valuables.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="card rts__card no-border is__home__three">
                      <div className="card-body">
                        <div className="icon">
                          <img src="/assets/images/icon/gym.svg" alt="" />
                        </div>
                        <Link href="#">
                          <h6 className="card-title h6 mb-15">
                            Wellness Activities
                          </h6>
                        </Link>
                        <p className="card-text">
                          Mindfulness with Nature helps you relax and reconnect
                          by being present in the natural surroundings, reducing
                          stress and bringing inner calm.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="card rts__card no-border is__home__three">
                      <div className="card-body">
                        <div className="icon">
                          <img
                            src="/assets/images/icon/swimming-pool.svg"
                            alt=""
                          />
                        </div>
                        <Link href="#">
                          <h6 className="card-title h6 mb-15">Swimming Pool</h6>
                        </Link>
                        <p className="card-text">
                          Outdoor Pool with Nature offers a refreshing swim
                          experience surrounded by greenery and cool, clear
                          water
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="facility__image jara-mask-3 jarallax">
                <img
                  height={765}
                  width={605}
                  className="jarallax-img rellax rellax-img"
                  src="/assets/images/insta/G2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 767px) {
            .facility__content {
              text-align: center;
            }

            .section__content__left {
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 2rem;
            }

            .subtitle__icon__two {
              text-align: center;
              display: block;
            }

            .content__title {
              text-align: center;
              margin: 1rem 0;
              width: 100%;
            }

            .rts__card {
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin: 0 auto;
            }

            .card-body {
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 100%;
            }

            .icon {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: 1rem;
              width: 100%;
            }

            .card-title {
              text-align: center;
              display: block;
              width: 100%;
            }

            .card-text {
              text-align: center;
              display: block;
              width: 100%;
            }

            .facility__image {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 2rem;
              width: 100%;
            }

            .facility__image img {
              max-width: 100%;
              height: auto;
              display: block;
              margin: 0 auto;
            }

            .card-body a {
              display: flex;
              justify-content: center;
              width: 100%;
            }

            .row.mt-20.g-5 {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .col-lg-6.col-md-6 {
              display: flex;
              justify-content: center;
              width: 100%;
              max-width: 400px;
              margin: 0 auto;
            }
          }

          @media (min-width: 768px) {
            .facility__content {
              text-align: left;
            }

            .section__content__left {
              text-align: left;
              align-items: flex-start;
            }

            .rts__card {
              text-align: left;
              align-items: flex-start;
            }

            .card-body {
              text-align: left;
              align-items: flex-start;
            }

            .icon {
              justify-content: flex-start;
            }

            .card-title {
              text-align: left;
            }

            .card-text {
              text-align: left;
            }
          }

          @media (max-width: 575px) {
            .container {
              padding-left: 15px;
              padding-right: 15px;
            }

            .row.g-5 {
              margin-left: -8px;
              margin-right: -8px;
            }

            .col-lg-6.col-md-6 {
              padding-left: 8px;
              padding-right: 8px;
              max-width: 350px;
            }

            .rts__card {
              margin-bottom: 1rem;
              padding: 1.5rem;
            }

            .mt-20 {
              margin-top: 1.5rem !important;
            }
          }

          @media (max-width: 375px) {
            .content__title {
              font-size: 1.8rem;
            }

            .card-title {
              font-size: 1.1rem;
              margin-bottom: 0.75rem;
            }

            .card-text {
              font-size: 0.9rem;
              line-height: 1.5;
            }

            .col-lg-6.col-md-6 {
              max-width: 100%;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default FacilitiesSeven;
