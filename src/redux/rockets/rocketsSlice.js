import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  isLoading: true,
  error: '',
};

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk('rocket/fetchRockets', async (_, thunkAPI) => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});

const rocketsSlice = createSlice({
  name: 'rocket',
  initialState,
  extraReducers: {
    [fetchRockets.pending]: (state) => ({ ...state, isLoading: true }),
    [fetchRockets.fulfilled]: (state, action) => (
      { ...state, isLoading: false, rockets: action.payload }
    ),
    [fetchRockets.rejected]: (state, action) => (
      { ...state, isLoading: false, error: action.payload }
    ),
  },
});

export default rocketsSlice.reducer;
