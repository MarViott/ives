import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Header from './components/Header';  
import Nav from './components/Nav';  
import Main from './components/Main';  
import Footer from './components/Footer'; 

import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Cards from './components/Cards';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {  
    return (  
        <Router>
            <div>  
                <Header />  
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />                    
                </Routes>
                <Footer />  
            </div>  
        </Router>
    );  
}  

export default App;