'use client';
import React, { useEffect } from 'react';
import Rellax from 'rellax';
import Link from 'next/link';

function Healthyeating() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            new Rellax(".rellax", { speed: 1 });
        }
    }, []);
    return (
        <div className="rts__section about__area is__home__main section__padding">
            <div className="section__shape d-none d-xl-block">
                <img src="/assets/images/about/section__shape.svg" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="about__wrapper">
                        <div className="image">
                            <div className="position-relative radius wow fadeInUp overflow-hidden" data-wow-delay=".3s">
                                <div className="jara-mask-1 jarallax image-height pt-0" data-rellax-speed="2">
                                    {/* Ensure rellax-img is present */}
                                    <img
                                        src="/assets/images/nutrition/healthy1.png"
                                        className="jarallax-img rellax rellax-img"
                                        alt="Background"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            {/* <div className="image__card radius-10 wow fadeInUp" data-wow-delay=".5s">
                                <div className="icon radius-10 center-item">
                                   <img src="/assets/images/nutrition/healthy3.png" style={{height:100, width:100}} alt="" />
                                </div> 
                                <div className="content">
                                    <span className="h5">20+</span>
                                    <p>Experience Staff</p>
                                </div>
                            </div> */}
                            <div className="image__card__image wow fadeInUp">
                                <img
                                    src="/assets/images/nutrition/healthy2.png"
                                    width={312}
                                    height={230}
                                    alt="About"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="content">
                            {/* <span className="h6 subtitle__icon__two d-block wow fadeInUp">About Us</span> */}
                            <h2 className="content__title wow fadeInUp">
                               Healthy Eating At Rain drops
                            </h2>
                             <p className="content__subtitle wow fadeInUp" data-wow-delay=".3s">Mind Meets Nature — Eat Well, Live Clear.</p>
                            <p className="content__subtitle wow fadeInUp" data-wow-delay=".3s">
                               At Rain Drops Wellness Resort, every meal tells a story — a story of balance, care, and mindful living. Our approach to dining is built on one simple truth: when you eat with awareness and harmony, your body begins to heal naturally. Here, food isn’t just served — it’s crafted for your mind and body.
                               
                            </p>
                            {/* <Link href="#" className="theme-btn btn-style fill no-border wow fadeInUp" data-wow-delay=".5s"> */}
                                {/* <span>Learn More</span> */}
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Healthyeating;
