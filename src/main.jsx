import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Integrate Providers
import { Provider } from 'react-redux';
import store from './store';
import './i18n'; // Initializes i18n
import StripeProvider from './components/StripeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <StripeProvider>
        <App />
      </StripeProvider>
    </Provider>
  </React.StrictMode>,
)
