import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SiFigma } from "react-icons/si";
import { FaGraduationCap, FaFileWord, FaFileExcel } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import fotoBadanPlaceholderMerah from "../assets/lig_merah_transparan.png";

function SkillsEducation() {
  return (
    <section id="skills" className="h-screen w-full snap-start relative bg-black flex items-center justify-start overflow-hidden px-6 md:px-12">
      
      {/* --- PERBAIKAN: Gradien Kiri Atas --- */}
      <div className="absolute top-0 left-0 w-[240px] md:w-[400px] h-[240px] md:h-[400px] bg-gradient-to-br from-orange-600/20 to-red-600/40 rounded-full blur-[80px] pointer-events-none z-0 translate-x-[-50%] translate-y-[-50%]"></div>

      {/* --- PERBAIKAN: Gradien Kiri Bawah --- */}
      <div className="absolute bottom-0 left-0 w-[240px] md:w-[360px] h-[240px] md:h-[360px] bg-red-700/30 rounded-full blur-[100px] pointer-events-none z-0 translate-x-[-50%] translate-y-[50%]"></div>

      {/* --- SISI KANAN: FOTO & GRADIENT --- */}
      <motion.div 
        className="absolute top-[10%] md:top-[-10%] right-[-10%] md:right-[-2%] w-[200px] md:w-[480px] h-[80vh] md:h-[120vh] z-0"
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
      <div className="relative w-full md:w-1/2 max-w-xl flex flex-col gap-5 z-10 mt-[-10%] md:mt-0 md:ml-24">
        
        {/* CARD 1: EDUCATION */}
        <motion.div 
          className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl"
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h3 className="text-lg font-medium text-gray-300 mb-5 flex items-center gap-3">
            <FaGraduationCap className="text-orange-400 text-xl" /> Education
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3 text-white">
              <div className="w-1.5 h-1.5 mt-2 rounded-full bg-red-500"></div>
              <div>
                <h4 className="text-base font-medium">MAN Insan Cendekia Gorontalo</h4>
                <p className="text-xs font-light text-gray-400">2021 - 2024</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-white">
              <div className="w-1.5 h-1.5 mt-2 rounded-full bg-orange-400"></div>
              <div>
                <h4 className="text-base font-medium">Universitas Islam Negeri Alauddin</h4>
                <p className="text-xs font-light text-gray-400">2024 - Present</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CARD 2: SKILLS */}
        <motion.div 
          className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl"
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h3 className="text-lg font-medium text-gray-300 mb-5">Skills & Tools</h3>
          <div className="grid grid-cols-4 gap-3 md:gap-5">
            
            {/* 1. Photoshop */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#31A8FF]/20 group-hover:border-[#31A8FF] transition-all duration-300">
                <span className="text-lg md:text-xl font-bold text-gray-400 group-hover:text-[#31A8FF] transition-colors font-sans">Ps</span>
              </div>
              <span className="text-[9px] md:text-[10px] font-light text-gray-500">Photoshop</span>
            </div>

            {/* 2. Illustrator */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#FF9A00]/20 group-hover:border-[#FF9A00] transition-all duration-300">
                <span className="text-lg md:text-xl font-bold text-gray-400 group-hover:text-[#FF9A00] transition-colors font-sans">Ai</span>
              </div>
              <span className="text-[9px] md:text-[10px] font-light text-gray-500">Illustrator</span>
            </div>

            {/* 3. After Effects */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#9999FF]/20 group-hover:border-[#9999FF] transition-all duration-300">
                <span className="text-lg md:text-xl font-bold text-gray-400 group-hover:text-[#9999FF] transition-colors font-sans">Ae</span>
              </div>
              <span className="text-[9px] md:text-[10px] font-light text-gray-500">After Effects</span>
            </div>

            {/* 4. Figma */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-pink-600/20 group-hover:border-pink-500 transition-all duration-300">
                <SiFigma className="text-xl md:text-2xl text-gray-400 group-hover:text-pink-400 transition-colors" />
              </div>
              <span className="text-[9px] md:text-[10px] font-light text-gray-500">Figma</span>
            </div>

            {/* 5. CapCut */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white transition-all duration-300">
                <span className="text-lg md:text-xl font-bold text-gray-400 group-hover:text-white transition-colors font-sans">Cc</span>
              </div>
              <span className="text-[9px] md:text-[10px] font-light text-gray-500">CapCut</span>
            </div>

            {/* 6. Word */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:border-blue-500 transition-all duration-300">
                <FaFileWord className="text-xl md:text-2xl text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <span className="text-[9px] md:text-[10px] font-light text-gray-500">Word</span>
            </div>

            {/* 7. Excel */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-green-600/20 group-hover:border-green-500 transition-all duration-300">
                <FaFileExcel className="text-xl md:text-2xl text-gray-400 group-hover:text-green-500 transition-colors" />
              </div>
              <span className="text-[9px] md:text-[10px] font-light text-gray-500">Excel</span>
            </div>

            {/* 8. VS Code */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-400 transition-all duration-300">
                <VscVscode className="text-xl md:text-2xl text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>
              <span className="text-[9px] md:text-[10px] font-light text-gray-500">VS Code</span>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Navbar Bawah */}
      <motion.nav 
        className="absolute bottom-5 w-[90%] max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-5 py-3 flex justify-between items-center z-50 shadow-xl left-1/2 -translate-x-1/2 md:bottom-[8%]"
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link to="/profile" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Profile</Link>
        <Link to="/skills" className="text-[10px] md:text-xs font-medium text-orange-400 transition-colors">Skills</Link>
        <Link to="/achievement" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Achievement</Link>
        <Link to="/contact" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Contact</Link>
      </motion.nav>

    </section>
  );
}

export default SkillsEducation;
