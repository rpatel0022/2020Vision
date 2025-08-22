import React from 'react';
import { Link } from 'react-router-dom';
import './Eyeglasses.css';

const Eyeglasses = () => {
  const frameCollections = [
    {
      id: 1,
      name: "Classic Collection",
      description: "Timeless designs for professional and everyday wear",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop",
      price: "$150-300",
      features: ["Metal frames", "Professional look", "Lightweight design"]
    },
    {
      id: 2,
      name: "Modern Collection",
      description: "Contemporary styles with innovative materials and shapes",
      image: "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=400&h=300&fit=crop",
      price: "$200-400",
      features: ["Acetate frames", "Bold colors", "Unique shapes"]
    },
    {
      id: 3,
      name: "Sport Collection",
      description: "Durable frames designed for active lifestyles",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop",
      price: "$180-350",
      features: ["Impact resistant", "Lightweight", "Secure fit"]
    },
    {
      id: 4,
      name: "Luxury Collection",
      description: "Premium designer frames with exceptional craftsmanship",
      image: "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=400&h=300&fit=crop",
      price: "$400-800",
      features: ["Designer brands", "Premium materials", "Exclusive styles"]
    }
  ];

  const lensOptions = [
    {
      name: "Single Vision",
      description: "Standard lenses for distance or near vision",
      price: "$80-150",
      benefits: ["Clear vision", "Affordable", "Quick turnaround"]
    },
    {
      name: "Bifocal",
      description: "Two focal points for distance and reading",
      price: "$120-200",
      benefits: ["No switching glasses", "Traditional design", "Cost effective"]
    },
    {
      name: "Progressive",
      description: "Seamless transition between all distances",
      price: "$200-350",
      benefits: ["Natural vision", "No visible lines", "Modern technology"]
    },
    {
      name: "Computer/Blue Light",
      description: "Specialized lenses for digital device use",
      price: "$150-250",
      benefits: ["Reduces eye strain", "Blocks blue light", "Enhanced comfort"]
    }
  ];

  const coatings = [
    {
      name: "Anti-Reflective",
      description: "Eliminates glare and reflections",
      price: "$50-80",
      benefits: ["Better night vision", "Reduced eye strain", "Cosmetically appealing"]
    },
    {
      name: "Photochromic",
      description: "Lenses that darken in sunlight",
      price: "$100-150",
      benefits: ["Automatic adjustment", "UV protection", "Convenience"]
    },
    {
      name: "Polarized",
      description: "Eliminates horizontal glare",
      price: "$80-120",
      benefits: ["Better outdoor vision", "Reduced eye fatigue", "Enhanced contrast"]
    }
  ];

  return (
    <div className="eyeglasses-page">
      <section className="hero-section">
        <div className="container">
          <h1>Eyeglasses & Frames</h1>
          <p>Discover your perfect style with our extensive collection of frames and advanced lens technology</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Frame Collections</h2>
          <div className="collections-grid">
            {frameCollections.map(collection => (
              <div key={collection.id} className="collection-card">
                <div className="collection-image">
                  <img src={collection.image} alt={collection.name} />
                  <div className="collection-overlay">
                    <button className="btn btn-primary">View Collection</button>
                  </div>
                </div>
                <div className="collection-info">
                  <h3>{collection.name}</h3>
                  <p>{collection.description}</p>
                  <div className="price-range">{collection.price}</div>
                  <ul className="features-list">
                    {collection.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section lens-section">
        <div className="container">
          <h2 className="section-title">Lens Options</h2>
          <div className="lens-grid">
            {lensOptions.map((lens, index) => (
              <div key={index} className="lens-card">
                <h3>{lens.name}</h3>
                <p>{lens.description}</p>
                <div className="lens-price">{lens.price}</div>
                <div className="lens-benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    {lens.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section coatings-section">
        <div className="container">
          <h2 className="section-title">Lens Coatings & Treatments</h2>
          <div className="coatings-grid">
            {coatings.map((coating, index) => (
              <div key={index} className="coating-card">
                <h3>{coating.name}</h3>
                <p>{coating.description}</p>
                <div className="coating-price">{coating.price}</div>
                <div className="coating-benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    {coating.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section virtual-tryon-section">
        <div className="container">
          <h2 className="section-title">Virtual Try-On</h2>
          <div className="tryon-content">
            <div className="tryon-info">
              <h3>Try Before You Buy</h3>
              <p>Use our virtual try-on technology to see how different frames look on your face before making a decision.</p>
              <ul className="tryon-features">
                <li>Upload your photo or use live camera</li>
                <li>Try on hundreds of frame styles</li>
                <li>See how frames look from different angles</li>
                <li>Share your favorites with friends and family</li>
              </ul>
              <button className="btn btn-primary">Start Virtual Try-On</button>
            </div>
            <div className="tryon-image">
              <img src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=400&fit=crop" alt="Virtual Try-On" />
            </div>
          </div>
        </div>
      </section>

      <section className="section perfect-frames-cta">
        <div className="container">
          <div className="perfect-frames-content">
            <div className="cta-visual">
              <div className="cta-icon">
                <span>👓</span>
              </div>
            </div>
            <div className="cta-text">
              <h2>Ready to Find Your Perfect Frames?</h2>
              <p>Schedule an appointment with our optical specialists for a personalized frame fitting experience that will transform your look and confidence.</p>
              <div className="cta-features">
                <div className="feature-item">
                  <span className="feature-icon">✨</span>
                  <span>Personalized Style Consultation</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <span>Perfect Fit Guarantee</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💎</span>
                  <span>Premium Frame Selection</span>
                </div>
              </div>
              <div className="cta-buttons">
                <Link to="/appointment" className="btn btn-primary cta-btn-primary">
                  <span>Book Your Frame Fitting</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <Link to="/contact-lenses" className="btn btn-secondary cta-btn-secondary">
                  Explore Contact Lenses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Eyeglasses;
