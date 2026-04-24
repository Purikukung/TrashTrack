import React, { useState, useEffect } from 'react';
import PhraThep from './images/phraThep.jpg';
import E12 from './images/E12.jpg';
import A from './images/A.jpg';
import C from './images/C.jpg';

// Import รูปภาพ (เช็คชื่อไฟล์ให้ตรงนะครับ)
import Plastic from './images/plastic.jpg';
import Glass from './images/glass.jpg';
import Metal from './images/metal.jpg';
import Biological from './images/biological.jpg'; 

const Dashboard = () => {
  const [trashData, setTrashData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ฟังก์ชันช่วยดึงค่าประเภทขยะแบบปลอดภัย (ดักช่องว่างและตัวเล็กตัวใหญ่)
  const getSafeType = (item) => {
    const rawType = item.class_eng || item.type || item.class || "";
    return rawType.toString().toLowerCase().trim();
  };

  const getTrashImage = (type) => {
    const t = getSafeType({ class_eng: type });
    const images = { 'plastic': Plastic, 'glass': Glass, 'metal': Metal, 'biological': Biological };
    return images[t] || Biological; // ถ้าหาไม่เจอให้เหมารูปอินทรีย์ไว้ก่อน
  };

  const translateType = (type) => {
    const t = getSafeType({ class_eng: type });
    const types = { 'plastic': 'พลาสติก', 'glass': 'แก้ว', 'metal': 'กระป๋อง/โลหะ', 'biological': 'ขยะอินทรีย์' };
    return types[t] || 'ขยะอินทรีย์';
  };

  useEffect(() => {
    const fetchData = async () => {
      // ไม่ต้องตั้งค่า loading ที่นี่แล้ว เพราะจะจัดการใน finally
      setError(null); // เอาคอมเมนต์ออก: เคลียร์ค่า Error ทุกครั้ง เพื่อให้หน้าเว็บกลับมาปกติถ้าเซิร์ฟเวอร์กลับมาทำงาน
      try {
        // เพิ่ม cache: 'no-store' เพื่อบังคับให้เบราว์เซอร์ดึงข้อมูลใหม่จากเซิร์ฟเวอร์เสมอ (ห้ามจำค่าเก่า)
        const response = await fetch('https://trashtrack-37tf.onrender.com/api/bins', {
          cache: 'no-store'
        }); 
        
        if (!response.ok) {
          // ถ้า Server ตอบกลับมาด้วยสถานะที่ไม่ใช่ 2xx (เช่น 404, 500)
          throw new Error(`เกิดข้อผิดพลาดจากเซิร์ฟเวอร์: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const sortedData = data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        setTrashData(sortedData);

      } catch (err) {
        // ส่วนนี้จะจับ Error ที่เกิดจาก Network (เชื่อมต่อไม่ได้) หรือ Error ที่เรา throw เอง
        console.error("Fetch Error:", err); // แสดง Error จริงๆ ใน Console ของ Browser (กด F12)
        if (err.name === 'TypeError') {
          setError("ไม่สามารถเชื่อมต่อ Backend ได้ กรุณาตรวจสอบว่าเซิร์ฟเวอร์ (server.js) รันอยู่หรือไม่");
        } else {
          setError(err.message);
        }
      } finally {
        // ไม่ว่าจะสำเร็จหรือล้มเหลว ให้เอาสถานะ Loading ออกเสมอ
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  // --- LOGIC การนับ (แก้ไขใหม่ให้นับแม่นขึ้น) ---
  const latestData = trashData[0] || null;

  const countData = {
    plastic: trashData.filter(item => getSafeType(item) === 'plastic').length,
    glass: trashData.filter(item => getSafeType(item) === 'glass').length,
    metal: trashData.filter(item => getSafeType(item) === 'metal').length,
    // สำหรับขยะอินทรีย์: ถ้านับตรงๆ ไม่ขึ้น ให้ใช้ระบบ "หักลบจากทั้งหมด" เพื่อความชัวร์
    biological: trashData.length - (
      trashData.filter(item => getSafeType(item) === 'plastic').length +
      trashData.filter(item => getSafeType(item) === 'glass').length +
      trashData.filter(item => getSafeType(item) === 'metal').length
    )
  };

  const totalItems = trashData.length || 1;

  if (loading) return <div className="h-screen flex items-center justify-center font-bold text-2xl text-green-600">Loading...</div>;

  // --- เพิ่มส่วนแสดงผลเมื่อเกิด Error ---
  if (error) {
    return (
      <div className="min-h-screen pt-[80px] bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-6 py-12 text-center">
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
                <p className="font-bold text-2xl">เกิดข้อผิดพลาด</p>
                <p className="mt-2 text-lg">{error}</p>
                <p className="mt-4 text-sm text-gray-600">โปรดตรวจสอบ Console ของ Backend (Terminal) และ Console ของ Browser (กด F12) เพื่อดูรายละเอียดเพิ่มเติม</p>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-[80px] bg-gray-50 pb-20">
      <div className="container mx-auto px-6 py-12">
        
        {/* SECTION 1: จอใหญ่ข้อมูลล่าสุด */}
        <div className="bg-white rounded-[40px] shadow-2xl p-10 mb-12 border flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <div className="mb-10 border-l-8 border-green-600 pl-6">
              <h1 className="text-4xl md:text-5xl font-black text-green-600 uppercase tracking-tighter">Smart Bin Dashboard</h1>
              <p className="text-gray-400 font-bold mt-2 text-lg">Real-Time Logs Status</p>
            </div>

            {latestData ? (
              <div className="space-y-6">
                <div className="text-4xl font-bold text-gray-800">
                  ประเภทขยะ : <span className="text-red-500 border-b-4 border-red-500 pb-1 px-2 italic uppercase">
                    {translateType(latestData.class_eng)}
                  </span>
                </div>
                <div className="text-4xl font-bold text-gray-800">
                  เปอร์เซ็นต์ : <span className="text-red-500 border-b-4 border-red-500 pb-1 px-2 italic font-black">
                    {Number(latestData.confidence).toFixed(2)} %
                  </span>
                </div>
                <p className="text-gray-400 font-bold text-xl pt-4">Update: {new Date(latestData.timestamp).toLocaleString('th-TH')}</p>
              </div>
            ) : (
              <div className="text-2xl text-gray-400 font-bold italic">No data from sensors...</div>
            )}
          </div>

          <div className="w-72 h-72 md:w-[400px] md:h-[400px] bg-white rounded-[50px] flex items-center justify-center p-10 border-4 border-dashed border-gray-200 shadow-inner mt-10 md:mt-0">
            {latestData && (
              <img src={getTrashImage(latestData.class_eng)} className="w-full h-full object-contain" alt="Trash" />
            )}
          </div>
        </div>

        {/* SECTION 2: สถิติทั้งหมด */}
        <div className="bg-white rounded-[40px] shadow-xl p-10 border">
          <h2 className="text-3xl font-black text-gray-800 mb-12 border-b-4 border-gray-50 pb-4">สถิติรวม ({trashData.length} รายการ)</h2>
          <div className="grid grid-cols-1 gap-10">
            {[
              { label: 'พลาสติก', key: 'plastic', color: 'bg-green-500' },
              { label: 'แก้ว', key: 'glass', color: 'bg-teal-500' },
              { label: 'กระป๋อง/โลหะ', key: 'metal', color: 'bg-yellow-500' },
              { label: 'ขยะอินทรีย์', key: 'biological', color: 'bg-red-500' }
            ].map((item) => {
              const count = countData[item.key] || 0;
              const percentage = ((count / totalItems) * 100).toFixed(1);
              return (
                <div key={item.key} className="space-y-3">
                  <div className="flex justify-between items-end px-4">
                    <span className="text-2xl font-black text-gray-700">{item.label}</span>
                    <span className="text-2xl font-black text-gray-900">{percentage}% ({count} ชิ้น)</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-12 shadow-inner border overflow-hidden">
                    <div className={`${item.color} h-full transition-all duration-1000 shadow-lg`} style={{ width: `${percentage}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* --- SECTION 3: Locations (สถานที่ตั้งถังขยะ) --- */}
        <div className="bg-white rounded-[40px] shadow-xl p-10 border border-gray-100 mt-12">
          <h2 className="text-3xl font-black text-gray-800 mb-10 border-b-4 border-gray-50 pb-6 flex items-center">
            <span className="bg-green-600 w-4 h-12 mr-5 rounded-xl shadow-sm"></span>
            ตำแหน่งจุดวางถังขยะ (Bin Locations)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 1, name: 'โรงอาหารพระเทพ', img: PhraThep },
              { id: 2, name: 'อาคารเรียนรวมวิศวกรรมศาสตร์ (ตึก 12 ชั้น)', img: E12 },
              { id: 3, name: 'โรงอาหาร A', img: A },
              { id: 4, name: 'โรงอาหาร C', img: C }
            ].map((loc) => (
              <div key={loc.id} className="group overflow-hidden rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 bg-gray-50">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={loc.img} 
                    alt={loc.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center bg-white">
                  <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-bold mb-2 uppercase">Location {loc.id}</span>
                  <h3 className="text-xl font-black text-gray-800">{loc.name}</h3>
                  <div className="mt-4 flex items-center justify-center text-green-500 font-bold">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></span>
                    Active
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;