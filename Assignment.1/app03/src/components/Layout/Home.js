import React from 'react';
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
                        Section1="Hi, I'm <strong>Daniel Fabian Bolanos Arcos</strong>, a dedicated software engineer with a passion for developing innovative and scalable solutions. I specialize in full-stack development, and I’m always looking for ways to create impactful software."
                        Subtittle="Mission Statement"
                        Section2="My mission is to deliver high-quality software solutions that solve real-world problems. I believe in continuous learning and improvement, and I am always open to new challenges."
                    />
                    <div className="button-container">
                        <Button NameButton="Learn More About Me" />
                        <Button NameButton="View My Projects" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;