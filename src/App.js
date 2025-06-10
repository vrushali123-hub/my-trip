
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchBox from './components/SearchBox';
import Booking from './pages/Booking';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm px-4 skyblue-navbar">
        <Link className="navbar-brand" to="/">
          <img
            src="https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png"
            alt="MakeMyTrip"
            style={{ height: "40px" }}
          />
        </Link>
        <div className="ms-auto d-flex align-items-center gap-3 flex-wrap">
          <Link to="/" className="nav-link text-dark d-flex align-items-center">
            <span className="material-icons me-1">business</span>List your property
          </Link>

          <Link to="/" className="nav-link text-dark d-flex align-items-center">
            <span className="material-icons me-1">work</span> Introduction to MyBiz
          </Link>

          <Link to="/booking" className="nav-link text-dark d-flex align-items-center">
            <span className="material-icons me-1">travel_explore</span> My Trips
          </Link>

          <Link to="/" className="btn btn-primary d-flex align-items-center px-3">
            <span className="material-icons me-2"></span> Login/ Create Account
          </Link>
        </div>

        <div className="d-flex align-items-center ms-3">
          <img
            src="https://flagcdn.com/w40/in.png"
            alt="India"
            style={{ height: "20px", marginRight: "5px" }}
          />
          <span>India | English</span>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="background-section d-flex flex-column justify-content-center align-items-center text-white"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1469521669194-babb45599def?q=80&w=2071&auto=format&fit=crop')",
                  height: "500px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <h1 className="display-5 text-center pt-3">Welcome to MakeMyTrip</h1>
                <div className="overlay-box">
                  <SearchBox />
                </div>
              </div>
              <SearchResults />
            </>
          }
        />

        <Route path="/booking" element={<Booking />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;








