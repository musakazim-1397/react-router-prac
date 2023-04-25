import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <NavLink to={'/home'}>Home</NavLink>
    <NavLink to={'/about'}>About</NavLink>
    <NavLink to={'/users'}>Users</NavLink>
    </>
  )
}

export default NavBar;