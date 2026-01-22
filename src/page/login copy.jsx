import React from "react";
import "../assets/css/auth.css";
import { Link } from "react-router-dom";
function Login({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("กำลังเข้าสู่ระบบ...");
    if (onLogin) onLogin();
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="label-input">Email </label>
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-group">
            <label className="label-input">Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit" className="auth-btn">
            Sign In
          </button>
        </form>
        <div className="font">
          <h4 style={{ color: "#585858" }}>
            Don't have an account?{" "}
            <span>
              <Link to="/register">Sign up</Link>
            </span>
          </h4>
          <a>Forgot Password</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
