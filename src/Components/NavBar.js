import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/dashboard" className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>Dashboard</Link>
        </li>
        <li>
          <Link to="/add-crypto" className={`nav-link ${location.pathname === '/add-crypto' ? 'active' : ''}`}>Add Cryptocurrency</Link>
        </li>
        <li>
          <Link to="/remove-crypto" className={`nav-link ${location.pathname === '/remove-crypto' ? 'active' : ''}`}>Remove Cryptocurrency</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;