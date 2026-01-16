import '../assets/css/auth.css';
import React from 'react';
import { Link } from 'react-router-dom'; // 1. อย่าลืม import Link

function Register() {
  
  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form>
          <div className="input-group">
            <label className="label-input">Email</label>
            <input type="email" placeholder="Email" />
          </div>
          
          <div className="input-group">
            <label className="label-input">Password</label>
            <input type="password" placeholder="Password" />
          </div>
          
          <div className="input-group">
            <label className="label-input">Phone</label>
            <input type="tel" placeholder="Phone number" />
          </div>
          
          <button type="submit" className="auth-btn">Sign Up</button>
        </form>

        <div className='font'>
        <h4 style={{color: '#585858'}}>
            Already have an account? <span><Link to="/">Login</Link></span>
        </h4>
        </div>
      </div>
    </div>
  );
}

export default Register;