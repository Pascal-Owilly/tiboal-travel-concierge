import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlaneDeparture, FaCity, FaCar, FaUsers } from 'react-icons/fa';
import './TransportationPackage.css';

const TransportationPackages = () => {
    return (
        <div className="transportation-packages">
            <h2>Your Trusted Transportation Partner in Nairobi</h2>
            
            <div className="packages-grid">
                <div className="package-card-transport">
                    <FaPlaneDeparture className="package-icon" />
                    <div className="package-body">
                        <h3>Airport Transfer Package</h3>
                        <p><strong>Service:</strong> Airport pick-up/drop-off with assistance for luggage and a meet-and-greet service at the airport.</p>
                        <ul>
                            <li><strong>Standard Sedan:</strong> $20–$30</li>
                            <li><strong>Luxury SUV:</strong> $40–$60</li>
                        </ul>
                        <p className="package-footer"><strong>Price:</strong> $20–$60</p>
                    </div>
                    <Link to="/booking" className="cta-btn">Book Now</Link>
                </div>

                <div className="package-card-transport">
                    <FaCity className="package-icon" />
                    <div className="package-body">
                        <h3>Nairobi City Tour</h3>
                        <p><strong>Destinations:</strong> Nairobi National Museum, Uhuru Park, and local markets.</p>
                        <p><strong>Inclusions:</strong> Private vehicle with a driver, guide services, bottled water, and light snacks.</p>
                        <p className="package-footer"><strong>Price:</strong> $80–$150 per group</p>
                    </div>
                    <Link to="/booking" className="cta-btn">Book Your City Tour</Link>
                </div>

                <div className="package-card-transport">
                    <FaCar className="package-icon" />
                    <div className="package-body">
                        <h3>Hourly Chauffeur Service</h3>
                        <p><strong>Service:</strong> Professional driver with a vehicle, offering flexibility for multiple stops within Nairobi.</p>
                        <ul>
                            <li><strong>Standard:</strong> $25/hour (minimum 2 hours)</li>
                            <li><strong>Luxury:</strong> $50/hour (minimum 2 hours)</li>
                        </ul>
                        <p className="package-footer"><strong>Price:</strong> $25–$50 per hour</p>
                    </div>
                    <Link to="/booking" className="cta-btn">Reserve Now</Link>
                </div>

                <div className="package-card-transport">
                    <FaUsers className="package-icon" />
                    <div className="package-body">
                        <h3>Group Transport Package</h3>
                        <p><strong>Service:</strong> Vans or buses available for group transport, with a dedicated concierge for logistics assistance.</p>
                        <p className="package-footer"><strong>Price:</strong> $100–$200 per day</p>
                    </div>
                    <Link to="/booking" className="cta-btn">Contact Us</Link>
                </div>
            </div>

            <p className="cta"><strong>Reserve Your Ride Now</strong> and travel with ease!</p>
        </div>
    );
};

export default TransportationPackages;
