import React from 'react';
import { CheckCircle, DollarSign, Phone, Mail, AlertCircle } from 'lucide-react';
import './Insurance.css';

const Insurance = () => {
  const acceptedInsurance = [
    {
      name: "Blue Cross Blue Shield",
      type: "Major Medical",
      coverage: ["Eye exams", "Glasses", "Contact lenses", "Medical eye care"],
      notes: "Most plans accepted"
    },
    {
      name: "Aetna",
      type: "Major Medical",
      coverage: ["Eye exams", "Glasses", "Contact lenses", "Medical eye care"],
      notes: "PPO and HMO plans accepted"
    },
    {
      name: "Cigna",
      type: "Major Medical",
      coverage: ["Eye exams", "Glasses", "Contact lenses", "Medical eye care"],
      notes: "Most employer plans accepted"
    },
    {
      name: "UnitedHealthcare",
      type: "Major Medical",
      coverage: ["Eye exams", "Glasses", "Contact lenses", "Medical eye care"],
      notes: "Select plans accepted"
    },
    {
      name: "VSP",
      type: "Vision Insurance",
      coverage: ["Eye exams", "Glasses", "Contact lenses", "Frame allowance"],
      notes: "Preferred provider"
    },
    {
      name: "EyeMed",
      type: "Vision Insurance",
      coverage: ["Eye exams", "Glasses", "Contact lenses", "Frame allowance"],
      notes: "In-network provider"
    },
    {
      name: "Davis Vision",
      type: "Vision Insurance",
      coverage: ["Eye exams", "Glasses", "Contact lenses", "Frame allowance"],
      notes: "Participating provider"
    }
  ];

  const coverageTypes = [
    {
      type: "Routine Eye Exams",
      description: "Annual comprehensive eye examinations",
      typicalCoverage: "100% covered annually",
      notes: "May require copay or deductible"
    },
    {
      type: "Glasses",
      description: "Frames and prescription lenses",
      typicalCoverage: "$150-200 frame allowance",
      notes: "Additional costs for premium frames or lens upgrades"
    },
    {
      type: "Contact Lenses",
      description: "Contact lens fitting and materials",
      typicalCoverage: "$150-200 allowance",
      notes: "May cover fitting fee separately"
    },
    {
      type: "Medical Eye Care",
      description: "Treatment for eye diseases and conditions",
      typicalCoverage: "Subject to medical deductible",
      notes: "Covered under medical insurance, not vision"
    }
  ];

  const paymentOptions = [
    {
      method: "Insurance",
      description: "Use your vision or medical insurance benefits",
      benefits: ["Reduced out-of-pocket costs", "Network discounts", "Streamlined billing"]
    },
    {
      method: "Cash/Check",
      description: "Pay at time of service",
      benefits: ["Immediate payment", "No billing delays", "Potential discounts"]
    },
    {
      method: "Credit Cards",
      description: "Visa, MasterCard, American Express, Discover",
      benefits: ["Convenient payment", "Rewards points", "Extended payment options"]
    },
    {
      method: "CareCredit",
      description: "Healthcare financing with promotional interest-free periods",
      benefits: ["Interest-free financing", "Flexible payment plans", "Quick approval"]
    }
  ];

  return (
    <div className="insurance-page">
      <section className="hero-section">
        <div className="container">
          <h1>Insurance & Payment</h1>
          <p>We accept most major insurance plans and offer flexible payment options to make your eye care affordable</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Accepted Insurance Plans</h2>
          <div className="insurance-grid">
            {acceptedInsurance.map((insurance, index) => (
              <div key={index} className="insurance-card">
                <div className="insurance-header">
                  <h3>{insurance.name}</h3>
                  <span className="insurance-type">{insurance.type}</span>
                </div>
                <div className="coverage-list">
                  <h4>Coverage Includes:</h4>
                  <ul>
                    {insurance.coverage.map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="insurance-notes">
                  <p>{insurance.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section coverage-section">
        <div className="container">
          <h2 className="section-title">Coverage & Benefits</h2>
          <div className="coverage-grid">
            {coverageTypes.map((coverage, index) => (
              <div key={index} className="coverage-card">
                <h3>{coverage.type}</h3>
                <p className="coverage-description">{coverage.description}</p>
                <div className="coverage-details">
                  <div className="coverage-amount">
                    <DollarSign size={20} />
                    <span>{coverage.typicalCoverage}</span>
                  </div>
                  <div className="coverage-notes">
                    <AlertCircle size={16} />
                    <span>{coverage.notes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section payment-section">
        <div className="container">
          <h2 className="section-title">Payment Options</h2>
          <div className="payment-grid">
            {paymentOptions.map((option, index) => (
              <div key={index} className="payment-card">
                <h3>{option.method}</h3>
                <p>{option.description}</p>
                <div className="payment-benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    {option.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section verification-section">
        <div className="container">
          <h2 className="section-title">Insurance Verification</h2>
          <div className="verification-content">
            <div className="verification-info">
              <h3>Verify Your Benefits</h3>
              <p>Before your appointment, we can help verify your insurance benefits and coverage. This ensures you understand your out-of-pocket costs.</p>
              <div className="verification-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <p>Call us with your insurance information</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <p>We'll verify your benefits and coverage</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <p>Receive a detailed breakdown of costs</p>
                </div>
              </div>
            </div>
            <div className="verification-contact">
              <h4>Contact Us for Verification:</h4>
              <div className="contact-methods">
                <a href="tel:+1-555-2020" className="contact-method">
                  <Phone size={20} />
                  <span>(555) 202-0202</span>
                </a>
                <a href="mailto:insurance@2020vision.com" className="contact-method">
                  <Mail size={20} />
                  <span>insurance@2020vision.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What if my insurance isn't accepted?</h3>
              <p>We offer competitive self-pay rates and can work with you to find affordable payment options. We also accept CareCredit for financing.</p>
            </div>
            <div className="faq-item">
              <h3>Do you file insurance claims?</h3>
              <p>Yes, we handle all insurance filing for you. We'll submit claims directly to your insurance company and help resolve any issues.</p>
            </div>
            <div className="faq-item">
              <h3>What information do I need to bring?</h3>
              <p>Please bring your insurance card, photo ID, and any referral forms if required by your insurance plan.</p>
            </div>
            <div className="faq-item">
              <h3>Can I use both vision and medical insurance?</h3>
              <p>Yes, in many cases. Vision insurance typically covers routine exams and glasses, while medical insurance covers treatment for eye diseases.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Questions About Insurance?</h2>
            <p>Our insurance specialists are here to help you understand your coverage and maximize your benefits</p>
            <div className="cta-buttons">
              <a href="tel:+1-555-2020" className="btn btn-primary">
                Call (555) 202-0202
              </a>
              <a href="mailto:insurance@2020vision.com" className="btn btn-secondary">
                Email Insurance Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;
