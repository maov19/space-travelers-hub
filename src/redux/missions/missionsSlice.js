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

const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state, { payload }) => {
      const updatedMissions = state.missions.map((mission) => (mission.missionId === payload ? {
        ...mission, reserved: !mission.reserved,
      } : mission));
      return { ...state, missions: updatedMissions };
    },
    cancelMission: (state, { payload }) => {
      const updatedMissions = state.missions.map((mission) => (mission.missionId === payload ? {
        ...mission, reserved: false,
      } : mission));
      return { ...state, missions: updatedMissions };
    },
  },
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
      });
  },
});

export const { joinMission, cancelMission } = missionsSlice.actions;

export default missionsSlice.reducer;
