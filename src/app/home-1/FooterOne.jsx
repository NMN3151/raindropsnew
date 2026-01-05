"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

function FooterOne() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.target;
    const formData = new FormData(form);

    const email = formData.get("email");

    // --- Validate ---
    if (!email || email.trim() === "") {
      setResult("Please enter an email");
      return;
    }

    formData.append("access_key", "dcf5f1de-6521-4ee8-8a2f-c7fc0a5977dd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Email Submitted");
      form.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <>
      <style jsx>{`

      .subscribe_txt{
      max-width: 540px;
      margin-right: 50px;
      }

      @media (max-width: 1024px){
      .subscribe_txt{
      max-width: 350px;
      }

      }
        /* Mobile Responsive Styles */
        @media (max-width: 575px) {
            .submit_btn{
            margin-bottom: 120px;
            }

          .footer__newsletter {
            flex-direction: column !important;
            gap: 20px !important;
            padding: 30px 20px !important;
            align-items: center !important;
            text-align: center;
          }

          .footer__newsletter > div:first-child {
            flex-direction: column !important;
            gap: 5px !important;
            width: 80% !important;
          }

          .footer__logo {
            width: 140px !important;
            height: auto !important;
          }

          .footer__newsletter > div:first-child p {
            font-size: 11px !important;
            line-height: 1.6 !important;
            margin: 0 !important;
          }

          .footer__newsletter > div:first-child p br {
            display: none;
          }
           
          .rts__form {
            width: 100% !important;
            height:150px;
            flex-direction: column !important;
            align-items: center !important;
            gap: 15px !important;
          }

          .rts__form form {
            width: 100%;
            display: flex;
            align-items: flex-start;
          }

          .rts__form form button[type="submit"] {
            padding: 10px 45px !important;
            font-size: 13px !important;
            align-items: flex-start;
          }
           
          .rts__form > div {
            flex-direction: row !important;
            align-items: center !important;
            gap: 12px !important;
            justify-content: center !important;
            
          }

          .rts__form > div span {
            font-size: 12px !important;
          }

          .rts__form > div > div {
            display: flex !important;
            gap: 10px !important;
          }

          .rts__form > div > div a {
            width: 30px !important;
            height: 30px !important;
          }

          .rts__form > div > div a img {
            width: 15px !important;
            height: 15px !important;
          }

          .footer__widget__wrapper {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 25px 20px !important;
            padding: 30px 20px !important;
          }

          /* Quick Links - Left, First Row */
          .footer__widget__wrapper .rts__widget:nth-child(3) {
            grid-column: 1 / 2;
            grid-row: 1;
          }

          /* Guest Services - Right, First Row */
          .footer__widget__wrapper .rts__widget:nth-child(4) {
            grid-column: 2 / 3;
            grid-row: 1;
          }

          /* Villa Location - Full Width, Second Row */
          .footer__widget__wrapper .rts__widget:nth-child(1) {
            grid-column: 1 / -1;
            grid-row: 2;
          }

          /* Head Office Sri Lanka - Full Width, Third Row */
          .footer__widget__wrapper .rts__widget:nth-child(2) {
            grid-column: 1 / -1;
            grid-row: 3;
          }

          /* Telephone & Email - Full Width, Fourth Row */
          .footer__widget__wrapper .rts__widget:nth-child(5) {
            grid-column: 2 / 3;
            grid-row: 2;
          }

          .rts__widget {
            text-align: left;
          }

          .rts__widget .widget__title {
            font-size: 14px !important;
            margin-bottom: 12px !important;
          }

          .rts__widget p {
            font-size: 11px !important;
            line-height: 1.6 !important;
            margin-bottom: 4px !important;
          }

          .rts__widget ul li {
            margin-bottom: 8px !important;
            font-size: 11px !important;
          }

          .rts__widget ul li a {
            font-size: 11px !important;
          }

          .rts__widget > div {
            margin-top: 20px !important;
          }

          .copyright__text {
            padding: 18px 20px !important;
          }

          .copyright__wrapper p {
            font-size: 10px !important;
          }

          .social_links{
            align-items: left;
            justify-content: left;
            margin-left: -200px;
          }
            .subscribe_txt{
            text-align:left;
            }
        }

        @media (max-width: 375px) {
          .footer__newsletter {
            padding: 25px 15px !important;
          }

          .footer__logo {
            width: 120px !important;
          }

          .footer__newsletter > div:first-child p {
            font-size: 10px !important;
          }

          .rts__form form button[type="submit"] {
            padding: 9px 35px !important;
            font-size: 12px !important;
          }

          .footer__widget__wrapper {
            padding: 25px 15px !important;
            gap: 20px 15px !important;
          }

          .rts__widget .widget__title {
            font-size: 13px !important;
          }

          .rts__widget p,
          .rts__widget ul li,
          .rts__widget ul li a {
            font-size: 10px !important;
          }

          .social_links{
            align-items: left;
            justify content: left;
            margin-left: -160px;
          }
        }

         @media (max-width: 320px) {
        .social_links{
            align-items: left;
            justify content: left;
            margin-left: -110px;
          }
         }


      `}</style>

      {/* footer style one */}
      <footer
        className="rts__section rts__footer is__common__footer footer__background"
        style={{ backgroundColor: "#5a5347" }}
      >
        {/* Top subscription section */}
        <div
          className="container"
          style={{ paddingTop: "0px", paddingBottom: "0px" }}
        >
          <div className="row">
            <div
              className="footer__newsletter"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid rgba(255,255,255,0.2)",
                padding: "30px 0",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "30px" }}
              >
                <Link href="/">
                  <img
                    className="footer__logo"
                    src="/assets/images/logo/logof.png"
                    alt="footer logo"
                    style={{ width: 270, height: 100 }}
                  />
                </Link>
              </div>
              <div className="subscribe_txt" style={{ color: "#fff" }}>
                <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.6" }}>
                  Subscribe to{" "}
                  <em style={{ fontStyle: "italic" }}>Rain Drops</em> Wellness
                  Villa updates and receive exclusive offers, mindful
                  <br />
                  experiences, and special announcements.
                </p>
              </div>

              <div
                className="rts__form"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  minWidth: "300px",
                }}
              >
                {/* Email input on top - full width */}
                <form onSubmit={onSubmit} style={{ width: "100%" }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    style={{
                      width: "100%",
                      padding: "12px 20px",
                      border: "1px solid #fff",
                      borderRadius: "4px",
                      fontSize: "14px",
                      background: "transparent",
                      color: "#fff",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </form>

                {/* Button and Social Links row - same width as input */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  {/* Submit Button */}
                  <button
                    className="submit_btn"
                    type="submit"
                    form="subscribe-form"
                    style={{
                      padding: "10px 40px",
                      border: "1px solid #fff",
                      cursor: "pointer",
                      fontSize: "14px",
                      borderRadius: "4px",
                      whiteSpace: "nowrap",
                      background: "#5a5347",
                      color: "#fff",
                    }}
                    onClick={(e) => {
                      const form = e.target
                        .closest(".rts__form")
                        .querySelector("form");
                      form.dispatchEvent(
                        new Event("submit", { bubbles: true, cancelable: true })
                      );
                    }}
                  >
                    Subscribe
                  </button>
                  <span>{result}</span>

                  {/* Social Links */}
                  <div
                    style={{
                      color: "#fff",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <div
                      className="social_links"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <span style={{ whiteSpace: "nowrap" }}>Follow Us</span>
                      <div
                        style={{
                          display: "flex",
                          gap: "12px",
                          alignItems: "center",
                        }}
                      >
                        <Link
                          href="https://www.facebook.com/share/1BbckAg3Ka/?mibextid=wwXIfr"
                          style={{
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(255,255,255,0.1)",
                            transition: "background-color 0.3s",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              "rgba(255,255,255,0.2)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              "rgba(255,255,255,0.1)")
                          }
                        >
                          <img
                            src="/assets/images/icon/fb.png"
                            alt="Facebook"
                            style={{ width: "16px", height: "16px" }}
                          />
                        </Link>
                        <Link
                          href="https://www.instagram.com/raindrops.villa"
                          style={{
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(255,255,255,0.1)",
                            transition: "background-color 0.3s",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              "rgba(255,255,255,0.2)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              "rgba(255,255,255,0.1)")
                          }
                        >
                          <img
                            src="/assets/images/icon/inst.png"
                            alt="Instagram"
                            style={{ width: "16px", height: "16px" }}
                          />
                        </Link>
                        <Link
                          href="https://www.tiktok.com/@raindrops_viila?is_from_webapp=1&sender_device=pc"
                          style={{
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(255,255,255,0.1)",
                            transition: "background-color 0.3s",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              "rgba(255,255,255,0.2)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              "rgba(255,255,255,0.1)")
                          }
                        >
                          <img
                            src="/assets/images/icon/tik.png"
                            alt="TikTok"
                            style={{ width: "16px", height: "16px" }}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer content section */}
          <div className="row">
            <div
              className="footer__widget__wrapper"
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr 0.8fr 0.8fr 1fr",
                gap: "40px",
                color: "#fff",
                padding: "40px 0",
              }}
            >
              {/* Villa Location - Sri Lanka */}
              <div className="rts__widget">
                <span
                  className="widget__title"
                  style={{
                    display: "block",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "20px",
                    color: "#fff",
                  }}
                >
                  Villa Location - Sri Lanka
                </span>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "rgba(255,255,255,0.8)",
                    marginBottom: "5px",
                  }}
                >
                  Rain Drops Wellness Villa,
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "rgba(255,255,255,0.8)",
                    marginBottom: "5px",
                  }}
                >
                  Sinharaja, Dolagahawaththa,
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "rgba(255,255,255,0.8)",
                    marginBottom: "5px",
                  }}
                >
                  Mederipitiya, Deniyaya, Sri Lanka.
                </p>
                <div style={{ marginTop: "30px" }}>
                  <span
                    className="widget__title"
                    style={{
                      display: "block",
                      fontSize: "16px",
                      fontWeight: "600",
                      marginBottom: "15px",
                      color: "#fff",
                    }}
                  >
                    Head Office - USA
                  </span>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "rgba(255,255,255,0.8)",
                      marginBottom: "5px",
                    }}
                  >
                    INT Terminal
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "rgba(255,255,255,0.8)",
                      marginBottom: "5px",
                    }}
                  >
                    1803 Wicklow Road Naperville,
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "rgba(255,255,255,0.8)",
                      marginBottom: "5px",
                    }}
                  >
                    IL 60564
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "rgba(255,255,255,0.8)",
                      marginBottom: "5px",
                    }}
                  >
                    Chicago, USA.
                  </p>
                </div>
              </div>

              {/* Head Office - Sri Lanka */}
              <div className="rts__widget">
                <span
                  className="widget__title"
                  style={{
                    display: "block",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "20px",
                    color: "#fff",
                  }}
                >
                  Head Office - Sri Lanka
                </span>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "rgba(255,255,255,0.8)",
                    marginBottom: "5px",
                  }}
                >
                  INTT Leisure,
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "rgba(255,255,255,0.8)",
                    marginBottom: "5px",
                  }}
                >
                  No. 26/6,
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "rgba(255,255,255,0.8)",
                    marginBottom: "5px",
                  }}
                >
                  Major L V Gunarathna Mawatha,
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "rgba(255,255,255,0.8)",
                    marginBottom: "5px",
                  }}
                >
                  Station Road, Dehiwala, Sri Lanka.
                </p>
              </div>

              {/* Quick Links */}
              <div className="rts__widget">
                <span
                  className="widget__title"
                  style={{
                    display: "block",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "20px",
                    color: "#fff",
                  }}
                >
                  Quick Links
                </span>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="/"
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#fff")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255,255,255,0.8)")
                      }
                    >
                      Home
                    </Link>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="/room-home"
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#fff")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255,255,255,0.8)")
                      }
                    >
                      Rooms
                    </Link>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="/gallery"
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#fff")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255,255,255,0.8)")
                      }
                    >
                      Gallery
                    </Link>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="/neuroscience"
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#fff")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255,255,255,0.8)")
                      }
                    >
                      Wellness
                    </Link>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="/dining"
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#fff")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255,255,255,0.8)")
                      }
                    >
                      Dining
                    </Link>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="/about"
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#fff")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255,255,255,0.8)")
                      }
                    >
                      About Us
                    </Link>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="/contact"
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#fff")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255,255,255,0.8)")
                      }
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Guest Services */}
              <div className="rts__widget">
                <span
                  className="widget__title"
                  style={{
                    display: "block",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "20px",
                    color: "#fff",
                  }}
                >
                  Guest Services
                </span>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li
                    style={{
                      marginBottom: "12px",
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "14px",
                    }}
                  >
                    24/7 Front Desk
                  </li>
                  <li
                    style={{
                      marginBottom: "12px",
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "14px",
                    }}
                  >
                    Parking
                  </li>
                  <li
                    style={{
                      marginBottom: "12px",
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "14px",
                    }}
                  >
                    Room Service
                  </li>
                  <li
                    style={{
                      marginBottom: "12px",
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "14px",
                    }}
                  >
                    Free WiFi
                  </li>
                  <li
                    style={{
                      marginBottom: "12px",
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "14px",
                    }}
                  >
                    Concierge Service
                  </li>
                  <li
                    style={{
                      marginBottom: "12px",
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "14px",
                    }}
                  >
                    Wellness Activities
                  </li>
                  <li
                    style={{
                      marginBottom: "12px",
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "14px",
                    }}
                  >
                    Laundry Service
                  </li>
                </ul>
              </div>

              {/* Telephone & Email */}
              <div className="rts__widget">
                <span
                  className="widget__title"
                  style={{
                    display: "block",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "20px",
                    color: "#fff",
                  }}
                >
                  Telephone
                </span>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="tel:+94774484848"
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#fff")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255,255,255,0.8)")
                      }
                    >
                      +94 774 48 48 48 (SL)
                    </Link>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="tel:+13122421662"
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#fff")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255,255,255,0.8)")
                      }
                    >
                      +1 312-242-1662 (USA)
                    </Link>
                  </li>
                </ul>
                <div style={{ marginTop: "30px" }}>
                  <span
                    className="widget__title"
                    style={{
                      display: "block",
                      fontSize: "16px",
                      fontWeight: "600",
                      marginBottom: "15px",
                      color: "#fff",
                    }}
                  >
                    Email
                  </span>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.8)",
                      margin: 0,
                      lineHeight: "1.6",
                    }}
                  >
                    <Link
                      href="mailto:info@raindrops.lk"
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        textDecoration: "none",
                        transition: "color 0.3s",
                        display: "block",
                        marginBottom: "8px",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#fff")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255,255,255,0.8)")
                      }
                    >
                      info@raindrops.lk
                    </Link>
                    <Link
                      href="mailto:info@intterminal.com"
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        textDecoration: "none",
                        transition: "color 0.3s",
                        display: "block",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#fff")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255,255,255,0.8)")
                      }
                    >
                      info@intterminal.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div
          className="copyright__text"
          style={{
            backgroundColor: "rgba(0,0,0,0.2)",
            padding: "20px 0",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div className="container">
            <div className="row">
              <div
                className="copyright__wrapper"
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  className="mb-0"
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "14px",
                    margin: 0,
                  }}
                >
                  2025 Rain Drops - All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer style one end */}
    </>
  );
}

export default FooterOne;
