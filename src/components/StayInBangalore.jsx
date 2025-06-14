
import React from 'react';

const hotels = [
  {
    name: 'Taj Bangalore',
    image: 'https://r1imghtlak.mmtcdn.com/d79965d46b0811e986280242ac110003.jpeg?&downsize=583:388&crop=583:388;116,0&output-format=jpg',
    alt: 'Hotel Taj Bangalore',
  },
  {
    name: 'Howard Johnson by Wyndham, Hebbal',
    image: 'https://r1imghtlak.mmtcdn.com/814a18e8068311e4b12af67d89ce50a3.jpeg?&downsize=583:388&crop=583:388;0,14&output-format=jpg',
    alt: 'Howard Johnson by Wyndham, Hebbal',
  },
  {
    name: 'The Chancery Pavilion',
    image: 'https://r1imghtlak.mmtcdn.com/1d3ec6e2876f11e4932636cfdd80c293.jfif?&downsize=583:388&crop=583:388;0,24&output-format=jpg',
    alt: 'The Chancery Pavilion',
  },
  {
    name: 'ESSOTTO RECREATION HUB',
    image: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202312191545321561-3833f0b2-647d-4ee8-8ca0-95bde9a1b293.jpg?&downsize=583:388&output-format=jpg',
    alt: 'ESSOTTO RECREATION HUB',
  },
  {
    name: 'The Oberoi',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrhCLqordylgoQ2Xuj3iwHacQuMIKYApnokA&s',
    alt: 'The Oberoi',
  },
  {
    name: 'Radisson Blu',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNVi1BEP9C1ZMvijLrG0vtnpJXJrUnG8WVA&s',
    alt: 'Radisson Blu',
  },
];

const StayInBangalore = () => {
  const scrollRef = React.useRef(null);

  const scrollByOffset = (offset) => {
    const el = scrollRef.current;
    if (el) el.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section
      aria-labelledby="stay-heading"
      style={{
        maxWidth: 900,
        margin: '40px auto',
        padding: 20,
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        fontFamily: "'Poppins', sans-serif",
        color: '#222',
        textAlign: 'center',
      }}
    >
      <h3 id="stay-heading" style={{ fontSize: '1.8rem', marginBottom: 8, color: '#2c3e50' }}>
        For your stay in Bangalore
      </h3>
      <p style={{ fontSize: '1.2rem', color: '#6c757d', marginBottom: 32 }}>
        Sat, 14 Jun 25 – Tue, 17 Jun 25
      </p>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          aria-label="Scroll left"
          style={buttonStyle}
          onClick={() => scrollByOffset(-160)}
        >
          ‹
        </button>

        <div
          ref={scrollRef}
          style={scrollContainerStyle}
          onWheel={(e) => {
            if (e.deltaY !== 0) {
              scrollByOffset(e.deltaY < 0 ? -100 : 100);
              e.preventDefault();
            }
          }}
        >
          {hotels.map((hotel) => (
            <div key={hotel.name} style={hotelCardStyle}>
              <img src={hotel.image} alt={hotel.alt} style={hotelImageStyle} loading="lazy" />
              <div style={hotelNameStyle}>{hotel.name}</div>
            </div>
          ))}
        </div>

        <button
          aria-label="Scroll right"
          style={buttonStyle}
          onClick={() => scrollByOffset(160)}
        >
          ›
        </button>
      </div>
    </section>
  );
};

const buttonStyle = {
  background: 'rgba(44, 62, 80, 0.75)',
  border: 'none',
  color: '#fff',
  width: 44,
  height: 44,
  borderRadius: 8,
  fontSize: 28,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 8px',
  cursor: 'pointer',
};

const scrollContainerStyle = {
  overflowX: 'auto',
  display: 'flex',
  gap: 16,
  scrollBehavior: 'smooth',
  padding: '8px 0',
  flexGrow: 1,
};

const hotelCardStyle = {
  flex: '0 0 160px',
  borderRadius: 12,
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: '#fff',
  paddingBottom: 12,
  marginBottom: 8,
};
const hotelImageStyle = {
  width: '100%',
  height: 100,
  objectFit: 'cover',
  borderRadius: '12px 12px 0 0',
};
const hotelNameStyle = {
  marginTop: 10,
  fontWeight: 600,
  fontSize: '1rem',
  color: '#34495e',
};

export default StayInBangalore;






