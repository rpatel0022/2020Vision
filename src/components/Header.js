import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Eye } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="logo" onClick={closeMenu}>
              <Eye size={32} />
              <span>2020 Vision</span>
            </Link>
            
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/doctors" 
                className={`nav-link ${isActive('/doctors') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Our Team
              </Link>
              <Link 
                to="/services" 
                className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link 
                to="/eyeglasses" 
                className={`nav-link ${isActive('/eyeglasses') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Products
              </Link>
              <Link 
                to="/insurance" 
                className={`nav-link ${isActive('/insurance') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Insurance
              </Link>
              <Link 
                to="/appointment" 
                className={`nav-link ${isActive('/appointment') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Book Appointment
              </Link>
              <Link 
                to="/patient-forms" 
                className={`nav-link ${isActive('/patient-forms') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Patient Forms
              </Link>
            </div>
            
            <div className="nav-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
