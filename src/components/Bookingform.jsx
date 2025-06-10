
// src/components/BookingForm.jsx
import React, { useState } from 'react';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${name} to ${destination} on ${date}`);
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Booking Form</h3>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" required value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Destination</label>
          <input type="text" className="form-control" required value={destination} onChange={e => setDestination(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Date</label>
          <input type="date" className="form-control" required value={date} onChange={e => setDate(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-success w-100">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;












