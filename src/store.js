import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './redux/missions/missionsSlice';
import rocketsReducer from './redux/rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rocket: rocketsReducer,
  },
});

export default store;
