import React from 'react';

const Button = ({ children, onClick, variant = 'primary', type = 'button', disabled = false, style, className = '' }) => {
  const baseStyle = {
    padding: '0.75rem 1.5rem',
    borderRadius: 'var(--radius-full)',
    fontWeight: '600',
    fontFamily: 'Inter, sans-serif',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    transition: 'var(--transition)',
    outline: 'none',
    opacity: disabled ? 0.6 : 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    ...style
  };

  const variants = {
    primary: {
      background: 'var(--primary)',
      color: 'var(--text-light)',
      boxShadow: '0 4px 14px 0 rgba(79, 70, 229, 0.39)',
    },
    secondary: {
      background: 'var(--secondary)',
      color: 'var(--text-light)',
      boxShadow: '0 4px 14px 0 rgba(16, 185, 129, 0.39)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--primary)',
      border: '2px solid var(--primary)',
    }
  };

  const combinedStyle = { ...baseStyle, ...variants[variant] };

  const handleMouseEnter = (e) => {
    if (disabled) return;
    if (variant === 'primary') e.target.style.background = 'var(--primary-hover)';
    if (variant === 'secondary') e.target.style.background = 'var(--secondary-hover)';
    if (variant === 'outline') {
      e.target.style.background = 'var(--primary)';
      e.target.style.color = 'var(--text-light)';
    }
  };

  const handleMouseLeave = (e) => {
    if (disabled) return;
    if (variant === 'primary') e.target.style.background = 'var(--primary)';
    if (variant === 'secondary') e.target.style.background = 'var(--secondary)';
    if (variant === 'outline') {
      e.target.style.background = 'transparent';
      e.target.style.color = 'var(--primary)';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={combinedStyle}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;
