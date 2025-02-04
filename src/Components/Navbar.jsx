//to comment NavLink line: Press Ctrl+k and ctrl+c
//to move up and change same column line:ctr+alt+up/down arrows
//to copy and paste same line in next line :alt+shift+up/down arrows

import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink className={(e)=>{return e.isActive ? "violet" : ""}} to="/">
          <li>Home</li>
        </NavLink>
        <NavLink className={(e)=>{return e.isActive ? "violet" : ""}} to="/about">
          <li>About</li>
        </NavLink>
        <NavLink className={(e)=>{return e.isActive ? "violet" : ""}} to="/login">
          <li>Login</li>
        </NavLink>
        <NavLink className={(e)=>{return e.isActive ? "violet" : ""}} to="/user/:username">
          <li>User</li>
        </NavLink>
        
      </nav>
    </div>
  );
};

export default Navbar;
