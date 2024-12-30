import React from 'react';

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h2>What Our Customers Say</h2>
            {/* Example testimonial */}
            <div className="testimonial">
                <img src="user-image.jpg" alt="User" />
                <p>"Tiboal Travel made our safari unforgettable!"</p>
            </div>
            {/* Repeat for more testimonials */}
        </div>
    );
};

export default Testimonials;