
import React from 'react';

const SearchBox = () => {
  return (
    <div className="search-box bg-white p-4 rounded shadow">
      <div className="row g-3">
        <div className="col-md-4">
          <input type="text" className="form-control" placeholder="From" />
        </div>
        <div className="col-md-4">
          <input type="text" className="form-control" placeholder="To" />
        </div>
        <div className="col-md-4">
          <input type="date" className="form-control" />
        </div>
        <div className="col-12 d-grid mt-3">
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;






