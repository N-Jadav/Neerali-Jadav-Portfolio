import React from 'react';
import { useSelector } from 'react-redux';
import { selectSkills } from '../features/profile/profileSlice';

const Skills = () => {
    const skills = useSelector(selectSkills);

    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-primary)', padding: '5rem 0' }}>
            <div className="container">

                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '1rem',
                    padding: '3rem',
                    border: '1px solid var(--card-border)'
                }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {skills.map((category, index) => (
                            <div key={category.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '0.75rem',
                                    padding: '2rem',
                                    height: '100%',
                                    transition: 'transform 0.3s ease',
                                    border: '1px solid transparent'
                                }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.borderColor = 'transparent';
                                    }}
                                >
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        marginBottom: '1.5rem',
                                        color: category.color,
                                        fontWeight: '600'
                                    }}>
                                        {category.title}
                                    </h3>

                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {category.items.map((item) => (
                                            <li key={item} style={{
                                                marginBottom: '1rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                color: 'var(--text-secondary)',
                                                fontSize: '1rem'
                                            }}>
                                                <span style={{
                                                    display: 'inline-block',
                                                    width: '6px',
                                                    height: '6px',
                                                    borderRadius: '50%',
                                                    backgroundColor: category.color,
                                                    marginRight: '1rem',
                                                    flexShrink: 0
                                                }}></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
