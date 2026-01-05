'use client';   
import React from 'react'
import TopBar from '../home-1/TopBar'
import HeaderOne from '../home-1/Header'
import PBannerOne from './banner'
import PrivacyPolicy from './Privacy'
import FooterOne from '../home-1/FooterOne';
import BackToTop from "../home-1/BackToTop";




function page() {
    return (
        <>  
        <TopBar />
        <HeaderOne />  
        <div style={{marginTop:"-20px"}}>
        <PBannerOne/>
        </div>
        <PrivacyPolicy /> 
        <FooterOne/>
        <BackToTop/>

        </>
    )
}   
export default page;