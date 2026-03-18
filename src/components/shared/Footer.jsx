import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      marginTop: 'auto',
      padding: '3rem 2rem',
      textAlign: 'center',
      borderTop: '1px solid var(--surface-border)',
      background: 'rgba(255,255,255,0.3)',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontWeight: '500' }}>
          <Link to="/">Home</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Trackerly Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
