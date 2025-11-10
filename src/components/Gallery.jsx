import React from "react";
import camiones1 from "../public/img/camiones1.jpg";
import parqueEolico0 from "../public/img/parque_eolico_0.jpg";
import camiones2 from "../public/img/camiones2.jpg";
import parqueEolico3 from "../public/img/parque_eolico_3.jpg";

function Gallery() {
  const images = [
    { src: camiones1, alt: "Ground Transportation Fleet" },
    { src: parqueEolico0, alt: "Wind Energy Projects" },
    { src: camiones2, alt: "Heavy Cargo Transport" },
    { src: parqueEolico3, alt: "Renewable Energy Logistics" },
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
