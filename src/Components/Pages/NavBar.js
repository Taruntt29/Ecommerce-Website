import React from 'react'
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to={'/login'}>
          E-commerce
          </NavLink>

          <div className="d-flex align-items-center" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to={'/login'}>
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/signup'}>
                  Sign up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/home'}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/about'}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/contactus'}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
  )
}

export default NavBar
