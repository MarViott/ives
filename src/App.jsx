import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Header from './components/Header';  
import Nav from './components/Nav';  
import Main from './components/Main';  
import Footer from './components/Footer'; 
import Gallery from './components/Gallery';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {  
    return (  
        <div>  
            <Header />  
            <Nav />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pages/About.jsx" element={<About />} />
                    <Route path="/pages/Contact.jsx" element={<Contact />} />                    
                </Routes>
            </Router>
            <Main />  
            <Gallery />  
            <Footer />  
        </div>  
    );  
}  

export default App;