import React from 'react';
import './ServAndProj.css';
import bug from '../../assets/ProjectBug.jpeg'
import samba from '../../assets/ProjectSamba.jpeg'
import Card from '../Items/Card.js';


const Projects = () => {
    return (
        <>
            <div className="services-container">
                <div>
                    <h1>My Projects</h1>
                </div>
                <div className="textComplement">
                    <p>In this section, you'll find a collection of the projects I've worked on, showcasing my expertise in systems engineering and software development. Each project reflects my commitment to delivering innovative, high-quality solutions tailored to real-world challenges. From back-end development to website creation, these projects highlight the skills and impact I've brought to various industries.</p>
                </div>
                <div className="cards-container">
                    <Card pic={bug} tittle="Bug Mach Game" description="Bug Mach Game is a web-based game where players catch moving bugs on the screen, built with JavaScript, HTML, and CSS. It highlights my skills in creating interactive and dynamic user experiences."/>
                    <Card pic={samba} tittle="Samba File Sharing" description="Samba File Sharing enables seamless file sharing across different systems within a network. I configured secure, cross-platform access to shared folders, allowing efficient collaboration while maintaining data integrity and security."/>
                </div>
            </div>
    </>
    );
};

export default Projects;