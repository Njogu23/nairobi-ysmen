import React, { useState } from 'react';
import './about.css';

const About = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="about">
            <div className="about-overlay">
                <div className="about-content">
                    <h1>Welcome to the Nairobi Y's Men Club</h1>
                    <p className='about-p'>“To acknowledge the duty that accompanies every right.”</p>
                    <a
                        onMouseOver={(e)=> {
                          e.target.style.backgroundColor = "#030749"
                          e.target.style.color = "white"
                        }}
                        onMouseOut={(e)=> {
                          e.target.style.backgroundColor = "white"
                          e.target.style.color = "#030749"
                        }}
                    href="#contact-us"
                    className="about-button"
                    >Join Us Today</a>
                </div>
            </div>
            <div className="sections-container">
                <section className="our-history">
                    <h2>Our History</h2>
                    <hr />
                    <p className='section-p'>
                        The Nairobi Y's Men Club is an affiliated member of Y's Men International and was founded on February 22, 1969. 
                        Over the decades, our club has been dedicated to the principles of service, fellowship, and community engagement. 
                        We have grown and evolved, undertaking various projects and initiatives that have positively impacted the Nairobi community 
                        and beyond. Our history is rich with achievements and milestones that reflect our commitment to making a difference and 
                        fostering a sense of camaraderie among our members.
                    </p>
                </section>

                <section className="our-vision">
                    <h2>Our Vision</h2>
                    <hr />
                    <p className='section-p'>
                        Our vision is to be a leading force in fostering community development and promoting service-oriented leadership. 
                       We aspire to create a world where every individual is empowered to contribute positively to society, guided by the 
                       values of compassion, integrity, and excellence.
                    </p>
                </section>

                <section className="our-mission">
                    <h2>Our Mission</h2>
                    <hr />
                    <p className='section-p'>
                        Our mission is to actively engage in projects and initiatives that address the needs of our community while promoting 
                       the core values of Y's Men International. Through service, fellowship, and leadership, we aim to enhance the quality 
                       of life for those we serve, build strong relationships, and inspire positive change in the world around us.
                    </p>
                </section>

                <section id="contact-us" className="contact-us">
                    <h2>Contact Us</h2>
                    <hr />
                    <form onSubmit={handleSubmit} className="contact-form">
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Subject:
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Message:
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <button
                        onMouseOver={(e)=> {
                            e.target.style.backgroundColor = "#1979f5"
                            e.target.style.color = "white"
                          }}
                          onMouseOut={(e)=> {
                            e.target.style.backgroundColor = "#0a54f5"
                            e.target.style.color = "white"
                          }}
                        type="submit"
                        className="contact-button"
                        >Send Message</button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default About;
