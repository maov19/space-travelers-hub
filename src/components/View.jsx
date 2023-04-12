import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

import './styles/nav.css';
import Missions from './Missions';

const View = () => (
  <nav id="nav-bar">
    <img src={logo} alt="logo" />
    <h1>Space Travelers&apos; Hub</h1>
    <div className="nav-links">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/missions" element={<Missions />}>Missions</NavLink>
      <span>|</span>
      <NavLink to="/profile">My Profile</NavLink>
    </div>
  </nav>
);

export default View;
