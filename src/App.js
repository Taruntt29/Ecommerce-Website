import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "./Components/Forms/Login";
import SignUp from "./Components/Forms/SignUp";
import Dashboard from "./Components/Pages/Dashboard";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import ContactUs from "./Components/Forms/ContactUs";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/contactus" element={<ContactUs/>} />
    </Routes>
  </Router>
  //   <Router>
  //   <div className="App">
  //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //       <div className="container">
  //         <NavLink className="navbar-brand" to={'/login'}>
  //         E-commerce
  //         </NavLink>

  //         <div className="d-flex align-items-center" id="navbarTogglerDemo02">
  //           <ul className="navbar-nav ml-auto">
  //             <li className="nav-item">
  //               <NavLink className="nav-link" to={'/login'}>
  //                 Login
  //               </NavLink>
  //             </li>
  //             <li className="nav-item">
  //               <NavLink className="nav-link" to={'/signup'}>
  //                 Sign up
  //               </NavLink>
  //             </li>
  //             <li className="nav-item">
  //               <NavLink className="nav-link" to={'/home'}>
  //                 Home
  //               </NavLink>
  //             </li>
  //             <li className="nav-item">
  //               <NavLink className="nav-link" to={'/about'}>
  //                 About
  //               </NavLink>
  //             </li>
  //           </ul>
  //         </div>

  //       </div>
  //     </nav>
  //     <div className="auth-wrapper">
  //       <div className="auth-inner">
  //         <Routes>
  //           <Route exact path="/" element={<Login />} />
  //           <Route path="/login" element={<Login />} />
  //           <Route path="/signup" element={<SignUp/>} />
  //         </Routes>
  //       </div>
  //     </div>
  //   </div>
  // </Router>
  );
};

export default App;
