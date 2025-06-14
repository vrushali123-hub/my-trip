
import React, { useState, useRef, useEffect } from 'react';
import { FaPlaneDeparture, FaHotel, FaTrain } from 'react-icons/fa';

const popularCitiesFlights = [
  { name: 'Dubai, United Arab Emirates', code: 'DXB', airport: 'Dubai International' },
  { name: 'Mumbai, India', code: 'BOM', airport: 'Chhatrapati Shivaji International Airport' },
  { name: 'New Delhi, India', code: 'DEL', airport: 'Indira Gandhi International Airport' },
  { name: 'Bangkok, Thailand', code: 'BKK', airport: 'Bangkok' },
  { name: 'Bengaluru, India', code: 'BLR', airport: 'Bengaluru International Airport' },
  { name: 'Pune, India', code: 'PNQ', airport: 'Pune Airport' },
  { name: 'Hyderabad, India', code: 'HYD', airport: 'Rajiv Gandhi International Airport' },
  { name: 'Kolkata, India', code: 'CCU', airport: 'Netaji Subhash Chandra Bose International Airport' },
  { name: 'Chennai, India', code: 'MAA', airport: 'Chennai International Airport' },
  { name: 'Goa - Dabolim Airport, India', code: 'GOI', airport: 'Goa Dabolim International Airport' },
];

const popularCitiesTrains = [
  { name: 'Chennai', code: 'MAS', station: 'Chennai Central Railway Station' },
  { name: 'Delhi', code: 'NDLS', station: 'New Delhi Railway Station' },
  { name: 'Kolkata', code: 'HWH', station: 'Kolkata Howrah Junction' },
  { name: 'Mumbai', code: 'KYN', station: 'Kalyan Junction' },
  { name: 'Hyderabad', code: 'SEC', station: 'Secunderabad Junction' },
  { name: 'Bengaluru', code: 'SBC', station: 'Bangalore City Junction' },
  { name: 'Pune', code: 'PUNE', station: 'Pune Junction' },
  { name: 'Ahmedabad', code: 'ADI', station: 'Ahmedabad Junction' },
  { name: 'Patna', code: 'PNBE', station: 'Patna Junction' },
  { name: 'Jaipur', code: 'JP', station: 'Jaipur Railway Junction' },
];

const popularCitiesHotels = [
  { name: 'Mumbai, Maharashtra' },
  { name: 'Delhi, Delhi' },
  { name: 'Bangalore, Karnataka' },
  { name: 'Pune, Maharashtra' },
  { name: 'Hyderabad, Telangana' },
  { name: 'Kolkata, West Bengal' },
  { name: 'Chennai, Tamil Nadu' },
  { name: 'Goa, Goa' },
];

