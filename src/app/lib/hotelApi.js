// lib/hotelApi.js
const API_BASE_URL = process.env.NEXT_PUBLIC_HOTEL_API_URL;

export const hotelApi = {
  async getAllRooms() {
    const response = await fetch(`${API_BASE_URL}/public/rooms/all`);
    if (!response.ok) throw new Error('Failed to fetch rooms');
    return await response.json();
  },

  async checkAvailability(checkIn, checkOut) {
    const response = await fetch(
      `${API_BASE_URL}/public/rooms/available?check_in=${checkIn}&check_out=${checkOut}`
    );
    if (!response.ok) throw new Error('Failed to check availability');
    return await response.json();
  },

  async createReservation(reservationData) {
    const response = await fetch(`${API_BASE_URL}/public/reservations/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reservationData),
    });
    if (!response.ok) throw new Error('Failed to create reservation');
    return await response.json();
  },
};
