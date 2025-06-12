

import React from 'react';
import './SearchResults.css';

const SearchResults = ({ results }) => {
  if (!results || results.length === 0) {
    return (
      <div className="search-results container mt-4 text-center">
        <h5>No results found.</h5>
      </div>
    );
  }

  return (
    <div className="search-results container mt-4">
      <h4 className="mb-4">Search Results</h4>
      <div className="row">
        {results.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <img
                src={item.image || 'https://via.placeholder.com/300x200'}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text fw-bold">Price: ₹{item.price}</p>
                <button className="btn btn-primary mt-auto w-100">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;





