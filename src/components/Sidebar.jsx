import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const services = [
    {
      title: "Transportation Services",
      icon: "🚛",
      submenu: [
        "Full Truckload (FTL)",
        "Less Than Truckload (LTL)", 
        "Intermodal Transportation",
        "Expedited Shipping",
        "Cross-Border Transport"
      ]
    },
    {
      title: "Logistics Solutions", 
      icon: "📦",
      submenu: [
        "Warehousing & Distribution",
        "Inventory Management",
        "Order Fulfillment",
        "3PL Services",
        "Supply Chain Optimization"
      ]
    },
    {
      title: "Energy & Industrial",
      icon: "⚡",
      submenu: [
        "Oil & Gas Transportation",
        "Heavy Haul Services",
        "Project Cargo",
        "Specialized Equipment",
        "Industrial Consulting"
      ]
    },
    {
      title: "International Services",
      icon: "🌍", 
      submenu: [
        "Import/Export Management",
        "Customs Clearance",
        "International Freight",
        "Trade Compliance",
        "Global Logistics"
      ]
    },
    {
      title: "Technology Solutions",
      icon: "💻",
      submenu: [
        "Fleet Management Systems",
        "Real-time Tracking",
        "EDI Integration",
        "Mobile Applications",
        "Analytics & Reporting"
      ]
    }
  ];

  return (
    <>
      {/* Botón de toggle del sidebar */}
      <button 
        className={`sidebar-toggle ${isOpen ? 'active' : ''}`}
        onClick={toggleSidebar}
        aria-label="Toggle Services Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Overlay para cerrar el sidebar en móviles */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      {/* Sidebar */}
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Our Services</h3>
          <button className="sidebar-close" onClick={toggleSidebar}>
            ✕
          </button>
        </div>

        <div className="sidebar-content">
          {services.map((service, index) => (
            <div key={index} className="service-group">
              <button 
                className={`service-header ${activeSubmenu === index ? 'active' : ''}`}
                onClick={() => toggleSubmenu(index)}
              >
                <span className="service-icon">{service.icon}</span>
                <span className="service-title">{service.title}</span>
                <span className={`arrow ${activeSubmenu === index ? 'up' : 'down'}`}>
                  ▼
                </span>
              </button>
              
              <div className={`submenu ${activeSubmenu === index ? 'open' : ''}`}>
                {service.submenu.map((item, subIndex) => (
                  <Link 
                    key={subIndex}
                    to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="submenu-item"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <Link to="/contact" className="contact-cta" onClick={() => setIsOpen(false)}>
            📞 Get a Quote
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;