import React, { useState, useEffect } from 'react';
import './Hero.css';
import img1 from './Assets/cctv.jpg';
import img2 from './Assets/softwares.jpg';
import img3 from './Assets/software.jpg';
import img4 from './Assets/training.jpg';

const images = [
  { src: img1, tag: 'CCTV Installation' },
  { src: img2, tag: 'Business Software' },
  { src: img3, tag: 'IT Support' },
  { src: img4, tag: 'IT Training' }
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  // Get 3 images: left, center, right
  const leftIndex = (index - 1 + images.length) % images.length;
  const rightIndex = (index + 1) % images.length;

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Mind tech vision</h1>
        <p>Affordable & Reliable IT Solutions for Small Businesses.</p>
      </div>

      <div className="carousel-row">
        <div className="side-image">
          <img src={images[leftIndex].src} alt="left" />
          <span>{images[leftIndex].tag}</span>
        </div>

        <div className="main-image">
          <img src={images[index].src} alt="center" />
          <span>{images[index].tag}</span>
        </div>

        <div className="side-image">
          <img src={images[rightIndex].src} alt="right" />
          <span>{images[rightIndex].tag}</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
