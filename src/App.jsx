import { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Login from './page/login';
import Register from './page/register';
import Home from './page/home'; // Import มาแล้วต้องเอาไปใช้ใน Route

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate('/home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="App">
      <Routes>
        {/* 1. หน้า Login */}
        <Route 
          path="/" 
          element={<Login onLogin={handleLoginSuccess} />} 
        />

        {/* 2. หน้า Register */}
        <Route 
          path="/register" 
          element={<Register />} 
        />

        {/* 3. เพิ่มหน้า Home (แก้ตรงนี้) */}
        <Route 
          path="/home" 
          element={
            <Home onLogout={handleLogout} /> 
          } 
        />
      </Routes>
    </div>
  );
}

export default App;