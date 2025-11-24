import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
            <div className="container">
                <p style={{ color: 'var(--text-secondary)' }}>
                    © {new Date().getFullYear()} Neerali Jadav. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
