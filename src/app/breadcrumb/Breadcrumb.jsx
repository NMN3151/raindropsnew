'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function BreadcrumbOne({ title, description, bgImage }) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);
    
    return (
        <>
            <div
                className="rts__section page__hero__height page__hero__bg"
                style={{ 
                    backgroundImage: `url(${bgImage || '/assets/images/insta/G7.jpg'})`, 
                    width: '100%', 
                    height: '102vh', 
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-12">
                            <div className="page__hero__content">
                                <h1 data-aos="fade-up">{title}</h1>
                                <p className="font-sm" data-aos="fade-up">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BreadcrumbOne