import React from 'react';
import { useTranslation } from 'react-i18next';
// import { PaymentElement } from '@stripe/react-stripe-js';
import Button from '../components/shared/Button';

const Payment = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="glass-panel" style={{ padding: '3rem', maxWidth: '500px', width: '100%' }}>
        <h2 style={{ textAlign: 'center', color: 'var(--primary)', marginBottom: '0.5rem' }}>{t('payment_title')}</h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Complete your transaction safely via Stripe.</p>

        <div style={{ 
          margin: '2rem 0', padding: '2rem', 
          background: 'rgba(255,255,255,0.9)', 
          border: '1px dashed #ccc', 
          borderRadius: 'var(--radius-md)',
          textAlign: 'center',
          color: 'var(--text-secondary)'
        }}>
          {/* <PaymentElement /> */}
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💳</div>
          <p>Stripe Payment Element Sandbox Mount</p>
        </div>

        <Button variant="primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
          Submit Payment Securely 🔒
        </Button>
      </div>
    </div>
  );
};

export default Payment;
