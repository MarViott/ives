import React from "react";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../ScrollToTop";
import "./About.css";

function About() {
  return (
    <>
      <Helmet>
        <title>
          About Us - Shipping Star Solutions | 25+ Years of Excellence
        </title>
        <meta
          name="description"
          content="Learn about Shipping Star Solutions' 25+ years of excellence in logistics and transportation. Our mission, values, and commitment to sustainable global trade."
        />
        <meta
          name="keywords"
          content="about shipping star solutions, logistics company history, transportation expertise, supply chain management, company values"
        />
        <meta property="og:title" content="About Shipping Star Solutions" />
        <meta
          property="og:description"
          content="Leading logistics company with 25+ years of experience in global transportation solutions"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://shippingstarsolutions.com/about"
        />
        <link rel="canonical" href="https://shippingstarsolutions.com/about" />
      </Helmet>

      <div className="about-page">
        {/* Video Hero Section */}
        <section className="about-hero">
          <div className="video-container">
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/wind-turbines-poster.jpg"
            >
              <source src="/parqueeolico2.mp4" type="video/mp4" />
              <source src="/parqueeolico2.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay con contenido */}
            <div className="video-overlay">
              <div className="hero-content"></div>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="company-info">
          <div className="container">
            <div className="info-content">
              <h2>Who We Are</h2>
              <p className="intro-text">
                SHIPPING STAR SOLUTIONS LLC is a Houston, Texas-based company
                with a team with over 25 years of experience in international
                transportation services for oil and gas, energy, and industrial
                projects, fully committed to improving your logistics, reducing
                costs, and giving your company a competitive advantage to
                operate in global markets.
              </p>

              {/* Stats Section */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Years of Experience</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Countries Served</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-vision">
          <div className="container">
            <div className="mv-grid">
              <div className="mv-card">
                <div className="mv-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>
                  To provide world-class logistics solutions that empower
                  businesses to thrive in global markets through innovation,
                  reliability, and sustainable practices.
                </p>
              </div>
              <div className="mv-card">
                <div className="mv-icon">🌟</div>
                <h3>Our Vision</h3>
                <p>
                  To be the leading logistics partner in the energy and
                  industrial sectors, recognized for excellence, integrity, and
                  commitment to environmental sustainability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="values-section">
          <div className="container">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">✅</div>
                <h4>Integrity</h4>
                <p>We conduct business with honesty and transparency</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🚀</div>
                <h4>Innovation</h4>
                <p>Continuously improving through technology and creativity</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h4>Partnership</h4>
                <p>Building long-term relationships based on trust</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌱</div>
                <h4>Sustainability</h4>
                <p>Committed to environmentally responsible practices</p>
              </div>
              <div className="value-card">
                <div className="value-icon">⭐</div>
                <h4>Excellence</h4>
                <p>Delivering superior quality in everything we do</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌍</div>
                <h4>Global Reach</h4>
                <p>Serving clients worldwide with local expertise</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose">
          <div className="container">
            <h2>Why Choose Shipping Star Solutions</h2>
            <div className="reasons-grid">
              <div className="reason-item">
                <span className="reason-number">01</span>
                <h4>Industry Expertise</h4>
                <p>
                  Over two decades of specialized experience in energy and
                  industrial logistics
                </p>
              </div>
              <div className="reason-item">
                <span className="reason-number">02</span>
                <h4>Global Network</h4>
                <p>
                  Established partnerships and presence in over 50 countries
                  worldwide
                </p>
              </div>
              <div className="reason-item">
                <span className="reason-number">03</span>
                <h4>Advanced Technology</h4>
                <p>
                  Cutting-edge tracking and management systems for real-time
                  visibility
                </p>
              </div>
              <div className="reason-item">
                <span className="reason-number">04</span>
                <h4>Cost Efficiency</h4>
                <p>
                  Optimized routes and processes that reduce your operational
                  costs
                </p>
              </div>
              <div className="reason-item">
                <span className="reason-number">05</span>
                <h4>Customer Satisfaction</h4>
                <p>
                  Dedicated customer service team to ensure your needs are met
                </p>
              </div>
              <div className="reason-item">
                <span className="reason-number">06</span>
                <h4>Environmental Responsibility</h4>
                <p>Commitment to sustainable practices in all our operations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </>
  );
}

export default About;
