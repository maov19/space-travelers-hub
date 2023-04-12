import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
};

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions?limit=10');
    return response.data.map((
      { mission_id: missionId, mission_name: missionName, description },
    ) => ({
      mission_id: missionId,
      mission_name: missionName,
      description,
    }));
  },
);

export const joinMission = createAsyncThunk(
  'missions/joinMission',
  async (missionId, { getState }) => {
    const { missions } = getState().missions;
    const updatedMissions = missions.map((mission) => (mission.mission_id === missionId ? {
      ...mission, reserved: !mission.reserved,
    } : mission));
    return updatedMissions;
  },
);

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.fulfilled, (state, action) => (
        { ...state, missions: action.payload }
      ))
      .addCase(joinMission.fulfilled, (state, action) => (
        { ...state, missions: action.payload }
      ));
  },
});

export default missionsSlice.reducer;
