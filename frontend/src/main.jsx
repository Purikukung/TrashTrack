// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// --- เพิ่ม 2 บรรทัดนี้ ---
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ตัวนี้จะทำให้เมนู dropdown และปุ่มตอนจอเล็กแสดงผล
// -----------------------

import './App.css' // ไฟล์ CSS ส่วนตัวของคุณ (ถ้ามี)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)