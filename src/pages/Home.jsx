import React from 'react';
import SearchBox from '../components/SearchBox';
import SearchResults from '../components/SearchResults';
import LesserWonders from '../components/LesserWonders'; 
import SiteInfo from '../components/SiteInfo';
import Footer from '../components/Footer';
import Offers from '../components/Offers';


const Home = () => {
    
  return (
    <>

      <div className="home-hero">
        <div className="hero-overlay d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-white display-5 mb-4">Welcome to MakeMyTrip</h1>
          <SearchBox />
        </div>
      </div>


      <SearchResults />

     <Offers/>

     <LesserWonders/>

      {/* White background info section */}
      <SiteInfo />

      {/* Footer */}
      <Footer />
    </>




  );
};

export default Home ;





























































