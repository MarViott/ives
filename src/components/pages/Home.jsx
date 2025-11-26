import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Gallery from "../Gallery";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  // Usar arrow functions y métodos modernos
  const handleGetQuote = () => navigate("/contact");
  const handleViewServices = () => navigate("/services");

  // Datos de servicios como constante (podría moverse fuera del componente)
  const services = [
    {
      icon: "🚛",
      title: "Ground Transportation",
      description: "Modern fleet of trucks for reliable ground logistics",
    },
    {
      icon: "🚢",
      title: "Maritime Shipping",
      description: "Container shipping and port logistics worldwide",
    },
    {
      icon: "✈️",
      title: "Air Freight",
      description: "Fast and secure air transportation services",
    },
    {
      icon: "🌍",
      title: "Global Solutions",
      description: "End-to-end logistics management worldwide",
    },
    {
      icon: "📦",
      title: "Warehousing and Distribution",
      description: "Efficient storage and distribution solutions",
    },
    {
      icon: "⚡",
      title: "Energy & Oil Services",
      description: "Specialized logistics for the oil and gas industry",
    },
  ];

  const features = [
    {
      icon: "📊",
      title: "Strategic Planning",
      description: "Comprehensive logistics strategy development",
    },
    {
      icon: "🎯",
      title: "Cost Optimization",
      description: "Reduce operational costs and improve efficiency",
    },
    {
      icon: "🌐",
      title: "Global Network",
      description: "Worldwide partnerships and coverage",
    },
  ];

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
              preload="metadata"
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
              {services.map((service, index) => (
                <div className="service-card" key={index}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
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
              {features.map((feature, index) => (
                <div className="feature" key={index}>
                  <h3>
                    {feature.icon} {feature.title}
                  </h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
