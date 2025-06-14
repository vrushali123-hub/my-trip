
import React, { useRef } from 'react';
import './LesserWonders.css';



const LesserWonders = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -240, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 240, behavior: 'smooth' });
  };

  const wonders = [
    

     {
    name: 'Taj Mahal Agra',
    image: 'https://media.istockphoto.com/id/486262615/photo/taj-mahal-agra-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=MihndPMQLTQzAKtcLk76NZMc12PaG8Ifly_J7k5BT2g='
  },


    {
      name: 'Backwaters of Kerala',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cf3966b4-1143-4bec-9851-85a605b8ab90.png'
    },
    {
      name: 'Majuli Island',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/af3a6a91-48d1-42e4-b083-43193093aa4a.png'
    },
    {
      name: 'Rann of Kutch',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/63e4beea-1506-4eba-a89f-b7957aaea8dc.png'
    },
    {
      name: 'Tawang Monastery',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5d8b1f1f-d62c-4b90-bb56-77fe2aab8860.png'
    },
    {
      name: 'Chilika Lake',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bfb76e4c-0a6c-4089-a0eb-87c261443305.png'
    },
    {
      name: 'Spiti Valley',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fca7c381-0611-4fe9-9703-c8bf68238ce3.png'
    },
    {
      name: 'Hampi Ruins',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2fde6070-964b-4dcc-8792-a54be6f3b18f.png'
    },
    {
      name: 'Dzukou Valley',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/210ce6d9-5d44-4d3b-bf7f-9322d94d61d7.png'
    },
    {
      name: 'Valley of Flowers',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3adccfd6-2f87-452a-99da-4810eb136d1b.png'
    },
  ];

  return (
    <section className="wonders-section" aria-label="Lesser Known Wonders of India">
      <h2 className="wonders-title">Unlock Lesser-Known Wonders of India</h2>
      <div className="wonders-scroll-wrapper">
        <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
        <div className="wonders-container" ref={scrollRef}>
          {wonders.map((wonder, index) => (
            <div key={index} className="wonder-card">
              <img className="wonder-image" src={wonder.image} alt={wonder.name} />
              <div className="wonder-name">{wonder.name}</div>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
      </div>
    </section>
  );
};

export default LesserWonders; 















