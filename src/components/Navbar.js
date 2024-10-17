// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">D~K</div>
            <div className="navbar-toggle" onClick={toggleNavbar}>
                &#9776; {/* Hamburger icon */}
            </div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <Link to="/" onClick={toggleNavbar}>Home</Link>
                <Link to="/about" onClick={toggleNavbar}>About Me</Link>
                <Link to="/projects" onClick={toggleNavbar}>Projects</Link>
                <Link to="/contact" onClick={toggleNavbar}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
