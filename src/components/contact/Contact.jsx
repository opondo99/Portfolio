import React from 'react';
import ContactForm from './Form';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <ContactForm/>
            <div className="left">
                <div className="social">
                    <h1>Connect with me</h1>
                    <a href="instagram.com">Instagram</a>
                    <a href="facebook.com">Facebook</a>
                    <a href="twitter.com">Twitter</a>
                    <a href="linkedin.com">Linkedin</a>
                    <a href="github.com">GitHub</a>
                </div>
                <div className="location">
                    <h1>Location</h1>
                    <p>Nairobi, Kenya</p>
                </div>
            </div>
            
        </div>
    )
}

export default Contact;