"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

function TopBar() {
  const [hydrated, setHydrated] = useState(false);
  return (
    <>
      <div className="header__top">
        <div
          className={`container ${hydrated && isSticky ? "is__sticky" : ""}`}
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            zIndex: 998, // slightly below header
            transition: "all 0.3s ease",
            transform:
              hydrated && isSticky ? "translateY(0)" : "translateY(-100%)", // slide effect
            background:
              hydrated && isSticky
                ? "rgba(255, 255, 255, 0.98)"
                : "transparent",
            backdropFilter: hydrated && isSticky ? "blur(10px)" : "none",
            boxShadow:
              hydrated && isSticky ? "0 2px 10px rgba(0,0,0,0.05)" : "none",
          }}
        >
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-6">
              <div className="social__links">
                <Link
                  className="link__item gap-10"
                  href="callto: +94 77 448 48 48"
                >
                  <i className="flaticon-phone-flip" /> +94 77 448 48 48 (SL)
                </Link>
                <Link
                  className="link__item gap-10"
                  href="callto:+1 312-242-1662"
                >
                  <i className="" /> +1 312-242-1662 (USA)
                </Link>
                <Link
                  className="link__item gap-10"
                  href="mailto: info@raindrops.lk"
                >
                  <i className="flaticon-envelope" /> info@raindrops.lk
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="location">
                <Link className="link__item gap-10" href="/">
                  <i className="flaticon-marker" />
                  Sinharaja, Dolagahawaththa, Mederipitiya, Deniyaya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
