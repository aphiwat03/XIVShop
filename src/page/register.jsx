import React, { useState } from "react"; // 1. เพิ่ม useState
import "../assets/css/auth.css";
import { Link, useNavigate } from "react-router-dom"; // เพิ่ม useNavigate เพื่อเปลี่ยนหน้า

function Register() {
  // 2. สร้าง State เก็บข้อมูล
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 3. ยิง API ไปที่ Backend
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password, phone }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("สมัครสมาชิกสำเร็จ!");
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("ไม่สามารถติดต่อ Server ได้");
    }
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {" "}
          {/* 4. ใส่ onSubmit */}
          <div className="input-group">
            <label className="label-input">Email</label>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label className="label-input">Username</label>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label className="label-input">Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label className="label-input">Phone</label>
            <input
              type="tel"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-btn">
            Sign Up
          </button>
        </form>

        <div className="font">
          <h4 style={{ color: "#585858" }}>
            Already have an account?{" "}
            <span>
              <Link to="/">Login</Link>
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Register;
