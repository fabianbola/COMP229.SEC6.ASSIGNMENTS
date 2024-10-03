import React from 'react';
import './ContactMe.css';
import Button from '../Items/ButtonStandar.js';


const ContactMe = () => {
    return (
        <>
            <h1>Contact Me</h1>
            <div className="container">
                <form action="index.html" method="GET" className="contactForm">
                    <div className="formGroup">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" required />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" required />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="contactNumber">Contact Number:</label>
                        <input type="tel" id="contactNumber" name="contactNumber" pattern="[0-9]{10}" placeholder="1234567890" required />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <div className="button-container">
                    <Button NameButton="Send Message" type="submit"/>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactMe;