import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className="about">
            <div className="about-overlay">
                <div className="about-content">
                    <h1>Welcome to the Nairobi Y's Men Club</h1>
                    <p>Making a positive impact in our community</p>
                    <button className="about-button">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default About;