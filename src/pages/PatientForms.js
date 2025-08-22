import React, { useState } from 'react';
import { FileText, Download, Upload, CheckCircle, AlertCircle, Calendar, Eye } from 'lucide-react';
import './PatientForms.css';

const PatientForms = () => {
  const [selectedForm, setSelectedForm] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    formType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form request submitted:', formData);
    alert('Thank you! We will send the requested forms to your email.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      formType: '',
      message: ''
    });
  };

  const forms = [
    {
      id: 1,
      name: "New Patient Registration",
      description: "Complete patient information and medical history",
      category: "Registration",
      downloadUrl: "#",
      estimatedTime: "10-15 minutes",
      required: true
    },
    {
      id: 2,
      name: "Medical History Form",
      description: "Detailed medical history and current medications",
      category: "Medical",
      downloadUrl: "#",
      estimatedTime: "15-20 minutes",
      required: true
    },
    {
      id: 3,
      name: "Insurance Information",
      description: "Insurance details and policy information",
      category: "Insurance",
      downloadUrl: "#",
      estimatedTime: "5-10 minutes",
      required: true
    },
    {
      id: 4,
      name: "HIPAA Consent Form",
      description: "Privacy practices acknowledgment and consent",
      category: "Legal",
      downloadUrl: "#",
      estimatedTime: "5 minutes",
      required: true
    },
    {
      id: 5,
      name: "Contact Lens Evaluation",
      description: "Contact lens fitting and evaluation questionnaire",
      category: "Specialty",
      downloadUrl: "#",
      estimatedTime: "10 minutes",
      required: false
    },
    {
      id: 6,
      name: "Pediatric History Form",
      description: "Specialized form for children under 18",
      category: "Pediatric",
      downloadUrl: "#",
      estimatedTime: "10-15 minutes",
      required: false
    },
    {
      id: 7,
      name: "Surgical Consent",
      description: "Informed consent for surgical procedures",
      category: "Surgical",
      downloadUrl: "#",
      estimatedTime: "10 minutes",
      required: false
    },
    {
      id: 8,
      name: "Financial Agreement",
      description: "Payment terms and financial responsibility",
      category: "Financial",
      downloadUrl: "#",
      estimatedTime: "5 minutes",
      required: true
    }
  ];

  const categories = [...new Set(forms.map(form => form.category))];

  const filteredForms = selectedForm ? forms.filter(form => form.category === selectedForm) : forms;

  return (
    <div className="patient-forms-page">
      <section className="hero-section">
        <div className="container">
          <h1>Patient Forms</h1>
          <p>Download and complete your patient forms before your appointment to save time and streamline your visit</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="forms-content">
            <div className="forms-section">
              <div className="forms-header">
                <h2 className="section-title">Available Forms</h2>
                <div className="category-filter">
                  <label htmlFor="category-select">Filter by Category:</label>
                  <select
                    id="category-select"
                    value={selectedForm}
                    onChange={(e) => setSelectedForm(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="forms-grid">
                {filteredForms.map(form => (
                  <div key={form.id} className="form-card">
                    <div className="form-header">
                      <div className="form-icon">
                        <FileText size={24} />
                      </div>
                      <div className="form-info">
                        <h3>{form.name}</h3>
                        <span className={`category-badge ${form.category.toLowerCase()}`}>
                          {form.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="form-description">{form.description}</p>
                    
                    <div className="form-details">
                      <div className="detail-item">
                        <Calendar size={16} />
                        <span>{form.estimatedTime}</span>
                      </div>
                      <div className="detail-item">
                        {form.required ? (
                          <AlertCircle size={16} className="required-icon" />
                        ) : (
                          <CheckCircle size={16} className="optional-icon" />
                        )}
                        <span>{form.required ? 'Required' : 'Optional'}</span>
                      </div>
                    </div>
                    
                    <div className="form-actions">
                      <a href={form.downloadUrl} className="btn btn-primary download-btn">
                        <Download size={16} />
                        Download PDF
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="forms-sidebar">
              <div className="sidebar-card">
                <h3>Form Submission</h3>
                <p>Complete your forms and bring them to your appointment, or submit them online for our review.</p>
                <div className="submission-options">
                  <div className="option">
                    <CheckCircle size={16} />
                    <span>Bring completed forms to appointment</span>
                  </div>
                  <div className="option">
                    <Upload size={16} />
                    <span>Email completed forms</span>
                  </div>
                  <div className="option">
                    <Eye size={16} />
                    <span>We'll review forms during visit</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Request Forms by Email</h3>
                <form onSubmit={handleFormSubmit} className="form-request-form">
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
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="formType">Forms Needed</label>
                    <select
                      id="formType"
                      name="formType"
                      value={formData.formType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select forms</option>
                      <option value="all">All forms</option>
                      <option value="new-patient">New patient forms</option>
                      <option value="contact-lens">Contact lens forms</option>
                      <option value="pediatric">Pediatric forms</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Additional Notes</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Any specific forms or special requests..."
                    />
                  </div>
                  
                  <button type="submit" className="btn btn-primary">
                    Request Forms
                  </button>
                </form>
              </div>

              <div className="sidebar-card">
                <h3>Tips for Completing Forms</h3>
                <ul className="tips-list">
                  <li>Fill out forms completely and legibly</li>
                  <li>Bring a list of current medications</li>
                  <li>Include insurance information if applicable</li>
                  <li>Sign and date all required sections</li>
                  <li>Contact us with any questions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section help-section">
        <div className="container">
          <h2 className="section-title">Need Help with Forms?</h2>
          <div className="help-content">
            <div className="help-item">
              <h3>Form Questions?</h3>
              <p>Our staff can help you understand and complete any forms. Don't hesitate to ask for assistance.</p>
              <a href="tel:+1-555-2020" className="btn btn-secondary">
                Call (555) 202-0202
              </a>
            </div>
            
            <div className="help-item">
              <h3>Technical Issues?</h3>
              <p>Having trouble downloading or opening forms? We can email them directly to you.</p>
              <a href="mailto:forms@2020vision.com" className="btn btn-secondary">
                Email Forms Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientForms;
