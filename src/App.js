import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import View from './components/View';
import { fetchMissions } from './redux/missions/missionsSlice';
import { fetchRockets } from './redux/rockets/rocketsSlice';
import Missions from './components/Missions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <>
      <View />
      <Missions />
    </>
  );
}

export default App;
