import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './slices/locationSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    location: locationReducer,
    auth: authReducer,
  },
});

export default store;
