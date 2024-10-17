import React from 'react';
import '../css/Home.css';

const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <div className="image-container">
                    <img className="home-img" src="/images/me.png" alt="me"/>
                </div>
                <div className="text-content">
                    <h1><span className="highlight">Hi, I’m </span><br/></h1>
                    <h2>Daniel Korik</h2>
                    <p>
                        A passionate computer science graduate focusing on full-stack development and innovative software solutions.
                    </p>
                    <p>
                        Learn more <span className="highlight"><a href="/about">about me</a></span> and my journey.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Home;
