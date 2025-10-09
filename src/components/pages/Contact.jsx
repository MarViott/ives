import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    country: '',
    service: '',
    message: ''
  });

  // Función para abrir WhatsApp con mensaje predefinido
  const openWhatsApp = () => {
    const phoneNumber = "13466003396"; // Reemplaza con tu número real
    const message = "Hello! I'm interested in learning more about your logistics and transportation services.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  // Función para abrir Calendly o sistema de citas
  const openBookMeeting = () => {
    // Reemplaza esta URL con tu enlace de Calendly o sistema de citas
    const calendlyURL = "https://calendly.com/marviott";
    window.open(calendlyURL, '_blank');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>Ready to optimize your logistics? Let's discuss how we can help your business grow.</p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={openBookMeeting}>
              📅 Book a Meeting
            </button>
            <button className="btn btn-secondary" onClick={openWhatsApp}>
              💬 Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="contact-methods">
        <div className="container">
          <div className="methods-grid">
            <div className="method-card">
              <div className="method-icon">📧</div>
              <h3>Email Us</h3>
              <p>Get a response within 24 hours</p>
              <a href="mailto:info@shippingstarsolutions.com">info@shippingstarsolutions.com</a>
            </div>
            
            <div className="method-card">
              <div className="method-icon">📞</div>
              <h3>Call Us</h3>
              <p>Speak directly with our team</p>
              <a href="tel:+1 (346) 600-3396">+1 (346) 600-3396</a>
            </div>
            
            <div className="method-card">
              <div className="method-icon">📍</div>
              <h3>Visit Us</h3>
              <p>Our office in Houston, Texas</p>
              <address>
                123 Logistics Blvd<br />
                Houston, TX 77001<br />
                United States
              </address>
            </div>
            
            <div className="method-card featured">
              <div className="method-icon">🗓️</div>
              <h3>Schedule a Meeting</h3>
              <p>Book a personalized consultation</p>
              <button className="book-meeting-btn" onClick={openBookMeeting}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you shortly</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required 
                    placeholder="Enter your first name"
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
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="position">Position</label>
                  <input 
                    type="text" 
                    id="position" 
                    name="position" 
                    value={formData.position}
                    onChange={handleInputChange}
                    placeholder="Your job title"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="country">Country *</label>
                  <select 
                    id="country" 
                    name="country" 
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select your country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="BR">Brazil</option>
                    <option value="CL">Chile</option>
                    <option value="CO">Colombia</option>
                    <option value="PE">Peru</option>
                    <option value="VE">Venezuela</option>
                    <option value="ES">Spain</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                    <option value="GB">United Kingdom</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service of Interest</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a service</option>
                    <option value="transportation">Transportation Services</option>
                    <option value="logistics">Logistics Solutions</option>
                    <option value="energy">Energy & Industrial</option>
                    <option value="international">International Services</option>
                    <option value="technology">Technology Solutions</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required 
                  placeholder="Tell us about your logistics needs, project details, or any questions you have..."
                ></textarea>
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
                <p className="privacy-note">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Business Hours & Location */}
      <section className="business-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>Business Hours</h3>
              <div className="hours-list">
                <div className="hour-item">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM CST</span>
                </div>
                <div className="hour-item">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM CST</span>
                </div>
                <div className="hour-item">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
                <div className="hour-item emergency">
                  <span>Emergency Line</span>
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
            
            <div className="info-card">
              <h3>Why Choose Us?</h3>
              <ul className="benefits-list">
                <li>✅ 25+ years of industry experience</li>
                <li>✅ Global network of trusted partners</li>
                <li>✅ Real-time tracking and updates</li>
                <li>✅ Competitive pricing and fast quotes</li>
                <li>✅ Dedicated customer support</li>
                <li>✅ Specialized in energy and industrial projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="whatsapp-float" onClick={openWhatsApp} title="Chat on WhatsApp">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.951 3.488"/>
        </svg>
      </div>
    </div>
  );
}

export default Contact;