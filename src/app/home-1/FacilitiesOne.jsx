"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function FacilitiesOne() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true, 
    });
  }, []);

  return (
    <>
      <div className="rts__section facilities__area has__background has__shape py-90">
        <div className="section__shape">
          <img src="/assets/images/shape/facility-1.svg" alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-center text-center mb-40">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div className="section__topbar">
                <span className="h6 subtitle__icon__three mx-auto">
                  Facilities
                </span>
                <h2 className="section__title"> Villa Facilities</h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card rts__card no-border is__home radius-6">
                <div className="card-body">
                  <div className="icon">
                    <img src="/assets/images/icon/bed.svg" alt="" />
                  </div>
                
                    <h6 className="card-title h6 mb-15">Rooms and Cabana</h6>
                 
                  <p className="card-text">
                    Varied types of rooms, from standard to luxury cabanas,
                    equipped with essentials like beds.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="card rts__card no-border is__home radius-6">
                <div className="card-body">
                  <div className="icon">
                    <img
                      src="/assets/images/icon/muse.png"
                      alt=""
                      style={{ width: 65, height: 50 }}
                    />
                  </div>
                 
                    <h6 className="card-title h6 mb-15">Muse Headband</h6>
                
                  <p className="card-text">
                    EEG Brainwave Tracking: Real-time neurofeedback to measure
                    focus and optimize mental performance.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="card rts__card no-border is__home radius-6">
                <div className="card-body">
                  <div className="icon">
                    <img
                      src="/assets/images/icon/wellness.png"
                      alt=""
                      style={{ width: 60, height: 54 }}
                    />
                  </div>
                  
                    <h6 className="card-title h6 mb-15">Wellness Activities</h6>
                  <p className="card-text">
                    Mindfulness with Nature helps you relax and reconnect by
                    being present in the natural surroundings, reducing stress
                    and bringing inner calm.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="card rts__card no-border is__home radius-6">
                <div className="card-body">
                  <div className="icon">
                    <img src="/assets/images/icon/swimming-pool.svg" alt="" />
                  </div>
                
                    <h6 className="card-title h6 mb-15">Swimming Pool</h6>
                 
                  <p className="card-text">
                    Outdoor Pool with Nature offers a refreshing swim experience
                    surrounded by greenery and cool, clear water.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FacilitiesOne;
