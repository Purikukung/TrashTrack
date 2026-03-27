import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const linkClass = (path) => {
    let isActive = location.pathname === path || (path === '/home' && location.pathname === '/');
    
    // ให้เมนู ABOUT บน Navbar เป็นสีเขียว (Active) เมื่อเราอยู่ในหน้า Features หรือ Services
    if (path === '/about' && (location.pathname === '/features' || location.pathname === '/services')) {
      isActive = true;
    }

    return `relative pb-1 text-[17px] font-medium transition-all duration-300 flex items-center gap-1 ${
      isActive ? "!text-[#388e3c]" : "!text-[#388e3c]/70 hover:!text-[#388e3c]"
    }`;
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <div className="container mx-auto px-6 h-[80px] flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center space-x-2" style={{ textDecoration: 'none' }}>
            <span className="text-3xl font-black text-[#388e3c] tracking-tighter">
              TRASH<span className="text-[#388e3c]/70">TRACK+</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/home" className={linkClass('/home')} style={{ textDecoration: 'none' }}>HOME</Link>
            
            {/* ABOUT Dropdown */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              {/* เปลี่ยนจาก Link เป็น span เพื่อป้องกันการคลิกแล้วไปหน้า /about ที่ไม่มีอยู่จริง */}
              <span className={`${linkClass('/about')} cursor-pointer`} style={{ textDecoration: 'none' }}>
                ABOUT
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${openDropdown ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </span>

              {/* กล่อง Dropdown - ปรับขนาดเล็กลงและสีเขียว */}
              {openDropdown && (
                <div 
                  className="absolute top-[20px] left-0 w-44 bg-white border border-gray-100 shadow-xl rounded-lg py-2 z-50 animate-in fade-in zoom-in-95 duration-200"
                  onMouseEnter={() => setOpenDropdown(true)} // ค้างกล่องไว้เมื่อเมาส์อยู่ในพื้นที่กล่อง
                >
                  <Link 
                    to="/features" 
                    className="block px-4 py-2 text-[15px] !text-[#388e3c] font-semibold hover:bg-[#388e3c]/10 transition-colors"
                    style={{ textDecoration: 'none' }}
                    onClick={closeMenu}
                  >
                    FEATURES
                  </Link>

                  <div className="border-t border-gray-100 my-1"></div>

                  <Link 
                    to="/services" 
                    className="block px-4 py-2 text-[15px] !text-[#388e3c] font-semibold hover:bg-[#388e3c]/10 transition-colors"
                    style={{ textDecoration: 'none' }}
                    onClick={closeMenu}
                  >
                    SERVICES
                  </Link>
                </div>
              )}
            </div>

            <Link to="/creator" className={linkClass('/creator')} style={{ textDecoration: 'none' }}>CREATORS</Link>
            <Link to="/contact" className={linkClass('/contact')} style={{ textDecoration: 'none' }}>CONTACT</Link>
            
            <Link 
              to="/dashboard" 
              className="bg-[#388e3c] !text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#2e7d32] transition-colors shadow-md"
              style={{ textDecoration: 'none' }}
            >
              DASHBOARD
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#388e3c] p-2 z-50">
            {isMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6H4"></path></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay (คงเดิม) */}
      <div className={`md:hidden fixed inset-0 bg-white z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
          <Link to="/home" className={linkClass('/home')} style={{ textDecoration: 'none' }} onClick={closeMenu}>HOME</Link>
          <Link to="/features" className={linkClass('/features')} style={{ textDecoration: 'none' }} onClick={closeMenu}>FEATURES</Link>
          <Link to="/services" className={linkClass('/services')} style={{ textDecoration: 'none' }} onClick={closeMenu}>SERVICES</Link>
          <Link to="/creator" className={linkClass('/creator')} style={{ textDecoration: 'none' }} onClick={closeMenu}>CREATOR</Link>
          <Link to="/contact" className={linkClass('/contact')} style={{ textDecoration: 'none' }} onClick={closeMenu}>CONTACT</Link>
          <Link to="/dashboard" className="bg-[#388e3c] !text-white px-8 py-3 rounded-full font-bold text-base shadow-md" style={{ textDecoration: 'none' }} onClick={closeMenu}>DASHBOARD</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;