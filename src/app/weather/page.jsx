'use client';   
import React from 'react'
import TopBar from '../home-1/TopBar'
import HeaderOne from '../home-1/Header'
import  WBannerOne from './wbanner'
import Location from './Location'
import Setting from './Setting'
import Setting2 from './Setting2';
import Setting3 from './Setting3';
import Setting4 from './Setting4';
import Weather from './Weather'
import  WhatToBring from './Bring'
import Wicons from './Wicon'    
import FooterOne from '../home-1/FooterOne';
import BackToTop from "../home-1/BackToTop";




function page() {
    return (
        <>  
        <TopBar />
        <HeaderOne />  
        <div style={{marginTop:"-20px"}}>
        <WBannerOne/>
        </div>
        <Location />
        <Setting />
        <Setting2 />
        <Setting3 />
        <Setting4 />
        <Weather />
        <WhatToBring />
        <Wicons />
        <FooterOne/>
        <BackToTop/>
        </>
    )
}   
export default page;