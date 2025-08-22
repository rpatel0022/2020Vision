import React from 'react';
import { Shield, Clock, AlertCircle } from 'lucide-react';
import './ContactLenses.css';

const ContactLenses = () => {
  const lensTypes = [
    {
      name: "Daily Disposable",
      description: "Fresh lenses every day for maximum comfort and hygiene",
      price: "$30-60 per month",
      benefits: ["No cleaning required", "Reduced risk of infection", "Convenient travel"],
      wearSchedule: "Dispose daily",
      suitableFor: "All-day wear, sensitive eyes, occasional use"
    },
    {
      name: "Bi-Weekly Disposable",
      description: "Replace every two weeks for cost-effective daily wear",
      price: "$20-40 per month",
      benefits: ["Cost effective", "Good for daily wear", "Easy maintenance"],
      wearSchedule: "Replace every 2 weeks",
      suitableFor: "Daily wear, active lifestyle"
    },
    {
      name: "Monthly Disposable",
      description: "Monthly replacement lenses for extended wear",
      price: "$15-30 per month",
      benefits: ["Most economical", "Long-lasting", "Stable vision"],
      wearSchedule: "Replace monthly",
      suitableFor: "Daily wear, stable prescriptions"
    },
    {
      name: "Extended Wear",
      description: "Wear continuously for up to 30 days",
      price: "$25-50 per month",
      benefits: ["Continuous wear", "No daily removal", "Convenient"],
      wearSchedule: "Replace monthly",
      suitableFor: "Overnight wear, busy lifestyle"
    }
  ];

  const specialtyLenses = [
    {
      name: "Toric Lenses",
      description: "Correct astigmatism with specialized design",
      price: "$40-80 per month",
      features: ["Astigmatism correction", "Stable orientation", "Clear vision"]
    },
    {
      name: "Multifocal Lenses",
      description: "Provide clear vision at all distances",
      price: "$50-100 per month",
      features: ["Distance and near vision", "No reading glasses needed", "Seamless transition"]
    },
    {
      name: "Scleral Lenses",
      description: "Large diameter lenses for irregular corneas",
      price: "$80-150 per month",
      features: ["Irregular cornea correction", "Comfortable fit", "Stable vision"]
    },
    {
      name: "Hybrid Lenses",
      description: "Combines rigid center with soft periphery",
      price: "$60-120 per month",
      features: ["Crisp vision", "Comfortable wear", "Versatile correction"]
    }
  ];

  const careInstructions = [
    {
      step: 1,
      title: "Wash Your Hands",
      description: "Always wash your hands with soap and water before handling lenses"
    },
    {
      step: 2,
      title: "Clean Lenses Daily",
      description: "Use recommended solution to clean and disinfect your lenses"
    },
    {
      step: 3,
      title: "Replace Solution",
      description: "Never reuse contact lens solution - use fresh solution each time"
    },
    {
      step: 4,
      title: "Store Properly",
      description: "Store lenses in a clean case with fresh solution"
    },
    {
      step: 5,
      title: "Follow Schedule",
      description: "Replace lenses according to your prescribed schedule"
    },
    {
      step: 6,
      title: "Remove Before Sleep",
      description: "Remove lenses before sleeping unless prescribed for extended wear"
    }
  ];

  return (
    <div className="contact-lenses-page">
      <section className="hero-section">
        <div className="container">
          <h1>Contact Lenses</h1>
          <p>Experience freedom and clarity with our comprehensive contact lens solutions and professional fitting services</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Contact Lens Types</h2>
          <div className="lens-types-grid">
            {lensTypes.map((lens, index) => (
              <div key={index} className="lens-type-card">
                <div className="lens-type-header">
                  <h3>{lens.name}</h3>
                  <div className="lens-price">{lens.price}</div>
                </div>
                <p className="lens-description">{lens.description}</p>
                
                <div className="lens-details">
                  <div className="detail-item">
                    <h4>Benefits:</h4>
                    <ul>
                      {lens.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-item">
                    <h4>Wear Schedule:</h4>
                    <p>{lens.wearSchedule}</p>
                  </div>
                  
                  <div className="detail-item">
                    <h4>Suitable For:</h4>
                    <p>{lens.suitableFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section specialty-section">
        <div className="container">
          <h2 className="section-title">Specialty Lenses</h2>
          <div className="specialty-grid">
            {specialtyLenses.map((lens, index) => (
              <div key={index} className="specialty-card">
                <h3>{lens.name}</h3>
                <p>{lens.description}</p>
                <div className="specialty-price">{lens.price}</div>
                <div className="specialty-features">
                  <h4>Features:</h4>
                  <ul>
                    {lens.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section fitting-section">
        <div className="container">
          <h2 className="section-title">Professional Fitting Process</h2>
          <div className="fitting-content">
            <div className="fitting-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Comprehensive Eye Exam</h3>
                <p>Complete vision assessment and eye health evaluation</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Lens Selection</h3>
                <p>Choose the best lens type based on your needs and lifestyle</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Trial Fitting</h3>
                <p>Test different lenses to find the perfect fit and comfort</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Training & Education</h3>
                <p>Learn proper insertion, removal, and care techniques</p>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <h3>Follow-up Care</h3>
                <p>Regular check-ups to ensure optimal lens performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section care-section">
        <div className="container">
          <h2 className="section-title">Lens Care & Maintenance</h2>
          <div className="care-grid">
            {careInstructions.map((instruction, index) => (
              <div key={index} className="care-card">
                <div className="care-step">
                  <div className="step-circle">{instruction.step}</div>
                  <h3>{instruction.title}</h3>
                </div>
                <p>{instruction.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section safety-section">
        <div className="container">
          <h2 className="section-title">Safety & Hygiene</h2>
          <div className="safety-content">
            <div className="safety-tips">
              <div className="tip">
                <AlertCircle size={24} />
                <h3>Never Share Lenses</h3>
                <p>Contact lenses are personal medical devices and should never be shared</p>
              </div>
              <div className="tip">
                <Clock size={24} />
                <h3>Follow Wear Schedule</h3>
                <p>Adhere to your prescribed wearing schedule to maintain eye health</p>
              </div>
              <div className="tip">
                <Shield size={24} />
                <h3>Use Fresh Solution</h3>
                <p>Always use fresh contact lens solution for cleaning and storage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section appointment-section">
        <div className="container">
          <div className="appointment-content">
            <h2>Ready for Contact Lenses?</h2>
            <p>Schedule a consultation with our contact lens specialists for a personalized fitting experience</p>
            <div className="appointment-buttons">
              <a href="/appointment" className="btn btn-primary">
                Book Consultation
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

export default ContactLenses;
