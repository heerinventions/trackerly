import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

// Example async thunk to call a backend API to find location by phone number
export const findLocationByNumber = createAsyncThunk(
  'location/findByNumber',
  async (phoneNumber, { rejectWithValue }) => {
    try {
      const response = await api.post('/location/track', { phone: phoneNumber });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    searchedLocation: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearLocationData: (state) => {
      state.searchedLocation = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(findLocationByNumber.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(findLocationByNumber.fulfilled, (state, action) => {
        state.loading = false;
        state.searchedLocation = action.payload; // Saves data for the session
      })
      .addCase(findLocationByNumber.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to find location';
      });
  },
});

export const { clearLocationData } = locationSlice.actions;

export default locationSlice.reducer;
