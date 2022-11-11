import React, { useState, Fragment } from "react";
import {Link,useNavigate,} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import NavBar from "../Pages/NavBar";
import "./Login.css";
import Footer from "../Pages/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      if (email && password) {
        const response = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBz6JqIjJGEQqp0WMZSfL5ZWMs9mfN-FFI",
          { email, password }
        );
        localStorage.setItem("userid", response.data.localId);
        if (response) {
          Swal.fire("Good job!", "You have successfully Login!", "success");
          navigate("/dashboard");
        }
      } else {
        Swal.fire("Incomplete login details");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: " Email not found!",
      });
    }
  };
  return (
    <Fragment>
      <NavBar />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={submitHandler}>
            <h3>Log In</h3>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right">
              Not registered?{" "}
              <Link className="nav-link" to={"/signup"}>
                SignUp?
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
}

export default Login;
