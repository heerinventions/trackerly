import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import Button from './Button';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="glass-panel" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      margin: '1rem',
      position: 'sticky',
      top: '1rem',
      zIndex: 1000,
      borderRadius: 'var(--radius-full)'
    }}>
      <Link to="/" style={{ 
        fontFamily: 'Outfit, sans-serif', 
        fontWeight: '700', 
        fontSize: '1.5rem', 
        color: 'var(--primary)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <div style={{
          width: '32px', height: '32px', 
          background: 'var(--primary)', 
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <span style={{ color: 'white', fontSize: '1.2rem' }}>📍</span>
        </div>
        Trackerly
      </Link>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', fontWeight: '500' }}>
        <Link to="/track">Track</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button 
          onClick={toggleLanguage} 
          style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            fontSize: '1rem', fontWeight: '600', color: 'var(--text-secondary)',
            marginRight: '1rem'
          }}
        >
          {i18n.language === 'en' ? 'EN' : 'ES'} 🌐
        </button>

        {isAuthenticated ? (
          <>
            <Link to="/dashboard">
              <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Dashboard</span>
            </Link>
            <Button variant="outline" onClick={handleLogout} style={{ padding: '0.5rem 1rem' }}>Logout</Button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Log In</Link>
            <Link to="/signup">
              <Button variant="primary" style={{ padding: '0.5rem 1rem' }}>Sign Up</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
