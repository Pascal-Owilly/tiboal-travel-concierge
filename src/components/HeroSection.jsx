import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlaneDeparture, FaCity, FaCar, FaUsers } from 'react-icons/fa';
import nai1 from '../../src/assets/images/nai1.png';
import nai2 from '../../src/assets/images/nai2.png';
import nai3 from '../../src/assets/images/nai3.png';
import nai4 from '../../src/assets/images/nai4.png';
import nai5 from '../../src/assets/images/nai5.png';
import nai6 from '../../src/assets/images/nai1.png';
import nai7 from '../../src/assets/images/nai2.png';
import nai8 from '../../src/assets/images/nai3.png';
import nai9 from '../../src/assets/images/nai4.png';
import nai10 from '../../src/assets/images/nai5.png';
import './AdventurePackages.css'; // Import the CSS file for styling
import './TransportationPackage.css';
import '../App.css';
import './styles.css';
import './Hero.css';

const images = [nai1, nai2, nai3, nai4, nai5];

const CombinedSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});

  // Auto-change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleCardClick = (id) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const adventurePackages = [
    {
      id: 'half-day',
      title: 'Half-Day Safari Experience',
      description: 'Perfect for layover travelers or short-stay visitors.',
      price: '$80–$120',
      image: nai6,
    },
    {
      id: 'full-day',
      title: 'Full-Day Safari',
      description: 'A full-day adventure for families and small groups.',
      price: '$150–$250',
      image: nai7,
    },
    {
      id: 'multi-day',
      title: 'Multi-Day Safari Adventure',
      description: 'Customizable itineraries for extended safari experiences.',
      price: 'Starts at $600',
      image: nai8,
    },
    {
      id: 'cultural-explorer',
      title: 'Cultural Explorer Package',
      description: 'Immerse yourself in Kenyan culture and traditions.',
      price: '$100–$150',
      image: nai10,
    },
  ];

  return (
    <div className="combined-section">
      {/* Hero Section with Carousel */}
      <div className="hero-section">
        <Carousel
          activeIndex={currentIndex}
          onSelect={(selectedIndex) => setCurrentIndex(selectedIndex)}
          interval={5000}
          controls={true}
          indicators={false}
          style={{ height: '100vh' }}
        >
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt={`Banner ${index + 1}`}
                style={{ objectFit: 'cover', height: '100vh' }}
              />
              <Carousel.Caption>
                <h1>Explore Kenya’s Wild Side & Beyond!</h1>
                <p>Discover amazing places, adventures, and transportation options all across Kenya.</p>
                <div className="cta-buttons">
                  <a href="/transportation" className="cta-button">Get around Nairobi</a>
                  <a href="/adventures" className="cta-button">Explore Kenya</a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CombinedSection;
