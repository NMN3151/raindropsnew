// SideMenu.js
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function SideMenu({ isOpen, onClose }) {
  const router = useRouter();
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null);

  // Timing constants
  const MENU_CLOSE_DELAY = 240;
  const SCROLL_TRY_INTERVAL = 50;
  const MAX_SCROLL_TRIES = 10;

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle animation timing
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setOpenDropdown(null);
        setOpenNestedDropdown(null);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
    // Close nested dropdown when parent closes
    if (openDropdown !== label && openNestedDropdown && openNestedDropdown.startsWith(label)) {
      setOpenNestedDropdown(null);
    }
  };

  const toggleNestedDropdown = (parentLabel, label) => {
    const dropdownKey = `${parentLabel}-${label}`;
    setOpenNestedDropdown(openNestedDropdown === dropdownKey ? null : dropdownKey);
  };

  // Force scroll-to-top helper
  const forceScrollTop = () => {
    try {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    } catch (e) {
      // ignore
    }

    let tries = 0;
    const id = setInterval(() => {
      tries += 1;
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      } catch (e) {
        window.scrollTo(0, 0);
      }

      if (window.scrollY === 0 || tries >= MAX_SCROLL_TRIES) {
        clearInterval(id);
        try {
          if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "auto";
          }
        } catch (e) {
          // ignore
        }
      }
    }, SCROLL_TRY_INTERVAL);
  };

  // Handle navigation with scroll-to-top
  const handleNavigation = (href) => {
    onClose();
    setTimeout(() => {
      router.push(href);
      setTimeout(() => {
        forceScrollTop();
      }, 20);
    }, MENU_CLOSE_DELAY);
  };

  // Menu items with nested dropdown structure
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "/room-home" },
    { label: "Gallery", href: "/gallery" },
    { label: "Rain Lab", href: "/research" },
    { label: "Wellness", href: "/neuroscience" },
    { label: "Dining", href: "/dining" },
    {
      label: "About",
      dropdown: [
        {
          label: "About Us",
          dropdown: [
            { label: "The Story", href: "/about" },
            { label: "Insight Partners (You) ", href: "/Insight" },
            { label: "Travel Partners", href: "/travelpartners" },
            { label: "A Living Partnership", href: "/living" },
          ],
        },
        { label: "Beautiful Sri Lanka", href: "/srilanka" },
        { label: "Location & Weather", href: "/weather" },
        { label: "Privacy & Policy", href: "/privacy" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
  ];

  if (!shouldRender) return null;

  return (
    <>
    
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          maxWidth: isMobile ? "100%" : "1000px",
          zIndex: 1999,
          transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transform: isAnimating ? "translateX(0)" : "translateX(-100%)",
          background: "#ffffff",
          overflow: isMobile ? "auto" : "hidden",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
          willChange: "transform",
        }}
      >
        {/* LEFT Column - Dark Vertical Menu */}
        <div
          style={{
            width: isMobile ? "100%" : "35%",
            height: isMobile ? "auto" : "100vh",
            background: "#000000ff",
            color: "#ffffffff",
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transform: isAnimating
              ? "translateX(0)"
              : isMobile
              ? "translateY(-100%)"
              : "translateX(-100%)",
            willChange: "transform",
            overflowY: isMobile ? "visible" : "auto",
            overflowX: "hidden",
            flexShrink: 0,
            position: "relative",
          }}
        >
          {/* Close Button - Left of Logo on Mobile */}
          {isMobile && (
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "rgba(0, 0, 0, 0.95)",
                border: "none",
                fontSize: "30px",
                cursor: "pointer",
                color: "#ffffffff",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2001,
                opacity: isAnimating ? 1 : 0,
                transform: isAnimating
                  ? "rotate(0deg) scale(1)"
                  : "rotate(-90deg) scale(0.8)",
                transition: "opacity 0.4s ease 0.4s, transform 0.5s ease 0.4s",
                borderRadius: "50%",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                fontWeight: "300",
              }}
              aria-label="Close menu"
            >
              ×
            </button>
          )}

          {/* Logo */}
          <div
            style={{
              padding: isMobile ? "25px 20px 20px" : "40px 30px 30px",
              textAlign: "center",
              borderBottom: "1px solid rgba(232, 243, 241, 1)",
              opacity: isAnimating ? 1 : 0,
              transform: isAnimating ? "translateY(0)" : "translateY(-20px)",
              transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
              flexShrink: 0,
              position: "relative",
            }}
          >
            <div
              onClick={() => handleNavigation("/")}
              style={{ cursor: "pointer" }}
            >
              <img
                src="/assets/images/logo/logo.png"
                alt="Logo"
                style={{
                  width: isMobile ? "150px" : "180px",
                  height: "auto",
                  filter: "brightness(0) invert(1)",
                  marginLeft: isMobile ? "30px" : "0",
                }}
              />
            </div>
          </div>

          {/* Main Navigation */}
          <nav
            style={{
              flex: 1,
              padding: isMobile ? "15px 0" : "20px 0",
              minHeight: "0",
            }}
          >
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {menuItems.map((item, index) => (
                <li
                  key={`menu-${index}`}
                  style={{
                    marginBottom: 0,
                    opacity: isAnimating ? 1 : 0,
                    transform: isAnimating
                      ? "translateX(0)"
                      : isMobile
                      ? "translateY(-20px)"
                      : "translateX(-30px)",
                    transition: `opacity 0.5s ease ${
                      0.1 + index * 0.05
                    }s, transform 0.5s ease ${0.1 + index * 0.05}s`,
                  }}
                >
                  {/* Main Menu Item */}
                  {item.dropdown ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        borderBottom:
                          openDropdown === item.label
                            ? "none"
                            : "1px solid rgba(232, 243, 241, 0.1)",
                      }}
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <div
                        style={{
                          flex: 1,
                          padding: isMobile ? "14px 20px" : "16px 30px",
                          color: "#e8f3f1",
                          fontSize: isMobile ? "13px" : "14px",
                          fontWeight: "400",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          if (!isMobile) {
                            e.currentTarget.style.color = "#c8b08a";
                            e.currentTarget.style.backgroundColor =
                              "rgba(255, 255, 255, 0.1)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isMobile) {
                            e.currentTarget.style.color = "#e8f3f1";
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          padding: isMobile ? "14px 20px" : "16px 30px",
                          color: "#e8f3f1",
                          fontSize: "12px",
                          transition: "transform 0.3s ease",
                          transform:
                            openDropdown === item.label
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                        }}
                      >
                        ▼
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => handleNavigation(item.href)}
                      style={{
                        display: "block",
                        padding: isMobile ? "14px 20px" : "16px 30px",
                        color: "#e8f3f1",
                        textDecoration: "none",
                        fontSize: isMobile ? "13px" : "14px",
                        fontWeight: "400",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        transition: "all 0.3s ease",
                        borderBottom: "1px solid rgba(232, 243, 241, 0.1)",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.color = "#c8b08a";
                          e.currentTarget.style.backgroundColor =
                            "rgba(255, 255, 255, 0.1)";
                          e.currentTarget.style.paddingLeft = "35px";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.color = "#e8f3f1";
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.paddingLeft = "30px";
                        }
                      }}
                    >
                      {item.label}
                    </div>
                  )}

                  {/* Dropdown Items */}
                  {item.dropdown && (
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        maxHeight: openDropdown === item.label ? "500px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.4s ease",
                        borderBottom: "1px solid rgba(232, 243, 241, 0.1)",
                      }}
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <React.Fragment key={`sub-${index}-${subIndex}`}>
                          {subItem.dropdown ? (
                            // Nested dropdown item
                            <>
                              <li>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    cursor: "pointer",
                                    padding: isMobile
                                      ? "12px 20px 12px 40px"
                                      : "14px 30px 14px 50px",
                                    color: "rgba(232, 243, 241, 0.8)",
                                    fontSize: isMobile ? "12px" : "13px",
                                    fontWeight: "300",
                                    letterSpacing: "0.5px",
                                    textTransform: "uppercase",
                                    transition: "all 0.3s ease",
                                    borderBottom:
                                      subIndex < item.dropdown.length - 1
                                        ? "1px solid rgba(232, 243, 241, 0.05)"
                                        : "none",
                                  }}
                                  onClick={() =>
                                    toggleNestedDropdown(item.label, subItem.label)
                                  }
                                  onMouseEnter={(e) => {
                                    if (!isMobile) {
                                      e.currentTarget.style.color = "#c8b08a";
                                      e.currentTarget.style.backgroundColor =
                                        "rgba(255, 255, 255, 0.05)";
                                      e.currentTarget.style.paddingLeft = "55px";
                                    }
                                  }}
                                  onMouseLeave={(e) => {
                                    if (!isMobile) {
                                      e.currentTarget.style.color =
                                        "rgba(232, 243, 241, 0.8)";
                                      e.currentTarget.style.backgroundColor =
                                        "transparent";
                                      e.currentTarget.style.paddingLeft = "50px";
                                    }
                                  }}
                                >
                                  {subItem.label}
                                  <div
                                    style={{
                                      color: "rgba(232, 243, 241, 0.8)",
                                      fontSize: "10px",
                                      transition: "transform 0.3s ease",
                                      transform:
                                        openNestedDropdown === `${item.label}-${subItem.label}`
                                          ? "rotate(180deg)"
                                          : "rotate(0deg)",
                                    }}
                                  >
                                    ▼
                                  </div>
                                </div>
                              </li>

                              {/* Nested dropdown items */}
                              <li>
                                <ul
                                  style={{
                                    listStyle: "none",
                                    padding: 0,
                                    margin: 0,
                                    maxHeight:
                                      openNestedDropdown === `${item.label}-${subItem.label}`
                                        ? "500px"
                                        : "0",
                                    overflow: "hidden",
                                    transition: "max-height 0.4s ease",
                                  }}
                                >
                                  {subItem.dropdown.map((nestedItem, nestedIndex) => (
                                    <li
                                      key={`nested-${index}-${subIndex}-${nestedIndex}`}
                                    >
                                      <div
                                        onClick={() => handleNavigation(nestedItem.href)}
                                        style={{
                                          display: "block",
                                          padding: isMobile
                                            ? "10px 20px 10px 60px"
                                            : "12px 30px 12px 70px",
                                          color: "rgba(232, 243, 241, 0.6)",
                                          fontSize: isMobile ? "11px" : "12px",
                                          fontWeight: "300",
                                          letterSpacing: "0.5px",
                                          textTransform: "uppercase",
                                          transition: "all 0.3s ease",
                                          borderBottom:
                                            nestedIndex < subItem.dropdown.length - 1
                                              ? "1px solid rgba(232, 243, 241, 0.03)"
                                              : "none",
                                          cursor: "pointer",
                                        }}
                                        onMouseEnter={(e) => {
                                          if (!isMobile) {
                                            e.currentTarget.style.color = "#c8b08a";
                                            e.currentTarget.style.backgroundColor =
                                              "rgba(255, 255, 255, 0.05)";
                                            e.currentTarget.style.paddingLeft = "75px";
                                          }
                                        }}
                                        onMouseLeave={(e) => {
                                          if (!isMobile) {
                                            e.currentTarget.style.color =
                                              "rgba(232, 243, 241, 0.6)";
                                            e.currentTarget.style.backgroundColor =
                                              "transparent";
                                            e.currentTarget.style.paddingLeft = "70px";
                                          }
                                        }}
                                      >
                                        {nestedItem.label}
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            </>
                          ) : (
                            // Regular dropdown item
                            <li>
                              <div
                                onClick={() => handleNavigation(subItem.href)}
                                style={{
                                  display: "block",
                                  padding: isMobile
                                    ? "12px 20px 12px 40px"
                                    : "14px 30px 14px 50px",
                                  color: "rgba(232, 243, 241, 0.8)",
                                  textDecoration: "none",
                                  fontSize: isMobile ? "12px" : "13px",
                                  fontWeight: "300",
                                  letterSpacing: "0.5px",
                                  textTransform: "uppercase",
                                  transition: "all 0.3s ease",
                                  borderBottom:
                                    subIndex < item.dropdown.length - 1
                                      ? "1px solid rgba(232, 243, 241, 0.05)"
                                      : "none",
                                  cursor: "pointer",
                                }}
                                onMouseEnter={(e) => {
                                  if (!isMobile) {
                                    e.currentTarget.style.color = "#c8b08a";
                                    e.currentTarget.style.backgroundColor =
                                      "rgba(255, 255, 255, 0.05)";
                                    e.currentTarget.style.paddingLeft = "55px";
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  if (!isMobile) {
                                    e.currentTarget.style.color =
                                      "rgba(232, 243, 241, 0.8)";
                                    e.currentTarget.style.backgroundColor =
                                      "transparent";
                                    e.currentTarget.style.paddingLeft = "50px";
                                  }
                                }}
                              >
                                {subItem.label}
                              </div>
                            </li>
                          )}
                        </React.Fragment>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info - Hidden on mobile */}
          <div
            style={{
              padding: isMobile ? "0" : "25px 30px",
              fontSize: "11px",
              lineHeight: "1.6",
              color: "rgba(232, 243, 241, 0.7)",
              opacity: isMobile ? 0 : isAnimating ? 1 : 0,
              transform: isMobile
                ? "translateX(0)"
                : isAnimating
                ? "translateX(0)"
                : "translateX(-30px)",
              transition: "opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s",
              flexShrink: 0,
              borderTop: isMobile
                ? "none"
                : "1px solid rgba(232, 243, 241, 0.1)",
              display: isMobile ? "none" : "block",
            }}
          ></div>
        </div>

        {/* RIGHT Column - Content Section */}
        <div
          style={{
            width: isMobile ? "100%" : "65%",
            height: isMobile ? "auto" : "100vh",
            background: "#ffffff",
            padding: isMobile ? "25px 20px 30px" : "40px 40px",
            overflowY: isMobile ? "visible" : "auto",
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "25px" : "30px",
            position: "relative",
            transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transform: isAnimating
              ? "translateX(0)"
              : isMobile
              ? "translateY(100%)"
              : "translateX(-100%)",
            willChange: "transform",
            flexShrink: 0,
            minHeight: isMobile ? "auto" : "100vh",
          }}
        >
          {/* Close Button - Desktop version (right side) */}
          {!isMobile && (
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "25px",
                right: "25px",
                background: "transparent",
                border: "none",
                fontSize: "32px",
                cursor: "pointer",
                color: "#333",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2001,
                opacity: isAnimating ? 0.7 : 0,
                transform: isAnimating
                  ? "rotate(0deg) scale(1)"
                  : "rotate(-90deg) scale(0.8)",
                transition: "opacity 0.4s ease 0.4s, transform 0.5s ease 0.4s",
                borderRadius: "0",
                boxShadow: "none",
                fontWeight: "300",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
              aria-label="Close menu"
            >
              ×
            </button>
          )}

          {/* TOP SECTION: 2 Horizontal Images */}
          <div
            style={{
              opacity: isAnimating ? 1 : 0,
              transform: isAnimating ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s",
              marginTop: isMobile ? "10px" : "0",
            }}
          >
            <h2
              style={{
                fontSize: isMobile ? "18px" : "22px",
                fontWeight: "600",
                color: "#333",
                marginBottom: "20px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              FEATURED EXPERIENCES
            </h2>

            {/* Two Horizontal Images Container with mobile-specific layout */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: isMobile ? "25px" : "20px",
                marginBottom: isMobile ? "25px" : "30px",
              }}
            >
              {/* Image 1 with description below on mobile */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: isMobile ? "15px" : "0",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: isMobile ? "180px" : "220px",
                    borderRadius: "8px",
                    backgroundImage: `url(/assets/images/insta/G22.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    !isMobile && (e.currentTarget.style.transform = "scale(1.02)")
                  }
                  onMouseLeave={(e) =>
                    !isMobile && (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.7))",
                      padding: isMobile ? "12px" : "15px",
                      color: "white",
                    }}
                  >
                    <div
                      style={{
                        fontSize: isMobile ? "13px" : "14px",
                        fontWeight: "500",
                        letterSpacing: "1px",
                      }}
                    >
                      VILLA EXPERIENCE
                    </div>
                  </div>
                </div>

                {/* Description below image for mobile */}
                {isMobile && (
                  <div
                    style={{
                      padding: "0 5px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#333",
                        marginBottom: "8px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Villa Experience
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#666",
                        lineHeight: "1.5",
                        marginBottom: "12px",
                      }}
                    >
                      Nestled in the heart of the Sinharaja rainforest, Raindrops
                      Villa offers a serene retreat surrounded by lush greenery.
                    </p>
                    <div
                      onClick={() => handleNavigation("/gallery")}
                      style={{
                        color: "#c8b08a",
                        textDecoration: "none",
                        fontSize: "11px",
                        fontWeight: "500",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        cursor: "pointer",
                      }}
                    >
                      View Gallery
                      <span style={{ fontSize: "13px" }}>→</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Image 2 with description below on mobile */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: isMobile ? "15px" : "0",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: isMobile ? "180px" : "220px",
                    borderRadius: "8px",
                    backgroundImage: `url(/assets/images/neroscience/muse2.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    !isMobile && (e.currentTarget.style.transform = "scale(1.02)")
                  }
                  onMouseLeave={(e) =>
                    !isMobile && (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.7))",
                      padding: isMobile ? "12px" : "15px",
                      color: "white",
                    }}
                  >
                    <div
                      style={{
                        fontSize: isMobile ? "13px" : "14px",
                        fontWeight: "500",
                        letterSpacing: "1px",
                      }}
                    >
                      WELLNESS WITH MUSE
                    </div>
                  </div>
                </div>

                {/* Description below image for mobile */}
                {isMobile && (
                  <div
                    style={{
                      padding: "0 5px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#333",
                        marginBottom: "8px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Wellness with Muse
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#666",
                        lineHeight: "1.5",
                        marginBottom: "12px",
                      }}
                    >
                      Real-time EEG brainwave tracking for improved focus and
                      optimized mental performance.
                    </p>
                    <div
                      onClick={() => handleNavigation("/neuroscience")}
                      style={{
                        color: "#c8b08a",
                        textDecoration: "none",
                        fontSize: "11px",
                        fontWeight: "500",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        cursor: "pointer",
                      }}
                    >
                      Learn More
                      <span style={{ fontSize: "13px" }}>→</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop-only description grid (hidden on mobile) */}
            {!isMobile && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                  marginBottom: "40px",
                }}
              >
                {/* Villa Experience Description */}
                <div>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "10px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Villa Experience
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      lineHeight: "1.6",
                      marginBottom: "15px",
                    }}
                  >
                    Nestled in the heart of the Sinharaja rainforest, Raindrops
                    Villa offers a serene retreat surrounded by lush greenery.
                  </p>
                  <div
                    onClick={() => handleNavigation("/gallery")}
                    style={{
                      color: "#c8b08a",
                      textDecoration: "none",
                      fontSize: "12px",
                      fontWeight: "500",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      cursor: "pointer",
                      transition: "gap 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.gap = "12px")}
                    onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
                  >
                    View Gallery
                    <span style={{ fontSize: "14px" }}>→</span>
                  </div>
                </div>

                {/* Wellness with Muse Description */}
                <div>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "10px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Wellness with Muse
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      lineHeight: "1.6",
                      marginBottom: "15px",
                    }}
                  >
                    Real-time EEG brainwave tracking for improved focus and
                    optimized mental performance.
                  </p>
                  <div
                    onClick={() => handleNavigation("/neuroscience")}
                    style={{
                      color: "#c8b08a",
                      textDecoration: "none",
                      fontSize: "12px",
                      fontWeight: "500",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      cursor: "pointer",
                      transition: "gap 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.gap = "12px")}
                    onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
                  >
                    Learn More
                    <span style={{ fontSize: "14px" }}>→</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* BOTTOM SECTION: Email & Telephone */}
          <div
            style={{
              opacity: isAnimating ? 1 : 0,
              transform: isAnimating ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s",
              marginTop: isMobile ? "0" : "-20px",
              paddingTop: isMobile ? "25px" : "30px",
              borderTop: "1px solid #79727260",
            }}
          >
            <h3
              style={{
                fontSize: isMobile ? "15px" : "16px",
                fontWeight: "600",
                color: "#333",
                marginBottom: "20px",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              GET IN TOUCH
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  flexWrap: "wrap",
                  gap: isMobile ? "25px" : "20px",
                  marginBottom: isMobile ? "15px" : "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: isMobile ? "25px" : "20px",
                    width: "100%",
                  }}
                >
                  {/* Left Column */}
                  <div
                    style={{
                      flex: isMobile ? "none" : "1",
                      width: isMobile ? "100%" : "auto",
                    }}
                  >
                    <div style={{ marginBottom: isMobile ? "20px" : "0" }}>
                      <h4
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#333",
                          marginBottom: isMobile ? "15px" : "10px",
                        }}
                      >
                        Villa - Location
                      </h4>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#666",
                          lineHeight: "1.6",
                          marginTop: "-25px",
                        }}
                      >
                        Rain drops Wellness Villa Sinharaja, <br />
                        Dolagahawaththa,
                        <br />
                        Mederipitiya ,Deniyaya.
                      </p>
                    </div>

                    <div style={{ marginBottom: isMobile ? "20px" : "0" }}>
                      <h4
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#333",
                          marginBottom: isMobile ? "15px" : "10px",
                        }}
                      >
                        Head Office - Sri Lanka
                      </h4>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#666",
                          lineHeight: "1.6",
                          marginTop: "-25px",
                        }}
                      >
                        INTT Leisure Private Limited
                        <br />
                        No.26/6, Major LV Gunaratna Mawatha, Station Road,
                        Dehiwala,
                        <br />
                        Sri Lanka.
                      </p>
                    </div>

                    <div>
                      <h4
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#333",
                          marginBottom: isMobile ? "15px" : "10px",
                        }}
                      >
                        Head Office - USA
                      </h4>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#666",
                          lineHeight: "1.6",
                          marginTop: "-25px",
                        }}
                      >
                        INT Terminal, <br />
                        1803 Wicklow Road Naperville, <br /> IL 60564, Chicago,
                        USA.
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div
                    style={{
                      flex: isMobile ? "none" : "1",
                      width: isMobile ? "100%" : "auto",
                    }}
                  >
                    <div style={{ marginBottom: isMobile ? "20px" : "35px" }}>
                      <h4
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#333",
                          marginBottom: isMobile ? "15px" : "10px",
                        }}
                      >
                        Telephone
                      </h4>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#666",
                          lineHeight: "1.6",
                          marginTop: "-25px",
                        }}
                      >
                        +94 774 48 48 48 <br />
                        +1 312-242-1662
                      </p>
                    </div>

                    <div>
                      <h4
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#333",
                          marginBottom: isMobile ? "15px" : "10px",
                        }}
                      >
                        Email
                      </h4>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#666",
                          lineHeight: "1.6",
                          marginTop: "-25px",
                        }}
                      >
                        info@raindrops.lk <br />
                        info@intterminal.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Now Button */}
              <div
                style={{
                  marginTop: "20px",
                  marginBottom: isMobile ? "30px" : "0",
                }}
              >
                <Link
                  href="https://www.hotelmate.net/hotels/rain-drops-wellness-villa-sinharaja-deniyaya?checkIn=2025-12-01&checkOut=&adult=0&child=0&room="
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#000000ff",
                    color: "white",
                    padding: isMobile ? "12px 25px" : "12px 30px",
                    textDecoration: "none",
                    fontSize: isMobile ? "12px" : "13px",
                    fontWeight: "500",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    borderRadius: "4px",
                    transition: !isMobile ? "all 0.3s ease" : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.backgroundColor = "#c8b08a";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.backgroundColor = "#836440";
                      e.currentTarget.style.transform = "translateY(0)";
                    }
                  }}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {shouldRender && (
        <div
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 1998,
            cursor: "pointer",
            opacity: isAnimating ? 1 : 0,
            transition: "opacity 0.6s ease",
            pointerEvents: isAnimating ? "auto" : "none",
          }}
        />
      )}
    </>
  );
}

export default SideMenu;