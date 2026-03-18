import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="glass-panel" style={{
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
      cursor: 'default'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{
        fontSize: '3rem',
        marginBottom: '1rem',
        background: 'rgba(79, 70, 229, 0.1)',
        padding: '1rem',
        borderRadius: '50%',
        color: 'var(--primary)'
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ margin: 0, fontSize: '0.95rem' }}>{description}</p>
    </div>
  );
};

export default FeatureCard;
