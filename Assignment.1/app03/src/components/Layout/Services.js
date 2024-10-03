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
                    <p>Through my expertise in systems engineering, I offer a range of professional services designed to meet the technological needs of modern businesses. From custom software development and IT infrastructure management to system optimization and scalability solutions, my goal is to deliver tailored, efficient, and sustainable services that drive innovation and growth for my clients.</p>
                </div>
                <div className="cards-container">
                        <Card pic={serviceDevWeb} tittle="Website Development" description="Website Development offers modern, responsive designs tailored to your business. I create seamless user experiences across all devices. The result is a professional website that drives engagement and supports growth." />
                        <Card pic={serviceMeth} tittle="Agile Methodology Coach" description="Agile Methodology Coaching provides guidance on implementing flexible and efficient project management practices. I help teams adopt Agile principles to improve collaboration, adaptability, and delivery speed. The goal is to empower teams to achieve continuous improvement and deliver high-quality results." />
                        <Card pic={serviceBackDev} tittle="Back Development" description="Back-End Development focuses on building the core systems that power your applications. I design and develop robust, scalable, and secure server-side architectures. My goal is to ensure smooth data management and seamless integration with front-end interfaces." />
                </div>
                <div className="textComplement">
                    <p>I’m always excited to take on new projects, so if you have an idea or collaboration in mind, feel free to reach out!</p>
                </div>
            </div>
        </>
    );
};

export default Services;