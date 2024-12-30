import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './AdventurePackages.css'; // Import the CSS file for styling
import nai6 from '../../src/assets/images/nai1.png';
import nai7 from '../../src/assets/images/nai2.png';
import nai8 from '../../src/assets/images/nai3.png';
import nai9 from '../../src/assets/images/nai4.png';
import nai10 from '../../src/assets/images/nai5.png';
    
const AdventurePackages = () => {
    const [flippedCards, setFlippedCards] = useState({});

    const packages = [
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
            image: nai7, // Replace with your image path
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
            image: nai10, // Replace with your image path
        },
    ];

    const handleCardClick = (id) => {
        setFlippedCards((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <div className="adventure-packages">
            <h2>Discover Kenya’s Hidden Gems</h2>
            <hr />
            <div className="package-cards">
                {packages.map((pkg) => (
                    <div
                        key={pkg.id}
                        className={`package-card ${flippedCards[pkg.id] ? 'flipped' : ''}`}
                        onClick={() => handleCardClick(pkg.id)}
                    >
                        <div className="card-front">
                            <div className="card-header">
                                <img src={pkg.image} alt={pkg.title} />
                            </div>
                            <div className="card-body">
                                <h3>{pkg.title}</h3>
                                <p>{pkg.description}</p>
                               
                                <div className="card-footer">
                                <p className="price"><strong>Price:</strong> {pkg.price}</p>
                            </div>
                            <div className="card-actions">
                            <Link to={`/booking/${pkg.id}`} className="book-now-btn btn btn-sm">
                                    Book Now
                                </Link>
                            <button className="see-more-btn btn btn-sm">See More</button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="card-back">
                            {getPackageDetails(pkg.id)}
                            <div className="card-actions">
                            <button className="see-more-btn btn btn-sm">Back</button>
                            <Link to={`/booking/${pkg.id}`} className="book-now-btn btn btn-sm">
                                    Book Now
                                </Link>                 
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const getPackageDetails = (pkg) => {
    switch (pkg) {
        case 'half-day':
            return (
                <div>
                    <h4>Half-Day Safari Experience</h4>
                    <ul>
                        <li><strong>Target Audience:</strong> Layover travelers, short-stay visitors.</li>
                        <li><strong>Destinations:</strong> Nairobi National Park, Giraffe Center, David Sheldrick Wildlife Trust.</li>
                        <li><strong>Inclusions:</strong>
                            <ul>
                                <li>Pick-up and drop-off from airport/hotel.</li>
                                <li>Guided tour in a safari vehicle.</li>
                                <li>Bottled water and snacks.</li>
                            </ul>
                        </li>
                        <li><strong>Pricing:</strong> $80–$120 per person.</li>
                        <li><strong>Add-ons:</strong> Personalized photography package for $50.</li>
                    </ul>
                </div>
            );
        case 'full-day':
            return (
                <div>
                    <h4>Full-Day Safari</h4>
                    <ul>
                        <li><strong>Target Audience:</strong> Adventure enthusiasts, families, small groups.</li>
                        <li><strong>Destinations:</strong> Nairobi National Park + Karen Blixen Museum + Bomas of Kenya.</li>
                        <li><strong>Inclusions:</strong>
                            <ul>
                                <li>Transport in a 4x4 safari vehicle.</li>
                                <li>Entry fees, guide services.</li>
                                <li>Lunch at a traditional Kenyan restaurant.</li>
                            </ul>
                        </li>
                        <li><strong>Pricing:</strong> $150–$250 per person.</li>
                    </ul>
                </div>
            );
        case 'multi-day':
            return (
                <div>
                    <h4>Multi-Day Safari Adventure</h4>
                    <ul>
                        <li><strong>Target Audience:</strong> International tourists and Kenyan residents.</li>
                        <li><strong>Destinations:</strong> Masai Mara, Amboseli, Lake Nakuru, Samburu.</li>
                        <li><strong>Packages:</strong>
                            <ul>
                                <li>3-Day Masai Mara Experience ($600–$1,200 per person).</li>
                                <li>5-Day Amboseli & Tsavo Safari ($1,000–$1,800 per person).</li>
                                <li>Customizable multi-park itineraries (priced based on preference).</li>
                            </ul>
                        </li>
                        <li><strong>Inclusions:</strong>
                            <ul>
                                <li>Accommodation (budget, mid-range, or luxury).</li>
                                <li>Meals, park entry fees, professional guides.</li>
                                <li>Private or group transport.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            );
        case 'cultural-explorer':
            return (
                <div>
                    <h4>Cultural Explorer Package</h4>
                    <ul>
                        <li><strong>Target Audience:</strong> Travelers interested in Kenyan culture.</li>
                        <li><strong>Destinations:</strong> Maasai villages, local markets, traditional dance shows.</li>
                        <li><strong>Pricing:</strong> $100–$150 per person.</li>
                        <li><strong>Add-ons:</strong> Swahili cooking class for $50.</li>
                    </ul>
                </div>
            );
        default:
            return '';
    }
};

export default AdventurePackages;
