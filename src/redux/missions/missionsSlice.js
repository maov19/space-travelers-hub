import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/missions?limit=10');
    return response.json();
  } catch (error) {
    return error;
  }
});

export const joinMission = createAsyncThunk(
  'missions/joinMission',
  async (missionId, { getState }) => {
    const { missions } = getState().missions;
    const updatedMissions = missions.map((mission) => (mission.missionId === missionId ? {
      ...mission, reserved: !mission.reserved,
    } : mission));
    return updatedMissions;
  },
);

export const cancelMission = createAsyncThunk(
  'missions/cancelMission',
  async (missionId, { getState }) => {
    const { missions } = getState().missions;
    const updatedMissions = missions.map((mission) => (mission.missionId === missionId ? {
      ...mission, reserved: false,
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
      .addCase(fetchMissions.fulfilled, (state, action) => {
        const newMissions = [];
        action.payload.map((mission) => (
          newMissions.push({
            missionId: mission.mission_id,
            missionName: mission.mission_name,
            description: mission.description,
          })
        ));
        return { ...state, missions: newMissions };
      })
      .addCase(joinMission.fulfilled, (state, action) => (
        { ...state, missions: action.payload }
      ))
      .addCase(cancelMission.fulfilled, (state, action) => (
        { ...state, missions: action.payload }
      ));
  },
});

export default missionsSlice.reducer;
