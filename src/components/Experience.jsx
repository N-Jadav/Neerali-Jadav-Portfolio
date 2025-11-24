import React from 'react';
import { useSelector } from 'react-redux';
import { selectExperience } from '../features/profile/profileSlice';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experience = useSelector(selectExperience);

    return (
        <section className="section">
            <div className="container">
                <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    Work History
                </h2>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    maxWidth: '800px',
                    margin: '0 auto',
                    maxHeight: '600px',
                    overflowY: 'auto',
                    paddingRight: '1rem',
                    scrollbarWidth: 'thin',
                    scrollbarColor: 'var(--accent-primary) var(--bg-secondary)'
                }}>
                    {experience.map((job, index) => (
                        <div key={job.id} className={`card animate-fade-in delay-${(index + 1) * 100}`} style={{ position: 'relative', paddingLeft: '2rem', flexShrink: 0 }}>
                            <div style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                background: 'var(--accent-gradient)',
                                borderRadius: '4px 0 0 4px'
                            }}></div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{job.role}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: '600' }}>
                                        <Briefcase size={18} />
                                        <span>{job.company}</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '2rem' }}>
                                    <Calendar size={16} />
                                    <span>{job.period}</span>
                                </div>
                            </div>

                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                                {job.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {job.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        style={{
                                            fontSize: '0.85rem',
                                            color: 'var(--accent-secondary)',
                                            backgroundColor: 'rgba(139, 92, 246, 0.1)',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '0.5rem',
                                            border: '1px solid rgba(139, 92, 246, 0.2)'
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
