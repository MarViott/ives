import React from 'react'
import { useNavigate } from 'react-router-dom'
import Gallery from '../Gallery'
import './Home.css'

function Home() {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    // Navegar a la página de contacto
    navigate('/contact');
  };

  const handleViewServices = () => {
    // Navegar a la página de servicios
    navigate('/services');
  };

  return (
    <div className='home-page'>
      {/* Video Hero Section */}
      <section className="video-hero">
        <div className="video-container">
          <video 
            className="hero-video"
            autoPlay 
            muted 
            loop 
            playsInline
            poster="/images/video-poster.jpg"
          >
            <source src="/watermarked-2841dbf5-daa8-44af-8c57-914bca115eb5.mp4" type="video/mp4" />
            {/* Mensaje de fallback si el video no se puede cargar */}
            <p>Your browser does not support the video tag.</p>
          </video>
          
          {/* Overlay con contenido */}
          <div className="video-overlay">
            <div className="hero-content">
              <h1 className="hero-title">SHIPPING STAR SOLUTIONS LLC</h1>
              <p className="hero-subtitle">Global Logistics Excellence</p>
              <div className="hero-actions">
                <button className="cta-button primary" onClick={handleGetQuote}>
                  Get Quote
                </button>
                <button className="cta-button secondary" onClick={handleViewServices}>
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-overview">
        <div className="container">
          <h2>Our Services</h2>
          <p>Comprehensive logistics solutions for your business needs</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🚛</div>
              <h3>Ground Transportation</h3>
              <p>Modern fleet of trucks for reliable ground logistics</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🚢</div>
              <h3>Maritime Shipping</h3>
              <p>Container shipping and port logistics worldwide</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">✈️</div>
              <h3>Air Freight</h3>
              <p>Fast and secure air transportation services</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🌍</div>
              <h3>Global Solutions</h3>
              <p>End-to-end logistics management worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultoría Section */}
      <section className="consulting-section">
        <div className="container">
          <h2>Logistic and Transportation</h2>
          <p>Over 25 years of experience in international transportation services for oil and gas, energy, and industrial projects.</p>
          
          <Gallery />
          
          <div className="consulting-features">
            <div className="feature">
              <h3>📊 Strategic Planning</h3>
              <p>Comprehensive logistics strategy development</p>
            </div>
            <div className="feature">
              <h3>🎯 Cost Optimization</h3>
              <p>Reduce operational costs and improve efficiency</p>
            </div>
            <div className="feature">
              <h3>🌐 Global Network</h3>
              <p>Worldwide partnerships and coverage</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home