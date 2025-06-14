
import React, { useRef } from 'react';
import './OffersSection.css';

const offers = [
  { icon: '✈️', title: 'Flight Offers', description: 'Get up to ₹2000 off on domestic flights' },
  { icon: '🚆', title: 'Train Deals', description: 'Book trains with zero service fee' },
  { icon: '🚌', title: 'Bus Offers', description: 'Up to 20% off on bus tickets' },
  { icon: '🚖', title: 'Cab Savings', description: 'Flat ₹100 off on first cab ride' },
  { icon: '🌍', title: 'International Flights', description: 'Save big on global routes' },
  { icon: '🏨', title: 'Hotel Discounts', description: 'Up to 50% off on top hotels' },
  { icon: '🗺️', title: 'Holiday Packages', description: 'Best deals on family trips' },
];

const Offers = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 300;
    carouselRef.current?.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="offers-section">
      <h2 className="offers-heading">💥 Exclusive Offers for You</h2>
      <div className="offers-wrapper">
        <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>
        <div className="offers-carousel" ref={carouselRef}>
          {offers.map((offer, index) => (
            <div className="offer-card" key={index}>
              <div className="offer-icon">{offer.icon}</div>
              <h4>{offer.title}</h4>
              <p>{offer.description}</p>
              <button className="book-btn">Book Now</button>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll('right')}>&gt;</button>
      </div>
    </div>
  );
};

export default Offers;















