import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/ScreenshotsPage.css';

const ScreenshotsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { screenshots, projectTitle } = location.state || { screenshots: [], projectTitle: '' };

    if (!screenshots || screenshots.length === 0) {
        return (
            <div className="screenshots-page">
                <h2>No Screenshots Available</h2>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
        );
    }

    return (
        <div className="screenshots-page">
            <h2>{projectTitle} Screenshots</h2>
            <div className="screenshots-grid">
                {screenshots.map((screenshot, idx) => (
                    <img
                        key={idx}
                        src={screenshot}
                        alt={`Screenshot ${idx + 1} of ${projectTitle}`}
                        className="screenshot"
                    />
                ))}
            </div>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default ScreenshotsPage;