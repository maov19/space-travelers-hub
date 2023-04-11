/* eslint-disable */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions?limit=10');
    return response.data.map(({ mission_id, mission_name, description }) => ({
      mission_id,
      mission_name,
      description,
    }));
  }
);

export const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.fulfilled, (state, action) => {
        // Store the first 10 missions in the state
        state.push(...action.payload);
      });
  }
});

export default missionsSlice.reducer;


