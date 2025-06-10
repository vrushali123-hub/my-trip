// src/components/SearchPage.jsx
import React, { useState } from 'react';
import SearchResults from './SearchResults';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Example mock search
    const mockResults = [
      { name: 'Hotel Taj', description: 'Luxury stay in Mumbai', price: 4500 },
      { name: 'Flight to Delhi', description: 'Direct flight', price: 3000 },
    ];
    setResults(mockResults);
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Search</h3>
      <form onSubmit={handleSearch} className="mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <input
          type="text"
          placeholder="Search for flights, hotels..."
          className="form-control mb-2"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary w-100">Search</button>
      </form>
      <SearchResults results={results} />
    </div>
  );
};

export default SearchPage;











