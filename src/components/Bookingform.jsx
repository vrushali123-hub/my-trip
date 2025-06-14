

// eslint-disable-next-line no-unused-vars
import Booking from '../pages/Booking';
import React, { useState, useEffect } from 'react';

const STORAGE_KEY = 'user_bookings';

const Bookingform = () => {
  const [activeTab, setActiveTab] = useState('flights');
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setBookings(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  }, [bookings]);

  // Handlers for adding bookings
  const addFlightBooking = (booking) => {
    setBookings(prev => [...prev, { id: generateId(), type: 'flight', ...booking, createdAt: new Date().toISOString() }]);
    setActiveTab('dashboard');
  };

  const addHotelBooking = (booking) => {
    setBookings(prev => [...prev, { id: generateId(), type: 'hotel', ...booking, createdAt: new Date().toISOString() }]);
    setActiveTab('dashboard');
  };

  // Cancel booking
  const cancelBooking = (id) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      setBookings(prev => prev.filter(b => b.id !== id));
    }
  };

  // Generate unique booking id
  function generateId(){
    return 'bk_' + Math.random().toString(36).substr(2, 9);
  }

  return (
    <div>
      {/* Navigation Tabs */}
      <nav aria-label="Booking Navigation" className="d-flex justify-content-center mb-4">
        <button
          className={`btn btn-outline-primary me-2 ${activeTab === 'flights' ? 'active' : ''}`}
          onClick={() => setActiveTab('flights')}
          aria-selected={activeTab === 'flights'}
          role="tab"
          type="button"
        >
          Flights
        </button>
        <button
          className={`btn btn-outline-primary me-2 ${activeTab === 'hotels' ? 'active' : ''}`}
          onClick={() => setActiveTab('hotels')}
          aria-selected={activeTab === 'hotels'}
          role="tab"
          type="button"
        >
          Hotels
        </button>
        <button
          className={`btn btn-outline-primary ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
          aria-selected={activeTab === 'dashboard'}
          role="tab"
          type="button"
        >
          Dashboard
        </button>
      </nav>

      {/* Flights Form */}
      {activeTab === 'flights' && <FlightBookingForm onSubmit={addFlightBooking} />}

      {/* Hotels Form */}
      {activeTab === 'hotels' && <HotelBookingForm onSubmit={addHotelBooking} />}

      {/* Dashboard */}
      {activeTab === 'dashboard' && <Dashboard bookings={bookings} cancelBooking={cancelBooking} />}
    </div>
  );
};

// Flight booking form component
const FlightBookingForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    from: '',
    to: '',
    departure: '',
    returnDate: '',
    passengers: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.from.trim()) return 'Please enter departure location.';
    if (!form.to.trim()) return 'Please enter destination.';
    if (!form.departure) return 'Please select departure date.';
    if (form.returnDate && form.returnDate < form.departure) return 'Return date cannot be before departure.';
    if (!form.passengers) return 'Please select number of passengers.';
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      alert(error);
      return;
    }
    onSubmit(form);
    setForm({
      from: '',
      to: '',
      departure: '',
      returnDate: '',
      passengers: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Flight Booking Form">
      <div className="mb-3">
        <label htmlFor="from" className="form-label">From</label>
        <input
          id="from"
          name="from"
          type="text"
          value={form.from}
          onChange={handleChange}
          className="form-control"
          placeholder="City or Airport"
          required
          autoComplete="off"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="to" className="form-label">To</label>
        <input
          id="to"
          name="to"
          type="text"
          value={form.to}
          onChange={handleChange}
          className="form-control"
          placeholder="City or Airport"
          required
          autoComplete="off"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="departure" className="form-label">Departure Date</label>
        <input
          id="departure"
          name="departure"
          type="date"
          value={form.departure}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="returnDate" className="form-label">Return Date</label>
        <input
          id="returnDate"
          name="returnDate"
          type="date"
          value={form.returnDate}
          onChange={handleChange}
          className="form-control"
          aria-describedby="returnHelp"
        />
        <div id="returnHelp" className="form-text">Optional</div>
      </div>
      <div className="mb-3">
        <label htmlFor="passengers" className="form-label">Passengers</label>
        <select
          id="passengers"
          name="passengers"
          value={form.passengers}
          onChange={handleChange}
          className="form-select"
          required
        >
          <option value="">Select number</option>
          {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} {n === 1 ? "Passenger" : "Passengers"}</option>)}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Book Flight</button>
    </form>
  );
};

// Hotel booking form component
const HotelBookingForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    location: '',
    checkin: '',
    checkout: '',
    rooms: '',
    guests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.location.trim()) return 'Please enter hotel location.';
    if (!form.checkin) return 'Please select check-in date.';
    if (!form.checkout) return 'Please select check-out date.';
    if (form.checkout < form.checkin) return 'Check-out date cannot be before check-in.';
    if (!form.rooms) return 'Please select number of rooms.';
    if (!form.guests) return 'Please select number of guests.';
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      alert(error);
      return;
    }
    onSubmit(form);
    setForm({
      location: '',
      checkin: '',
      checkout: '',
      rooms: '',
      guests: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Hotel Booking Form">
      <div className="mb-3">
        <label htmlFor="location" className="form-label">Location</label>
        <input
          id="location"
          name="location"
          type="text"
          value={form.location}
          onChange={handleChange}
          className="form-control"
          placeholder="City or Hotel Name"
          required
          autoComplete="off"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="checkin" className="form-label">Check-in Date</label>
        <input
          id="checkin"
          name="checkin"
          type="date"
          value={form.checkin}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="checkout" className="form-label">Check-out Date</label>
        <input
          id="checkout"
          name="checkout"
          type="date"
          value={form.checkout}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="rooms" className="form-label">Rooms</label>
        <select
          id="rooms"
          name="rooms"
          value={form.rooms}
          onChange={handleChange}
          className="form-select"
          required
        >
          <option value="">Select rooms</option>
          {[1,2,3].map(n => <option key={n} value={n}>{n} {n === 1 ? "Room" : "Rooms"}</option>)}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="guests" className="form-label">Guests</label>
        <select
          id="guests"
          name="guests"
          value={form.guests}
          onChange={handleChange}
          className="form-select"
          required
        >
          <option value="">Select guests</option>
          {[1,2,3,4].map(n => <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>)}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Book Hotel</button>
    </form>
  );
};

// Dashboard component to view bookings
const Dashboard = ({ bookings, cancelBooking }) => {
  if (bookings.length === 0) {
    return <p className="text-center mt-4">You have no bookings yet.</p>;
  }

  return (
    <div className="list-group">
      {bookings.map(b => (
        <div
          key={b.id}
          className="list-group-item list-group-item-action d-flex flex-column flex-md-row justify-content-between align-items-start mb-3 rounded"
          style={{ backgroundColor: '#f7f9fc', borderColor: '#cbd5e1' }}
        >
          <div className="ms-2 me-auto">
            <div
              className="fw-bold text-primary"
              style={{ textTransform: 'capitalize' }}
            >
              {b.type} booking
            </div>
            {b.type === 'flight' ? (
              <pre className="mb-1" style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', fontSize: '0.9rem', color: '#333' }}>
From: {b.from}
To: {b.to}
Departure: {b.departure}
Return: {b.returnDate || 'One-way'}
Passengers: {b.passengers}
              </pre>
            ) : (
              <pre className="mb-1" style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', fontSize: '0.9rem', color: '#333' }}>
Location: {b.location}
Check-in: {b.checkin}
Check-out: {b.checkout}
Rooms: {b.rooms}
Guests: {b.guests}
              </pre>
            )}
            <small className="text-muted">Booked on: {new Date(b.createdAt).toLocaleDateString()}</small>
          </div>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => cancelBooking(b.id)}
            aria-label={`Cancel this ${b.type} booking`}
          >
            Cancel
          </button>
        </div>
      ))}
    </div>
  );
};

export default Bookingform;








