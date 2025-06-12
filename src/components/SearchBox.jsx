
import React, { useState } from 'react';
import { FaPlaneDeparture, FaHotel, FaTrain } from 'react-icons/fa';

const SearchBox = () => {
  const [activeTab, setActiveTab] = useState('flights');

  return (
    <div className="search-box container mt-4 p-4 rounded shadow">
      <ul className="nav nav-tabs justify-content-center mb-3">
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'flights' ? 'active' : ''}`} onClick={() => setActiveTab('flights')}>
            <FaPlaneDeparture className="me-1" /> Flights
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'hotels' ? 'active' : ''}`} onClick={() => setActiveTab('hotels')}>
            <FaHotel className="me-1" /> Hotels
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'trains' ? 'active' : ''}`} onClick={() => setActiveTab('trains')}>
            <FaTrain className="me-1" /> Trains
          </button>
        </li>
      </ul>

      <form className="row g-3 align-items-end">
        <div className="col-md-3">
          <label className="form-label">From</label>
          <input type="text" className="form-control" placeholder="City or Airport" />
        </div>
        <div className="col-md-3">
          <label className="form-label">To</label>
          <input type="text" className="form-control" placeholder="City or Airport" />
        </div>
        <div className="col-md-2">
          <label className="form-label">Departure</label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-md-2">
          <label className="form-label">Return</label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-md-2">
          <label className="form-label">Travelers</label>
          <select className="form-select">
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>Family</option>
          </select>
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary px-5">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;















