# 📍 Trackerly

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)

Trackerly is a modern, premium web application built with React and Vite that allows users to seamlessly track locations via phone numbers. It features a stunning glassmorphism design system, secure authentication, multi-language support, and integrated payment flows.

## ✨ Features

- **High-Precision Tracking:** Core interface to track devices leveraging placeholder API connectivity.
- **Premium UI/UX:** A bespoke glassmorphism design system with custom CSS variables, highly reusable React components (`FeatureCard`, `PricingCard`, `Button`), and smooth micro-animations.
- **Robust State Management:** Redux Toolkit orchestrates API calls (`createAsyncThunk`) and caches session data globally.
- **Secure Authentication:** Token-based login and signup flows protected by manual browser-cookie utilities and `<ProtectedRoute>` React Router wrappers.
- **Multi-language Support (i18n):** Integrated `i18next` providing instantaneous localization between English and Spanish.
- **Stripe Payments:** `Elements` wrapper enabling secure transaction sandboxing on the Payment route.
- **Dynamic Dashboard:** A protected user dashboard analyzing tracking history and account metrics.

## 🛠️ Tech Stack

- **Frontend Framework:** React 18, Vite
- **Routing:** React Router DOM (v6)
- **State Management:** Redux Toolkit (`react-redux`)
- **Localization:** `i18next`, `react-i18next`
- **Payments:** Stripe (`@stripe/stripe-js`, `@stripe/react-stripe-js`)
- **HTTP Client:** Axios
- **Styling:** Vanilla CSS (CSS Variables, Flexbox/Grid, Glassmorphism)

## 📂 Project Structure

```text
src/
├── components/
│   ├── features/    # Cards and complex UI blocks (PricingCard, FeatureCard)
│   └── shared/      # Global layout components (Navbar, Footer, Button, ProtectedRoute)
├── locales/         # i18n JSON translation files (en, es)
├── pages/           # Route-level views (Home, Dashboard, Login, TrackLocation, etc.)
├── store/           # Redux setup
│   ├── index.js     # Store configuration
│   └── slices/      # Redux slices (authSlice, locationSlice)
├── utils/           # Helper functions
│   ├── api.js       # Axios instance & interceptors
│   ├── cookies.js   # Browser cookie storage handlers
│   └── validation.js# Input format validators
├── App.jsx          # Root routing configuration
├── index.css        # Global CSS design tokens
└── main.jsx         # React DOM entry point & Providers
```

## 📄 License
This project is proprietary and confidential. All rights reserved by Trackerly Inc.
