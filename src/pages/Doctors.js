import React from 'react';
import { Star, Award, GraduationCap, Phone, Mail, Calendar } from 'lucide-react';
import './Doctors.css';

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Chief Ophthalmologist",
      specialty: "Comprehensive Eye Care & Cataract Surgery",
      experience: "15+ years",
      education: "MD - Johns Hopkins University, Residency - Mayo Clinic",
      certifications: ["Board Certified Ophthalmologist", "Fellowship in Cataract Surgery"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      rating: 4.9,
      reviews: 127,
      languages: ["English", "Spanish"],
      focus: "Cataract surgery, glaucoma treatment, and comprehensive eye care for adults",
      availability: "Monday - Friday",
      phone: "(555) 202-0201",
      email: "dr.johnson@2020vision.com"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      title: "Pediatric Ophthalmologist",
      specialty: "Pediatric Eye Care & Strabismus Surgery",
      experience: "12+ years",
      education: "MD - Stanford University, Residency - UCLA Medical Center",
      certifications: ["Board Certified Ophthalmologist", "Pediatric Ophthalmology Fellowship"],
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      rating: 4.8,
      reviews: 89,
      languages: ["English", "Mandarin"],
      focus: "Children's eye health, lazy eye treatment, and eye alignment issues",
      availability: "Tuesday - Saturday",
      phone: "(555) 202-0202",
      email: "dr.chen@2020vision.com"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Contact Lens Specialist",
      specialty: "Contact Lens Fitting & Cornea Care",
      experience: "10+ years",
      education: "OD - UC Berkeley School of Optometry, Residency - Bascom Palmer Eye Institute",
      certifications: ["Doctor of Optometry", "Contact Lens Fellowship"],
      image: "https://images.unsplash.com/photo-1594824475544-3b0c4b0c0c0c?w=400&h=400&fit=crop&crop=face",
      rating: 4.9,
      reviews: 156,
      languages: ["English", "Spanish", "Portuguese"],
      focus: "Specialty contact lenses, dry eye treatment, and corneal disorders",
      availability: "Monday - Friday",
      phone: "(555) 202-0203",
      email: "dr.rodriguez@2020vision.com"
    },
    {
      id: 4,
      name: "Dr. David Kim",
      title: "Retina Specialist",
      specialty: "Retinal Diseases & Diabetic Eye Care",
      experience: "18+ years",
      education: "MD - Harvard Medical School, Residency - Massachusetts Eye and Ear",
      certifications: ["Board Certified Ophthalmologist", "Retina Fellowship"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      rating: 4.9,
      reviews: 203,
      languages: ["English", "Korean"],
      focus: "Diabetic retinopathy, macular degeneration, and retinal surgery",
      availability: "Monday - Thursday",
      phone: "(555) 202-0204",
      email: "dr.kim@2020vision.com"
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      title: "Glaucoma Specialist",
      specialty: "Glaucoma Treatment & Management",
      experience: "14+ years",
      education: "MD - University of Michigan, Residency - Wills Eye Hospital",
      certifications: ["Board Certified Ophthalmologist", "Glaucoma Fellowship"],
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      rating: 4.8,
      reviews: 94,
      languages: ["English"],
      focus: "Glaucoma screening, treatment, and surgical management",
      availability: "Monday - Friday",
      phone: "(555) 202-0205",
      email: "dr.thompson@2020vision.com"
    },
    {
      id: 6,
      name: "Dr. James Wilson",
      title: "Oculoplastic Surgeon",
      specialty: "Eyelid Surgery & Facial Aesthetics",
      experience: "16+ years",
      education: "MD - Yale University, Residency - Bascom Palmer Eye Institute",
      certifications: ["Board Certified Ophthalmologist", "Oculoplastic Fellowship"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      rating: 4.9,
      reviews: 178,
      languages: ["English", "French"],
      focus: "Eyelid surgery, tear duct surgery, and cosmetic procedures",
      availability: "Wednesday - Friday",
      phone: "(555) 202-0206",
      email: "dr.wilson@2020vision.com"
    }
  ];

  return (
    <div className="doctors-page">
      <section className="hero-section">
        <div className="container">
          <h1>Our Expert Eye Doctors</h1>
          <p>Meet our team of highly qualified ophthalmologists and optometrists dedicated to providing exceptional eye care</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="doctors-grid">
            {doctors.map(doctor => (
              <div key={doctor.id} className="doctor-card-large">
                <div className="doctor-header">
                  <div className="doctor-image-large">
                    <img src={doctor.image} alt={doctor.name} />
                    <div className="rating-badge">
                      <Star size={16} fill="gold" />
                      <span>{doctor.rating}</span>
                      <span className="reviews">({doctor.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="doctor-info-large">
                    <h2>{doctor.name}</h2>
                    <p className="title">{doctor.title}</p>
                    <p className="specialty">{doctor.specialty}</p>
                    <div className="doctor-stats">
                      <span className="stat">
                        <Award size={16} />
                        {doctor.experience} experience
                      </span>
                      <span className="stat">
                        <GraduationCap size={16} />
                        {doctor.languages.length} languages
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="doctor-details">
                  <div className="detail-section">
                    <h3>Education & Training</h3>
                    <p>{doctor.education}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h3>Certifications</h3>
                    <ul>
                      {doctor.certifications.map((cert, index) => (
                        <li key={index}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-section">
                    <h3>Clinical Focus</h3>
                    <p>{doctor.focus}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h3>Languages Spoken</h3>
                    <div className="languages">
                      {doctor.languages.map((lang, index) => (
                        <span key={index} className="language-tag">{lang}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="detail-section">
                    <h3>Availability</h3>
                    <p>{doctor.availability}</p>
                  </div>
                  
                  <div className="contact-actions">
                    <a href={`tel:${doctor.phone}`} className="btn btn-primary">
                      <Phone size={16} />
                      Call {doctor.phone}
                    </a>
                    <a href={`mailto:${doctor.email}`} className="btn btn-secondary">
                      <Mail size={16} />
                      Email
                    </a>
                    <a href="/appointment" className="btn btn-secondary">
                      <Calendar size={16} />
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
