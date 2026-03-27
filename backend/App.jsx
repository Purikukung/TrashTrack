import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    // เรียกใช้งาน API จาก Backend ที่เรารันไว้บนพอร์ต 5000
    fetch('http://localhost:5000/api/status')
      .then((res) => res.json())
      .then((data) => {
        setBackendMessage(data.message);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setBackendMessage('ไม่สามารถเชื่อมต่อ Backend ได้ กรุณาตรวจสอบว่า Backend รันอยู่หรือไม่');
      });
  }, []);

  return (
    <div className="App">
      <h1>React Frontend ใหม่ 🚀</h1>
      <p>สถานะจาก API: <strong style={{ color: 'green' }}>{backendMessage || 'กำลังโหลดข้อมูล...'}</strong></p>
    </div>
  );
}

export default App;