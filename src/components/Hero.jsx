import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectPersonalInfo } from '../features/profile/profileSlice';
import { Download } from 'lucide-react';

import resumePdf from '../assets/NeeraliJadav-Resume.pdf';

const Hero = () => {
    const { name, title, bio, quotes, heroTags } = useSelector(selectPersonalInfo);
    const [currentQuote, setCurrentQuote] = useState("");

    useEffect(() => {
        if (quotes && quotes.length > 0) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            setCurrentQuote(quotes[randomIndex]);
        }
    }, [quotes]);

    return (
        <section className="section hero bg-grid" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
            <div className="container">
                <div className="hero-content animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>

                    <h1 className="gradient-text" style={{
                        fontSize: '5rem',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '1rem',
                        letterSpacing: '-0.02em'
                    }}>
                        {name}
                    </h1>

                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        color: 'white',
                        marginBottom: '1.5rem'
                    }}>
                        {title}
                    </h2>

                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem',
                        lineHeight: '1.6'
                    }}>
                        {bio}
                    </p>

                    {currentQuote && (
                        <div style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '3rem',
                            fontStyle: 'italic',
                            opacity: 0.8
                        }}>
                            "{currentQuote}"
                        </div>
                    )}

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                        {heroTags && heroTags.map((tag) => (
                            <span
                                key={tag.name}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    backgroundColor: tag.color,
                                    border: `1px solid ${tag.border}`,
                                    borderRadius: '2rem',
                                    fontSize: '1rem',
                                    color: 'var(--text-primary)',
                                    fontWeight: '500'
                                }}
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>

                    <div>
                        <a
                            href={resumePdf}
                            download="NeeraliJadav-Resume.pdf"
                            className="btn btn-primary"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            <Download size={20} />
                            Download Resume
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
