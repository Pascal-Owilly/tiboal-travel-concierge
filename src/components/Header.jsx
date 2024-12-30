import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Your custom styles

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            {/* Sidebar - visible only on small screens */}
            <div className={`sidebar d-lg-none ${sidebarOpen ? 'open' : ''}`}>
                <button className="closebtn" onClick={toggleSidebar}>&times;</button>
                <nav>
                    <ul>
                        <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
                        <li><Link to="/transportation" onClick={toggleSidebar}>Transportation</Link></li>
                        <li><Link to="/adventures" onClick={toggleSidebar}>Adventures</Link></li>
                        <li><Link to="/blog" onClick={toggleSidebar}>Blog</Link></li>
                        <li><Link to="/contact" onClick={toggleSidebar}>Contact Us</Link></li>
                    </ul>
                </nav>
            </div>

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg " style={{background:'#003366', color:'#f4f4f4'}}>
                <div className="container-fluid">
                    <Link style={{color:'#f4f4f4'}} className="navbar-brand" to="/">Tiboal Travel Concierge</Link>
                    <button 
                        className="navbar-toggler transparent-button" 
                        type="button" 
                        onClick={toggleSidebar} 
                        aria-controls="navbarNav" 
                        aria-expanded={sidebarOpen} 
                        aria-label="Toggle navigation"
                        style={{ backgroundColor: 'transparent', color: 'white', border: 'none' }}
                    >
                        &#9776; {/* Unicode for hamburger icon */}
                    </button>

                    {/* Navbar items - visible only on large screens */}
                    <div className="collapse navbar-collapse d-none d-lg-block">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link className="nav-link text-light" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/transportation">Transportation</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/adventures">Adventures</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/blog">Blog</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Custom styles for the sidebar */}
            <style jsx>{`
                .sidebar {
                    height: 100%; 
                    width: 250px; 
                    position: fixed; 
                    top: 0; 
                    left: -250px; 
                    background-color: #003366; 
                    transition: 0.3s; 
                    padding-top: 60px; 
                    z-index: 1000;
                }

                .sidebar.open {
                    left: 0; 
                }

                .sidebar ul {
                    padding: 0; 
                    list-style: none; 
                    color: white;
                }

                .sidebar ul li {
                    padding: 15px; 
                }

                .sidebar ul li a {
                    color: white; 
                    text-decoration: none; 
                }

                .sidebar ul li a:hover {
                    background-color: #005bb5;
                }

                .closebtn {
                    color: white; 
                    font-size: 30px; 
                    position: absolute; 
                    top: 10px; 
                    right: 25px; 
                    background: none; 
                    border: none; 
                    cursor: pointer; 
                }
            `}</style>
        </>
    );
};

export default Header;
