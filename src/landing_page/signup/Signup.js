import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import "./LoginSignup.css";

const Signup = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`main-wrapper ${isActive ? "active-mode" : ""}`}>
      {/* Login Form */}
      <div className="form-container login-section">
        <form action="#">
          <h1 className="form-heading">Login</h1>
          <div className="field-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className="field-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="forgot-area">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="main-btn" onClick={(e) => alert("logged in successfully")}>Login</button>
          <p className="social-text">or login with social platforms</p>
          <div className="icon-group">
            <a href="mailto:jaisingpureshubham800@gmail.com"><i className="bx bxl-gmail"></i></a>
            <a href="https://www.instagram.com/shubham_jaisingpure_sj/"><i className="bx bxl-instagram"></i></a>
            <a href="https://github.com/Shubhamjaisingpure"><i className="bx bxl-github"></i></a>
            <a href="https://www.linkedin.com/in/shubham-jaisingpure-865aa5289/"><i className="bx bxl-linkedin"></i></a>
          </div>
        </form>
      </div>

      {/* Register Form */}
      <div className="form-container register-section">
        <form action="#">
          <h1 className="form-heading">Registration</h1>
          <div className="field-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className="field-box">
            <input type="email" placeholder="Email" required />
            <i className="bx bxs-envelope"></i>
          </div>
          <div className="field-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button type="submit" className="main-btn" onClick={(e) => alert("Signed up successfully")}>Register</button>
          <p className="social-text">or register with social platforms</p>
          <div className="icon-group">
            <a href="mailto:jaisingpureshubham800@gmail.com"><i className="bx bxl-gmail"></i></a>
            <a href="https://www.instagram.com/shubham_jaisingpure_sj/"><i className="bx bxl-instagram"></i></a>
            <a href="https://github.com/Shubhamjaisingpure"><i className="bx bxl-github"></i></a>
            <a href="https://www.linkedin.com/in/shubham-jaisingpure-865aa5289/"><i className="bx bxl-linkedin"></i></a>
          </div>
        </form>
      </div>

      {/* Toggle Panels */}
      <div className="switch-box">
        <div className="switch-panel panel-left">
          <h1 className="switch-title">Hello, Welcome!</h1>
          <p className="switch-text">Don't have an account?</p>
          <button className="main-btn switch-register-btn" onClick={() => setIsActive(true)}>
            Register
          </button>
        </div>

        <div className="switch-panel panel-right">
          <h1 className="switch-title">Welcome Back!</h1>
          <p className="switch-text">Already have an account?</p>
          <button className="main-btn switch-login-btn" onClick={() => setIsActive(false)}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
