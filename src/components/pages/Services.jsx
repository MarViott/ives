import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../ScrollToTop";
import "./Services.css";

function Services() {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate("/contact");
  };

  const handleBookMeeting = () => {
    const calendlyURL = "https://calendly.com/marviott";
    window.open(calendlyURL, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>
          Our Services - Shipping Star Solutions | Comprehensive Logistics
          Solutions
        </title>
        <meta
          name="description"
          content="Discover our comprehensive logistics services: transportation, freight forwarding, supply chain management, energy logistics, and international shipping solutions."
        />
        <meta
          name="keywords"
          content="logistics services, transportation solutions, freight forwarding, supply chain management, energy logistics, international shipping, warehousing"
        />
        <meta
          property="og:title"
          content="Logistics Services - Shipping Star Solutions"
        />
        <meta
          property="og:description"
          content="Comprehensive logistics and transportation solutions tailored to your business needs"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://shippingstarsolutions.com/services"
        />
        <link
          rel="canonical"
          href="https://shippingstarsolutions.com/services"
        />
      </Helmet>

      <div className="services-page">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="hero-content">
            <h1>Our Services</h1>
            <p>
              Comprehensive logistics and transportation solutions tailored to
              your business needs
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={handleBookMeeting}>
                📅 Book a Meeting
              </button>
              <button className="btn btn-secondary" onClick={handleGetQuote}>
                💬 Get a Quote
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-content">
          <div className="container">
            <div className="services-grid">
              {/* Service 1 */}
              <div className="service-card">
                <span className="service-icon">🚛</span>
                <h3>Ground Transportation</h3>
                <p>
                  Full truckload (FTL) and less-than-truckload (LTL) services
                  with modern fleet and real-time tracking. We ensure safe and
                  timely delivery of your cargo across North America.
                </p>
              </div>

              {/* Service 2 */}
              <div className="service-card">
                <span className="service-icon">🚢</span>
                <h3>Maritime Shipping</h3>
                <p>
                  International container shipping and port logistics
                  management. We handle FCL and LCL shipments with comprehensive
                  door-to-door service and customs clearance support.
                </p>
              </div>

              {/* Service 3 */}
              <div className="service-card">
                <span className="service-icon">✈️</span>
                <h3>Air Freight</h3>
                <p>
                  Fast and reliable air cargo services for time-sensitive
                  shipments. Express and standard options available with global
                  coverage and priority handling for urgent deliveries.
                </p>
              </div>

              {/* Service 4 */}
              <div className="service-card">
                <span className="service-icon">⚡</span>
                <h3>Energy & Oil Services</h3>
                <p>
                  Specialized logistics for the oil and gas industry. Heavy
                  haul, project cargo, and equipment transportation for energy
                  projects with safety compliance and expert handling.
                </p>
              </div>

              {/* Service 5 */}
              <div className="service-card">
                <span className="service-icon">🏭</span>
                <h3>Industrial Projects</h3>
                <p>
                  Complete logistics solutions for industrial and manufacturing
                  projects. From planning to execution, we manage oversized
                  cargo, heavy machinery, and complex multi-modal
                  transportation.
                </p>
              </div>

              {/* Service 6 */}
              <div className="service-card">
                <span className="service-icon">📦</span>
                <h3>Warehousing & Distribution</h3>
                <p>
                  Secure storage facilities with inventory management and
                  distribution services. Cross-docking, order fulfillment, and
                  value-added services to optimize your supply chain.
                </p>
              </div>

              {/* Service 7 */}
              <div className="service-card">
                <span className="service-icon">🌍</span>
                <h3>International Logistics</h3>
                <p>
                  End-to-end global logistics management with customs brokerage,
                  trade compliance, and documentation. We navigate complex
                  international regulations to ensure smooth cross-border
                  operations.
                </p>
              </div>

              {/* Service 8 */}
              <div className="service-card">
                <span className="service-icon">💻</span>
                <h3>Technology & Tracking</h3>
                <p>
                  Advanced tracking systems and digital platforms for full
                  shipment visibility. Real-time updates, automated alerts, and
                  comprehensive reporting for complete supply chain
                  transparency.
                </p>
              </div>

              {/* Service 9 */}
              <div className="service-card">
                <span className="service-icon">📊</span>
                <h3>Logistics Consulting</h3>
                <p>
                  Strategic consulting to optimize your supply chain operations.
                  Cost analysis, route optimization, and process improvement to
                  enhance efficiency and reduce operational expenses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="services-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Optimize Your Logistics?</h2>
              <p>
                Contact us today for a free consultation and discover how our
                comprehensive logistics solutions can drive your business
                forward.
              </p>
              <a href="/contact" className="cta-button">
                Get a Free Quote
              </a>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </>
  );
}

export default Services;
