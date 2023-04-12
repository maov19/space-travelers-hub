import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

import './styles/nav.css';
import Missions from './Missions';

const View = () => (
  <nav id="nav-bar">
    <img src={logo} alt="logo" />
    <h1>Space Travelers&apos; Hub</h1>
    <NavLink to="/">Rockets</NavLink>
    <NavLink to="/missions" element={<Missions />}>Missions</NavLink>
    <p>|</p>
    <NavLink to="/profile">My Profile</NavLink>
  </nav>
);

export default View;
