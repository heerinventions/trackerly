import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div style={{
      borderBottom: '1px solid var(--surface-border)',
      padding: '1.5rem 0'
    }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          textAlign: 'left',
          fontSize: '1.1rem',
          fontWeight: '600',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 0
        }}
      >
        {question}
        <span style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'var(--transition)' }}>
          ▼
        </span>
      </button>
      {isOpen && (
        <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { question: 'How accurate is the location tracking?', answer: 'Our advanced GPS integration relies on triangulation via cell towers and GPS satellites within a 5-10 meter radius.' },
    { question: 'Is this service legal?', answer: 'Yes, provided you have the tracking consent of the device owner or are legally permitted to track the device in your jurisdiction.' },
    { question: 'Does it work globally?', answer: 'Yes, Trackerly operates on an international level covering over 150 countries worldwide.' },
    { question: 'How do I cancel my subscription?', answer: 'You can cancel anytime from your account dashboard under Settings -> Billing.' }
  ];

  return (
    <div className="page-container">
      <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Frequently Asked Questions</h1>
        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
