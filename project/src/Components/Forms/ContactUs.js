import React, { useState, Fragment } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Pages/Footer";
import NavBar from "../Pages/NavBar";

function ContactUs() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const submitHandler = async (event) => {
    try {
          event.preventDefault();
          let contactDetails = {
            username,
            email,
            phone,
          };
          const response = await fetch('https://ecommerce-70037-default-rtdb.firebaseio.com/ecommerce/contact.json', {
            method: 'POST',
            body: JSON.stringify(contactDetails),
        })
        if (response) {
          Swal.fire("Submitted!", "We will contact you", "success");
          navigate("/login");
        }
    }catch (e) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }

  };
  return (
    <Fragment>
      <NavBar />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={submitHandler}>
            <h3> Contact Us</h3>
            <div className="mb-3">
              <label>User name</label>
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="form-control"
                placeholder="User name"
              />
            </div>
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
              <label>Phone</label>
              <input
                type="number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="form-control"
                placeholder="Phone"
              />
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

export default ContactUs;
