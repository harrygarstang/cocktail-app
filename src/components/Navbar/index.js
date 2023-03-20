import React from "react";
import "./style.css";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navigation">
    <ul className="nav nav-tabs">
      <li className="nav-item nav1">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
        Home
        </NavLink>
      </li>
      <li className="nav-item nav2">
        <NavLink
          to="directory"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Directory
        </NavLink>
      </li>
      <li className="nav-item nav3">
        <NavLink
          to="locator"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Locator
        </NavLink>
      </li>
    </ul>
    </div>
  );
}

export default Navbar;