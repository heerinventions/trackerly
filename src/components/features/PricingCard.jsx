import React from 'react';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';

const PricingCard = ({ title, price, features, isPopular = false }) => {
  return (
    <div className="glass-panel" style={{
      padding: '2.5rem',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      transform: isPopular ? 'scale(1.05)' : 'scale(1)',
      border: isPopular ? '2px solid var(--primary)' : '1px solid var(--surface-border)',
      zIndex: isPopular ? 10 : 1
    }}>
      {isPopular && (
        <span style={{
          position: 'absolute',
          top: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--primary)',
          color: 'white',
          padding: '0.25rem 1rem',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.8rem',
          fontWeight: '700',
          textTransform: 'uppercase'
        }}>
          Most Popular
        </span>
      )}
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{title}</h3>
      <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1.5rem' }}>
        <span style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--text-primary)' }}>${price}</span>
        <span style={{ color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>/mo</span>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flexGrow: 1 }}>
        {features.map((feature, idx) => (
          <li key={idx} style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ color: 'var(--secondary)' }}>✓</span> {feature}
          </li>
        ))}
      </ul>

      <Link to="/payment" style={{ width: '100%' }}>
        <Button variant={isPopular ? 'primary' : 'outline'} style={{ width: '100%' }}>
          Choose {title}
        </Button>
      </Link>
    </div>
  );
};

export default PricingCard;
