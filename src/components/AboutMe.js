import React from 'react';
import '../css/AboutMe.css';

const AboutMe = () => {
    return (
        <section id="about" className="about-section">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-box">
                    <h3>Software Engineering</h3>
                    <p>
                        I have a solid foundation in software engineering, where I design and build scalable, efficient applications. I enjoy working with diverse programming languages and tackling complex problems to deliver practical solutions.
                    </p>
                </div>
                <div className="about-box">
                    <h3>Game Development</h3>
                    <p>
                        Game development is a passion of mine. From building 2D platformers to exploring game mechanics, I thrive in creating engaging and dynamic gaming experiences using tools like C++ and SFML.
                    </p>
                </div>
                <div className="about-box">
                    <h3>Full-Stack Development</h3>
                    <p>
                        With experience in both front-end and back-end technologies, I develop full-stack web applications. I love bridging the gap between user experience and server-side functionality, creating seamless web applications.
                    </p>
                </div>
                <div className="about-box">
                    <h3>Cyber-security</h3>
                    <p>
                        Cyber-security is an area where I focus on safeguarding applications and systems. With experience in CTF challenges and understanding vulnerabilities, I work on improving security practices in my projects.
                    </p>
                </div>
                <p className="about-footer">
                    Interested in some of my work? Check out my <a href="/projects" className="highlight">projects</a> to see what I’ve been working on.
                </p>
            </div>
        </section>
    );
};

export default AboutMe;
