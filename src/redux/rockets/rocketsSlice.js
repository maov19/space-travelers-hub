import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isLoading: true,
  error: '',
};

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk('rocket/fetchRockets', async () => {
  try {
    const resp = await fetch(url);
    return resp.json();
  } catch (error) {
    return error;
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
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(fetchRockets.fulfilled, (state, { payload }) => {
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
    });
    builder.addCase(fetchRockets.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }));
  },
});

export const { reserveRocket, cancelReserve } = rocketsSlice.actions;

export default rocketsSlice.reducer;
