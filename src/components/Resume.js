import React from 'react';
import '../css/Resume.css';


const Resume = () => {
    return(

        <section id="resume" className="section">
            <h2>Select a Resume</h2>
            <div className="resume-options">
                <div className="resume-item">
                    <h3>Full-Stack Developer Resume</h3>
                    <p>
                        Targeted for web development roles, showcasing experience in building dynamic web applications using modern technologies like React, SpringBoot, and databases such as MySQL.
                    </p>
                    <a href="/files/fullStack-resume.pdf" target="_blank" className="view-btn">View</a>
                    <a href="/files/fullStack-resume.pdf" download className="download-btn">Download</a>
                </div>

                <div className="resume-item">
                    <h3>Software Developer Resume</h3>
                    <p>
                        Focused on software engineering roles, with an emphasis on building and maintaining software solutions using C++, Java, Python, and OOP principles.
                    </p>
                    <a href="/files/softwaredev-resume.pdf" target="_blank" className="view-btn">View</a>
                    <a href="/files/softwaredev-resume.pdf" download className="download-btn">Download</a>
                </div>

                <div className="resume-item">
                    <h3>Cyber-security Resume</h3>
                    <p>
                        Tailored for cyber security roles, highlighting experience in security challenges (CTFs), penetration testing, and secure software development practices.
                    </p>
                    <a href="/files/cyber-resume.pdf" target="_blank" className="view-btn">View</a>
                    <a href="/files/cyber-resume.pdf" download className="download-btn">Download</a>
                </div>
            </div>
        </section>

    );

};


export default Resume;
