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
  reducers: {
    reserveRocket: (state, { payload }) => {
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.id === payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      return { ...state, rockets: updatedRockets };
    },
  },
  extraReducers: {
    [fetchRockets.pending]: (state) => ({ ...state, isLoading: true }),
    [fetchRockets.fulfilled]: (state, { payload }) => (
      { ...state, isLoading: false, rockets: payload }
    ),
    [fetchRockets.rejected]: (state, action) => (
      { ...state, isLoading: false, error: action.payload }
    ),
  },
});

export const { reserveRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
