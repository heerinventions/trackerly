import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { findLocationByNumber, clearLocationData } from '../store/slices/locationSlice';
import { validatePhoneNumber } from '../utils/validation';
import Button from '../components/shared/Button';

const TrackLocation = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { searchedLocation, loading, error } = useSelector((state) => state.location);
  const [phone, setPhone] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleTrack = () => {
    if (!validatePhoneNumber(phone)) {
      setValidationError('Invalid phone number format. E.g +1234567890');
      return;
    }
    setValidationError('');
    dispatch(findLocationByNumber(phone));
  };

  const inputStyle = {
    width: '100%', padding: '1rem', fontSize: '1.1rem',
    borderRadius: 'var(--radius-md)', border: '2px solid var(--surface-border)',
    background: 'rgba(255, 255, 255, 0.8)', outline: 'none', transition: 'var(--transition)'
  };

  return (
    <div className="page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="glass-panel" style={{ padding: '3rem', maxWidth: '500px', width: '100%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>{t('track_button')}</h2>
        <p style={{ marginBottom: '2rem' }}>{t('track_prompt')}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <input 
              type="text" 
              placeholder={t('phone_placeholder')} 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)}
              style={inputStyle}
            />
            {validationError && <p style={{ color: '#ef4444', marginTop: '0.5rem', fontSize: '0.9rem', textAlign: 'left' }}>{validationError}</p>}
          </div>
          
          <Button onClick={handleTrack} disabled={loading} variant="primary" style={{ width: '100%', padding: '1rem' }}>
            {loading ? 'Tracking...' : t('track_button')}
          </Button>
        </div>

        {error && (
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#fee2e2', color: '#b91c1c', borderRadius: 'var(--radius-md)' }}>
            Error: {error}
          </div>
        )}
        
        {searchedLocation && (
          <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--secondary)', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Location Located! ✓</h3>
            <pre style={{ textAlign: 'left', background: 'white', padding: '1rem', borderRadius: 'var(--radius-md)', overflowX: 'auto', fontSize: '0.9rem' }}>
              {JSON.stringify(searchedLocation, null, 2)}
            </pre>
            <Button onClick={() => { dispatch(clearLocationData()); setPhone(''); }} variant="outline" style={{ marginTop: '1rem', width: '100%' }}>
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackLocation;
