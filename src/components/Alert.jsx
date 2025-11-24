import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const Alert = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="animate-fade-in" style={{
            position: 'fixed',
            top: '2rem',
            right: '2rem',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.5)',
            borderRadius: '0.75rem',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            zIndex: 1000,
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}>
            <CheckCircle size={20} color="#3b82f6" />
            <span style={{ color: '#3b82f6', fontWeight: '500' }}>{message}</span>
        </div>
    );
};

export default Alert;
