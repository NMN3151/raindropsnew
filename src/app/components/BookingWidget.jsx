'use client';

import { useState, useEffect } from 'react';
import {hotelApi} from '../../app/lib/hotelApi';
export default function BookingWidget() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [availableRooms, setAvailableRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [showBookingForm, setShowBookingForm] = useState(false);
  
  const [guestDetails, setGuestDetails] = useState({
    name: '',
    email: '',
    phone: '',
    paymentMethod: 'pay_at_property',
    specialRequests: '',
  });

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setCheckInDate(today);
  }, []);

  const calculateNights = (checkIn, checkOut) => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return nights;
  };

  const handleCheckAvailability = async (e) => {
    e.preventDefault();
    
    if (!checkInDate || !checkOutDate) {
      setMessage({ text: 'Please select both check-in and check-out dates', type: 'error' });
      return;
    }

    if (checkInDate >= checkOutDate) {
      setMessage({ text: 'Check-out date must be after check-in date', type: 'error' });
      return;
    }

    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const data = await hotelApi.checkAvailability(checkInDate, checkOutDate);
      
      if (data.success && data.available_rooms.length > 0) {
        setAvailableRooms(data.available_rooms);
        setMessage({ 
          text: `Found ${data.total_available} available room(s)!`, 
          type: 'success' 
        });
      } else {
        setAvailableRooms([]);
        setMessage({ text: 'No rooms available for selected dates', type: 'error' });
      }
    } catch (error) {
      setMessage({ text: 'Error checking availability. Please try again.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleSelectRoom = (room) => {
    setSelectedRoom(room);
    setShowBookingForm(true);
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!guestDetails.name || !guestDetails.email || !guestDetails.phone) {
      setMessage({ text: 'Please fill in all required fields', type: 'error' });
      return;
    }

    setLoading(true);

    try {
      const reservationData = {
        guest_name: guestDetails.name,
        guest_email: guestDetails.email,
        guest_phone: guestDetails.phone,
        room_id: selectedRoom.room_id,
        check_in_date: checkInDate,
        check_out_date: checkOutDate,
        payment_method: guestDetails.paymentMethod,
        special_requests: guestDetails.specialRequests,
      };

      const result = await hotelApi.createReservation(reservationData);

      if (result.success) {
        if (result.payment_required && result.payment_url) {
          window.location.href = result.payment_url;
        } else {
          setMessage({
            text: `Booking confirmed! Reservation ID: ${result.reservation_id}. Total: $${result.total_amount.toFixed(2)}. ${result.message}`,
            type: 'success',
          });
          
          setTimeout(() => {
            setAvailableRooms([]);
            setSelectedRoom(null);
            setShowBookingForm(false);
            setGuestDetails({
              name: '',
              email: '',
              phone: '',
              paymentMethod: 'pay_at_property',
              specialRequests: '',
            });
          }, 3000);
        }
      }
    } catch (error) {
      setMessage({ text: 'Error creating booking. Please try again.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-widget">
      <style jsx>{`
        .booking-widget {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: system-ui, -apple-system, sans-serif;
        }
        
        .form-section {
          background: white;
          padding: 24px;
          position: relative;
          z-index: 1;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          margin-bottom: 24px;
          margin-top: -120px;
          
        }
        
        h2 {
          margin-bottom: 20px;
          color: #333;
          text-align: center;
        }
        
        .form-group {
          margin-bottom: 16px;
        }
        
        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #555;
        }
        
        input, select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }
        
        input:focus, select:focus {
          outline: none;
          border-color: #BDA671;
        }
        
        .date-inputs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        
        @media (max-width: 640px) {
          .date-inputs {
            grid-template-columns: 1fr;

          }
          .title_booking{
           font-size: 1.8rem;
          }
        }
        
        button {
          background: #BDA671;
          color: white;
          padding: 12px 24px;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          transition: background 0.3s;
        }
        
        button:hover {
          background: #B8941F;
        }
        
        button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
        
        .room-card {
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 16px;
          background: white;
        }
        
        .room-card h3 {
          margin-top: 0;
          color: #D4AF37;
        }
        
        .room-details {
          margin: 12px 0;
          line-height: 1.6;
        }
        
        .room-details p {
          margin: 4px 0;
        }
        
        .message {
          padding: 12px;
          border-radius: 4px;
          margin-bottom: 16px;
        }
        
        .message.success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }
        
        .message.error {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }
        
        .amenities {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 8px;
        }
        
        .amenity-tag {
          background: #f0f0f0;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
        }
      `}</style>

 
      <div className="form-section">
        <h2 className='title_booking'>Check Room Availability </h2>
        <form onSubmit={handleCheckAvailability}>
          <div className="date-inputs">
            <div className="form-group">
              <label htmlFor="checkin">Check-in Date</label>
              <input
                id="checkin"
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkout">Check-out Date</label>
              <input
                id="checkout"
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                min={checkInDate || new Date().toISOString().split('T')[0]}
                required
              />
            </div>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Checking...' : 'Check Availability'}
          </button>
        </form>
      </div>

      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}

      {availableRooms.length > 0 && !showBookingForm && (
        <div className="form-section">
          <h2>Available Rooms</h2>
          {availableRooms.map((room) => {
            const nights = calculateNights(checkInDate, checkOutDate);
            const total = room.price_per_night * nights;
            
            return (
              <div key={room.room_id} className="room-card">
                <h3>Room {room.room_number} - {room.room_type}</h3>
                <div className="room-details">
                  <p><strong>Capacity:</strong> {room.capacity} guests</p>
                  <p><strong>Price:</strong> ${room.price_per_night}/night</p>
                  <p><strong>Total for {nights} night(s):</strong> ${total.toFixed(2)}</p>
                  {/* {room.amenities && room.amenities.length > 0 && (
                    <div>
                      <strong>Amenities:</strong>
                      <div className="amenities">
                        {room.amenities.map((amenity, idx) => (
                          <span key={idx} className="amenity-tag">{amenity}</span>
                        ))}
                      </div>
                    </div>
                  )} */}
                  {room.description && <p>{room.description}</p>}
                  
                </div>
                <button onClick={() => handleSelectRoom(room)}>
                  Select This Room
                </button>
              </div>
            );
          })}
        </div>
      )}

      {showBookingForm && selectedRoom && (
        <div className="form-section">
          <h2>Complete Your Booking</h2>
          <div className="room-card" style={{ marginBottom: '24px' }}>
            <h3>Selected: Room {selectedRoom.room_number}</h3>
            <p>
              <strong>Total:</strong> $
              {(selectedRoom.price_per_night * calculateNights(checkInDate, checkOutDate)).toFixed(2)}
            </p>
          </div>

          <form onSubmit={handleBooking}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                type="text"
                value={guestDetails.name}
                onChange={(e) => setGuestDetails({ ...guestDetails, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                type="email"
                value={guestDetails.email}
                onChange={(e) => setGuestDetails({ ...guestDetails, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone *</label>
              <input
                id="phone"
                type="tel"
                value={guestDetails.phone}
                onChange={(e) => setGuestDetails({ ...guestDetails, phone: e.target.value })}
                placeholder="+1234567890"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="payment">Payment Method</label>
              <select
                id="payment"
                value={guestDetails.paymentMethod}
                onChange={(e) => setGuestDetails({ ...guestDetails, paymentMethod: e.target.value })}
              >
                <option value="pay_at_property">Pay at Property</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="requests">Special Requests (Optional)</label>
              <input
                id="requests"
                type="text"
                value={guestDetails.specialRequests}
                onChange={(e) => setGuestDetails({ ...guestDetails, specialRequests: e.target.value })}
                placeholder="Late check-in, extra pillows, etc."
              />
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                type="button"
                onClick={() => {
                  setShowBookingForm(false);
                  setSelectedRoom(null);
                }}
                style={{ background: '#6c757d' }}
              >
                Back
              </button>
              <button type="submit" disabled={loading}>
                {loading ? 'Booking...' : 'Confirm Booking'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}