import React from 'react';

// แก้ไขการ import รูปภาพให้ถูกต้อง โดยอ้างอิงจากโฟลเดอร์ /images และใช้ชื่อไฟล์ที่ถูกต้อง
import Webcam from './images/webcam.png';
import StepperMoter from './images/StepM.jpg';
import Rasp4 from './images/Rasp4.jpg';
import MQTT from './images/MQTT.png';
import Block_diagram from './images/Block_diagram.jpg';
import Flowchart from './images/Flowchart.jpg';

const Report = () => {
  return (
    <div className="pt-[80px] bg-gradient-to-b from-white to-green-50/40 font-sans">
      <main className="container mx-auto px-6 py-12 md:py-24">
        
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#31a34a] tracking-tighter uppercase drop-shadow-sm">
            TrashTrack+
          </h1>
          <p className="text-gray-500 font-semibold mt-4 text-xl">
            ถังขยะไฮเทคเพื่อการแยกและติดตามขยะอัจฉริยะ
          </p>
        </div>

        {/* Sections container */}
        <div className="space-y-24">
        
        {/* Introduction Section */}
        <section id="introduction" className="scroll-mt-24">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(49,163,74,0.1)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 border-l-4 border-[#31a34a] pl-4">
              INTRODUCTION / บทนำ
            </h2>
            <div className="text-gray-600 leading-relaxed text-justify space-y-6 text-lg">
                <p className="indent-8">ในปัจจุบันปัญหาการจัดการขยะถือเป็นหนึ่งในประเด็นสำคัญที่ส่งผลกระทบต่อสิ่งแวดล้อม และคุณภาพชีวิตของประชาชนอย่างหลีกเลี่ยงไม่ได้ การจัดเก็บขยะที่ไม่มีประสิทธิภาพ ไม่เป็นระบบ และขาดเทคโนโลยีที่เหมาะสม ทำให้เกิดปัญหาต่าง ๆ เช่น การสะสมของขยะในพื้นที่สาธารณะ ส่งกลิ่นเหม็น เป็นแหล่งเพาะพันธุ์เชื้อโรคและสัตว์พาหะนำโรค เช่น หนูและแมลงสาบ นอกจากนี้ การแยกประเภทขยะทีไม่ถูกต้องยังเป็นอุปสรรคต่อการรีไซเคิลและการกำจัดขยะอย่างเหมาะสม ซึ่งส่งผลให้มีขยะจำนวนมากถูกนำไปฝังกลบโดยไม่จำเป็น ก่อให้เกิดมลพิษทางดิน น้ำ และ อากาศ รวมถึงเพิ่มปริมาณก๊าซเรือนกระจกที่เป็นสาเหตุ
ของภาวะโลกร้อน แม้ว่าปัจจุบันจะมีมาตรการรณรงค์ให้ประชาชนตระหนักถึงการแยกขยะก่อนทิ้ง และการนำเทคโนโลยีมาใช้ในการบริหารจัดการขยะในบางพื้นที่ แต่ยังพบว่า ระบบถังขยะอัจฉริยะที่มีอยู่ในปัจจุบันยังคงมีข้อจำกัด ส่วนใหญ่เป็นเพียงถังขยะที่ติดตั้งเซ็นเซอร์วัดระดับขยะเพื่อแจ้งเตือนเมื่อถังเต็ม แต่ยังไม่มีการ
พัฒนาระบบที่สามารถแยกประเภทขยะโดยอัตโนมัติอย่างมีประสิทธิภาพ อีกทั้งข้อมูลจากถังขยะเหล่านี้มักไม่ถูกเชื่อมโยงกับแพลตฟอร์มออนไลน์ที่สามารถเข้าถึงและใช้งานได้สะดวก ส่งผลให้การจัดเก็บขยะยังคงล่าช้า และไม่สามารถแก้ไขปัญหาได้อย่างครอบคลุม แนวทางหนึ่งที่สามารถช่วยเพิ่มประสิทธิภาพในการจัดการขยะได้คือ การนำเทคโนโลยี Internet of Things (IoT) มาใช้ในระบบถังขยะอัจฉริยะ เนื่องจาก IoT ช่วยให้สามารถตรวจสอบและติดตามสถานะของถังขยะได้แบบเรียลไทม์ ผู้ใช้งานสามารถเข้าถึงข้อมูลระดับการเต็มของถังขยะ ข้อมูลประเภทขยะที่ถูกทิ้งและสามารถจัดการขยะได้อย่างเป็นระบบผ่านเว็บไซต์หรือแอปพลิเคชันบนสมาร์ทโฟน เทคโนโลยีนี้ยังสามารถช่วยหน่วยงานที่รับผิดชอบในการจัดเก็บขยะวางแผนเส้นทางเก็บขยะให้มีประสิทธิภาพมากขึ้น ลดการใช้พลังงานและต้นทุนในการดำเนินงาน   
โครงการนี้จึงมีเป้าหมายในการพัฒนาถังขยะอัจฉริยะที่สามารถแยกประเภทขยะได้อย่างแม่นยำ พร้อมส่งข้อมูลไปยังระบบออนไลน์ เพื่อให้ประชาชนและหน่วยงานที่เกี่ยวข้องสามารถตรวจสอบสถานะของถังขยะได้แบบเรียลไทม์ ซึ่งจะช่วยลดปัญหาการจัดเก็บขยะที่ไม่ทันการณ์ ลดปริมาณขยะที่ถูกกำจัดอย่างไม่เหมาะสมและส่งเสริมการรีไซเคิลให้มีประสิทธิภาพมากขึ้น อีกทั้งยังเป็นการนำเทคโนโลยีมาประยุกต์ใช้ให้เกิดประโยชน์สูงสุดในชีวิตประจำวัน อันจะนำไปสู่การจัดการขยะที่ยั่งยืน ลดผลกระทบต่อสิ่งแวดล้อม และช่วยให้เมืองมีความสะอาด น่าอยู่มากยิ่งขึ้น

</p>
                <p className="indent-8">
                  โครงการนี้จึงมีเป้าหมายในการพัฒนาถังขยะอัจฉริยะที่สามารถแยกประเภทขยะได้อย่างแม่นยำด้วยเทคโนโลยี <b>Internet of Things (IoT)</b> และ <b>ปัญญาประดิษฐ์ (AI)</b> 
                  เพื่อส่งเสริมการรีไซเคิลและช่วยให้เมืองมีความสะอาดน่าอยู่มากยิ่งขึ้น
                </p>
              <div>
                <h3 className="font-bold text-xl text-gray-800 mb-3">วัตถุประสงค์:</h3>
                <ul className="list-none space-y-2">
                  <li className="flex items-start"><svg className="w-6 h-6 text-[#31a34a] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg><span>เพื่อพัฒนาถังขยะอัจฉริยะที่สามารถแยกขยะประเภทต่างๆได้โดยอัตโนมัติ</span></li>
                  <li className="flex items-start"><svg className="w-6 h-6 text-[#31a34a] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg><span>เพื่อให้สามารถตรวจสอบสถานะการเต็มของถังขยะและส่งข้อมูลผ่านระบบ IoT ไปยังแพลตฟอร์มออนไลน์</span></li>
                  <li className="flex items-start"><svg className="w-6 h-6 text-[#31a34a] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg><span>เพื่อสนับสนุนการจัดการขยะอย่างมีประสิทธิภาพและเพิ่มความสะดวกในการรวบรวมขยะ</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Theory Section */}
        <section id="theory" className="scroll-mt-24">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(49,163,74,0.1)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 border-l-4 border-[#31a34a] pl-4">
              THEORY / ทฤษฎีและอุปกรณ์
            </h2>

            <div className="text-gray-600 leading-relaxed text-justify space-y-6 text-lg mb-12">
              <p className="indent-10">
                การจัดทำโครงงานครั้งนี้มีวัตถุประสงค์เพื่อพัฒนาถังขยะอัจฉริยะที่ผสมผสานเทคโนโลยี Internet of Things (IoT) โดยกระบวนการทำงานของระบบสามารถอธิบายเป็นลำดับขั้นตอนได้ดังนี้ เมื่อผู้ใช้งานทิ้งขยะลงในถังขยะอัจฉริยะ ระบบจะใช้เซ็นเซอร์ตรวจจับการเคลื่อนไหวเพื่อตรวจสอบว่ามีการทิ้งขยะเกิดขึ้นจากนั้นกล้องเว็บแคมที่ติดตั้งภายในถังจะทำการบันทึกภาพของขยะก่อนที่ขยะจะตกลงสู่ช่องจัดเก็บ เพื่อนำภาพไปใช้ในการประมวลผล ซึ่งภาพที่ได้จะถูกส่งไปยัง Raspberry Pi 4 ซึ่งทำหน้าที่เป็นหน่วยประมวลผลหลักของระบบ ผ่านโปรโตคอล MQTT (Message Queuing Telemetry Transport) ซึ่งใช้สำหรับการสื่อสารระหว่างอุปกรณ์ IoT โดย Raspberry Pi 4 จะทำการวิเคราะห์ภาพด้วยปัญญาประดิษฐ์ (AI) ที่ได้รับการฝึกฝนมา เพื่อจำแนกประเภทของขยะตามลักษณะวัสดุ เช่น พลาสติก แก้ว อะลูมิเนียม และขยะอินทรีย์ เมื่อ Raspberry Pi 4 ทำการวิเคราะห์และจำแนกประเภทขยะเสร็จเรียบร้อยแล้ว จะส่งคำสั่งไปยัง Stepper Motor เพื่อควบคุมกลไกภายในถังให้หมุนไปยังช่องที่เหมาะสมกับประเภทขยะนั้น ซึ่งระบบนี้ทำให้สามารถแยกขยะได้อย่างอัตโนมัติและถูกต้อง
นอกจากนี้ ระบบยังมีการจัดเก็บข้อมูลเกี่ยวกับประเภทของขยะที่ถูกทิ้งโดยจะอัปโหลดข้อมูลไปยัง MongoDB ผ่านระบบ Cloud Database ซึ่งข้อมูลดังกล่าวสามารถนำไปวิเคราะห์แนวโน้มปริมาณขยะในแต่ละวันและช่วยสนับสนุนการบริหารจัดการขยะให้มีประสิทธิภาพมากยิ่งขึ้น ซึ่งภายในถังยังมีการติดตั้งเซ็นเซอร์เพื่อตรวจวัดระดับขยะในแต่ละช่องของถังขยะ หากพบว่าช่องใดเต็มระบบจะส่งการแจ้งเตือน (Alert Notification) ไปยังอีเมลหรือแพลตฟอร์มของผู้ดูแลระบบ เพื่อให้สามารถดำเนินการจัดเก็บขยะได้อย่างทันท่วงที โดยข้อมูลทั้งหมดจากถังขยะอัจฉริยะจะถูกนำมาแสดงผลผ่าน Dashboard ซึ่งสามารถเข้าถึงได้ผ่านเว็บไซต์หรือแอปพลิเคชันบนสมาร์ตโฟน โดยผู้ดูแลระบบสามารถตรวจสอบปริมาณขยะที่ถูกทิ้ง สถานะของถังขยะ และประสิทธิภาพการทำงานของระบบได้แบบเรียลไทม์
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <EquipmentCard 
                title="Webcam" 
                img={Webcam} 
                desc="กล้องบันทึกภาพขยะเพื่อส่งไปยังหน่วยประมวลผลหลักในการวิเคราะห์ด้วย AI"
              />
              <EquipmentCard 
                title="Stepper Motor 28BYJ-48" 
                img={StepperMoter} 
                desc="มอเตอร์ควบคุมกลไกการหมุนช่องถังขยะไปยังจุดที่ถูกต้องตามประเภทขยะ"
              />
              <EquipmentCard 
                title="Raspberry Pi 4 Model B" 
                img={Rasp4} 
                desc="หน่วยประมวลผลหลัก (CPU 1.5GHz, RAM 4GB) ทำหน้าที่วิเคราะห์ AI และเชื่อมต่อ IoT"
              />
              <EquipmentCard 
                title="MQTT Protocol" 
                img={MQTT} 
                desc="โปรโตคอลการสื่อสารแบบ Lightweight สำหรับรับส่งข้อมูลระหว่างอุปกรณ์ IoT"
              />              
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8 border-t border-gray-200">
              <DiagramCard title="Block Diagram" img={Block_diagram} alt="Block Diagram" />
              <DiagramCard title="Flowchart" img={Flowchart} alt="Flowchart" />
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section id="conclusion" className="scroll-mt-24">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(49,163,74,0.1)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 border-l-4 border-[#31a34a] pl-4">
              CONCLUSION / บทสรุป
            </h2>
            <div className="text-gray-600 leading-relaxed text-justify space-y-4 text-lg">
              <p className="indent-8">
                จากโครงงาน TrashTrack+ เป็นระบบถังขยะอัจฉริยะที่นำเทคโนโลยี Internet of Things (IoT) มาประยุกต์ใช้ เพื่อแก้ไขปัญหาการจัดการขยะที่ไม่มีประสิทธิภาพ ซึ่งส่งผลกระทบต่อสิ่งแวดล้อมและสุขภาพของประชาชน โดยระบบสามารถแยกประเภทขยะอัตโนมัติ ตรวจสอบปริมาณขยะ และส่งข้อมูลไปยังแพลตฟอร์มออนไลน์แบบเรียลไทม์ ช่วยให้สามารถติดตามสถานะของถังขยะและวางแผนการจัดเก็บได้อย่างมีประสิทธิภาพ
ซึ่งระบบทำงานโดยใช้เซ็นเซอร์และกล้องในการตรวจจับและจำแนกประเภทของขยะ เช่น พลาสติก แก้ว อะลูมิเนียม และขยะอินทรีย์ ร่วมกับไมโครคอนโทรลเลอร์ในการประมวลผลข้อมูล โดยข้อมูลทั้งหมดจะถูกส่งไปยังแพลตฟอร์มออนไลน์ที่พัฒนาขึ้น ผู้ใช้งานสามารถตรวจสอบข้อมูลผ่านเว็บไซต์หรือแอปพลิเคชันได้อย่างสะดวก
จากการพัฒนาและทดสอบพบว่า ระบบสามารถแยกประเภทขยะและส่งข้อมูลได้อย่างถูกต้อง อย่างไรก็ตาม ยังมีข้อจำกัดบางประการ ได้แก่ ความแม่นยำในการจำแนกขยะ ความเร็วในการประมวลผลเมื่อมีปริมาณขยะจำนวนมากและต้นทุนของอุปกรณ์ที่อาจสูงในการนำไปใช้งานในวงกว้าง
แม้จะมีข้อจำกัดดังกล่าว โครงงานนี้ยังมีศักยภาพในการพัฒนาต่อยอดเพื่อเพิ่มประสิทธิภาพในการจัดการขยะ ช่วยลดปริมาณขยะตกค้าง ลดมลพิษ และสนับสนุนการพัฒนาเมืองอย่างยั่งยืนในอนาคต</p>
            </div>
          </div>
        </section>

        {/* Poster Section */}
        <section id="poster" className="scroll-mt-24">
          <div className="bg-gradient-to-r from-[#31a34a] to-[#258238] rounded-3xl p-10 md:p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-3xl lg:text-4xl font-black mb-2 uppercase tracking-tight">View Project Poster</h3>
              <p className="text-green-100 text-lg max-w-lg">
                ดูรายละเอียดสรุปผลงานในรูปแบบโปสเตอร์นำเสนอได้ที่นี่
              </p>
            </div>
            <a 
              href="https://www.canva.com/design/DAGjLaQJVPg/fjxha0tIsp0MXELnOuNJeg/edit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white !text-[#31a34a] font-bold py-3 px-8 rounded-full uppercase tracking-widest text-base shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 no-underline"
              style={{ textDecoration: 'none' }}
            >
              View Poster
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </section>
        </div>
      </main>
    </div>
  );
};

const EquipmentCard = ({ title, img, desc }) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col text-center">
    <div className="p-6 bg-gray-50 flex-shrink-0">
      <img src={img} alt={title} className="w-full h-36 object-contain transition-transform duration-500 group-hover:scale-110" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h4 className="font-extrabold text-lg mb-2 text-[#31a34a]">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed flex-grow">{desc}</p>
    </div>
  </div>
);

const DiagramCard = ({ title, img, alt }) => (
  <div className="text-center p-6 bg-gray-50/50 rounded-2xl border border-gray-200">
    <h4 className="font-bold text-xl mb-4 text-gray-700">{title}</h4>
    <div className="bg-white p-4 rounded-lg shadow-inner">
      <img src={img} alt={alt} className="mx-auto rounded-lg max-h-80 w-auto" />
    </div>
  </div>
);

export default Report;