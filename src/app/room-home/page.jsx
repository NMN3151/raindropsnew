import React from 'react'
import TopBar from '../home-1/TopBar'
import HeaderOne from '../home-1/Header'
import BreadcrumbOne from '../breadcrumb/Breadcrumb'
// import AdvanceFormTwo from '../form/AdvanceFormTwo'
// import AdvanceForm from '../home-1/AdvanceForm'
import RoomSix from '../room/RoomSix'
import TestimonialOne from '../home-1/TestimonialOne'
import FooterOne from '../home-1/FooterOne'
import BackToTop from '../home-1/BackToTop'
// import GDPRCookie from '../home-1/GDPRCookie'
import SEO from "../components/SEO";
import StructuredData from '../components/StructuredData'
// import Booking from '../components/BookingWidget'


function page() {
    const roomsSchema = {
        "@context": "https://schema.org",
        "@type": "Hotel",
        "name": "Rain Drops Villa - Rooms & Suites",
        "image": ["https://raindrops.lk/og-image.jpg"],
        "description": "Luxury rooms near Sinharaja rainforest with poolside suites and garden villas.",
        "url": "https://raindrops.lk/room-home",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Deniyaya",
            "addressRegion": "Southern Province",
            "addressCountry": "LK"
        }
    };
    return (
        <>
         
            <SEO
                title="Luxury Rooms near Sinharaja | Deniyaya Accommodation"
                description="Stay in luxury villa rooms at Rain Drops Villa, minutes from Sinharaja Rainforest. Poolside villas, garden suites & nature escape rooms."
                keywords="luxury rooms Sinharaja, Deniyaya rooms, poolside villa Sri Lanka"
                canonical="https://raindrops.lk/rooms"
                ogImage="https://raindrops.lk/og-image.jpg"
            />

            <StructuredData data={roomsSchema} />

            {/* SEO tags hidden */}
            <div style={{
                position: "absolute",
                left: "-9999px",
                top: "-9999px"
            }}>
                <h1>Rooms & Suites — Rain Drops Villa</h1>
                <p>
                    Comfortable, nature-focused stays minutes from Sinharaja Rainforest.
                </p>
            </div>
            <TopBar />
            <HeaderOne />
            <div style={{marginTop:"-20px"}}>
            <BreadcrumbOne
                title=" Rooms"
                description="A step up from the standard room, often with better views, more space, and additional amenities."
            />
            </div>
            {/* <Booking/> */}
            {/* <AdvanceForm /> */}
            <RoomSix />
            <TestimonialOne />
            <FooterOne />
            <BackToTop />
        </>
    )
}

export default page