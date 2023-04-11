import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import View from './components/View';
import { fetchRockets } from './redux/rockets/rocketsSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <>
      <View />
    </>
  );
}

export default App;
