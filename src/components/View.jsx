import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/nav.css';

const View = () => (
  <nav id="nav-bar">
    <NavLink to="/">Rockets</NavLink>
    <NavLink to="/missions">Missions</NavLink>
    <NavLink to="/profile">MyProfile</NavLink>
  </nav>
);

export default View;
