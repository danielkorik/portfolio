import React, { useState, useEffect } from 'react';
import projectsData from './projectsData';
import '../css/Projects.css';

const LoadingSpinner = () => (
    <div className="spinner-container">
        <div className="spinner"></div>
    </div>
);

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProjects = async () => {
            await new Promise(resolve => setTimeout(resolve, 300));
            setProjects(projectsData);
            setLoading(false);
        };
        loadProjects();
    }, []);

    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            {loading ? (
                <LoadingSpinner /> // Display the spinner while loading
            ) : (
                <div className="project-card-container">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index} style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Projects;
