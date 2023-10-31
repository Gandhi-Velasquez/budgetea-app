// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-title-link">
        <div className="navbar-title">Budgetea</div>
      </Link>
      <div className="navbar-buttons">
      <Link to="/app">
        <button>Dashboard</button>
      </Link>
        {/* <button>Sign In</button>
        <button>Sign Up</button> */}
      </div>
    </div>
  );
};

export default Navbar;
