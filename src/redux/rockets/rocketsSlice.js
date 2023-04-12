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
    cancelReserve: (state, { payload }) => {
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.id === payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      return { ...state, rockets: updatedRockets };
    },
  },
  extraReducers: {
    [fetchRockets.pending]: (state) => ({ ...state, isLoading: true }),
    [fetchRockets.fulfilled]: (state, { payload }) => {
      const newRockets = [];
      payload.map((rocket) => (
        newRockets.push({
          id: rocket.id,
          rocket_name: rocket.rocket_name,
          description: rocket.description,
          flickr_images: rocket.flickr_images[0],
        })
      ));
      return { ...state, isLoading: false, rockets: newRockets };
    },
    [fetchRockets.rejected]: (state, action) => (
      { ...state, isLoading: false, error: action.payload }
    ),
  },
});

export const { reserveRocket, cancelReserve } = rocketsSlice.actions;

export default rocketsSlice.reducer;
