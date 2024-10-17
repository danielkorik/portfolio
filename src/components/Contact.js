import React from 'react';
import '../css/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <div className="contact-content">
                <p>If you'd like to get in touch with me, click the button below to send me an email:</p>

                <a href="mailto:danielkorik97@gmail.com?subject=Collaboration Inquiry" className="contact-btn">
                    Send Email
                </a>


                <div className="social-links">
                    <p>You can also reach me on the accounts below:</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
