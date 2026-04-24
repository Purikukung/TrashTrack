# 🗑️ TrashTrack+

**TrashTrack+** คือระบบถังขยะอัจฉริยะที่ผสมผสานเทคโนโลยี **Internet of Things (IoT)** และ **ปัญญาประดิษฐ์ (AI)** เพื่อแก้ไขปัญหาการจัดการขยะที่ไม่มีประสิทธิภาพ โดยระบบสามารถคัดแยกประเภทขยะอัตโนมัติ ตรวจสอบปริมาณขยะ และส่งข้อมูลไปยังแพลตฟอร์มออนไลน์ (Dashboard) แบบ Real-Time ช่วยให้สามารถติดตามสถานะของถังขยะและวางแผนการจัดเก็บได้อย่างมีประสิทธิภาพ

---

**Demo** : https://trash-track-kappa.vercel.app/

---

## ✨ Features (จุดเด่นของระบบ)

1. **ระบบคัดแยกขยะด้วย AI (AI Sorting Status)**
   - ใช้กล้อง Webcam และ AI ประมวลผลภาพบน Raspberry Pi 4 เพื่อจำแนกประเภทขยะ 4 ประเภท ได้แก่ พลาสติก (Plastic), แก้ว (Glass), กระป๋อง/โลหะ (Metal) และ ขยะอินทรีย์ (Biological)
   - สั่งการ Stepper Motor เพื่อหมุนช่องทิ้งขยะให้ตรงกับประเภทขยะอัตโนมัติ
2. **ระบบแสดงสถานะแบบ Real-Time (Real-Time Dashboard)**
   - ตรวจสอบปริมาณขยะ เปอร์เซ็นต์ความแม่นยำของ AI และสถิติรวมของขยะแต่ละประเภทผ่านหน้า Web Application
3. **แผนที่ถังขยะ (Smart Bin Map)**
   - แสดงจุดวางถังขยะต่างๆ เช่น โรงอาหารพระเทพ, อาคารเรียนรวม 12 ชั้น, โรงอาหาร A และ โรงอาหาร C
4. **ระบบแจ้งเตือนอัตโนมัติ (Notification)**
   - แจ้งเตือนเมื่อขยะเต็มถังผ่านอีเมลหรือแพลตฟอร์มของผู้ดูแลระบบ

---

## 💻 Technology Stack

### Frontend
- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS, Bootstrap
- **Routing:** React Router DOM

### Backend
- **Framework:** Node.js, Express.js
- **Database:** MongoDB (ผ่าน Mongoose)
- **API Communication:** REST API, CORS

### Hardware & IoT
- **Processing Unit:** Raspberry Pi 4 Model B
- **Sensors & Actuators:** Webcam, Stepper Motor 28BYJ-48
- **Communication Protocol:** MQTT Protocol

---

## 🚀 Installation & Setup

### สิ่งที่ต้องมี (Prerequisites)
- Node.js (v16 ขึ้นไป)
- MongoDB URI (สำหรับเชื่อมต่อฐานข้อมูล)

### 1. การติดตั้ง Backend
```bash
cd backend
npm install
```
สร้างไฟล์ `.env` ในโฟลเดอร์ `backend` และกำหนดค่าดังนี้:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=10000
```
เริ่มรัน Backend Server:
```bash
node server.js
# หรือ npm run dev (ถ้ามี nodemon)
```

### 2. การติดตั้ง Frontend
```bash
cd frontend
npm install
```
เริ่มรัน Frontend Development Server:
```bash
npm run dev
```
เปิดเบราว์เซอร์และเข้าไปที่: `http://localhost:5173`

---

## 👥 Our Team (ทีมผู้พัฒนา)

| ชื่อ-นามสกุล | ชื่อเล่น | บทบาท | รหัสนักศึกษา |
| :--- | :---: | :--- | :---: |
| นายกฤตเมธ เพ็ชรรักษา | Nook (นุ๊ก) | AI & Data Analytic | 66010024 |
| นางสาวณหทัย พนาวงศ์ | Praew (แพรว) | Full Stack Developer | 66010220 |
| นางสาวณัฐวดี ปานนุ้ย | Fang (ฟาง) | IoT Engineer | 66010263 |
| นางสาวธันยมัย จิตต์ณรงค์ | Night (ไนท์) | UX/UI Designer | 66010375 |
| นางสาวรุ่งอรุณ แก้วสุวรรณ์ | Tang (แตง) | IoT Engineer | 66010710 |
| นายวีระชัย ศรพรหม | Guy (กาย) | AI & Data Analytic | 66010780 |

*คณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง*

---

## 📄 License

This project is developed as part of a university project at KMITL.