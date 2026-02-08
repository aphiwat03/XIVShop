import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Login from "./page/login";
import Register from "./page/register";
import Home from "./page/home";
import Product from "./page/Product/product";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate("/home");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login onLogin={handleLoginSuccess} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/home" element={<Home onLogout={handleLogout} />} />
      </Routes>
    </div>
  );
}

export default App;
