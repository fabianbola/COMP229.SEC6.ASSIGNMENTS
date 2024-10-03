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
                    <p>Here are some of the key projects I’ve worked on:</p>
                </div>
                <div className="cards-container">
                    <center>
                        <Card pic={bug} tittle="Bug Mach Game" description="This is the description of the webdite"/>
                        <Card pic={samba} tittle="Samba File Sharing" description="This is the description of the webdite"/>
                    </center>
                </div>
            </div>
    </>
    );
};

export default Projects;