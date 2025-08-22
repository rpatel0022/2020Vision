import React from 'react';
import { 
  Eye, 
  Shield, 
  Users, 
  Award, 
  Camera, 
  Activity, 
  Scissors, 
  Heart,
  Clock,
  DollarSign,
  CheckCircle
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Comprehensive Eye Exams",
      icon: <Eye size={32} />,
      description: "Complete vision assessment including refraction, eye health evaluation, and screening for eye diseases",
      duration: "45-60 minutes",
      price: "$150",
      includes: [
        "Visual acuity testing",
        "Refraction assessment",
        "Eye pressure measurement",
        "Retinal examination",
        "Color vision testing",
        "Eye coordination evaluation"
      ],
      recommended: "Annually for adults, every 2 years for children"
    },
    {
      id: 2,
      name: "Glaucoma Screening",
      icon: <Shield size={32} />,
      description: "Early detection and monitoring of glaucoma using advanced diagnostic technology",
      duration: "30 minutes",
      price: "$100",
      includes: [
        "Eye pressure measurement (tonometry)",
        "Visual field testing",
        "OCT imaging of optic nerve",
        "Gonioscopy examination",
        "Corneal thickness measurement"
      ],
      recommended: "Every 6-12 months for high-risk patients"
    },
    {
      id: 3,
      name: "Pediatric Eye Care",
      icon: <Users size={32} />,
      description: "Specialized eye care for children, including lazy eye treatment and vision development assessment",
      duration: "30-45 minutes",
      price: "$120",
      includes: [
        "Age-appropriate vision testing",
        "Eye alignment evaluation",
        "Depth perception testing",
        "Color vision assessment",
        "Eye health examination",
        "Treatment planning"
      ],
      recommended: "At 6 months, 3 years, and before school entry"
    },
    {
      id: 4,
      name: "Contact Lens Fitting",
      icon: <Award size={32} />,
      description: "Professional fitting for all types of contact lenses including specialty lenses for complex prescriptions",
      duration: "60-90 minutes",
      price: "$200",
      includes: [
        "Comprehensive eye examination",
        "Contact lens fitting evaluation",
        "Trial lens fitting",
        "Follow-up appointments",
        "Contact lens education",
        "Care instructions"
      ],
      recommended: "Every 1-2 years or when prescription changes"
    },
    {
      id: 5,
      name: "Retinal Photography",
      icon: <Camera size={32} />,
      description: "High-resolution imaging of the retina for early detection of eye diseases",
      duration: "15 minutes",
      price: "$75",
      includes: [
        "Wide-field retinal imaging",
        "Image analysis",
        "Digital storage",
        "Comparison with previous images",
        "Detailed report"
      ],
      recommended: "Annually for diabetic patients, every 2 years for others"
    },
    {
      id: 6,
      name: "Visual Field Testing",
      icon: <Activity size={32} />,
      description: "Computerized testing to assess peripheral vision and detect vision loss",
      duration: "20-30 minutes",
      price: "$80",
      includes: [
        "Automated perimetry testing",
        "Central and peripheral vision assessment",
        "Results interpretation",
        "Progress tracking",
        "Detailed report"
      ],
      recommended: "Every 6-12 months for glaucoma patients"
    },
    {
      id: 7,
      name: "Cataract Surgery Consultation",
      icon: <Scissors size={32} />,
      description: "Evaluation and planning for cataract surgery with advanced lens options",
      duration: "60 minutes",
      price: "$200",
      includes: [
        "Comprehensive eye examination",
        "Cataract evaluation",
        "Lens option discussion",
        "Surgical planning",
        "Pre-operative instructions"
      ],
      recommended: "When cataracts affect daily activities"
    },
    {
      id: 8,
      name: "Dry Eye Treatment",
      icon: <Heart size={32} />,
      description: "Comprehensive treatment for dry eye syndrome using advanced therapies",
      duration: "45 minutes",
      price: "$150",
      includes: [
        "Dry eye evaluation",
        "Tear film analysis",
        "Treatment planning",
        "Follow-up care",
        "Lifestyle recommendations"
      ],
      recommended: "As needed based on symptoms"
    }
  ];

  const specialPrograms = [
    {
      name: "Diabetic Eye Care Program",
      description: "Comprehensive eye care for diabetic patients with regular monitoring",
      benefits: ["Early detection of diabetic retinopathy", "Regular monitoring", "Specialized treatment options"]
    },
    {
      name: "Senior Vision Care",
      description: "Specialized care for age-related eye conditions",
      benefits: ["Age-related macular degeneration screening", "Cataract evaluation", "Low vision support"]
    },
    {
      name: "Sports Vision Enhancement",
      description: "Vision training and enhancement for athletes",
      benefits: ["Visual acuity improvement", "Depth perception training", "Reaction time enhancement"]
    }
  ];

  return (
    <div className="services-page">
      <section className="hero-section">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive eye care services using the latest technology and techniques to ensure optimal vision health</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Eye Care Services</h2>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card-detailed">
                <div className="service-header">
                  <div className="service-icon-large">
                    {service.icon}
                  </div>
                  <div className="service-title-section">
                    <h3>{service.name}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>
                
                <div className="service-details">
                  <div className="service-meta">
                    <div className="meta-item">
                      <Clock size={16} />
                      <span>{service.duration}</span>
                    </div>
                    <div className="meta-item">
                      <DollarSign size={16} />
                      <span>{service.price}</span>
                    </div>
                  </div>
                  
                  <div className="service-includes">
                    <h4>What's Included:</h4>
                    <ul>
                      {service.includes.map((item, index) => (
                        <li key={index}>
                          <CheckCircle size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="service-recommendation">
                    <h4>Recommended Frequency:</h4>
                    <p>{service.recommended}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section special-programs-section">
        <div className="container">
          <h2 className="section-title">Special Programs</h2>
          <div className="programs-grid">
            {specialPrograms.map((program, index) => (
              <div key={index} className="program-card">
                <h3>{program.name}</h3>
                <p>{program.description}</p>
                <div className="program-benefits">
                  <h4>Key Benefits:</h4>
                  <ul>
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section technology-section">
        <div className="container">
          <h2 className="section-title">Advanced Technology</h2>
          <div className="technology-grid">
            <div className="tech-item">
              <h3>OCT Imaging</h3>
              <p>Optical Coherence Tomography for detailed retinal imaging and early disease detection</p>
            </div>
            <div className="tech-item">
              <h3>Visual Field Analyzer</h3>
              <p>Computerized testing for comprehensive peripheral vision assessment</p>
            </div>
            <div className="tech-item">
              <h3>Digital Retinal Photography</h3>
              <p>High-resolution imaging for accurate diagnosis and progress tracking</p>
            </div>
            <div className="tech-item">
              <h3>Auto-Refractor</h3>
              <p>Automated refraction for precise prescription measurements</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Schedule Your Eye Exam?</h2>
            <p>Contact us today to book an appointment and experience our comprehensive eye care services</p>
            <div className="cta-buttons">
              <a href="/appointment" className="btn btn-primary">
                Book Appointment
              </a>
              <a href="tel:+1-555-2020" className="btn btn-secondary">
                Call (555) 202-0202
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
