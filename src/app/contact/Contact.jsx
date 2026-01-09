"use client";
import { useState } from "react";
import React from "react";

export default function ContactOne() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "3f4e9370-4f29-47c9-a031-0a0c8a8e2b29");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <>
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row g-30 align-items-center">
            <div className="col-lg-6">
              <div className="rts__contact">
                <span className="h4 d-block mb-30 text-center">
                  Love to hear from you Get in touch!
                </span>
                <form
                  onSubmit={onSubmit}
                  method="post"
                  className="rts__contact__form"
                  id="contact-form"
                >
                  <div className="form-input">
                    <label htmlFor="name">Your Name</label>
                    <div className="pr">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                      <i className="flaticon-user" />
                    </div>
                  </div>
                  <div className="form-input">
                    <label htmlFor="email">Your Email</label>
                    <div className="pr">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                      <i className="flaticon-envelope" />
                    </div>
                  </div>
                  <div className="form-input">
                    <label htmlFor="msg">Your Message</label>
                    <div className="pr">
                      <textarea
                        id="msg"
                        name="msg"
                        placeholder="Message"
                        required
                        defaultValue={""}
                      />
                      <img
                        src="/assets/images/icon/message.svg"
                        width={20}
                        height={20}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="theme-btn btn-style fill w-100"
                  >
                    <span>Send Message</span>
                  </button>
                  <span>{result}</span>
                </form>
                <div id="form-messages" className="mt-20" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact__image">
                <img
                  className="rounded-2 w-100 img-fluid"
                  src="assets/images/insta/N1.jpg"
                  width={645}
                  height={560}
                  alt="contact__image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="contact__section pt-100">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section__title"> have any questions?</h2>
              <p className="__subtitle wow fadeInUp" data-wow-delay=".3s">
                PLAN YOUR RETREAT - Whether you seek clarity, calmness, purpose,
                or healing, Rain Drops welcomes you into a world designed for
                the mind
              </p>
            </div>

            <div className="pt-30">
              <div className="row g-30 align-items-center">
                <div className="col-lg-6">
                  <div className="contact__map">
                    <iframe
                      className="w-100"
                      height={480}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.350663147313!2d80.5570833!3d6.3424847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e34ae8877483%3A0x880f5da096aa17b9!2sRain%20Drops%20Villa!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                      title="Map showing the location of Dolagahawatte, Mediripitiya, Deniyaya"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="contact__info">
                    <div className="contact__info__row">
                      <div className="contact__info__left">
                        <div className="contact__info__item">
                          <h4>Villa - Location</h4>
                          <p>
                            Rain drops Wellness Villa Sinharaja, <br />
                            Dolagahawaththa,
                            <br />
                            Mederipitiya ,Deniyaya.
                          </p>
                        </div>
                        <div className="headofficesl">
                          <div className="contact__info__item">
                            <h4 className="office-title">
                              Head Office -{" "}
                              <span className="desktop-country">Sri Lanka</span>
                              <span className="mobile-country">SL</span>
                            </h4>
                            <p>
                              INTT Leisure Private Limited
                              <br />
                              No.26/6, Major LV Gunaratna Mawatha, Station Road,
                              Dehiwala,<br></br>Sri Lanka.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="contact__info__right">
                        <div className="contact__info__item">
                          <h4>Telephone</h4>
                          <p>
                            +94 774 48 48 48 <br />
                            +1 312-242-1662
                          </p>
                        </div>
                        <div className="emailtag">
                          <div className="contact__info__item">
                            <h4>Email</h4>
                            <p>
                              info@raindrops.lk <br />
                              info@intterminal.com
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="contact__info__row">
                      <div className="contact__info__item contact__info__single">
                        <h4>Head Office - USA</h4>
                        <p>
                          INT Terminal, <br />
                          1803 Wicklow Road Naperville, <br /> IL 60564,
                          Chicago, USA.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact__section {
          background: #ffffffff;
          min-height: 100vh;
          padding: 80px 0;
           font-size: 20px;
        }

        .contact__info {
          display: flex;
          flex-direction: column;
          gap: 50px;
          margin-left: 40px;
        }

        .office-title {
          margin-bottom: 15px;
          font-size: 20px;
        }

        .desktop-country {
          display: inline;
        }

        .mobile-country {
          display: none;
        }
        .contact__info__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .contact__info__item {
          margin-bottom: 30px;
        }

        .contact__info__single {
          margin-top: 0;
        }

        .contact__info__item h4 {
          margin-bottom: 10px;
          font-size: 20px;
        }

        .contact__info__item p {
          font-size: 16px;
          font-family: var(--glida);
          line-height: 1.6;
          margin: 0;
        }

        .section__title {
          font-weight: 300;
          margin-bottom: 1rem;
          font-size: 2.5rem;
        }

        .contact__subtitle {
          line-height: 1.5;
        }

        @media screen and (max-width: 992px) {
          .contact__info {
            margin-left: 0;
            gap: 30px;
          }
        .emailtag{
          margin-top: 68px;
        }
          /* USA office spacing */
          .contact__info__row {
            margin-top: -40px;
            border-top: 1px solid #eee;
          }

          .contact__info__item--usa {
            margin-top: 0;
          }
          .desktop-country {
            display: none;
          }

          .mobile-country {
            display: inline;
          }

          .office-title {
            font-size: 18px; /* Optional: adjust font size for mobile */
          }
        }

        @media screen and (min-width: 993px) {
          .contact__info__row--single {
            margin-top: 40px;
            padding-top: 40px;
            border-top: 1px solid #eee;
            
          }

          .contact__info__row {
    margin-top: -30px;
    border-top: 1px solid #eee;
  }
  .contact__info__item--usa {
    margin-top: 0;
  }
  .desktop-country {
    display: none;
  }
  .mobile-country {
    display: inline;
  }
  .office-title {
    font-size: 18px; /* Optional: adjust font size for mobile */
  }
 .headofficesl{
  margin-top: -20px;
 }


        @media (max-width: 575.98px) {
          .section__title {
            font-size: 1.8rem;
          }

          .contact__subtitle {
            font-size: 1.1rem;
            text-align: center;
          }

          .contact__info__item h4 {
            font-size: 18px;
          }

          .contact__info__item p {
            font-size: 14px;
          }

          .contact__info__left,
          .contact__info__right {
            gap: 25px;
          }

          .contact__info__row:first-child .contact__info__item {
            margin-bottom: 25px;
          }
        }

        
        @media (min-width: 576px) and (max-width: 767.98px) {
          .contact__info__item h4 {
            font-size: 19px;
          }

          .contact__info__item p {
            font-size: 15px;
          }
        }

        @media screen and (min-width: 993px) {
          .contact__info__item {
            margin-bottom: 40px;
          }

          .contact__info__item:last-child {
            margin-bottom: 0;
          }
            
             .emailtag{
                margin-top: 68px;
              }

            .contact__map{
            height: 800px
            object-fit: contains;
            }
        }


        @media screen and (min-width: 1440px) {
          .contact__info__item {
            margin-bottom: 40px;
          }

          .contact__info__item:last-child {
            margin-bottom: 0;
          }
             .emailtag{
               margin-top: 44px;
 }
        }

        @media (min-width: 768px) and (max-width: 991.98px) {
          .contact__info {
            margin-left: 20px;
          }
        }

        @media (min-width: 1200px) {
          .contact__subtitle {
            font-size: 25px;
          }
            
        }
      `}</style>
    </>
  );
}
