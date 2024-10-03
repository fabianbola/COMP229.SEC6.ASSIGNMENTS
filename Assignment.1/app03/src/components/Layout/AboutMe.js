import React from 'react';
import BodyText from '../Items/BodyText.js';
import InstagramLogo from '../../assets/LogoIntagram.png';
import LinkedInLogo from '../../assets/linkedin.png';
import OutlookLogo from '../../assets/outlook.png';
import './AboutMe.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="header">
                <h1>About Me</h1>
            </div>
            <div className="body-text">
                <BodyText
                    Section1="I’m Daniel Fabian Bolanos Arcos, a software engineer with a background in full-stack development and a strong foundation in problem-solving and technical design. I am passionate about leveraging technology to bring innovative ideas to life. Originally from Colombia and now based in Toronto, I’m currently pursuing my Software Engineering Technician program at Centennial College. Alongside my technical skills, I am bilingual in English and Spanish, allowing me to collaborate with diverse teams and clients."
                    Subtittle="My Journey"
                    Section2="I’ve been passionate about software engineering for as long as I can remember. From building my first program to working on complex projects, every step has deepened my love for coding and development."
                />
            </div>
            <div className="follow-me">
                <h2>Follow me in</h2>
                <div className="logos">
                    <a href="https://www.instagram.com/fabianbola/">
                        <img className="logo" src={InstagramLogo} alt="Instagram Logo" />
                    </a>
                    <a href="https://co.linkedin.com/in/daniel-fabian-bolanos-arcos">
                        <img className="logo" src={LinkedInLogo} alt="LinkedIn Logo" />
                    </a>
                    <a href="mailto:fabian.bolarcos@outlook.com">
                        <img className="logo" src={OutlookLogo} alt="Outlook Logo" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;