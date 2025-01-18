import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AdventurePackages from './AdventurePackages';
import TransportationPackages from './TransportationPackages';
import Testimonials from './Testimonials';
import BlogPreview from './BlogPreview';
import MainSection from './MainSection';

const Home = () => {
    return (
        <div>
            <HeroSection />
            {/* <AdventurePackages />
            <TransportationPackages /> */}
            <MainSection />
            {/* <Testimonials />
            <BlogPreview /> */}
        </div>
    );
};

export default Home;
