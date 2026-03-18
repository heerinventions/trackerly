import React, { useState } from 'react';
import Button from '../components/shared/Button';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent (Placeholder)');
  }

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--surface-border)',
    background: 'rgba(255, 255, 255, 0.5)',
    fontFamily: 'inherit',
    fontSize: '1rem',
    outline: 'none',
    transition: 'var(--transition)'
  };

  return (
    <div className="page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="glass-panel" style={{ padding: '3rem', maxWidth: '600px', width: '100%' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Contact Us</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>We're here to help! Fill out the form below.</p>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Your Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required style={{ ...inputStyle, minHeight: '150px' }}></textarea>
          </div>
          <Button variant="primary" type="submit" style={{ width: '100%', marginTop: '1rem' }}>Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
