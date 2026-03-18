import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../components/shared/Button';
import FeatureCard from '../components/features/FeatureCard';

const Home = () => {
  const { t } = useTranslation();

  const features = [
    { title: 'Global Coverage', description: 'Track devices across 150+ countries with seamless carrier integrations.', icon: '🌍' },
    { title: 'High Precision', description: 'Advanced triangulation algorithms pinpointing locations up to 5 meters.', icon: '🎯' },
    { title: 'Instant Processing', description: 'Real-time infrastructure yielding immediate geolocation results.', icon: '⚡' }
  ];

  return (
    <div className="page-container" style={{ padding: 0 }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', padding: '6rem 2rem 4rem 2rem' }}>
        <h1 style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '1rem', lineHeight: 1.1 }}>
          Locate Devices<br/>With Pinpoint Accuracy
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2rem auto', color: 'var(--text-secondary)' }}>
          The fastest and most reliable way to trace location via phone number worldwide. No installation required.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/track">
            <Button variant="primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Get Started Now</Button>
          </Link>
          <Link to="/pricing">
            <Button variant="outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>View Pricing</Button>
          </Link>
        </div>
      </div>

      {/* Feature Section */}
      <div style={{ padding: '4rem 2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Why Choose Trackerly?</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {features.map((feat, index) => (
            <FeatureCard key={index} {...feat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
