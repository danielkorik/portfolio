import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/'); // Keep track of the active link

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (path) => {
        console.log(path);
        setActiveLink(path); // Set the clicked link as active
        setIsOpen(false); // Close the navbar on mobile after clicking a link
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand" onClick={() => handleLinkClick('/')}>
                D~K
            </Link>
            <div className="navbar-toggle" onClick={toggleNavbar}>
                &#9776; {/* Hamburger icon */}
            </div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <Link
                    to="/"
                    onClick={() => handleLinkClick('/')}
                    className={activeLink === '/' ? 'active' : ''}
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    onClick={() => handleLinkClick('/about')}
                    className={activeLink === '/about' ? 'active' : ''}
                >
                    About Me
                </Link>
                <Link
                    to="/projects"
                    onClick={() => handleLinkClick('/projects')}
                    className={activeLink === '/projects' ? 'active' : ''}
                >
                    Projects
                </Link>
                <Link
                    to="/contact"
                    onClick={() => handleLinkClick('/contact')}
                    className={activeLink === '/contact' ? 'active' : ''}
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
