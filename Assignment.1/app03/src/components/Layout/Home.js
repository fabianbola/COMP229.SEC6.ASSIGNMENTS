import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';
import Button from '../Items/ButtonStandar.js';
import ProfilePhoto from '../../assets/ProfilePhoto.jpg';
import BodyText from '../Items/BodyText.js';

const Home = () => {
    return (
        <div className="home-container">
            <div className="header">
                <h1>Home</h1>
            </div>
            <div className="contentHome">
                <div className="image-section">
                    <img className="profile-photo" src={ProfilePhoto} alt="Card picture" />
                </div>
                <div className="text-section">
                    <BodyText
                        Section1="Welcome, I’m Daniel Fabian Bolanos Arcos, a systems engineer with a strong background in software development and IT infrastructure management. Throughout my career, I have been dedicated to creating innovative and efficient solutions, leveraging my expertise to tackle complex challenges and streamline business processes. This portfolio showcases my journey, highlighting the projects I’ve worked on and the impact they’ve made. I invite you to explore and see how I can contribute to the success of your next technological endeavor."
                        Subtittle="Mission Statement"
                        Section2="As a systems engineer, my mission is to drive technological advancement by creating comprehensive solutions that not only address current needs but also anticipate future challenges. I am committed to developing sustainable, scalable, and high-performance systems, adhering to industry best practices. My approach focuses on delivering added value to organizations by optimizing resources and fostering continuous innovation, with the goal of making a positive impact in both the business environment and society."
                    />
                    <div className="button-container">
                        <Link to="/about">
                            <Button NameButton="Learn More About Me" />
                        </Link>
                        <Link to="/projects">
                            <Button NameButton="View My Projects" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;