const SearchBox = () => {
  const [activeTab, setActiveTab] = useState('flights');
  const [fromDropdownVisible, setFromDropdownVisible] = useState(false);
  const [toDropdownVisible, setToDropdownVisible] = useState(false);
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  const fromRef = useRef(null);
  const toRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (fromRef.current && !fromRef.current.contains(e.target)) {
        setFromDropdownVisible(false);
      }
      if (toRef.current && !toRef.current.contains(e.target)) {
        setToDropdownVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFromClick = () => {
    setFromDropdownVisible(!fromDropdownVisible);
    setToDropdownVisible(false);
  };

  const handleToClick = () => {
    setToDropdownVisible(!toDropdownVisible);
    setFromDropdownVisible(false);
  };

  const handleSelectFrom = (city) => {
    setFromValue(activeTab === 'flights' ? `${city.name} (${city.code})` : city.name);
    setFromDropdownVisible(false);
  };

  const handleSelectTo = (city) => {
    setToValue(activeTab === 'flights' ? `${city.name} (${city.code})` : city.name);
    setToDropdownVisible(false);
  };

  const getCities = () => {
    if (activeTab === 'flights') return popularCitiesFlights;
    if (activeTab === 'trains') return popularCitiesTrains;
    return popularCitiesHotels;
  };

  return (
    <div className="search-box container mt-4 p-4 rounded shadow" style={{ position: 'relative' }}>
      <ul className="nav nav-tabs justify-content-center mb-3">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'flights' ? 'active' : ''}`}
            onClick={() => setActiveTab('flights')}
          >
            <FaPlaneDeparture className="me-1" /> Flights
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'hotels' ? 'active' : ''}`}
            onClick={() => setActiveTab('hotels')}
          >
            <FaHotel className="me-1" /> Hotels
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'trains' ? 'active' : ''}`}
            onClick={() => setActiveTab('trains')}
          >
            <FaTrain className="me-1" /> Trains
          </button>
        </li>
      </ul>

      <form className="row g-3 align-items-end" onSubmit={e => e.preventDefault()}>
        <div className="col-md-3 position-relative" ref={fromRef}>
          <label htmlFor="from-input" className="form-label">From</label>
          <input
            id="from-input"
            type="text"
            className="form-control"
            placeholder="City or Airport"
            value={fromValue}
            onClick={handleFromClick}
            readOnly
          />
          {fromDropdownVisible && (
            <ul className="dropdown-menu show custom-dropdown">
              <li className="dropdown-section-label">From</li>
              {getCities().map((city) => (
                <li
                  key={city.code || city.name}
                  className="dropdown-item custom-dropdown-item"
                  onClick={() => handleSelectFrom(city)}
                >
                  <strong>{city.name}</strong><br />
                  {activeTab === 'flights' && <small>{city.code} – {city.airport}</small>}
                  {activeTab === 'trains' && <small>{city.station}</small>}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="col-md-3 position-relative" ref={toRef}>
          <label htmlFor="to-input" className="form-label">To</label>
          <input
            id="to-input"
            type="text"
            className="form-control"
            placeholder="City or Airport"
            value={toValue}
            onClick={handleToClick}
            readOnly
          />
          {toDropdownVisible && (
            <ul className="dropdown-menu show custom-dropdown">
              <li className="dropdown-section-label">To</li>
              {getCities().map((city) => (
                <li
                  key={city.code || city.name}
                  className="dropdown-item custom-dropdown-item"
                  onClick={() => handleSelectTo(city)}
                >
                  <strong>{city.name}</strong><br />
                  {activeTab === 'flights' && <small>{city.code} – {city.airport}</small>}
                  {activeTab === 'trains' && <small>{city.station}</small>}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="col-md-2">
          <label htmlFor="departure-date" className="form-label">Departure</label>
          <input id="departure-date" type="date" className="form-control" />
        </div>

        <div className="col-md-2">
          <label htmlFor="return-date" className="form-label">Return</label>
          <input id="return-date" type="date" className="form-control" />
        </div>

        <div className="col-md-2">
          <label htmlFor="travelers" className="form-label">Travelers</label>
          <select id="travelers" className="form-select">
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>Family</option>
          </select>
        </div>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary px-5">Search</button>
        </div>
      </form>

      <style>{`
        .custom-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          max-height: 250px;
          overflow-y: auto;
          background: white;
          border: 1px solid #ccc;
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 1050;
          margin-top: 4px;
          list-style: none;
          font-size: 0.9rem;
        }
        .dropdown-section-label {
          font-weight: 700;
          padding: 8px 12px;
          border-bottom: 1px solid #eaeaea;
          background: #f8f9fa;
          color: #555;
        }
        .custom-dropdown-item {
          padding: 10px 12px;
          cursor: pointer;
          border-bottom: 1px solid #eee;
          line-height: 1.2;
        }
        .custom-dropdown-item:last-child {
          border-bottom: none;
        }
        .custom-dropdown-item:hover {
          background-color: #f1f3f5;
        }
        .custom-dropdown-item strong {
          font-weight: 600;
          color: #343a40;
        }
        .custom-dropdown-item small {
          color: #6c757d;
          display: block;
        }
      `}</style>
    </div>
  );
};

export default SearchBox;


