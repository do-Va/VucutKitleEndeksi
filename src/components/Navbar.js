import React from 'react';
import './sass/_navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="header-container">
      <header>
        <p className="logo">
          <Link to="/">BMI</Link>
        </p>
        <nav className="nav-container">
          <ul className="nav-links">
            <li className="nav-links-item">
              <Link to="/bmiNedir">Nedir</Link>
            </li>
            <li className="nav-links-item">
              <Link to="/">Hesapla</Link>
            </li>
            <li className="nav-links-item">
              <Link to="/bmiHesaplamalar">Hesaplamalar</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
