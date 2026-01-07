"use client";
import React, { useState, useEffect, useRef } from "react";
import OffcanvasMenu from "./OffcanvasMenu";
import SideMenu from "./SideMenu";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMemo } from "react";
import TopBar from "./TopBar";
import { useRouter, usePathname } from "next/navigation";

function HeaderOne() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const datePickerRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // combined guest state
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  // Add useEffect to track window width - Only on client
  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial width
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // dropdown toggle
  const [openGuest, setOpenGuest] = useState(false);

  const formatDate = (d) => (d ? d.toISOString().split("T")[0] : "");

  // helper to build hotel url
  const buildHotelUrl = () => {
    const base =
      "https://www.hotelmate.net/hotels/rain-drops-wellness-villa-sinharaja-deniyaya";
    const params = new URLSearchParams();
    if (startDate) params.set("checkIn", formatDateForUrl(startDate));
    if (endDate) params.set("checkOut", formatDateForUrl(endDate));

    params.set("adult", String(adults));
    params.set("child", String(children));
    params.set("room", String(rooms));
    params.set("name", "Thanuja");
    return `${base}?${params.toString()}`;
  };

  // small helpers for increment/decrement with min/max rules
  const inc = (setter, val, max = 10) => setter((v) => Math.min(max, v + 1));
  const dec = (setter, val, min = 0) => setter((v) => Math.max(min, v - 1));

  // ensure at least 1 adult and 1 room
  const decAdult = () => dec(setAdults, adults, 1);
  const decRoom = () => dec(setRooms, rooms, 1);

  // readable label shown inside the closed input
  const guestLabel = useMemo(() => {
    const people = adults + children;
    return `${people} guest${people !== 1 ? "s" : ""} · ${rooms} room${
      rooms !== 1 ? "s" : ""
    }`;
  }, [adults, children, rooms]);

  // returns YYYY-MM-DD using local date parts
  const formatDateForUrl = (d) => {
    if (!d) return "";
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  // returns DD/MM/YYYY for visible display
  const formatDateDisplay = (d) => {
    if (!d) return "";
    const day = String(d.getDate()).padStart(2, "0");
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const y = d.getFullYear();
    return `${day}/${m}/${y}`;
  };

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (!isClient) return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      // Close dropdown when scrolling
      setOpenGuest(false);

      // Close DatePicker calendar when scrolling
      const datepickerCalendars =
        document.querySelectorAll(".react-datepicker");
      datepickerCalendars.forEach((calendar) => {
        if (calendar.style.display !== "none") {
          calendar.style.display = "none";
          const popper = calendar.closest(".react-datepicker-popper");
          if (popper) {
            popper.style.display = "none";
          }
        }
      });
    };

    setHydrated(true);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isClient]);

  // Function to handle navigation with scroll to top
  const handleNavigation = (e, href) => {
    e.preventDefault();

    if (!isClient) return;

    // Close any open dropdowns
    setOpenGuest(false);

    // Scroll to top before navigation
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Navigate after a small delay to ensure scroll completes
    setTimeout(() => {
      if (href === pathname) {
        // If already on the same page, just scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Navigate to the new page
        router.push(href);
      }
    }, 100);
  };

  // Function to handle home logo click
  const handleHomeClick = (e) => {
    e.preventDefault();

    if (!isClient) return;

    // Close any open dropdowns
    setOpenGuest(false);

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // If already on home page, just scroll to top
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home
      router.push("/");
    }
  };

  // Function to handle date picker changes
  const handleDateChange = (update) => {
    setDateRange(update);
  };

  // Don't render anything during SSR for window-dependent parts
  if (!isClient) {
    return (
      <>
        {/* Simple static header for SSR */}
        <header className="main__header header__function">
          <div className="container">
            <div style={{ marginTop: "20px" }}>
              <div className="topbar" style={{ marginTop: "20px" }}>
                <TopBar />
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }

  return (
    <>
      {/* NEW: Top Banner Header - Hidden when sticky */}
      <div
        className="top-banner-header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "opacity 0.3s ease, visibility 0.3s ease",
          opacity: hydrated && isSticky ? 0 : 1,
          visibility: hydrated && isSticky ? "hidden" : "visible",
          pointerEvents: hydrated && isSticky ? "none" : "auto",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 0",
              position: "relative",
            }}
          >
            {/* Left: Menu Icon */}
            <button
              className="menu-icon-btn"
              onClick={() => setIsMenuOpen(true)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Open menu"
            >
              <img
                src="/assets/images/logo/menu..png"
                alt="menu"
                style={{ width: 32, height: 32 }}
              />
            </button>

            {/* Center: Logo */}
            <a
              href="/"
              onClick={handleHomeClick}
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                display: "block",
              }}
            >
              <img
                src="/assets/images/logo/logof.png"
                alt="logo"
                style={{ width: 250, height: 100, objectFit: "contain" }}
              />
            </a>

            {/* Right: Reserve Now Button - Hidden on mobile */}
            <div
              className="desktop-reserve-btn"
              style={{
                display: windowWidth < 768 ? "none" : "block",
              }}
            >
              <a
                target="blank"
                rel="noopener noreferrer"
                href="https://www.hotelmate.net/hotels/rain-drops-wellness-villa-sinharaja-deniyaya?checkIn=2025-12-01&checkOut=&adult=0&child=0&room="
                className="theme-btn btn-style sm-btn fill"
                style={{
                  cursor: "pointer",
                  background: "transparent",
                }}
              >
                <span>Reserve Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Original header menu - now appears on sticky scroll */}
      <header
        className={`main__header header__function ${
          hydrated && isSticky ? "is__sticky" : ""
        }`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          transition: "all 0.3s ease",
          transform:
            hydrated && isSticky ? "translateY(0)" : "translateY(-100%)",
          background:
            hydrated && isSticky ? "rgba(255, 255, 255, 0.98)" : "transparent",
          backdropFilter: hydrated && isSticky ? "blur(10px)" : "none",
          boxShadow:
            hydrated && isSticky ? "0 2px 10px rgba(0,0,0,0.05)" : "none",
        }}
      >
        <div className="container">
          <div style={{ marginTop: "20px" }}>
            <div className="topbar" style={{ marginTop: "20px" }}>
              <TopBar />
            </div>
            <div className="row">
              <div className="main__header__wrapper">
                {/* Logo moved to left */}
                <div className="main__logo">
                  <a
                    href="/"
                    onClick={handleHomeClick}
                    className="navigation__menu--item__link"
                  >
                    <img
                      className="logo__class"
                      src="/assets/images/logo/logo.png"
                      alt="Rain Drops"
                      style={{
                        // Display logic - Show on tablet (1024px) AND desktop (1440px+)
                        display:
                          windowWidth && windowWidth < 769 ? "none" : "block",

                        width:
                          windowWidth && windowWidth <= 1024
                            ? 150
                            : windowWidth && windowWidth <= 1440
                            ? 250
                            : 220,

                        height: windowWidth && windowWidth <= 1024 ? 50 : 70,

                        marginLeft:
                          windowWidth && windowWidth <= 1024
                            ? "0px"
                            : windowWidth && windowWidth <= 1440
                            ? "-10px"
                            : windowWidth && windowWidth >= 2560
                            ? "50px"
                            : "0px",

                        marginRight:
                          windowWidth && windowWidth >= 2560
                            ? "200px"
                            : "200px",
                      }}
                    />
                  </a>
                </div>

                <div className="main__nav">
                  <div className="navigation d-none d-lg-block">
                    <nav className="navigation__menu" id="main__menu">
                      <ul className="list-unstyled">
                        <li className="">
                          <Link
                            href="/"
                            className="navigation__menu--item__link"
                            onClick={(e) => handleNavigation(e, "/")}
                          >
                            Home
                          </Link>
                        </li>
                        <li className="navigation__menu--item has-child">
                          <Link
                            href="/room-home"
                            className="navigation__menu--item__link"
                            onClick={(e) => handleNavigation(e, "/room-home")}
                          >
                            Rooms
                          </Link>
                        </li>
                        <li className="navigation__menu--item">
                          <Link
                            href="/gallery"
                            className="navigation__menu--item__link"
                            onClick={(e) => handleNavigation(e, "/gallery")}
                          >
                            Gallery
                          </Link>
                        </li>
                        <li className="navigation__menu--item">
                          <Link
                            href="/neuroscience"
                            className="navigation__menu--item__link"
                            onClick={(e) =>
                              handleNavigation(e, "/neuroscience")
                            }
                          >
                            Wellness
                          </Link>
                        </li>
                        <li className="navigation__menu--item">
                          <Link
                            href="/research"
                            className="navigation__menu--item__link"
                            onClick={(e) => handleNavigation(e, "/research")}
                          >
                            Rain Lab
                          </Link>
                        </li>
                        <li className="navigation__menu--item">
                          <Link
                            href="/dining"
                            className="navigation__menu--item__link"
                            onClick={(e) => handleNavigation(e, "/dining")}
                          >
                            Dining
                          </Link>
                        </li>
                        <li className="navigation__menu--item has-child has-arrow">
                          <Link
                            href=""
                            className="navigation__menu--item__link"
                            onClick={(e) => {
                              e.preventDefault();
                              // For About dropdown, we don't navigate, just open dropdown
                            }}
                          >
                            About
                          </Link>
                          <ul className="submenu sub__style" role="menu">
                            <li role="menuitem" className="has-child has-arrow">
                              <Link
                                href=""
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="has-arrow"
                              >
                                About Us
                              </Link>
                              <ul
                                className="sub-submenu sub__style"
                                role="menu"
                              >
                                <li role="menuitem">
                                  <Link
                                    href="/about"
                                    onClick={(e) =>
                                      handleNavigation(e, "/about")
                                    }
                                  >
                                    The Story
                                  </Link>
                                </li>
                                <li role="menuitem">
                                  <Link
                                    href="/Insight"
                                    onClick={(e) =>
                                      handleNavigation(e, "/Insight")
                                    }
                                  >
                                    Insight Partners (You)
                                  </Link>
                                </li>

                                <li role="menuitem">
                                  <Link
                                    href="/travelpartners"
                                    onClick={(e) =>
                                      handleNavigation(e, "/travelpartners")
                                    }
                                  >
                                    Travel Partners
                                  </Link>
                                </li>

                                
                                <li role="menuitem">
                                  <Link
                                    href="/living"
                                    onClick={(e) =>
                                      handleNavigation(e, "/living")
                                    }
                                  >A Living Partnership
                               
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li role="menuitem">
                              <Link
                                href="/contact"
                                onClick={(e) => handleNavigation(e, "/contact")}
                              >
                                Contact Us
                              </Link>
                            </li>
                            <li role="menuitem">
                              <Link
                                href="/privacy"
                                onClick={(e) => handleNavigation(e, "/privacy")}
                              >
                                Privacy & Policy
                              </Link>
                            </li>
                            <li role="menuitem">
                              <Link
                                href="/weather"
                                onClick={(e) => handleNavigation(e, "/weather")}
                              >
                                Location & Weather
                              </Link>
                            </li>
                            <li role="menuitem">
                              <Link
                                href="/srilanka"
                                onClick={(e) =>
                                  handleNavigation(e, "/srilanka")
                                }
                              >
                                Beautiful Sri Lanka
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                {/* Reserve Now Button on Desktop */}
                <div className="main__right">
                  <a
                    href="https://www.hotelmate.net/hotels/rain-drops-wellness-villa-sinharaja-deniyaya?checkIn=2025-12-01&checkOut=&adult=0&child=0&room="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="reservebar-btn"
                      style={{
                        background: "#AB8A62",
                        color: "#ffffff",
                        border: "1px solid #AB8A62",
                        width:
                          windowWidth <= 768 && windowWidth > 375
                            ? "250px"
                            : windowWidth <= 375 && windowWidth > 320
                            ? "250px"
                            : windowWidth <= 320
                            ? "200px"
                            : "180px",
                        height: "46px",
                        marginLeft:
                          windowWidth <= 768 && windowWidth > 375
                            ? "-300px"
                            : windowWidth <= 375 && windowWidth > 320
                            ? "-230px"
                            : windowWidth <= 320
                            ? "-200px"
                            : "200px",
                        borderRadius: "6px",
                      }}
                      type="button"
                    >
                      <span>Reserve Now</span>
                    </button>
                  </a>
                  <button
                    className="theme-btn btn-style sm-btn fill menu__btn d-lg-none"
                    onClick={() => setIsOffcanvasOpen(true)}
                  >
                    <span>
                      <img src="/assets/images/icon/menu-icon.svg" alt="menu" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <hr
              className="line"
              style={{
                width: "1310px",
                color: "#000000ff",
                overflow: "hidden",
                position: "relative",
                zIndex: 9999,
                marginTop: "-20px",
                marginBottom: "25px",
                marginLeft: "-10px",
                display: windowWidth && windowWidth < 769 ? "none" : "block",
              }}
            />

            <div
              className="rts__section advance__search__section is__home__one"
              style={{ marginTop: "-20px" }}
            >
              <div className="container">
                <div className="row">
                  <form action="#" method="post" className="advance__search">
                    <div className="advance__search__wrapper">
                      {/* Date range picker */}
                      <div className="query__input" style={{ minWidth: 260 }}>
                        <DatePicker
                          ref={datePickerRef}
                          placeholderText=" 📆︎ Check-In / Check-Out"
                          selected={startDate}
                          onChange={handleDateChange}
                          startDate={startDate}
                          endDate={endDate}
                          selectsRange
                          dateFormat="dd/MM/yyyy"
                          customInput={
                            <input
                              type="text"
                              readOnly
                              style={{
                                marginLeft: "-10px",
                                width: "280px",
                                height: "46px",
                                padding: "8px 10px",
                                border: "1px solid #ddd",
                                borderRadius: "6px",
                                cursor: "pointer",
                                backgroundColor: "#fff",
                              }}
                            />
                          }
                        />
                      </div>

                      {/* Guests compact field */}
                      <div
                        className="query__input guest-input"
                        style={{ position: "relative" }}
                      >
                        <button
                          id="guests"
                          type="button"
                          className="guest-summary"
                          onClick={() => setOpenGuest((s) => !s)}
                          aria-haspopup="dialog"
                          aria-expanded={openGuest}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: 280,
                            height: 46,
                            padding: "8px 10px",
                            border: "1px solid #ddd",
                            background: "#fff",
                            borderRadius: 6,
                            cursor: "pointer",
                            position: "relative",
                            zIndex: 1,
                            marginLeft: "4px",
                          }}
                        >
                          <span style={{ color: "#666" }}>
                            Adults/ Child/ Rooms
                          </span>
                          <span style={{ marginLeft: 8 }}>
                            {openGuest ? "▴" : "▾"}
                          </span>
                        </button>

                        {/* dropdown */}
                        {openGuest && (
                          <div
                            role="dialog"
                            aria-label="Select guests and rooms"
                            className="guest-dropdown"
                            style={{
                              position: "absolute",
                              top: "100%",
                              left: 0,
                              zIndex: 30,
                              marginTop: 8,
                              width: 260,
                              padding: 12,
                              background: "#fff",
                              border: "1px solid #ddd",
                              borderRadius: 8,
                              boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                            }}
                          >
                            {/* Adults row */}
                            <div
                              className="guest-row"
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 10,
                              }}
                            >
                              <div>
                                <div style={{ fontWeight: 600 }}>Adults</div>
                                <div style={{ fontSize: 12, color: "#666" }}>
                                  Ages 13 or above
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 8,
                                }}
                              >
                                <button
                                  type="button"
                                  aria-label="Decrease adults"
                                  onClick={decAdult}
                                  style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 6,
                                    border: "1px solid #ccc",
                                    background: "#fff",
                                    cursor: "pointer",
                                  }}
                                >
                                  −
                                </button>
                                <div
                                  style={{ minWidth: 24, textAlign: "center" }}
                                >
                                  {adults}
                                </div>
                                <button
                                  type="button"
                                  aria-label="Increase adults"
                                  onClick={() => inc(setAdults, adults, 9)}
                                  style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 6,
                                    border: "1px solid #ccc",
                                    background: "#fff",
                                    cursor: "pointer",
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            {/* Children row */}
                            <div
                              className="guest-row"
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 10,
                              }}
                            >
                              <div>
                                <div style={{ fontWeight: 600 }}>Children</div>
                                <div style={{ fontSize: 12, color: "#666" }}>
                                  Ages 0–12
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 8,
                                }}
                              >
                                <button
                                  type="button"
                                  aria-label="Decrease children"
                                  onClick={() => dec(setChildren, children, 0)}
                                  style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 6,
                                    border: "1px solid #ccc",
                                    background: "#fff",
                                    cursor: "pointer",
                                  }}
                                >
                                  −
                                </button>
                                <div
                                  style={{ minWidth: 24, textAlign: "center" }}
                                >
                                  {children}
                                </div>
                                <button
                                  type="button"
                                  aria-label="Increase children"
                                  onClick={() => inc(setChildren, children, 8)}
                                  style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 6,
                                    border: "1px solid #ccc",
                                    background: "#fff",
                                    cursor: "pointer",
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            {/* Rooms row */}
                            <div
                              className="guest-row"
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 6,
                              }}
                            >
                              <div>
                                <div style={{ fontWeight: 600 }}>Rooms</div>
                                <div
                                  style={{ fontSize: 12, color: "#666" }}
                                ></div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 8,
                                }}
                              >
                                <button
                                  type="button"
                                  aria-label="Decrease rooms"
                                  onClick={decRoom}
                                  style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 6,
                                    border: "1px solid #ccc",
                                    background: "#fff",
                                    cursor: "pointer",
                                  }}
                                >
                                  −
                                </button>
                                <div
                                  style={{ minWidth: 24, textAlign: "center" }}
                                >
                                  {rooms}
                                </div>
                                <button
                                  type="button"
                                  aria-label="Increase rooms"
                                  onClick={() => inc(setRooms, rooms, 5)}
                                  style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 6,
                                    border: "1px solid #ccc",
                                    background: "#fff",
                                    cursor: "pointer",
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            {/* Actions: Close */}
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                gap: 8,
                              }}
                            >
                              <button
                                type="button"
                                onClick={() => setOpenGuest(false)}
                                style={{
                                  padding: "8px 12px",
                                  borderRadius: 6,
                                  border: "1px solid #ddd",
                                  background: "#fff",
                                }}
                              >
                                Done
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Promocode */}
                      <div className="query__input">
                        <input
                          style={{
                            marginLeft: "4px",
                            width: "280px",
                            height: "42px",
                            border: "1px solid #ccc",
                            borderRadius: "6px",
                          }}
                          type="text"
                          placeholder=" Promo Code"
                        />
                      </div>

                      {/* Submit Button */}
                      <a
                        href={buildHotelUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          className="theme-btn search__btn"
                          style={{
                            background: "#ffff",
                            color: "#666",
                            border: "1px solid #AB8A62",
                            width: "280px",
                            height: "46px",
                            borderRadius: "6px",
                          }}
                          type="button"
                          disabled={!startDate || !endDate}
                        >
                          <span>Check Availability</span>
                        </button>
                      </a>
                    </div>
                  </form>
                </div>
              </div>

              <style jsx>{`
                .advance__search__wrapper {
                  position: relative;
                  z-index: 10;
                  overflow: visible;
                }

                .guest-dropdown {
                  z-index: 9999;
                }

                .rts__section.advance__search__section {
                  position: relative;
                  z-index: 20;
                }

                /* Hide DatePicker calendar on scroll */
                .react-datepicker {
                  transition: opacity 0.2s ease;
                }

                /* Fix navigation links */
                .navigation__menu--item__link {
                  cursor: pointer;
                  text-decoration: none;
                  transition: color 0.3s ease;
                }

                .navigation__menu--item__link:hover {
                  color: #ab8a62;
                }

                /* Hide Reserve Now button on mobile */
                @media screen and (max-width: 767px) {
                  .desktop-reserve-btn {
                    display: none !important;
                  }

                  /* Optional: Adjust logo position when button is hidden */
                  .top-banner-header .container > div a[href="/"] {
                    left: 50%;
                    transform: translateX(-50%);
                  }
                }

                @media screen and (max-width: 768px) {
                  .advance__search {
                    display: none;
                  }
                  .container > div:first-child {
                    margin-top: 18px !important;
                  }
                  .top-banner-header {
                    padding: 0 px;
                  }
                  .main__header__wrapper {
                    min-height: auto !important;
                    height: auto !important;
                    padding: 10px 0 !important; /* Reduce padding */
                    align-items: center !important;
                  }
                  .top-banner-header .container > div {
                    padding: 15px 0;
                  }
                  .topbar {
                    margin-top: -80px;
                  }
                  .top-banner-header img {
                    width: 140px !important;
                    height: 46px !important;
                  }
                }

                .line {
                  display: none;
                }
                .main__header__wrapper {
                  min-height: auto !important;
                  height: auto !important;
                  padding: 10px 0 !important; /* Reduce padding */
                  align-items: center !important;
                }

                .topbar {
                  margin-top: -80px;
                }

                .container > div:first-child {
                  margin-top: 18px !important;
                }

                /* Tablet (768px - 991px) */
                @media (min-width: 768px) and (max-width: 991px) {
                  .logo__class {
                    margin-right: 50px !important;
                  }
                }

                /* Laptop (992px - 1199px) */
                @media (min-width: 992px) and (max-width: 1199px) {
                  .logo__class {
                    margin-right: 80px !important;
                  }
                }

                /* Desktop (1200px - 1399px) */
                @media (min-width: 1200px) and (max-width: 1399px) {
                  .logo__class {
                    margin-right: 50px !important;
                  }
                }

                /* Large Desktop (1400px and above) */
                @media (min-width: 1400px) {
                  .logo__class {
                    margin-right: 10px !important;
                  }
                }

                @media screen and (min-width: 769px) and (max-width: 1440px) {
                  .main__header__wrapper {
                    display: none;
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </header>

      <OffcanvasMenu
        isOpen={isOffcanvasOpen}
        onClose={() => setIsOffcanvasOpen(false)}
      />

      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

export default HeaderOne;
