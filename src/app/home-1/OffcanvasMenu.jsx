"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function OffcanvasMenu({ isOpen, onClose }) {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  // Toggle the active state of main dropdown menu
  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
    setActiveSubMenu(null); // Reset submenu when main menu changes
  };

  // Toggle the active state of submenu
  const toggleSubMenu = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  // FIXED: Navigation handler that scrolls to top
  const handleNavigation = (e, href) => {
    e.preventDefault();

    // Close the menu first
    onClose();

    // Scroll to top immediately
    window.scrollTo({
      top: 0,
      behavior: "instant", // Use 'instant' for immediate scroll
    });

    // Navigate to the page
    router.push(href);
  };

  // FIXED: Handle home navigation with scroll to top
  const handleHomeNavigation = (e) => {
    e.preventDefault();
    onClose();

    // Scroll to top immediately
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    // Navigate to home
    router.push("/");
  };

  // Handle regular link clicks (no navigation needed)
  const handleLinkClick = (e) => {
    e.preventDefault();
    onClose();
    // Scroll to top for same-page links
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <div
      className={`offcanvas offcanvas-start ${isOpen ? "show" : ""}`}
      style={{ visibility: isOpen ? "visible" : "hidden" }}
    >
      <div className="rts__btstrp__offcanvase">
        <div className="offcanvase__wrapper">
          {/* Left Side - Mobile Menu */}
          <div className="left__side mobile__menu">
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
              aria-label="Close"
            ></button>
            <div className="offcanvase__top">
              <div className="offcanvase__logo">
                <Link href="/" onClick={handleHomeNavigation}>
                  <img
                    src="/assets/images/logo/logo-white.png"
                    alt="logo"
                    style={{ width: 130, height: 50 }}
                  />
                </Link>
              </div>
              <p className="description">
                Welcome to Rain drops, where luxury meets comfort.
              </p>
            </div>
            <div className="offcanvase__mobile__menu">
              <div className="mobile__menu__active">
                <nav className="mobile__menu__nav">
                  <ul className="list-unstyled">
                    {/* Home Menu */}
                    <li className="slide">
                      <Link
                        className="slide__menu__item"
                        href="/"
                        onClick={handleHomeNavigation}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Home</span>
                        <span style={{ width: "15px" }}></span>{" "}
                        {/* Empty spacer for alignment */}
                      </Link>
                    </li>

                    {/* About Menu with Dropdown - NESTED STRUCTURE */}
                    <li
                      className={`slide has__children ${
                        activeMenu === 1 ? "active" : ""
                      }`}
                    >
                      <div
                        className="slide__menu__item"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          cursor: "pointer",
                          padding: "10px 0",
                        }}
                        onClick={() => toggleMenu(1)}
                      >
                        <span>About</span>{" "}
                        <span className="toggle">
                          {activeMenu === 1 ? "" : ""}
                        </span>
                        {/* Plus/Minus icon for dropdown - CENTERED */}
                        <span
                          style={{
                            marginRight: "-250px",
                          }}
                        >
                          {activeMenu === 1 ? (
                            <i
                              className="fa-solid fa-minus"
                              style={{
                                fontSize: "12px",
                                lineHeight: "1",
                                verticalAlign: "middle",
                              }}
                            />
                          ) : (
                            <i
                              className="fa-solid fa-plus"
                              style={{
                                fontSize: "12px",
                                lineHeight: "1",
                                verticalAlign: "middle",
                              }}
                            />
                          )}
                        </span>
                      </div>
                      <ul
                        className="slide__menu"
                        style={{ display: activeMenu === 1 ? "block" : "none" }}
                      >
                        {/* Nested About Us Submenu */}
                        <li
                          className={`has__children ${
                            activeSubMenu === 1 ? "active" : ""
                          }`}
                        >
                          <div
                            className="slide__menu__item"
                            style={{
                              marginRight: "10px",
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              toggleSubMenu(1);
                            }}
                          >
                            <span>About Us</span>{" "}
                            <span className="toggle">
                              {activeMenu === 1 ? "" : ""}
                            </span>
                            {/* Plus/Minus icon for About Us submenu - CENTERED */}
                          </div>
                          <ul
                            className="sub-submenu sub__style"
                            style={{
                              display: activeSubMenu === 1 ? "block" : "none",
                              paddingLeft: "30px",
                            }}
                          >
                            <li role="menuitem">
                              <Link
                                href="/about"
                                onClick={(e) => handleNavigation(e, "/about")}
                                style={{ display: "block", padding: "5px 0" }}
                              >
                                The Story
                              </Link>
                            </li>
                            <li role="menuitem">
                              <Link
                                href="/Insight"
                                onClick={(e) => handleNavigation(e, "/Insight")}
                                style={{ display: "block", padding: "5px 0" }}
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
                                onClick={(e) => handleNavigation(e, "/living")}
                              >
                                A Living Partnership
                              </Link>
                            </li>
                          </ul>
                        </li>

                        {/* Other About menu items */}
                        <li role="menuitem">
                          <Link
                            href="/srilanka"
                            onClick={(e) => handleNavigation(e, "/srilanka")}
                            style={{
                              display: "block",
                              padding: "8px 0",
                              marginLeft: "15px",
                            }}
                          >
                            Beautiful Sri Lanka
                          </Link>
                        </li>
                        <li role="menuitem">
                          <Link
                            href="/privacy"
                            onClick={(e) => handleNavigation(e, "/privacy")}
                            style={{
                              display: "block",
                              padding: "8px 0",
                              marginLeft: "15px",
                            }}
                          >
                            Privacy & Policy
                          </Link>
                        </li>
                        <li role="menuitem">
                          <Link
                            href="/contact"
                            onClick={(e) => handleNavigation(e, "/contact")}
                            style={{
                              display: "block",
                              padding: "8px 0",
                              marginLeft: "15px",
                            }}
                          >
                            Contact Us
                          </Link>
                        </li>
                        <li role="menuitem">
                          <Link
                            href="/weather"
                            onClick={(e) => handleNavigation(e, "/weather")}
                            style={{
                              display: "block",
                              padding: "8px 0",
                              marginLeft: "15px",
                            }}
                          >
                            Location & Weather
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* Wellness Menu */}
                    <li className="slide">
                      <Link
                        className="slide__menu__item"
                        href="/neuroscience"
                        onClick={(e) => handleNavigation(e, "/neuroscience")}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Wellness</span>
                        <span style={{ width: "15px" }}></span>{" "}
                        {/* Empty spacer for alignment */}
                      </Link>
                    </li>
                    <li className="slide">
                      <Link
                        className="slide__menu__item"
                        href="/dining"
                        onClick={(e) => handleNavigation(e, "/dining")}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Dining</span>
                        <span style={{ width: "15px" }}></span>{" "}
                        {/* Empty spacer for alignment */}
                      </Link>
                    </li>
                    <li className="slide">
                      <Link
                        className="slide__menu__item"
                        href="/research"
                        onClick={(e) => handleNavigation(e, "/research")}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Rain Lab</span>
                        <span style={{ width: "15px" }}></span>{" "}
                        {/* Empty spacer for alignment */}
                      </Link>
                    </li>
                    {/* Rooms Menu */}
                    <li className="slide">
                      <Link
                        className="slide__menu__item"
                        href="/room-home"
                        onClick={(e) => handleNavigation(e, "/room-home")}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Rooms</span>
                        <span style={{ width: "15px" }}></span>{" "}
                        {/* Empty spacer for alignment */}
                      </Link>
                    </li>

                    {/* Gallery Menu */}
                    <li className="slide">
                      <Link
                        className="slide__menu__item"
                        href="/gallery"
                        onClick={(e) => handleNavigation(e, "/gallery")}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Gallery</span>
                        <span style={{ width: "15px" }}></span>{" "}
                        {/* Empty spacer for alignment */}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="offcanvase__bottom">
              <div className="offcanvase__address">
                <div className="item">
                  <span className="h6">Phone</span>
                  <Link href="tel:+1312242162" onClick={handleLinkClick}>
                    <i className="flaticon-phone-flip" />
                    USA: +1 312 242 1662
                  </Link>
                  <Link href="tel:+94774484848" onClick={handleLinkClick}>
                    <i className="flaticon-phone-flip" /> SriLanka: +94 774 48
                    48 48
                  </Link>
                </div>

                <div className="item">
                  <span className="h6">Email</span>
                  <Link
                    href="mailto:info@raindrops.lk"
                    onClick={handleLinkClick}
                  >
                    <i className="flaticon-envelope" />
                    info@raindrops.lk
                  </Link>
                </div>
                <div className="item">
                  <span className="h6">Address</span>
                  <Link href="#" onClick={handleLinkClick}>
                    <i className="flaticon-marker" />
                    Sinharaja ,Dolagahawaththa ,Mederipitiya ,Deniyaya
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Desktop Menu */}
          <div className="right__side desktop__menu">
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
              aria-label="Close"
            ></button>
            <div className="rts__desktop__menu">
              <nav className="desktop__menu offcanvas__menu">
                <ul className="list-unstyled">
                  {/* Home Menu */}
                  <li className="slide">
                    <Link
                      className="slide__menu__item"
                      href="/"
                      onClick={handleHomeNavigation}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Home</span>
                      <span style={{ width: "15px" }}></span>
                    </Link>
                  </li>

                  {/* About Menu with Dropdown - NESTED STRUCTURE */}
                  <li
                    className={`slide has__children ${
                      activeMenu === 1 ? "active" : ""
                    }`}
                  >
                    <div
                      className="slide__menu__item"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        cursor: "pointer",
                        padding: "10px 0",
                      }}
                      onClick={() => toggleMenu(1)}
                    >
                      <span>About</span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "15px",
                          height: "15px",
                        }}
                      >
                        {activeMenu === 1 ? (
                          <i
                            className="fa-solid fa-minus"
                            style={{
                              fontSize: "12px",
                              lineHeight: "1",
                              verticalAlign: "middle",
                            }}
                          />
                        ) : (
                          <i
                            className="fa-solid fa-plus"
                            style={{
                              fontSize: "12px",
                              lineHeight: "1",
                              verticalAlign: "middle",
                            }}
                          />
                        )}
                      </span>
                    </div>
                    <ul
                      className="slide__menu"
                      style={{ display: activeMenu === 1 ? "block" : "none" }}
                    >
                      <li
                        className={`has__children ${
                          activeSubMenu === 1 ? "active" : ""
                        }`}
                      >
                        <div
                          className="slide__menu__item"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            cursor: "pointer",
                            padding: "8px 0",
                            marginLeft: "15px",
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            toggleSubMenu(1);
                          }}
                        >
                          <span>About Us</span>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "15px",
                              height: "15px",
                            }}
                          >
                            {activeSubMenu === 1 ? (
                              <i
                                className="fa-solid fa-minus"
                                style={{
                                  fontSize: "10px",
                                  lineHeight: "1",
                                  verticalAlign: "middle",
                                }}
                              />
                            ) : (
                              <i
                                className="fa-solid fa-plus"
                                style={{
                                  fontSize: "10px",
                                  lineHeight: "1",
                                  verticalAlign: "middle",
                                }}
                              />
                            )}
                          </span>
                        </div>
                        <ul
                          className="sub-submenu sub__style"
                          style={{
                            display: activeSubMenu === 1 ? "block" : "none",
                            paddingLeft: "30px",
                          }}
                        >
                          <li>
                            <Link
                              href="/about"
                              onClick={(e) => handleNavigation(e, "/about")}
                              style={{ display: "block", padding: "5px 0" }}
                            >
                              The Story
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Insight"
                              onClick={(e) => handleNavigation(e, "/Insight")}
                              style={{ display: "block", padding: "5px 0" }}
                            >
                              Insight Partners (You)
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link
                          href="/srilanka"
                          onClick={(e) => handleNavigation(e, "/srilanka")}
                          style={{
                            display: "block",
                            padding: "8px 0",
                            marginLeft: "15px",
                          }}
                        >
                          Beautiful Sri Lanka
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/privacy"
                          onClick={(e) => handleNavigation(e, "/privacy")}
                          style={{
                            display: "block",
                            padding: "8px 0",
                            marginLeft: "15px",
                          }}
                        >
                          Privacy & Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          onClick={(e) => handleNavigation(e, "/contact")}
                          style={{
                            display: "block",
                            padding: "8px 0",
                            marginLeft: "15px",
                          }}
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/weather"
                          onClick={(e) => handleNavigation(e, "/weather")}
                          style={{
                            display: "block",
                            padding: "8px 0",
                            marginLeft: "15px",
                          }}
                        >
                          Location & Weather
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Wellness Menu */}
                  <li className="slide">
                    <Link
                      className="slide__menu__item"
                      href="/neuroscience"
                      onClick={(e) => handleNavigation(e, "/neuroscience")}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Wellness</span>
                      <span style={{ width: "15px" }}></span>
                    </Link>
                  </li>

                  {/* Rooms Menu */}
                  <li className="slide">
                    <Link
                      className="slide__menu__item"
                      href="/room-home"
                      onClick={(e) => handleNavigation(e, "/room-home")}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Rooms</span>
                      <span style={{ width: "15px" }}></span>
                    </Link>
                  </li>

                  {/* Gallery Menu */}
                  <li className="slide">
                    <Link
                      className="slide__menu__item"
                      href="/gallery"
                      onClick={(e) => handleNavigation(e, "/gallery")}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Gallery</span>
                      <span style={{ width: "15px" }}></span>
                    </Link>
                  </li>

                  {/* Dining Menu */}
                  <li className="slide">
                    <Link
                      className="slide__menu__item"
                      href="/dining"
                      onClick={(e) => handleNavigation(e, "/dining")}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Dining</span>
                      <span style={{ width: "15px" }}></span>
                    </Link>
                  </li>

                  {/* Rain Lab Menu */}
                  <li className="slide">
                    <Link
                      className="slide__menu__item"
                      href="/research"
                      onClick={(e) => handleNavigation(e, "/research")}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Rain Lab</span>
                      <span style={{ width: "15px" }}></span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffcanvasMenu;
