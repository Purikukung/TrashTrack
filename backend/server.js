const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// 1. โหลดตัวแปรจาก .env เข้าสู่ระบบ
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 2. ดึง URI จาก Environment Variable ที่เราตั้งไว้ในไฟล์ .env
const mongoURI = process.env.MONGODB_URI; // เปลี่ยนจาก MONGO_URI เป็น MONGODB_URI

// ตรวจสอบว่า MONGO_URI ถูกกำหนดค่าหรือไม่
if (!mongoURI) {
  console.error('❌ MONGODB_URI is not defined in the .env file. Please check your environment variables.'); // อัปเดตข้อความแจ้งเตือน
  process.exit(1); // ออกจากโปรแกรมทันทีถ้าไม่มี URI
}

mongoose.connect(mongoURI)
  .then(() => console.log('✅ Connected to MongoDB: WasteSystem'))
  .catch((err) => console.error('❌ Connection Error:', err));

// Schema ต้องตรงกับ Field ใน Atlas (class_eng, confidence, timestamp)
const logSchema = new mongoose.Schema({
  class_eng: String,
  confidence: Number,
  timestamp: Date
});

// บังคับให้ใช้ collection ชื่อ 'logs' เท่านั้น
const Log = mongoose.model('Log', logSchema, 'logs');

app.get('/api/bins', async (req, res) => {
  try {
    // ดึงข้อมูลและเรียงจากใหม่ไปเก่า
    const data = await Log.find().sort({ timestamp: -1 });

    if (data.length > 0) {
      console.log(`[${new Date().toLocaleTimeString()}] ✅ ดึงข้อมูลสำเร็จ: ${data.length} รายการ`);
    } else {
      console.log(`[${new Date().toLocaleTimeString()}] ℹ️ ดึงข้อมูลสำเร็จ แต่ไม่พบข้อมูลใน Collection 'logs' (0 รายการ)`);
      console.log('    โปรดตรวจสอบว่ามีข้อมูลใน MongoDB Atlas -> Database -> Collections -> logs หรือไม่');
    }

    res.json(data);
  } catch (error) {
    console.error(`[${new Date().toLocaleTimeString()}] ❌ เกิดข้อผิดพลาดในการดึงข้อมูล API:`, error);
    console.error('    รายละเอียดข้อผิดพลาด:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// --- เพิ่ม Route POST สำหรับรับข้อมูลจาก IoT หรือทดสอบเพิ่มข้อมูลเอง ---
app.post('/api/bins', async (req, res) => {
  try {
    const newLog = new Log(req.body);
    await newLog.save(); // บันทึกลง MongoDB
    res.status(201).json({ message: 'บันทึกข้อมูลสำเร็จ!', data: newLog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// แก้ไขบรรทัดที่เกือบสุดท้าย
console.log("กำลังดึงข้อมูลจาก Database:", mongoose.connection.name);
// เปลี่ยน LogModel เป็น Log
console.log("กำลังดึงข้อมูลจาก Collection:", Log.collection.name); 

app.listen(5000, () => console.log('🚀 Backend stand by on port 5000'));