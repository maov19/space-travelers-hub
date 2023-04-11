import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles/nav.css';
import Missions from './Missions';

const View = () => (
  <nav id="nav-bar">
    <NavLink to="/">Rockets</NavLink>
    <NavLink to="/missions" element={<Missions />}>Missions</NavLink>
    <NavLink to="/profile">MyProfile</NavLink>
  </nav>
);

export default View;
