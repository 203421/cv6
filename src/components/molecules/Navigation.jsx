import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">Experience</NavLink>
        </li>
        <li>
          <NavLink to="/education" activeClassName="active">Education</NavLink>
        </li>
        <li>
          <NavLink to="/skills" activeClassName="active">Skills</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
