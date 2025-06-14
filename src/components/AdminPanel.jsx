import React, { useState } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [flight, setFlight] = useState({ airline: '', from: '', to: '', date: '' });
  const [hotel, setHotel] = useState({ name: '', location: '', price: '' });

  const addFlight = (e) => {
    e.preventDefault();
    setFlights([...flights, { ...flight, id: Date.now() }]);
    setFlight({ airline: '', from: '', to: '', date: '' });
  };

  const addHotel = (e) => {
    e.preventDefault();
    setHotels([...hotels, { ...hotel, id: Date.now() }]);
    setHotel({ name: '', location: '', price: '' });
  };

  const deleteFlight = (id) => setFlights(flights.filter(f => f.id !== id));
  const deleteHotel = (id) => setHotels(hotels.filter(h => h.id !== id));

  return (
    <div className="admin-container">
      <h1>Admin Panel – Manage Flights & Hotels</h1>

      <section className="admin-section">
        <h2>✈ Add Flight</h2>
        <form onSubmit={addFlight} className="admin-form">
          <input type="text" placeholder="Airline" value={flight.airline} onChange={(e) => setFlight({ ...flight, airline: e.target.value })} required />
          <input type="text" placeholder="From" value={flight.from} onChange={(e) => setFlight({ ...flight, from: e.target.value })} required />
          <input type="text" placeholder="To" value={flight.to} onChange={(e) => setFlight({ ...flight, to: e.target.value })} required />
          <input type="date" value={flight.date} onChange={(e) => setFlight({ ...flight, date: e.target.value })} required />
          <button type="submit">Add Flight</button>
        </form>

        <div className="admin-list">
          {flights.map(f => (
            <div key={f.id} className="admin-card">
              <p><strong>{f.airline}</strong>: {f.from} → {f.to} | 📅 {f.date}</p>
              <button onClick={() => deleteFlight(f.id)}>Delete</button>
            </div>
          ))}
        </div>
      </section>

      <section className="admin-section">
        <h2>🏨 Add Hotel</h2>
        <form onSubmit={addHotel} className="admin-form">
          <input type="text" placeholder="Hotel Name" value={hotel.name} onChange={(e) => setHotel({ ...hotel, name: e.target.value })} required />
          <input type="text" placeholder="Location" value={hotel.location} onChange={(e) => setHotel({ ...hotel, location: e.target.value })} required />
          <input type="number" placeholder="Price" value={hotel.price} onChange={(e) => setHotel({ ...hotel, price: e.target.value })} required />
          <button type="submit">Add Hotel</button>
        </form>

        <div className="admin-list">
          {hotels.map(h => (
            <div key={h.id} className="admin-card">
              <p><strong>{h.name}</strong> – {h.location} | ₹{h.price}</p>
              <button onClick={() => deleteHotel(h.id)}>Delete</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;


