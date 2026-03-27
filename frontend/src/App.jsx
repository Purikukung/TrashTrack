import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import CreatorPage from './CreatorPage';
import Feature from './Feature';
import Services from './Services';
import Report from './Report';
import Dashboard from './Dashboard';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* ใช้ flex-col และ min-h-screen เพื่อดัน Footer ลงล่างสุด */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* ส่วนเนื้อหาหลัก ใช้ flex-grow เพื่อกินพื้นที่ที่เหลือ */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/creator" element={<CreatorPage />} />
            <Route path="/features" element={<Feature />} />
            <Route path="/services" element={<Services />} />
            <Route path="/report" element={<Report />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Route อื่นๆ */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;