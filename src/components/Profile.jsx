import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SiFigma } from "react-icons/si";
import { FaGraduationCap, FaFileWord, FaFileExcel } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import fotoBadanPlaceholderMerah from "../assets/lig_merah_transparan.png";

function Profile() {
  return (
    <section id="profile" className="h-screen w-full snap-start relative bg-black flex items-center justify-start overflow-hidden px-6 md:px-12">
      
      {/* --- PERBAIKAN: Gradien Kiri Atas --- */}
      <div className="absolute top-0 left-0 w-[240px] md:w-[400px] h-[240px] md:h-[400px] bg-gradient-to-br from-orange-600/20 to-red-600/40 rounded-full blur-[80px] pointer-events-none z-0 translate-x-[-50%] translate-y-[-50%]"></div>

      {/* --- PERBAIKAN: Gradien Kiri Bawah --- */}
      <div className="absolute bottom-0 left-0 w-[240px] md:w-[360px] h-[240px] md:h-[360px] bg-red-700/30 rounded-full blur-[100px] pointer-events-none z-0 translate-x-[-50%] translate-y-[50%]"></div>

      {/* --- SISI KANAN: FOTO & GRADIENT (DESKTOP ONLY) --- */}
      <motion.div 
        className="hidden md:block absolute md:top-[-10%] md:right-[-2%] md:w-[480px] md:h-[120vh] z-0 opacity-100"
        initial={{ opacity: 0, x: 80 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1.2, ease: "easeOut" }} 
      >
        {/* --- GRADIENT RADIAL --- */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[900px] h-[400px] md:h-[900px] [background-image:radial-gradient(circle_at_center,_rgba(220,38,38,0.8)_25%,_rgba(220,38,38,0.4)_45%,_rgba(220,38,38,0.15)_70%,_rgba(220,38,38,0.05)_85%,_transparent_100%)] rounded-full z-0 pointer-events-none"
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3.5, delay: 0.2, ease: "easeOut" }}
        ></motion.div>

        {/* Container Foto Utama */}
        <div className="absolute inset-0 z-10 flex items-end justify-center">
          <img 
            src={fotoBadanPlaceholderMerah} 
            alt="Profile Basyir" 
            className="w-full h-full object-cover object-top drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]" 
          />
        </div>

        {/* Teks Nama yang Menimpa Foto */}
        <h2 className="absolute top-[65%] md:top-[70%] left-[-15%] md:left-[10%] text-3xl md:text-5xl font-light tracking-tight text-white z-20 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
          Hi, I am <br />
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 leading-tight">Basyir</span>
        </h2>
      </motion.div>

      {/* --- SISI KIRI: CARD CONTENT --- */}
      <div className="relative w-full md:w-1/2 max-w-xl flex flex-col gap-0 md:gap-8 z-10 mt-0 md:mt-0 md:ml-24">
        
        {/* ABOUT ME */}
        <motion.div 
          className="w-full z-20 relative flex flex-col gap-1 md:gap-2 -mb-20 md:mb-0 pt-4 md:pt-0"
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
            Ahmad Mubasysyir Yuz
          </h1>
          <p className="text-xs md:text-base font-light text-gray-300 leading-relaxed text-justify mt-2">
            A Informatics Engineering student specializing in Web Development, Cybersecurity, and AI. I blend technical skills with creative design to build impactful digital solutions. I am also deeply passionate about the intersection of finance and decentralized technology, actively exploring stocks, crypto, and Web3. Always learning, always building.
          </p>
        </motion.div>

        {/* --- MOBILE ONLY: FOTO ASLI (Dikembalikan persis seperti desain awal, hanya dipindah urutannya) --- */}
        <motion.div 
          className="flex md:hidden relative self-end right-[-10%] w-[250px] h-[55vh] z-0 opacity-100"
          initial={{ opacity: 0, x: 80 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1.2, ease: "easeOut" }} 
        >
          {/* --- GRADIENT RADIAL --- */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] [background-image:radial-gradient(circle_at_center,_rgba(220,38,38,0.8)_25%,_rgba(220,38,38,0.4)_45%,_rgba(220,38,38,0.15)_70%,_rgba(220,38,38,0.05)_85%,_transparent_100%)] rounded-full z-0 pointer-events-none"
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 3.5, delay: 0.2, ease: "easeOut" }}
          ></motion.div>

          {/* Container Foto Utama */}
          <div className="absolute inset-0 z-10 flex items-end justify-center">
            <img 
              src={fotoBadanPlaceholderMerah} 
              alt="Profile Basyir" 
              className="w-full h-full object-cover object-top drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]" 
            />
          </div>

          {/* Teks Nama yang Menimpa Foto */}
          <h2 className="absolute top-[45%] left-[-35%] text-3xl font-light tracking-tight text-white z-20 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
            Hi, I am <br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 leading-tight">Basyir</span>
          </h2>
        </motion.div>

        {/* CARD 1: EDUCATION */}
        <motion.div 
          className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl relative z-20 -mt-24 md:mt-0"
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h3 className="text-base md:text-lg font-medium text-gray-300 mb-4 md:mb-5 flex items-center gap-2 md:gap-3">
            <FaGraduationCap className="text-orange-400 text-xl" /> Education
          </h3>
          
          <div className="flex flex-col gap-0">
            {/* Item 1 */}
            <div className="flex items-stretch gap-4">
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-[6px] z-10 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                <div className="w-0 flex-1 border-l border-dashed border-gray-500 mt-1"></div>
              </div>
              <div className="pb-4 md:pb-6">
                <h4 className="text-sm md:text-lg font-medium text-white leading-tight">Universitas Islam Negeri Alauddin</h4>
                <p className="text-[10px] md:text-sm font-light text-gray-400 mt-1">2024 - Present</p>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-0 h-[6px] border-l border-dashed border-gray-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 z-10 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
              </div>
              <div>
                <h4 className="text-sm md:text-lg font-medium text-white leading-tight">MAN Insan Cendekia Gorontalo</h4>
                <p className="text-[10px] md:text-sm font-light text-gray-400 mt-1">2021 - 2024</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Navbar Bawah */}
      <motion.nav 
        className="absolute bottom-5 w-[90%] max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-5 py-3 flex justify-between items-center z-50 shadow-xl left-1/2 -translate-x-1/2 md:bottom-[8%]"
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link to="/profile" className="text-[10px] md:text-xs font-medium text-orange-400 transition-colors">Profile</Link>
        <Link to="/skills" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Skills</Link>
        <Link to="/achievement" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Achievement</Link>
        <Link to="/contact" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Contact</Link>
      </motion.nav>

    </section>
  );
}

export default Profile;
 