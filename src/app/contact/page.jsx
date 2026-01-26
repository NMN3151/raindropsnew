'use client'
import React from 'react'
import TopBar from '../home-1/TopBar'
import HeaderOne from '../home-1/Header'
import BreadcrumbOne from '../breadcrumb/Breadcrumb'
import ContactOne from './Contact'
import FooterOne from '../home-1/FooterOne'
import BackToTop from '../home-1/BackToTop'
import { useState } from 'react';
import SEO from "../components/SEO";
import StructuredData from '../components/StructuredData'
import RouteInstructions from  './Routeinstructions';



function page() {
    const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": "https://raindrops.lk/contact",
    "name": "Contact Rain Drops Villa"
  };

    return (
        <>
            {/* <GDPRCookie
                settings={{
                    title: "Accept Cookies & privacy",
                    message: "Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches.",
                    expires: 90, // Cookie expiration in days
                }}
            /> */}
            <SEO
                title="Contact & Booking — Rain Drops Villa, Deniyaya"
                description="Contact Rain Drops to book your stay or wellness program. Located near Sinharaja Rainforest in Deniyaya."
                canonical="https://raindrops.lk/contact"
            />

      <StructuredData data={contactSchema} />

      <div style={{
            position: "absolute",
            left: "-9999px",
            top: "-9999px"
        }}>
            <h1>Contact & Booking</h1>
            <p>
          Phone: +94-77-123-4567
            </p>
        </div>

            <TopBar />
            <HeaderOne />
            <div style={{ marginTop: "-20px" }}>
            <BreadcrumbOne
                title="Contact Us"
                description="Whether you have questions, need assistance, or simply want to share."
            />
            </div>

            <ContactOne />
            
            <FooterOne />
            <BackToTop />
        </>
    )
}

export default page