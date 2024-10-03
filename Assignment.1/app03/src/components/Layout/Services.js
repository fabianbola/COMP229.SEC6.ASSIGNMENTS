import React from 'react';
import './ServAndProj.css';
import serviceDevWeb from '../../assets/Service.Devwebsites.jpeg';
import serviceMeth from '../../assets/Service.Methodology.jpeg';
import serviceBackDev from '../../assets/Service.BackDev.jpeg';
import Card from '../Items/Card.js';

const Services = () => {
    return (
        <>
            <div className="services-container">
                <div>
                    <h1>Services</h1>
                </div>
                <div className="textComplement">
                    <p>Los servicios mas relevantes</p>
                </div>
                <div className="cards-container">
                    <center>
                        <Card pic={serviceDevWeb} title="Website Development" description="This is the description of the website" />
                        <Card pic={serviceMeth} title="Agile Methodology Coach" description="This is the description of the website" />
                        <Card pic={serviceBackDev} title="Back Development" description="This is the description of the website" />
                    </center>
                </div>
                <div className="textComplement">
                    <p>I’m always excited to take on new projects, so if you have an idea or collaboration in mind, feel free to reach out!</p>
                </div>
            </div>
        </>
    );
};

export default Services;