import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/tiboal-logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Your custom styles
import '../App.css';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className={`sidebar d-lg-none ${sidebarOpen ? 'open' : ''}`}>
        <button className="closebtn" onClick={toggleSidebar}>&times;</button>
        <nav>
          <ul>
            <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
            <li><Link to="/transportation" onClick={toggleSidebar}>Transportation</Link></li>
            <li><Link to="/adventures" onClick={toggleSidebar}>Adventures</Link></li>
            <li><Link to="/blog" onClick={toggleSidebar}>Blog</Link></li>
            <li><Link to="/contact" onClick={toggleSidebar}>Contact Us</Link></li>
            <li><Link to="destinations-kenya.html" onClick={toggleSidebar}>KENYA</Link></li>
            <li><Link to="packages-adventure.html" onClick={toggleSidebar}>TRANSPORT PLANNING</Link></li>
            <li><Link to="packages-birdwatching.html" onClick={toggleSidebar}>EXPLORE KENYA</Link></li>
            <li><Link to="info-excursions.html" onClick={toggleSidebar}>Daytours</Link></li>
            <li><Link to="info-book.html" onClick={toggleSidebar}>About Us</Link></li>
          </ul>
        </nav>
      </div>

      <header className="site-header">
        <div className="container-fluid">
          <nav className="site-navigation">
            <div className="nav-logo">
              <a href="/" title="Tiboal Travel Concierge" className="site-logo">
                <img
                  src={logo}
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "100%",
                    marginTop: "5px",
                    marginLeft: "10px",
                  }}
                  alt="Tiboal Logo"
                />
              </a>
            </div>

            <button 
              className="navbar-toggler" 
              type="button" 
              onClick={toggleSidebar} 
              aria-controls="navbarNav" 
              aria-expanded={sidebarOpen} 
              aria-label="Toggle navigation"
            >
              &#9776; 
            </button>

            <div className="site-menu">
              <ul className="navigation nav-links">
                <li className="nav-links__item has-submenu has-submenu--caret">
                  <a href="#" className="nav-links__link nav-links__link--has-toggle js-mobile-expand-collapse">
                    Top Destinations
                  </a>
                  <div className="submenu">
                    <ul className="nav-links">
                      <li className="submenu__item">
                        <a href="destinations-kenya.html" title="kenya top destinations" className="submenu__link">
                          KENYA
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-links__item has-submenu has-submenu--caret">
                  <a href="#" className="nav-links__link nav-links__link--has-toggle js-mobile-expand-collapse">
                    Our Services
                  </a>
                  <div className="submenu">
                    <ul className="nav-links">
                      <li className="submenu__item">
                        <a href="packages-adventure.html" title="Plan Transport" className="submenu__link">
                          TRANSPORT PLANNING
                        </a>
                      </li>
                      <li className="submenu__item">
                        <a href="packages-birdwatching.html" title="Explore Kenya" className="submenu__link">
                          EXPLORE KENYA
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-links__item">
                  <a href="info-excursions.html" title="excursions" className="nav-links__link">
                    Daytours
                  </a>
                </li>
                <li className="nav-links__item">
                  <a href="info-book.html" title="book our safaris" className="nav-links__link">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="nav-icons">
            <ul className="nav-links">
            <div>
                <a
                  href="https://wa.me/254790900951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="#fff"
                  >
                    <path d="M16 1.333C8.636 1.333 2.667 7.303 2.667 14.667c0 2.625.76 5.073 2.083 7.208l-1.438 5.198 5.323-1.385a14.56 14.56 0 0 0 7.365 1.906c7.365 0 13.333-5.969 13.333-13.333S23.364 1.333 16 1.333zm0 24.865a12.448 12.448 0 0 1-6.271-1.677l-.448-.261-3.135.817.854-3.094-.292-.468A12.533 12.533 0 0 1 3.933 14.667c0-6.697 5.438-12.135 12.134-12.135S28.2 7.97 28.2 14.667c0 6.697-5.437 12.135-12.133 12.135zm7.584-8.271c-.417-.208-2.49-1.229-2.885-1.375-.396-.146-.688-.208-.98.208-.292.417-1.125 1.375-1.375 1.656-.25.281-.5.312-.917.104-.417-.208-1.76-.667-3.354-2.146-1.238-1.104-2.072-2.479-2.313-2.896-.24-.417-.026-.646.187-.854.187-.188.417-.5.625-.729.208-.25.292-.417.438-.688.146-.271.073-.521-.02-.729-.104-.208-.98-2.396-1.354-3.25-.354-.854-.729-.729-.98-.729H9.25c-.25 0-.646.104-.979.5-.333.396-1.281 1.25-1.281 3.021 0 1.771 1.313 3.479 1.5 3.729.188.25 2.563 3.938 6.187 5.5.865.375 1.542.625 2.063.812.867.292 1.656.25 2.292.146.708-.104 2.49-.979 2.854-1.938.364-.958.364-1.771.25-1.938-.104-.166-.354-.271-.771-.479z"></path>
                  </svg>
                </a>
              </div>
                </ul>
          </div>

          <div className="nav-ctas">
            <div className="ctas-menu">
              <div className="nav-cta-call">
                <span className="db fw-light fs-xxs ls-wide">Contact Us</span>
                <a className="db lh-tight fc-w fs-md pv0" href="tel:+254790900951">
                  +254-790-900-951
                </a>
                <br />
                info@tiboalconsierge.com
              </div>
             
            </div>
          </div>
          </nav>
        </div>
      </header>

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