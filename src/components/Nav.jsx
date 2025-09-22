import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';


function Nav() {  
    return (  
        <>
        <nav style={{ backgroundColor: "#333", color: "white", padding: "10px" }}>             
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0 }}>  
                <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>  
                <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link></li>  
                <li><Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link></li> 
            </ul>  
        </nav>
        </>  
    );  
}  
export default Nav;