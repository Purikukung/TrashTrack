import { useState } from "react";
import Nook from './images/nook.jpg';
import Praew from './images/praew.jpg';
import Fang from './images/fang.jpg';
import Night from './images/night.jpg';
import Tang from './images/tang.jpg';
import Guy from './images/guy.jpg';

const members = [
  {
    name: "นายกฤตเมธ เพ็ชรรักษา",
    nickname: "Nook/นุ๊ก",
    img: Nook,
    id: "66010024",
    role: "AI & Data Analytic",
    email: "66010024@kmitl.ac.th",
  },
  {
    name: "นางสาวณหทัย พนาวงศ์",
    nickname: "Praew/แพรว",
    img: Praew,
    id: "66010220",
    role: "Full Stack Developer",
    email: "66010220@kmitl.ac.th",
  },
  {
    name: "นางสาวณัฐวดี ปานนุ้ย",
    nickname: "Fang/ฟาง",
    img: Fang,
    id: "66010263",
    role: "IoT Engineer",
    email: "66010263@kmitl.ac.th",
  },
  {
    name: "นางสาวธันยมัย จิตต์ณรงค์",
    nickname: "Night/ไนท์",
    img: Night,
    id: "66010375",
    role: "UX/UI Designer",
    email: "66010375@kmitl.ac.th",
  },
  {
    name: "นางสาวรุ่งอรุณ แก้วสุวรรณ์",
    nickname: "Tang/แตง",
    img: Tang,
    id: "66010710",
    role: "IoT Engineer",
    email: "66010710@kmitl.ac.th",
  },
  {
    name: "นายวีระชัย ศรพรหม",
    nickname: "Guy/กาย",
    img: Guy,
    id: "66010780",
    role: "AI & Data Analytic",
    email: "66010780@kmitl.ac.th",
  },
];

export default function Members() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white min-h-screen pt-[80px]">
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-black text-[#31a34a] tracking-tighter uppercase">
              Our Team
            </h2>
            <p className="text-gray-500 font-semibold mt-2 text-lg">
              ทีมงานผู้พัฒนาโปรเจกต์ TrashTrack+
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelected(member)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="h-72 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                  <img
                    src={member.img}
                    alt={member.nickname}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110 rounded-2xl"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="font-bold text-xl text-gray-800 group-hover:text-[#31a34a] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#31a34a] mt-1">
                    ({member.nickname})
                  </p>
                  <p className="text-xs text-gray-500 mt-2 uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dialog */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center backdrop-blur-sm z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl flex flex-col md:flex-row overflow-hidden animate-scaleIn relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 bg-gray-100/50 hover:bg-gray-200/80 rounded-full p-1.5 transition-colors z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Image part */}
            <div className="w-full md:w-2/5 flex-shrink-0 bg-gray-50 p-6 flex items-center justify-center">
              <img
                src={selected.img}
                alt={selected.nickname}
                className="max-h-[300px] w-auto object-contain rounded-2xl shadow-md"
              />
            </div>

            {/* Details part */}
            <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
              <p className="text-sm font-bold text-[#31a34a] uppercase tracking-widest">
                {selected.role}
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">
                {selected.name}
              </h3>
              <p className="text-xl text-gray-500 font-medium mb-6">
                ({selected.nickname})
              </p>

              <div className="space-y-4 border-t border-gray-200 pt-6">
                {/* Student ID */}
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0L9 4m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  <span className="text-gray-700 font-mono">{selected.id}</span>
                </div>
                {/* Email */}
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <a href={`mailto:${selected.email}`} className="!text-gray-700 hover:!text-[#31a34a] font-mono transition-colors break-all no-underline" style={{ textDecoration: 'none' }}>{selected.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}