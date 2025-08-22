import React, { useState } from 'react';
import { Calendar, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import './Appointment.css';

const Appointment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    doctor: '',
    insurance: '',
    notes: ''
  });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Appointment form submitted:', formData);
    alert('Thank you! We will contact you to confirm your appointment.');
  };

  const availableTimes = [
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  const services = [
    'Comprehensive Eye Exam',
    'Contact Lens Fitting',
    'Glaucoma Screening',
    'Pediatric Eye Care',
    'Retinal Photography',
    'Visual Field Testing',
    'Cataract Consultation',
    'Dry Eye Treatment',
    'Frame Selection',
    'Emergency Eye Care'
  ];

  const doctors = [
    'Dr. Sarah Johnson - General Ophthalmology',
    'Dr. Michael Chen - Pediatric Ophthalmology',
    'Dr. Emily Rodriguez - Contact Lens Specialist',
    'Dr. David Kim - Retina Specialist',
    'Dr. Lisa Thompson - Glaucoma Specialist',
    'Dr. James Wilson - Oculoplastic Surgery'
  ];

  const preparationInstructions = [
    {
      title: "Before Your Appointment",
      items: [
        "Bring your current glasses or contact lenses",
        "Bring a list of current medications",
        "Bring your insurance card and photo ID",
        "Arrive 15 minutes early for paperwork",
        "Remove contact lenses 24 hours before (if applicable)"
      ]
    },
    {
      title: "What to Expect",
      items: [
        "Comprehensive eye examination (45-60 minutes)",
        "Dilation of pupils (if needed)",
        "Discussion of findings and treatment options",
        "Prescription updates if necessary",
        "Follow-up appointment scheduling"
      ]
    },
    {
      title: "After Your Appointment",
      items: [
        "Avoid driving if pupils are dilated",
        "Follow any treatment recommendations",
        "Schedule follow-up appointments as needed",
        "Contact us with any questions or concerns"
      ]
    }
  ];

  return (
    <div className="appointment-page">
      <section className="hero-section">
        <div className="container">
          <h1>Book Your Appointment</h1>
          <p>Schedule your eye care appointment with our experienced professionals. We're here to help you see clearly.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="appointment-content">
            <div className="appointment-form-section">
              <h2 className="section-title">Schedule Appointment</h2>
              <form onSubmit={handleSubmit} className="appointment-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Preferred Time *</label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a time</option>
                      {availableTimes.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Needed *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="doctor">Preferred Doctor</label>
                    <select
                      id="doctor"
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleInputChange}
                    >
                      <option value="">No preference</option>
                      {doctors.map((doctor, index) => (
                        <option key={index} value={doctor}>{doctor}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="insurance">Insurance Provider</label>
                  <input
                    type="text"
                    id="insurance"
                    name="insurance"
                    value={formData.insurance}
                    onChange={handleInputChange}
                    placeholder="e.g., Blue Cross Blue Shield, VSP"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Additional Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Any special concerns or requests..."
                  />
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  <Calendar size={20} />
                  Book Appointment
                </button>
              </form>
            </div>

            <div className="appointment-info-section">
              <div className="info-card">
                <h3>Contact Information</h3>
                <div className="contact-item">
                  <Phone size={20} />
                  <span>(555) 202-0202</span>
                </div>
                <div className="contact-item">
                  <Mail size={20} />
                  <span>appointments@2020vision.com</span>
                </div>
                <div className="contact-item">
                  <MapPin size={20} />
                  <span>123 Vision Street, Eye City, EC 12345</span>
                </div>
              </div>

              <div className="info-card">
                <h3>Office Hours</h3>
                <div className="hours-item">
                  <span className="day">Monday - Friday:</span>
                  <span className="time">8:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Saturday:</span>
                  <span className="time">9:00 AM - 2:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sunday:</span>
                  <span className="time">Closed</span>
                </div>
              </div>

              <div className="info-card">
                <h3>Emergency Care</h3>
                <p>For urgent eye care needs, call our emergency line available 24/7.</p>
                <a href="tel:+1-555-2020" className="btn btn-secondary emergency-btn">
                  Emergency: (555) 202-0202
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section preparation-section">
        <div className="container">
          <h2 className="section-title">Preparing for Your Appointment</h2>
          <div className="preparation-grid">
            {preparationInstructions.map((section, index) => (
              <div key={index} className="preparation-card">
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Need to Reschedule?</h2>
            <p>If you need to change or cancel your appointment, please contact us at least 24 hours in advance.</p>
            <div className="cta-buttons">
              <a href="tel:+1-555-2020" className="btn btn-primary">
                Call (555) 202-0202
              </a>
              <a href="mailto:appointments@2020vision.com" className="btn btn-secondary">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
