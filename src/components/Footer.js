import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Phone, MapPin, Clock, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Eye size={32} />
              <span>2020 Vision</span>
            </div>
            <p className="footer-description">
              Providing exceptional eye care services with cutting-edge technology and compassionate care. 
              Your vision is our priority.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/doctors">Our Doctors</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/eyeglasses">Eyeglasses</Link></li>
              <li><Link to="/contact-lenses">Contact Lenses</Link></li>
              <li><Link to="/insurance">Insurance</Link></li>
              <li><Link to="/appointment">Book Appointment</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link to="/services">Comprehensive Eye Exams</Link></li>
              <li><Link to="/services">Contact Lens Fitting</Link></li>
              <li><Link to="/services">Glaucoma Screening</Link></li>
              <li><Link to="/services">Pediatric Eye Care</Link></li>
              <li><Link to="/services">Emergency Eye Care</Link></li>
              <li><Link to="/services">Surgical Consultations</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact & Hours</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={16} />
                <span>(555) 202-0202</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@2020vision.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>123 Vision Street<br />Eye City, EC 12345</span>
              </div>
              <div className="contact-item">
                <Clock size={16} />
                <div>
                  <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                  <div>Saturday: 9:00 AM - 2:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 2020 Vision. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/patient-forms">Patient Forms</Link>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
