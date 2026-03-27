import React from 'react';

const Contact = () => {
  const contactDetails = [
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6 text-[#31a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "099-910-9870",
      href: "tel:0999109870"
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6 text-[#31a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "66010220@kmitl.ac.th",
      href: "mailto:66010220@kmitl.ac.th"
    },
    {
      id: 3,
      icon: (
        <svg className="w-6 h-6 text-[#31a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      label: "Line ID",
      value: "@trashtrack_plus",
      href: "#"
    }
  ];

  return (
    <div className="w-full min-h-screen pt-[80px] bg-white">
      <section id="contact" className="py-12 md:py-24">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 text-left border-l-8 border-[#31a34a] pl-6">
          <h2 className="text-5xl md:text-6xl font-black text-[#31a34a] tracking-tighter uppercase italic">
            Contact Us
          </h2>
          <p className="text-gray-400 font-bold mt-1 tracking-widest uppercase text-sm">
            Get in touch with the team
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Left */}
          <div className="w-full md:w-1/2 space-y-6">
            {contactDetails.map((item) => (
              <a 
                key={item.id}
                href={item.href}
                className="flex items-center p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-[#31a34a] hover:bg-white hover:shadow-xl transition-all duration-300 group no-underline"
                style={{ textDecoration: 'none' }}
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-black text-[#31a34a] uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="text-xl font-bold text-gray-800">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 bg-[#31a34a] rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
            
            <div className="relative z-10">
              <svg className="w-12 h-12 mb-6 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">Our Office</h3>
              <p className="text-lg text-green-50 leading-relaxed mb-8">
                10th floor, Faculty of Engineering,<br />
                King Mongkut's Institute of Technology Ladkrabang<br />
                Bangkok, Thailand
              </p>
              
              <div className="pt-6 border-t border-white/20">
                <p className="text-sm font-bold text-green-200 uppercase tracking-widest">Working Hours</p>
                <p className="text-lg">Mon - Fri: 09:00 - 17:00</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      </section>
    </div>
  );
};

export default Contact;