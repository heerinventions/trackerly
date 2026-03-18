import React from 'react';

const Terms = () => {
  return (
    <div className="page-container">
      <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem', lineHeight: '1.8' }}>
        <h1 style={{ marginBottom: '2rem' }}>Terms of Service</h1>
        <p><strong>Effective Date:</strong> January 1, 2024</p>
        
        <h3>1. Acceptance of Terms</h3>
        <p>By accessing or using Trackerly, you agree to be bound by these Terms. If you disagree, do not use the application.</p>
        
        <h3>2. Description of Service</h3>
        <p>Trackerly provides location insights based on phone numbers provided that explicit consent has been authorized. You accept full responsibility for any legal compliance within your jurisdiction regarding digital tracking.</p>
        
        <h3>3. User Conduct</h3>
        <p>You agree not to use the service for any unlawful activities, harassment, stalking, or any action that violates the privacy of other individuals.</p>
        
        <h3>4. Limitation of Liability</h3>
        <p>Trackerly is provided "as is". We are not responsible for inaccuracies in location data or damages arising from the use of our service.</p>
      </div>
    </div>
  );
};

export default Terms;
