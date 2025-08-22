import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  MapPin, 
  Phone, 
  Calendar, 
  Users, 
  Award,
  Shield,
  Star,
  ArrowRight
} from 'lucide-react';
import './Home.css';

const Home = () => {
  const featuredDoctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Comprehensive Eye Care",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      rating: 4.9
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Pediatric Ophthalmology",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      rating: 4.8
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Contact Lens Specialist",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1594824475544-3b0c4b0c0c0c?w=300&h=300&fit=crop&crop=face",
      rating: 4.9
    }
  ];

  const services = [
    {
      icon: <Eye size={32} />,
      title: "Comprehensive Eye Exams",
      description: "Complete vision assessment using advanced diagnostic technology"
    },
    {
      icon: <Shield size={32} />,
      title: "Glaucoma Screening",
      description: "Early detection and monitoring of glaucoma progression"
    },
    {
      icon: <Users size={32} />,
      title: "Pediatric Eye Care",
      description: "Specialized eye care for children of all ages"
    },
    {
      icon: <Award size={32} />,
      title: "Contact Lens Fitting",
      description: "Professional fitting for all types of contact lenses"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>👁️ Trusted Since 2020</span>
            </div>
            <h1>
              <span className="hero-title-main">Your Vision,</span>
              <span className="hero-title-accent">Our Mission</span>
            </h1>
            <p className="hero-description">
              Experience world-class eye care with cutting-edge technology and compassionate professionals. 
              <span className="hero-highlight"> Your vision is our priority.</span>
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Happy Patients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99%</span>
                <span className="stat-label">Satisfaction Rate</span>
              </div>
            </div>
            <div className="hero-buttons">
              <Link to="/appointment" className="btn btn-primary hero-btn-primary">
                <span>Book Your Appointment</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/services" className="btn btn-secondary hero-btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-placeholder">
              <div className="image-circle">
                <span className="image-icon">👁️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Location Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Visit Us</h2>
          <div className="grid grid-2">
            <div className="card location-card">
              <h3>Location</h3>
              <div className="info-item">
                <MapPin size={24} />
                <div>
                  <strong>2020 Vision</strong><br />
                  123 Vision Street<br />
                  Eye City, EC 12345
                </div>
              </div>
              <div className="info-item">
                <Phone size={24} />
                <div>
                  <strong>Phone:</strong><br />
                  <a href="tel:+1-555-2020">(555) 202-0202</a>
                </div>
              </div>
            </div>
            
            <div className="card hours-card">
              <h3>Office Hours</h3>
              <div className="hours-grid">
                <div className="day-hours">
                  <span className="day">Monday - Friday</span>
                  <span className="hours">8:00 AM - 6:00 PM</span>
                </div>
                <div className="day-hours">
                  <span className="day">Saturday</span>
                  <span className="hours">9:00 AM - 2:00 PM</span>
                </div>
                <div className="day-hours">
                  <span className="day">Sunday</span>
                  <span className="hours">Closed</span>
                </div>
              </div>
              <div className="emergency-note">
                <strong>Emergency Eye Care Available 24/7</strong><br />
                Call our emergency line for urgent care needs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Doctors Section */}
      <section className="section doctors-section">
        <div className="container">
          <h2 className="section-title">Meet Our Expert Doctors</h2>
          <p className="section-subtitle">
            Our team of experienced ophthalmologists and optometrists are dedicated to providing the highest quality eye care
          </p>
          <div className="grid grid-3">
            {featuredDoctors.map(doctor => (
              <div key={doctor.id} className="card doctor-card">
                <div className="doctor-image">
                  <img src={doctor.image} alt={doctor.name} />
                  <div className="rating">
                    <Star size={16} fill="gold" />
                    <span>{doctor.rating}</span>
                  </div>
                </div>
                <div className="doctor-info">
                  <h3>{doctor.name}</h3>
                  <p className="specialty">{doctor.specialty}</p>
                  <p className="experience">{doctor.experience} experience</p>
                </div>
                <Link to="/doctors" className="btn btn-secondary">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/doctors" className="btn btn-primary">
              View All Doctors
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive eye care services using the latest technology and techniques
          </p>
          <div className="grid grid-4">
            {services.map((service, index) => (
              <div key={index} className="card service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to See Clearly?</h2>
            <p>Book your appointment today and experience the difference that professional eye care can make.</p>
            <div className="cta-buttons">
              <Link to="/appointment" className="btn btn-primary">
                <Calendar size={20} />
                Book Appointment
              </Link>
              <Link to="/contact-lenses" className="btn btn-secondary">
                Learn About Contact Lenses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
