import React from 'react';
import '../css/Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <div className="project-card-container">
                <div className="project-card">
                    <a href="https://github.com/danielkorik/Blip-Blop-Game-Project-.git" target="_blank" rel="noopener noreferrer">

                        <h3>Blip and Blop Game Remake</h3>
                        <p>
                            A 2D shooter game developed using C++ and SFML, featuring character movement, collision detection, and enemy behaviors. Designed game levels with power-ups, bosses, and complex gameplay mechanics.
                        </p>
                    </a>
                </div>

                <div className="project-card">
                    <a href="https://github.com/Lev-Excellenteam-2023/google-autocomplete-team-5.git" target="_blank" rel="noopener noreferrer">
                        <h3>Google Auto-Complete System</h3>

                        <p>
                            Developed an auto-completion system using Python and a Trie structure. Optimized search efficiency with character replacements, additions, and deletions using a custom scoring system to rank results.
                        </p>
                    </a>
                </div>

                <div className="project-card">
                    <h3>Mobileye Traffic Light Detection</h3>
                    <p>
                        Implemented a system in Python and OpenCV to detect and crop traffic lights in images using size, shape, and color-based filtering techniques to reduce false positives.
                    </p>
                </div>

                <div className="project-card">
                    <a href="https://github.com/danielkorik/pizza-website-Spring-Boot" target="_blank" rel="noopener noreferrer">

                    <h3>Pizza Ordering Website</h3>
                    <p>
                        Full-stack pizza ordering website with two versions: React for frontend and SpringBoot with Thymeleaf for backend logic. Implemented user authentication and session management, with a secure order handling system.
                    </p>
                        </a>
                </div>

                <div className="project-card">
                    <h3>Checkpoint Linux Kernel Module</h3>
                    <p>
                        Developed Linux kernel modules using C to filter and log network traffic packets in real-time. Worked with Netfilter hooks for packet inspection and kernel-level programming.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
