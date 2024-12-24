import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? style.activeLink : style.link}>For Business</NavLink>
        <NavLink to="/customerinfo" className={({ isActive }) => isActive ? style.activeLink : style.link}>For Customers</NavLink>
      </nav>
    </header>
  );
}

export default Header;