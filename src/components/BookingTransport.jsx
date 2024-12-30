import React, { useState } from 'react';
import './BookingTransport.css';

const BookingPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        package: '',
        date: '',
        time: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle booking form submission logic here (e.g., API request, form validation)
        console.log('Booking submitted:', formData);
    };

    return (
        <div className="booking-page">
            <h2>Book Your Ride</h2>
            <p>Fill in the details below to complete your booking.</p>
            
            <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="package">Choose a Package</label>
                    <select 
                        id="package" 
                        name="package" 
                        value={formData.package} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select a package</option>
                        <option value="airport-transfer">Airport Transfer</option>
                        <option value="city-tour">Nairobi City Tour</option>
                        <option value="chauffeur-service">Hourly Chauffeur Service</option>
                        <option value="group-transport">Group Transport</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input 
                        type="date" 
                        id="date" 
                        name="date" 
                        value={formData.date} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input 
                        type="time" 
                        id="time" 
                        name="time" 
                        value={formData.time} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <button type="submit" className="submit-btn">Book Now</button>
                </div>
            </form>
        </div>
    );
};

export default BookingPage;
