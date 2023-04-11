import React from 'react';
import { useSelector } from 'react-redux';
import RocketList from './RocketList';
import './styles/rockets.css';

const Rockets = () => {
  const data = useSelector((store) => store.rocket);
  const { rockets } = data;
  return (
    <ul className="rockets-container">
      {rockets.map((rocket) => <RocketList key={rocket.id} item={rocket} />)}
    </ul>
  );
};

export default Rockets;
