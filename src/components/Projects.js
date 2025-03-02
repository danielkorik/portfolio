import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    useEffect(() => {
        const loadProjects = async () => {
            await new Promise(resolve => setTimeout(resolve, 300));
            setProjects(projectsData);
            setLoading(false);
        };
        loadProjects();
    }, []);

    const handleScreenshotsClick = (screenshots, projectTitle) => {
        navigate('/screenshots', { state: { screenshots, projectTitle } });
    };

    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            {loading ? (
                <LoadingSpinner /> // Display the spinner while loading
            ) : (
                <div className="project-card-container">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index} style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
                                        GitHub
                                    </a>
                                )}
                                {project.liveLink && (
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link live">
                                        Live Website
                                    </a>
                                )}
                                {project.youtubeLink && (
                                    <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer" className="project-link youtube">
                                        YouTube Demo
                                    </a>
                                )}
                            </div>
                            {project.screenshots && project.screenshots.length > 0 && (
                                <button
                                    className="view-screenshots-button"
                                    onClick={() => handleScreenshotsClick(project.screenshots, project.title)}
                                >
                                    View Screenshots
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Projects;