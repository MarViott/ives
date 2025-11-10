import React from "react";

function Gallery() {
  const images = [
    { src: "/img/camiones1.jpg", alt: "Ground Transportation Fleet" },
    { src: "/img/parque_eolico_0.jpg", alt: "Wind Energy Projects" },
    { src: "/img/camiones2.jpg", alt: "Heavy Cargo Transport" },
    { src: "/img/parque_eolico_3.jpg", alt: "Renewable Energy Logistics" },
  ];

  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          style={{
            width: "250px",
            height: "250px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      ))}
    </section>
  );
}

export default Gallery;
