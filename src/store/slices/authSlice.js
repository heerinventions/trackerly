import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setCookie, removeCookie, getCookie } from '../../utils/cookies';
// import api from '../../utils/api'; // Use actual axios instance in production

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      // API call mockup:
      // const response = await api.post('/auth/login', credentials);
      // return response.data;
      
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (credentials.email && credentials.password) {
            resolve({ token: 'mock-jwt-token-xyz', user: { email: credentials.email, name: 'Admin User' } });
          } else {
            reject(new Error('Invalid credentials'));
          }
        }, 1000);
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null, // Depending on API you might want to fetch user data using token on load
    token: getCookie('token') || null,
    isAuthenticated: !!getCookie('token'),
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      removeCookie('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        setCookie('token', action.payload.token); // Save session in cookie
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
