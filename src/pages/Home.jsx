import React from 'react';
import SearchBox from '../components/SearchBox';

const Home = () => {
  return (
    <div className="home-hero">
      <div className="hero-overlay d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-white display-5 mb-4">Welcome to MakeMyTrip</h1>
        <SearchBox />
      </div>
    </div>
  );
};

export default Home;



