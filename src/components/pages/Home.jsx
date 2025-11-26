import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Gallery from "../Gallery";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    // Navegar a la página de contacto
    navigate("/contact");
  };

  const handleViewServices = () => {
    // Navegar a la página de servicios
    navigate("/services");
  };

  return (
    <>
      <Helmet>
        <title>
          Shipping Star Solutions - Premium Logistics & Transportation Services
        </title>
        <meta
          name="description"
          content="Leading logistics and transportation company with 25+ years of experience. Specialized in energy projects, international shipping, and comprehensive supply chain solutions."
        />
        <meta
          name="keywords"
          content="logistics, transportation, shipping, supply chain, freight forwarding, energy logistics, international shipping"
        />
        <meta
          property="og:title"
          content="Shipping Star Solutions - Premium Logistics Services"
        />
        <meta
          property="og:description"
          content="Comprehensive logistics and transportation solutions for your business needs"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shippingstarsolutions.com" />
        <link rel="canonical" href="https://shippingstarsolutions.com" />
      </Helmet>

      <div className="home-page">
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
              <source src="/shippingstar.mp4" type="video/mp4" />
              {/* Mensaje de fallback si el video no se puede cargar */}
              <p>Your browser does not support the video tag.</p>
            </video>

            {/* Overlay con contenido */}
            <div className="video-overlay">
              <div className="hero-content"></div>
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

              <div className="service-card">
                <div className="service-icon">📦</div>
                <h3>Warehousing and Distribution</h3>
                <p>Efficient storage and distribution solutions</p>
              </div>

              <div className="service-card">
                <div className="service-icon">⚡</div>
                <h3>Energy & Oil Services</h3>
                <p>Specialized logistics for the oil and gas industry</p>
              </div>
            </div>
          </div>
        </section>

        {/* Consultoría Section */}
        <section className="consulting-section">
          <div className="container">
            <h2>Logistic and Transportation</h2>
            <p>
              Over 25 years of experience in international transportation
              services for oil and gas, energy, and industrial projects.
            </p>
            <div className="hero-actions">
              <button className="cta-button primary" onClick={handleGetQuote}>
                Get Quote
              </button>
              <button
                className="cta-button secondary"
                onClick={handleViewServices}
              >
                Our Services
              </button>
            </div>
            <br />
            <br />
            <Gallery />
            <br />
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
    </>
  );
}

export default Home;
