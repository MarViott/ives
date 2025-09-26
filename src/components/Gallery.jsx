import React from 'react';

function Gallery() {  
    const images = [  
        "./src/assets/img/camiones1.jpg",  
        "./src/assets/img/parque_eolico_0.jpg",  
        "./src/assets/img/camiones2.jpg",  
        "./src/assets/img/parque_eolico_3.jpg",
    ];  
        

    return (  
        <>
        <section style={{ 
            display: "flex",
            flexWrap: "wrap", 
            gap: "10px", 
            justifyContent: "center", 
            marginTop: "20px" }}> 

            {images.map((src, index) => (  
                <img 
                key={index} 
                src={src} 
                alt={`Imagen ${index + 1}`} 
                style={{ 
                    width: "250px", 
                    height: "250px" }} />  
            ))}  
        </section>  
        </>
    );  
}  

export default Gallery;