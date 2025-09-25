import React from 'react';
import './Services.css';

const servicios = [
    {
        titulo: 'Desarrollo de Logística a Medida',
        descripcion: 'Desarrollamos soluciones de logística adaptadas a tus necesidades específicas, optimizando rutas y procesos para maximizar la eficiencia.',
        icono: '🚛'
    },
    {
        titulo: 'Consultoría Logística',
        descripcion: 'Asesoramos en la optimización de procesos logísticos para mejorar la eficiencia y reducir costos operativos.',
        icono: '📊'
    },
    {
        titulo: 'Outsourcing de Logística',
        descripcion: 'Gestionamos tus operaciones logísticas para que puedas enfocarte en tu negocio principal mientras nosotros nos encargamos del resto.',
        icono: '🤝'
    },
    {
        titulo: 'Integración Comercial y Corporativa',
        descripcion: 'Facilitamos la integración de sistemas comerciales y corporativos para una gestión unificada y eficiente.',
        icono: '🔗'
    },
    {
        titulo: 'Soporte Contable y Fiscal',
        descripcion: 'Ofrecemos soporte especializado en temas contables y fiscales relacionados con la logística y el comercio internacional.',
        icono: '📋'
    },
];

const Services = () => (
    <div className="services-container">
        <div className="services-header">
            <h1>Nuestros Servicios</h1>
            <p className="subtitle">
                Impulsa tu empresa con estrategias de logística efectivas. Shipping Star Solutions LLC ofrece una amplia gama de servicios de logística adaptados a tus necesidades.
            </p>
        </div>
        
        <div className="services-grid">
            {servicios.map((servicio, idx) => (
                <div key={idx} className="service-card">
                    <div className="service-icon">{servicio.icono}</div>
                    <h3 className="service-title">{servicio.titulo}</h3>
                    <p className="service-description">{servicio.descripcion}</p>
                </div>
            ))}
        </div>
        
        <div className="services-cta">
            <h2>¿Listo para potenciar tu empresa?</h2>
            <p>Nuestro equipo de expertos está aquí para ayudarte a optimizar tus operaciones logísticas.</p>
            <a href="mailto:contacto@shippingstarsolutions.com" className="cta-button">
                Contáctanos para una asesoría personalizada
            </a>
        </div>
    </div>
);

export default Services;