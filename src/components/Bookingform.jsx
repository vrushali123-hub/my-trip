
import React, { useState } from 'react';
import Booking from '../pages/Booking';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    destination: '',
    date: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="booking-form-container mt-4">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Destination:</label>
            <input
              type="text"
              name="destination"
              className="form-control"
              value={formData.destination}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Date:</label>
            <input
              type="date"
              name="date"
              className="form-control"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Submit Booking</button>
        </form>
      ) : (
        <div className="alert alert-success">
          Booking confirmed for <strong>{formData.name}</strong> to <strong>{formData.destination}</strong> on <strong>{formData.date}</strong>.
        </div>
      )}
    </div>
  );
};

export default BookingForm;



















