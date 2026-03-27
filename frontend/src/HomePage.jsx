import React from 'react';
import { Link } from 'react-router-dom';
import tonmaiImg from './images/tonmai.jpg';

const Home = () => {
  return (
    <div className="w-full font-sans overflow-x-hidden">
      
      {/* --- Hero Section --- */}
      <section className="relative min-h-screen flex items-center pt-[80px]">
        
        {/* Background Image & Overlays (Responsive Fix) */}
        <div className="absolute inset-0 z-0">
          <img 
            src={tonmaiImg} 
            alt="Nature background" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            
            {/* ฝั่งซ้าย: ปล่อยว่างไว้โชว์รูปต้นไม้ในพื้นหลัง (เฉพาะจอใหญ่) */}
            <div className="hidden md:block md:w-1/2"></div>

            {/* ฝั่งขวา: เนื้อหาข้อความ */}
            <div className="w-full md:w-1/2 text-left animate-fadeIn">
              <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl">
                <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#2e7d32] to-[#4ade80] mb-6 tracking-tighter leading-tight drop-shadow-sm">
                  TrashTrack+
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-10 max-w-[600px] font-medium">
                  เปลี่ยนอนาคตของการจัดการขยะด้วย <strong>TrashTrack+</strong> ถังขยะอัจฉริยะที่ช่วยคัดแยกขยะอัตโนมัติและติดตามสถานะได้แบบ <span className="text-[#2e7d32] font-bold">Real-Time</span> ลดของเสีย เพิ่มประสิทธิภาพ และทำให้การรีไซเคิลเป็นเรื่องง่ายกว่าที่เคย
                </p>
                
                <Link 
                  to="/report" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#31a34a] to-[#258238] text-white font-bold py-4 px-10 rounded-full uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 no-underline"
                  style={{ textDecoration: 'none' }}
                >
                  READ ME
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;