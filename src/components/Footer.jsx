import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-light text-center py-3">
            <p className="mb-0">
                &copy; {currentYear} Tiboal Travel Concierge. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
