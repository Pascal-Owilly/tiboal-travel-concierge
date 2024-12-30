import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AdventurePackages from './components/AdventurePackages';
import TransportationPackages from './components/TransportationPackages';
import Testimonials from './components/Testimonials';
import BlogPreview from './components/BlogPreview';
import Footer from './components/Footer';
import Home from './components/Home';
import BookingPage from './components/BookingPage'; 
import BookingTransport from './components/BookingTransport'; // Assuming this is your booking page component

const App = () => {
    return (
      <Router>
      <div>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/adventures" element={<AdventurePackages />} />
              <Route path="/transportation" element={<TransportationPackages />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/blog" element={<BlogPreview />} />
              <Route path="/booking/:packageId" element={<BookingPage />} /> 
              <Route path="/booking" element={<BookingTransport />} /> 
            </Routes>
          <Footer/>
      </div>
  </Router>
    );
};

export default App;