import React from 'react';
import PricingCard from '../components/features/PricingCard';

const Pricing = () => {
  const tiers = [
    {
      title: 'Basic',
      price: '9',
      features: ['10 Trackings/month', 'Basic Support', 'Standard Accuracy'],
      isPopular: false
    },
    {
      title: 'Pro',
      price: '29',
      features: ['Unlimited Trackings', 'Priority 24/7 Support', 'High Precision GPS', 'Historical Data'],
      isPopular: true
    },
    {
      title: 'Enterprise',
      price: '99',
      features: ['Custom Integrations', 'Dedicated Account Manager', 'API Access', 'White-labeling'],
      isPopular: false
    }
  ];

  return (
    <div className="page-container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--primary)' }}>Simple, Transparent Pricing</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Choose the perfect plan for your tracking needs. No hidden fees. Cancel anytime.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        alignItems: 'center',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {tiers.map((tier, index) => (
          <PricingCard key={index} {...tier} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
