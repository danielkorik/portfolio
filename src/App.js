// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './css/Navbar.css';
import './App.css';
import ScreenshotsPage from "./components/ScreenshotsPage";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume/>} />
                    <Route path="/screenshots" element={<ScreenshotsPage />} />
                </Routes>
                {/* Add the floating resume button */}
                <a href="/resume" className="resume-float-btn">
                    Resume
                </a>
                {/* Footer Section for Icons */}
                <footer>
                    <div className="icons">
                        <a href="https://github.com/danielkorik" target="_blank" rel="noopener noreferrer">
                            <img src="/images/github-icon.png" alt="GitHub" className="icon-img" />
                        </a>
                        <a href="https://www.linkedin.com/in/daniel-korik-5219bb2a5/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/linkdin-icon.png" alt="LinkedIn" className="icon-img" />
                        </a>

                    </div>
                </footer>
            </div>
        </Router>
    );
};

export default App;
