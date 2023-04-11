import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import View from './components/View';
import { fetchMissions } from './redux/missions/missionsSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <>
      <View />

    </>
  );
}

export default App;
