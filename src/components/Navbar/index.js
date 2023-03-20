import React from "react";
import "./style.css";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
      <h1 className="pageTitle">Cocktail Soulmate</h1>
      </NavLink>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link">Home</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/directory" className="navbar-link">Directory</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/locator" className="navbar-link">Locator</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
