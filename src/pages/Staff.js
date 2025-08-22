import React from 'react';
import { Users, Award, Phone, Mail, Heart, Shield, Eye } from 'lucide-react';
import './Staff.css';

const Staff = () => {
  const staffMembers = [
    {
      id: 1,
      name: "Jennifer Martinez",
      position: "Lead Optician",
      department: "Optical",
      experience: "8+ years",
      specialties: ["Frame Fitting", "Lens Selection", "Patient Education"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      certifications: ["ABO Certified", "NCLE Certified"],
      languages: ["English", "Spanish"],
      availability: "Monday - Saturday",
      phone: "(555) 202-0210",
      email: "jennifer.martinez@2020vision.com"
    },
    {
      id: 2,
      name: "Robert Davis",
      position: "Optical Technician",
      department: "Lab",
      experience: "12+ years",
      specialties: ["Lens Manufacturing", "Frame Adjustments", "Quality Control"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      certifications: ["ABO Master", "Lab Technician Certification"],
      languages: ["English"],
      availability: "Monday - Friday",
      phone: "(555) 202-0211",
      email: "robert.davis@2020vision.com"
    },
    {
      id: 3,
      name: "Maria Gonzalez",
      position: "Patient Care Coordinator",
      department: "Administrative",
      experience: "6+ years",
      specialties: ["Appointment Scheduling", "Insurance Verification", "Patient Relations"],
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
      certifications: ["Medical Office Management", "Customer Service Excellence"],
      languages: ["English", "Spanish", "Portuguese"],
      availability: "Monday - Friday",
      phone: "(555) 202-0212",
      email: "maria.gonzalez@2020vision.com"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Ophthalmic Technician",
      department: "Clinical",
      experience: "10+ years",
      specialties: ["Visual Field Testing", "OCT Imaging", "Patient Preparation"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      certifications: ["COA Certified", "OCT Specialist"],
      languages: ["English"],
      availability: "Monday - Friday",
      phone: "(555) 202-0213",
      email: "david.thompson@2020vision.com"
    },
    {
      id: 5,
      name: "Sarah Wilson",
      position: "Insurance Specialist",
      department: "Billing",
      experience: "7+ years",
      specialties: ["Insurance Claims", "Patient Billing", "Benefits Verification"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      certifications: ["Medical Billing Specialist", "Insurance Coding"],
      languages: ["English"],
      availability: "Monday - Friday",
      phone: "(555) 202-0214",
      email: "sarah.wilson@2020vision.com"
    },
    {
      id: 6,
      name: "Michael Chen",
      position: "IT & Systems Administrator",
      department: "Technology",
      experience: "9+ years",
      specialties: ["Electronic Health Records", "System Maintenance", "Technical Support"],
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      certifications: ["CompTIA A+", "Network+", "Healthcare IT"],
      languages: ["English", "Mandarin"],
      availability: "Monday - Friday",
      phone: "(555) 202-0215",
      email: "michael.chen@2020vision.com"
    }
  ];

  const departments = [
    {
      name: "Optical",
      icon: <Eye size={24} />,
      description: "Frame selection, lens fitting, and optical consultations",
      staffCount: 2
    },
    {
      name: "Clinical",
      icon: <Shield size={24} />,
      description: "Patient care, testing, and clinical support",
      staffCount: 1
    },
    {
      name: "Administrative",
      icon: <Users size={24} />,
      description: "Patient coordination, scheduling, and office management",
      staffCount: 2
    },
    {
      name: "Technology",
      icon: <Award size={24} />,
      description: "IT support and system administration",
      staffCount: 1
    }
  ];

  return (
    <div className="staff-page">
      <section className="hero-section">
        <div className="container">
          <h1>Our Dedicated Staff</h1>
          <p>Meet the talented professionals who work behind the scenes to ensure you receive exceptional eye care and service</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Departments</h2>
          <div className="departments-grid">
            {departments.map((dept, index) => (
              <div key={index} className="department-card">
                <div className="department-icon">
                  {dept.icon}
                </div>
                <h3>{dept.name}</h3>
                <p>{dept.description}</p>
                <span className="staff-count">{dept.staffCount} staff members</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section staff-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="staff-grid">
            {staffMembers.map(staff => (
              <div key={staff.id} className="staff-card">
                <div className="staff-image">
                  <img src={staff.image} alt={staff.name} />
                  <div className="department-badge">{staff.department}</div>
                </div>
                
                <div className="staff-info">
                  <h3>{staff.name}</h3>
                  <p className="position">{staff.position}</p>
                  <p className="experience">{staff.experience} experience</p>
                  
                  <div className="specialties">
                    <h4>Specialties:</h4>
                    <div className="specialty-tags">
                      {staff.specialties.map((specialty, index) => (
                        <span key={index} className="specialty-tag">{specialty}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="certifications">
                    <h4>Certifications:</h4>
                    <ul>
                      {staff.certifications.map((cert, index) => (
                        <li key={index}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="languages">
                    <h4>Languages:</h4>
                    <div className="language-tags">
                      {staff.languages.map((lang, index) => (
                        <span key={index} className="language-tag">{lang}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="availability">
                    <h4>Availability:</h4>
                    <p>{staff.availability}</p>
                  </div>
                  
                  <div className="contact-info">
                    <a href={`tel:${staff.phone}`} className="contact-link">
                      <Phone size={16} />
                      {staff.phone}
                    </a>
                    <a href={`mailto:${staff.email}`} className="contact-link">
                      <Mail size={16} />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Heart size={32} />
              </div>
              <h3>Compassionate Care</h3>
              <p>We treat every patient with kindness, respect, and understanding</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Award size={32} />
              </div>
              <h3>Excellence</h3>
              <p>We maintain the highest standards in all aspects of our practice</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Shield size={32} />
              </div>
              <h3>Safety First</h3>
              <p>Patient safety and well-being are our top priorities</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Users size={32} />
              </div>
              <h3>Teamwork</h3>
              <p>We work together to provide the best possible care experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;
