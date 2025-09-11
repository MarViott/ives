 function Tarjeta({ titulo, descripcion, imagenUrl, botonTexto }) {
    return (
        <div className="tarjeta">
            <img src={imagenUrl} alt={titulo} className="tarjeta-imagen" />
            <h2 className="tarjeta-titulo">{titulo}</h2>
            <p className="tarjeta-descripcion">{descripcion}</p>
            <button className="tarjeta-boton">{botonTexto}</button>
        </div>
    );
}   
export default Tarjeta;
