"use client";
import React, { useState, useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";

function AdvanceForm() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  // combined guest state
  const [adults, setAdults] = useState(2);   // minimum 1 adult
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  // dropdown toggle
  const [openGuest, setOpenGuest] = useState(false);

  const formatDate = (d) => (d ? d.toISOString().split("T")[0] : "");

  // helper to build hotel url (example)
  const buildHotelUrl = () => {
    const base =
      "https://www.hotelmate.net/hotels/rain-drops-wellness-villa-sinharaja-deniyaya";
    const params = new URLSearchParams();
    if (startDate) params.set("checkIn", formatDateForUrl(startDate));
    if (endDate) params.set("checkOut", formatDateForUrl(endDate));

    params.set("adult", String(adults));
    params.set("child", String(children));
    params.set("room", String(rooms));
    params.set("name", "Thanuja"); // keep or set from state
    return `${base}?${params.toString()}`;
  };

  // small helpers for increment/decrement with min/max rules
  const inc = (setter, val, max = 10) => setter((v) => Math.min(max, v + 1));
  const dec = (setter, val, min = 0) =>
    setter((v) => Math.max(min, v - 1));

  // ensure at least 1 adult and 1 room
  const decAdult = () => dec(setAdults, adults, 1);
  const decRoom = () => dec(setRooms, rooms, 1);

  // readable label shown inside the closed input
  const guestLabel = useMemo(() => {
    const people = adults + children;
    return `${people} guest${people !== 1 ? "s" : ""} · ${rooms} room${rooms !== 1 ? "s" : ""
      }`;
  }, [adults, children, rooms]);



  // returns YYYY-MM-DD using local date parts (safe for URL params)
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

  return (
    <div className="rts__section advance__search__section is__home__one">
      <div className="container">
        <div className="row">
          <form action="#" method="post" className="advance__search">
            <div className="advance__search__wrapper">
              {/* Date range picker */}
              <div className="query__input" style={{ minWidth: 260 }}>
                <label htmlFor="dateRange" className="query__label">
                  Check-In / Check-Out
                </label>

                <DatePicker
                  selected={startDate}
                  onChange={(update) => setDateRange(update)}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  dateFormat="dd/MM/yyyy"
                  customInput={
                    <input
                      style={{
                        width: "220px",
                        height: "46px",
                        padding: "8px 10px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                      placeholder="Select date range"
                    />
                  }
                />

                <div className="query__input__icon">
                  <i className="flaticon-calendar" />
                </div>
              </div>

              {/* Guests compact field (click to open counters) */}
              <div className="query__input guest-input" style={{ position: "relative" }}>
                <label htmlFor="guests" className="query__label">
                  Guests
                </label>

                {/* closed view */}
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
                  }}
                >
                  <span>{guestLabel}</span>
                  <span style={{ marginLeft: 8 }}>
                    {/* caret icon placeholder */}
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
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
                        <div style={{ minWidth: 24, textAlign: "center" }}>{adults}</div>
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
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
                        <div style={{ minWidth: 24, textAlign: "center" }}>{children}</div>
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
                        <div style={{ fontSize: 12, color: "#666" }}></div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
                        <div style={{ minWidth: 24, textAlign: "center" }}>{rooms}</div>
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
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
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
                <div className="query__input__icon">
                  <i className="flaticon-user" />
                </div>
              </div>

              {/* Promocode */}
              <div className="query__input">
                <label htmlFor="promo" className="query__label">
                  Promocode
                </label>
                <input style={{ width: "200px", height: "42px", border: "1px solid #ccc", borderRadius: "6px" }} type="text" />
              </div>

              {/* Submit Button uses built URL */}
              <a
                href={buildHotelUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="theme-btn btn-style fill no-border search__btn"
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
  

  
      `
      }</style>
    </div>
  );
}

export default AdvanceForm;
