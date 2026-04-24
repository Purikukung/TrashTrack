const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

// --- แก้ไขจุดที่ 1: การตั้งค่า CORS ---
// ถ้าใช้ app.use(cors()) เฉยๆ จะเป็นการเปิดรับทุกที่ (ซึ่งง่ายแต่อาจไม่ปลอดภัยที่สุด)
// แนะนำให้ระบุ URL ของ Vercel ลงไป
app.use(cors({
  origin: [
    'https://trash-track-kappa.vercel.app', 
    'http://localhost:5173' //ไว้ใช้ทดสอบตอนรันในเครื่องตัวเอง
  ],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// --- แก้ไขจุดที่ 2: ลำดับการประกาศ Model ---
// ต้องประกาศ Schema และ Model *ก่อน* ที่จะเรียกใช้ใน mongoose.connect หรือ Route
const logSchema = new mongoose.Schema({
  class_eng: String,
  confidence: Number,
  timestamp: { type: Date, default: Date.now } // ใส่ default ไว้กันพลาดครับ
});

const Log = mongoose.model('Log', logSchema, 'logs');

// --- การเชื่อมต่อ MongoDB ---
const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  console.error('❌ MONGODB_URI is not defined!');
  process.exit(1);
}

mongoose.connect(mongoURI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch((err) => console.error('❌ Connection Error:', err));

// --- API Routes ---
app.get('/api/bins', async (req, res) => {
  try {
    const data = await Log.find().sort({ timestamp: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/bins', async (req, res) => {
  try {
    const newLog = new Log(req.body);
    await newLog.save();
    res.status(201).json({ message: 'บันทึกข้อมูลสำเร็จ!', data: newLog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// --- แก้ไขจุดที่ 3: Port สำหรับ Render ---
// Render จะสุ่ม Port ให้เราผ่าน process.env.PORT เสมอ
const PORT = process.env.PORT || 10000; 
app.listen(PORT, () => console.log(`🚀 Backend stand by on port ${PORT}`));