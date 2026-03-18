import React from 'react';

const Privacy = () => {
  return (
    <div className="page-container">
      <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem', lineHeight: '1.8' }}>
        <h1 style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
        <p><strong>Effective Date:</strong> January 1, 2024</p>
        
        <h3>1. Information We Collect</h3>
        <p>We collect information you provide directly to us: contact details, payment information (processed securely via Stripe), and the phone numbers you submit for tracking.</p>
        
        <h3>2. How We Use Information</h3>
        <p>We use the data strictly to facilitate the tracking service, process transactions, and communicate updates to you. We do not sell your personal data to third parties.</p>
        
        <h3>3. Data Security</h3>
        <p>We implement strict security measures to ensure your data is safe, utilizing industry-standard encryption for both data-in-transit and data-at-rest.</p>
        
        <h3>4. Your Rights</h3>
        <p>You have the right to request deletion of your account and all associated data records at any point in time.</p>
      </div>
    </div>
  );
};

export default Privacy;
