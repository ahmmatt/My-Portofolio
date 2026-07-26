import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";
import cert3 from "../assets/cert3.jpg";
import cert4 from "../assets/cert4.jpg";
import cert5 from "../assets/cert5.jpg";
import cert6 from "../assets/cert6.jpg";
import cert7 from "../assets/cert7.jpg";
import cert8 from "../assets/cert8.jpg";

function Achievement() {
  return (
    <section id="achievement" className="h-screen w-full snap-start relative bg-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* --- INJEKSI CSS UNTUK ANIMASI INFINITE SCROLL --- */}
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            /* Bergerak sejauh 50% dari total panjang konten (tepat sepanjang 1 kelompok grid) */
            100% { transform: translateX(-50%); } 
          }
          .animate-scroll-continuous {
            display: flex;
            width: max-content;
            animation: scroll-left 35s linear infinite; /* 35s adalah kecepatannya, ubah jika ingin lebih cepat/lambat */
          }
          .animate-scroll-continuous:hover {
            animation-play-state: paused; /* Berhenti saat mouse diarahkan */
          }
        `}
      </style>

      {/* --- PENCAHAYAAN PREMIUM --- */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-orange-500/40 to-red-500/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-red-600/30 to-orange-500/20 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none z-0"></div>

      {/* --- HEADER KIRI ATAS --- */}
      <motion.div 
        className="absolute top-6 left-6 md:top-10 md:left-12 z-30 flex flex-col"
        initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-gray-400 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-1">Achievement</span>
        <h2 className="text-3xl md:text-4xl font-light text-black tracking-tight leading-tight">
          Certified & <br />
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Certification</span>
        </h2>
      </motion.div>

      {/* --- KONTEN UTAMA: SEAMLESS AUTO SCROLL --- */}
      <div className="w-full mt-24 md:mt-10 z-20 overflow-hidden flex">
        {/* Rel Panjang Animasi (Berisi 2 Grid yang dipisahkan oleh gap) */}
        <div className="animate-scroll-continuous gap-3 md:gap-5 py-10 px-4 items-center">
          
          {/* ================= KELOMPOK 1 ================= */}
          <div className="grid grid-rows-2 grid-flow-col gap-3 md:gap-5 items-center w-max">
            
            {/* Kolom 1 */}
            <div className="w-[160px] md:w-[240px] h-[120px] md:h-[180px] bg-gray-100 rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img src={cert1} alt="Certificate 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-[160px] md:w-[240px] h-[120px] md:h-[180px] bg-gray-100 rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img src={cert2} alt="Certificate 2" className="w-full h-full object-cover" />
            </div>

            {/* Kolom 2 (Menembus 2 Baris) - A4 */}
            <div className="w-[180px] md:w-[260px] row-span-2 h-full bg-gray-100 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
              <img src={cert7} alt="Certificate 7 A4" className="w-full h-full object-cover object-top" />
            </div>

            {/* Kolom 3 */}
            <div className="w-[160px] md:w-[240px] h-[120px] md:h-[180px] bg-gray-100 rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img src={cert3} alt="Certificate 3" className="w-full h-full object-cover" />
            </div>
            <div className="w-[160px] md:w-[240px] h-[120px] md:h-[180px] bg-gray-100 rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img src={cert4} alt="Certificate 4" className="w-full h-full object-cover" />
            </div>

            {/* Kolom 4 (Menembus 2 Baris) - A4 */}
            <div className="w-[180px] md:w-[260px] row-span-2 h-full bg-gray-100 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
              <img src={cert8} alt="Certificate 8 A4" className="w-full h-full object-cover object-top" />
            </div>

            {/* Kolom 5 */}
            <div className="w-[160px] md:w-[240px] h-[120px] md:h-[180px] bg-gray-100 rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img src={cert5} alt="Certificate 5" className="w-full h-full object-cover" />
            </div>
            <div className="w-[160px] md:w-[240px] h-[120px] md:h-[180px] bg-gray-100 rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img src={cert6} alt="Certificate 6" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* ================= KELOMPOK 2 (COPY PASTE PERSIS KELOMPOK 1) ================= */}
          <div className="grid grid-rows-2 grid-flow-col gap-3 md:gap-5 items-center w-max">
            
            {/* Kolom 1 */}
            <div className="w-[160px] md:w-[240px] h-[120px] md:h-[180px] bg-gray-100 rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img src={cert1} alt="Certificate 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-[160px] md:w-[240px] h-[120px] md:h-[180px] bg-gray-100 rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img src={cert2} alt="Certificate 2" className="w-full h-full object-cover" />
            </div>

            {/* Kolom 2 (Menembus 2 Baris) - A4 */}
            <div className="w-[180px] md:w-[260px] row-span-2 h-full bg-gray-100 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
              <img src={cert7} alt="Certificate 7 A4" className="w-full h-full object-cover object-top" />
            </div>

            {/* Kolom 3 */}
            <div className="w-[160px] md:w-[240px] h-[120px] md:h-[180px] bg-gray-100 rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img src={cert3} alt="Certificate 3" className="w-full h-full object-cover" />
            </div>
            <div className="w-[160px] md:w-[240px] h-[120px] md:h-[180px] bg-gray-100 rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img src={cert4} alt="Certificate 4" className="w-full h-full object-cover" />
            </div>

            {/* Kolom 4 (Menembus 2 Baris) - A4 */}
            <div className="w-[180px] md:w-[260px] row-span-2 h-full bg-gray-100 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
              <img src={cert8} alt="Certificate 8 A4" className="w-full h-full object-cover object-top" />
            </div>

            {/* Kolom 5 */}
            <div className="w-[160px] md:w-[240px] h-[120px] md:h-[180px] bg-gray-100 rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img src={cert5} alt="Certificate 5" className="w-full h-full object-cover" />
            </div>
            <div className="w-[160px] md:w-[240px] h-[120px] md:h-[180px] bg-gray-100 rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img src={cert6} alt="Certificate 6" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>

      {/* --- Navbar Bawah --- */}
      <motion.nav 
        className="absolute bottom-5 w-[90%] max-w-md bg-black/5 backdrop-blur-lg border border-black/10 rounded-full px-5 py-3 flex justify-between items-center z-50 shadow-lg left-1/2 -translate-x-1/2 md:bottom-[8%]"
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link to="/profile" className="text-[10px] md:text-xs font-semibold text-gray-700 hover:text-orange-500 transition-colors">Profile</Link>
        <Link to="/skills" className="text-[10px] md:text-xs font-semibold text-gray-700 hover:text-orange-500 transition-colors">Skills</Link>
        <Link to="/achievement" className="text-[10px] md:text-xs font-bold text-orange-500 transition-colors">Achievement</Link>
        <Link to="/contact" className="text-[10px] md:text-xs font-semibold text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
      </motion.nav>
    </section>
  );
}

export default Achievement;
