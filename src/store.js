import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './redux/missions/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    // rocket: rocketsReducer,
  },
});

export default store;
