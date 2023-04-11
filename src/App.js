import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import View from './components/View';
import { fetchMissions } from './redux/missions/missionsSlice';
import { fetchRockets } from './redux/rockets/rocketsSlice';
import Rockets from './components/Rockets';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <>
      <View />
      <Routes>
        <Route path="/" element={<Rockets />} />
      </Routes>
    </>
  );
}

export default App;
