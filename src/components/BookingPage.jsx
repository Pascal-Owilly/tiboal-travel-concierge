import React from 'react';
import { useParams } from 'react-router-dom';
import nai6 from '../../src/assets/images/nai1.png';
import nai7 from '../../src/assets/images/nai2.png';
import nai8 from '../../src/assets/images/nai3.png';
import nai9 from '../../src/assets/images/nai4.png';
import nai10 from '../../src/assets/images/nai5.png';

const BookingPage = () => {
    const { packageId } = useParams(); // Get package ID from the URL
    const packages = [
        { id: 'half-day', title: 'Half-Day Safari Experience', price: '$80–$120', image: nai10 },
        { id: 'full-day', title: 'Full-Day Safari', price: '$150–$250', image: nai9 },
        { id: 'multi-day', title: 'Multi-Day Safari Adventure', price: 'Starts at $600', image: nai8 },
        { id: 'cultural-explorer', title: 'Cultural Explorer Package', price: '$100–$150', image: nai7 },
    ];

    const selectedPackage = packages.find(pkg => pkg.id === packageId); // Find the package based on ID

    if (!selectedPackage) {
        return <p>Package not found.</p>;
    }

    return (
        <div style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${selectedPackage.image}) no-repeat center center/cover`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            color: 'white',
            padding: '20px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h2>Booking Details for {selectedPackage.title}</h2>
               
            </div>
            <div style={{
                backgroundColor: 'rgba(0, 51, 102, 0.7)', // Corrected the RGBA values
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 51, 102, 0.3)', // Corrected the RGBA values for the shadow
                width: '100%',
                maxWidth: '500px'
            }}>

                <p><strong>Package Price:</strong> {selectedPackage.price}</p>
                <form style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="name" style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        style={{
                            marginBottom: '15px',
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #ddd',
                            borderRadius: '5px'
                        }}
                    />

                    <label htmlFor="email" style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        style={{
                            marginBottom: '15px',
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #ddd',
                            borderRadius: '5px'
                        }}
                    />

                    <label htmlFor="date" style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Preferred Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        style={{
                            marginBottom: '15px',
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #ddd',
                            borderRadius: '5px'
                        }}
                    />

                    <button
                        type="submit"
                        style={{
                            padding: '12px',
                            fontSize: '16px',
                            backgroundColor: '#28a745',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
                    >
                        Confirm Booking
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingPage;
