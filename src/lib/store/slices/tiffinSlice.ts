import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface TiffinState {
  unclearedTiffins: any[];
  clearedTiffins: any[];
  allTiffins: any[];
  totalTiffins: number;
  totalUnclearedTiffins: number;
  clearedSummary: any[];
  loading: boolean;
  error: string | null;
}

const initialState: TiffinState = {
  unclearedTiffins: [],
  clearedTiffins: [],
  allTiffins: [],
  totalTiffins: 0,
  totalUnclearedTiffins: 0,
  clearedSummary: [],
  loading: false,
  error: null,
};

// Async thunk to fetch tiffin data for a given user
export const fetchTiffinData = createAsyncThunk(
  'tiffin/fetchData',
  async (userId: any, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/tiffins?userId=${userId}&summary=true`);
      // Assuming your API response contains the keys below
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const tiffinSlice = createSlice({
  name: 'tiffin',
  initialState,
  reducers: {
    // add synchronous actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTiffinData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTiffinData.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.unclearedTiffins = action.payload.unclearedTiffins;
        state.clearedTiffins = action.payload.clearedTiffins;
        state.allTiffins = action.payload.allTiffins;
        state.totalTiffins = action.payload.totalTiffins;
        state.totalUnclearedTiffins = action.payload.totalUnclearedTiffins;
        state.clearedSummary = action.payload.clearedSummary;
      })
      .addCase(fetchTiffinData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default tiffinSlice.reducer;
