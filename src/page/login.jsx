import React, { useState } from "react"; // 1. เพิ่ม useState
import "../assets/css/auth.css";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  // 2. สร้าง State สำหรับเก็บค่าจาก Input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 3. ส่งข้อมูลไปที่ Backend (พอร์ต 5000)
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("เข้าสู่ระบบสำเร็จ: " + data.user.username);
        if (onLogin) onLogin(data.user); // ส่งข้อมูล user กลับไปที่ App.js
      } else {
        alert(data.message); // เช่น "ไม่พบผู้ใช้งาน" หรือ "รหัสผ่านไม่ถูกต้อง"
      }
    } catch (error) {
      alert("ไม่สามารถติดต่อ Server ได้");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="label-input">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // 4. อัปเดตค่า email
              required
            />
          </div>
          <div className="input-group">
            <label className="label-input">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // 5. อัปเดตค่า password
              required
            />
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
