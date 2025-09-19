import React from 'react';
import { Link } from 'react-router-dom';
import Router from 'express/lib/router';
import '../index.css';


function Nav() {  
    return (  
        <>
        <nav style={{ backgroundColor: "#333", color: "white", padding: "10px" }}>             
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0 }}>  
                <li><a href="/main.jsx" style={{ color: "white", textDecoration: "none" }}>Home</a></li>  
                <li><a href="/pages/About.jsx" style={{ color: "white", textDecoration: "none" }}>About</a></li>  
                <li><a href="/pages/Contact.jsx" style={{ color: "white", textDecoration: "none" }}>Contact</a></li> 
            </ul>  
        </nav>
        </>  
    );  
}  
export default Nav;