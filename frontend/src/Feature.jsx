import React from 'react';

import binstImg from './images/binst.jpg';
import notiImg from './images/noti.jpg';
import mapbinImg from './images/mapbin.jpg';

const featuresData = [
  { id: 1, image: binstImg, text: "1. ระบบแสดงสถานะถังขยะแบบ Real Time" },
  { id: 2, image: notiImg, text: "2. ระบบการแจ้งเตือนอัตโนมัติ (Notification)" },
  { id: 3, image: mapbinImg, text: "3. แผนที่ถังขยะ (Smart Bin Map)" },
];

const Feature = () => {
  return (
    <div className="pt-[80px] bg-white">
      {/* --- FEATURES Section --- */}
      <section id="features" className="pt-12 pb-24 bg-gradient-to-b from-white to-green-50/40 relative z-20">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#31a34a] tracking-tighter uppercase drop-shadow-sm">
              Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuresData.map((feature) => (
              <div 
                key={feature.id} 
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(49,163,74,0.15)]"
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm w-14 h-14 flex items-center justify-center rounded-2xl font-black text-2xl text-[#31a34a] z-10 shadow-md group-hover:bg-[#31a34a] group-hover:text-white transition-colors duration-300">
                  0{feature.id}
                </div>

                <div className="h-[300px] overflow-hidden relative">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  <img 
                    src={feature.image} 
                    alt={feature.text} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                
                <div className="p-10 text-left relative bg-white z-20">
                  <div className="text-xl font-extrabold text-gray-800 leading-snug group-hover:text-[#31a34a] transition-colors">
                    {feature.text}
                  </div>
                  <div className="w-16 h-1.5 bg-gradient-to-r from-[#31a34a] to-[#4ade80] mt-6 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;