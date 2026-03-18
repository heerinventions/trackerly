import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../components/shared/Button';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="page-container">
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>
          Welcome back, {user?.name || 'User'}!
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          Overview of your tracking history and account settings.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        {/* Metric Card 1 */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '1rem', textTransform: 'uppercase' }}>Trackings Remaining</h3>
          <p style={{ fontSize: '3rem', fontWeight: '700', margin: '0 0 1rem 0' }}>10</p>
          <Link to="/pricing">
            <Button variant="outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Upgrade Plan</Button>
          </Link>
        </div>

        {/* Metric Card 2 */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '1rem', textTransform: 'uppercase' }}>Recent Activity</h3>
          <ul style={{ padding: 0, listStyle: 'none', margin: '1rem 0 0 0' }}>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--surface-border)' }}>Tracked: +1 555-1234 (Yesterday)</li>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--surface-border)' }}>Login from new device (2 days ago)</li>
            <li style={{ padding: '0.5rem 0' }}>Account Created (3 days ago)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
