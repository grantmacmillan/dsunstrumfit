"use client";

import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FaCheck, FaPaperPlane, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        reason: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
        }, 3000); // Reset the button after 3 seconds
    };

    return (
        <Container className="my-5">
            <Row>
                <Col md={6}>
                    <h2 className='contact-heading'>Contact Me</h2>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="firstName" className='contact-form-group'>
                                    <Form.Label className='contact-form-label'>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your first name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="lastName" className='contact-form-group'>
                                    <Form.Label className='contact-form-label'>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your last name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="email" className='contact-form-group'>
                                    <Form.Label className='contact-form-label'>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="phoneNumber" className='contact-form-group'>
                                    <Form.Label className='contact-form-label'>Phone Number (optional)</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="reason" className='contact-form-group'>
                            <Form.Label className='contact-form-label'>Reason for Contacting Me</Form.Label>
                            <Form.Control
                                as="select"
                                value={formData.reason}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a reason</option>
                                <option value="general-inquiry">General Inquiry</option>
                                <option value="online-fitness-coaching">Online Fitness Coaching</option>
                                <option value="online-nutrition-coaching">Online Nutrition Coaching</option>
                                <option value="online-fitness-nutrition-coaching">Online Fitness + Nutrition Coaching</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="message" className='contact-form-group'>
                            <Form.Label className='contact-form-label'>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="Enter your message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <button
                            type="submit"
                            className={`submit-btn ${submitted ? 'submit-btn-success' : 'submit-btn-primary'} w-100`}
                        >
                            {submitted ? (
                                <>
                                    <FaCheck /> Submitted
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane /> Send
                                </>
                            )}
                        </button>
                    </Form>
                </Col>
                <Col md={6}>
                    <h3 className='contact-heading'>Contact Information</h3>
                    <p><FaPhone /> <a className='contact-link' href="tel:+1234567890">+1 234 567 890</a></p>
                    <p><FaEnvelope /> <a className='contact-link' href="mailto:info@yourdomain.com">info@yourdomain.com</a></p>
                    <p><FaMapMarkerAlt /> Stouffville, Ontario</p>
                    <h3 className='contact-subheading'>Follow Me</h3>
                    <p>
                        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} className="icon-style" />
                        </a>
                        <a href="https://twitter.com" className="mx-3" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30} className="icon-style" />
                        </a>
                        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} className="icon-style" />
                        </a>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactForm;