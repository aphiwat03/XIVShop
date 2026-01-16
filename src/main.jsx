import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. เอา BrowserRouter มาครอบ App ไว้ตรงนี้ครับ สำคัญมาก! */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)