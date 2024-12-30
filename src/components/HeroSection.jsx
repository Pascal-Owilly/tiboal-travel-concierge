import React, { useState, useEffect } from 'react';
import './Hero.css';
import nai1 from '../../src/assets/images/nai1.png';
import nai2 from '../../src/assets/images/nai2.png';
import nai3 from '../../src/assets/images/nai3.png';
import nai4 from '../../src/assets/images/nai4.png';
import nai5 from '../../src/assets/images/nai5.png';

const images = [nai1, nai2, nai3, nai4, nai5];

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="hero-section">
            <div
                className="slider"
                style={{
                    backgroundImage: `url(${images[currentIndex]})`,
                    backgroundSize: 'cover', // Ensure the background covers the entire div
                    backgroundPosition: 'center', // Center the image
                    position: 'relative', // For positioning the gradient
                    transition: 'background-image 1s ease-in-out',
                }}
            >
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
                    zIndex: 1, // Ensure gradient is above the image
                }} />
                <h1 style={{ position: 'relative', zIndex: 2 }}>Explore Kenya’s Wild Side & Beyond!</h1>
                <div className="cta-buttons" style={{ position: 'relative', zIndex: 2 }}>
                    <a href="/transportation" className="cta-button">Plan Transport</a>
                    <a href="/adventures" className="cta-button">Book Safari</a>
                </div>
                {/* <button className="prev" onClick={prevSlide} style={{ position: 'relative', zIndex: 2 }}>❮</button>
                <button className="next" onClick={nextSlide} style={{ position: 'relative', zIndex: 2 }}>❯</button> */}
                <button className="prev" onClick={prevSlide}>❮</button>
                <button className="next" onClick={nextSlide}>❯</button>
            </div>
        </div>
    );
};

export default HeroSection;