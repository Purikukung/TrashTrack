import React from 'react';

import dataImg from './images/data.jpg';
import iotImg from './images/iot.jpg';
import aiImg from './images/ai.jpg';

const servicesData = [
  {
    id: 1,
    image: dataImg,
    title: "Data Analytics & Reports",
    points: ["ระบบวิเคราะห์ข้อมูล", "แสดงข้อมูลสถิติการใช้งาน"]
  },
  {
    id: 2,
    image: iotImg,
    title: "IoT Setting & Control",
    points: ["ตั้งค่าการแจ้งเตือน", "ควบคุมการทำงานของ TrashTrack+"]
  },
  {
    id: 3,
    image: aiImg,
    title: "AI Sorting Status",
    points: ["แสดงประเภทขยะที่ถูกจัดแยก", "ระบบแจ้งเตือนการค้นหาประเภทขยะ"]
  }
];

const Services = () => {
  return (
    <div className="pt-[80px] bg-white">
      {/* --- SERVICES Section --- */}
      <section id="services" className="pt-12 pb-24 bg-gradient-to-b from-white to-green-50/40 relative z-20">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#31a34a] tracking-tighter uppercase drop-shadow-sm">
              Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {servicesData.map((service) => (
              <div 
                key={service.id} 
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(49,163,74,0.15)] flex flex-col"
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm w-14 h-14 flex items-center justify-center rounded-2xl font-black text-2xl text-[#31a34a] z-10 shadow-md group-hover:bg-[#31a34a] group-hover:text-white transition-colors duration-300">
                  0{service.id}
                </div>

                <div className="h-[260px] overflow-hidden relative">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                
                <div className="p-10 text-left relative bg-white z-20 flex-grow flex flex-col">
                  <h3 className="text-2xl font-extrabold text-gray-800 mb-6 group-hover:text-[#31a34a] transition-colors">
                    {service.title}
                  </h3>
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    {service.points.map((point, index) => (
                      <p key={index} className="flex items-start text-gray-600 font-semibold">
                        <svg className="w-5 h-5 text-[#31a34a] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        {point}
                      </p>
                    ))}
                  </div>

                  <div className="w-16 h-1.5 bg-gradient-to-r from-[#31a34a] to-[#4ade80] mt-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;