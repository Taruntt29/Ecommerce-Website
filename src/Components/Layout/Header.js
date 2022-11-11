import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import Swal from "sweetalert2";
import {useNavigate,NavLink} from "react-router-dom";

function Header(props) {
  let history = useNavigate();
  
  const handleLogout = () => {
    localStorage.clear();
    history("/");
    Swal.fire("Good job!", "You have successfully Logout!", "success");
  };
  return (
    <Fragment>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to={'/dashboard'}>
           My Ecommerce
          </NavLink>

          <div className="d-flex align-items-center" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
             
              <li className="nav-item">
              <HeaderCartButton onClick={props.onShowCart}/>
              </li>
              <li className="nav-item">
                <div className="nav-link pointerMouse" onClick={handleLogout}>
                  Logout
                </div>
              </li>
       
            </ul>
          </div>

        </div>
      </nav>
      {/* <header className={classes.header}>
        <h1>My Ecommerce</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
        <div className="form-inline my-2 my-lg-0">
        <div className="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={handleLogout}>Logout</div>
      </div>
      </header> */}

    </Fragment>
  );
}

export default Header;
