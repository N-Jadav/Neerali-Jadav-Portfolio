import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import Alert from './Alert';

const Contact = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowAlert(true);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            {showAlert && <Alert message="Message Sent" onClose={() => setShowAlert(false)} />}
            <div className="container">
                <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    Get In Touch
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    <div className="animate-fade-in delay-100">
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Let's Talk</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            I'm currently available for freelance work or full-time opportunities.
                            If you have a project that needs some creative touch, feel free to contact me.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ padding: '1rem', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', color: 'var(--accent-primary)' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Email</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>ca.neeralijadav@gmail.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ padding: '1rem', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', color: 'var(--accent-primary)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Location</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>Bengaluru, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="animate-fade-in delay-200" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{
                                    padding: '1rem',
                                    backgroundColor: 'var(--bg-primary)',
                                    border: '1px solid var(--card-border)',
                                    borderRadius: '0.5rem',
                                    color: 'white'
                                }}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{
                                    padding: '1rem',
                                    backgroundColor: 'var(--bg-primary)',
                                    border: '1px solid var(--card-border)',
                                    borderRadius: '0.5rem',
                                    color: 'white'
                                }}
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            style={{
                                padding: '1rem',
                                backgroundColor: 'var(--bg-primary)',
                                border: '1px solid var(--card-border)',
                                borderRadius: '0.5rem',
                                color: 'white'
                            }}
                        />
                        <textarea
                            rows="5"
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            style={{
                                padding: '1rem',
                                backgroundColor: 'var(--bg-primary)',
                                border: '1px solid var(--card-border)',
                                borderRadius: '0.5rem',
                                color: 'white',
                                resize: 'none'
                            }}
                        ></textarea>
                        <button className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
