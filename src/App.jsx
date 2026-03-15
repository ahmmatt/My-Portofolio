// Tambahkan baris ini HANYA di bagian paling atas file App.jsx
import { useState } from "react";
import { motion } from "framer-motion";
// Tambahkan SiTiktok di sini
import { SiFigma, SiTiktok } from "react-icons/si";
// Tambahkan FaWhatsapp dan FaExternalLinkAlt di dalam kurung kurawal ini
import { 
  FaGraduationCap, FaFileWord, FaFileExcel, FaInstagram, 
  FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark,
  FaEnvelope, FaLinkedin, FaGithub, FaArrowRight, FaClock,
  FaWhatsapp, FaExternalLinkAlt 
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

import fotoBadanPlaceholder from "./assets/lig_hitam.png"; 
import fotoWajahPlaceholder from "./assets/lig_hitam_face.png";
import fotoBadanPlaceholderMerah from "./assets/lig_merah_transparan.png";
// Import video Anda dari folder assets
import videoDrama1 from "./assets/drama1.mp4"; 
import videoDrama2 from "./assets/drama2.mp4"; 
import videoDrama3 from "./assets/drama3.mp4"; 
import videoDrama4 from "./assets/drama4.mp4"; 
import videoDrama5 from "./assets/drama5.mp4"; 
import videoDrama6 from "./assets/drama6.mp4"; 
import videoDrama7 from "./assets/drama7.mp4";
// === TAMBAHKAN IMPORT FOTO SOSIAL MEDIA DI SINI ===
import socmed1 from "./assets/socmed1.jpg"; 
import socmed2 from "./assets/socmed2.jpg"; 
import socmed3 from "./assets/socmed3.jpg"; 
import socmed4 from "./assets/socmed4.jpg"; 
import socmed5 from "./assets/socmed5.jpg"; 
import socmed6 from "./assets/socmed6.jpg";
import socmed7 from "./assets/socmed7.png";
import socmed8 from "./assets/socmed8.png";
import socmed9 from "./assets/socmed9.png";
import socmed10 from "./assets/socmed10.png";
import socmed11 from "./assets/socmed11.png";
import socmedBanner1 from "./assets/banner1.png";
import socmedBanner2 from "./assets/banner2.png";
import socmedpp from "./assets/pp_luigisww.png";
// === TAMBAHKAN IMPORT VIDEO SOSIAL MEDIA DI SINI ===
import videoh1 from "./assets/video1.mp4"; 
import videoh2 from "./assets/video2.mp4"; 
import videoh3 from "./assets/video3.mp4"; 
import videoh4 from "./assets/video4.mp4"; 
import videoh5 from "./assets/video5.mp4"; 
// === TAMBAHKAN IMPORT FOTO WEBSITE DI SINI ===
import web1 from "./assets/web1.png";
import web2 from "./assets/web2.png";
// === TAMBAHKAN IMPORT FOTO SERTIFIKAT DI SINI ===
import cert1 from "./assets/cert1.jpg";
import cert2 from "./assets/cert2.jpg";
import cert3 from "./assets/cert3.jpg";
import cert4 from "./assets/cert4.jpg";
import cert5 from "./assets/cert5.jpg";
import cert6 from "./assets/cert6.jpg";
import cert7 from "./assets/cert7.jpg";
import cert8 from "./assets/cert8.jpg";

function App() {
  // === LOGIKA SECTION 7: 5 DAY CHALLENGE ===
  const [activeDay, setActiveDay] = useState(1);

  // Database mini untuk menyimpan data tiap hari (Disesuaikan jadi 5 Hari)
  // Database mini untuk menyimpan data tiap hari (Ditambahkan data views)
  const challengeData = [
    { id: 1, video: videoh1, views: "85.2K", likes: "4,2K"},
    { id: 2, video: videoh2, views: "812.4K", likes: "61,5K"},
    { id: 3, video: videoh3, views: "2.2M", likes: "136K"},
    { id: 4, video: videoh4, views: "268.1K", likes: "34,9K"},
    { id: 5, video: videoh5, views: "185.8K", likes: "20,4K"},
  ];

  const currentDayData = challengeData.find((data) => data.id === activeDay);

  return (
    <div className="no-scrollbar h-screen w-full overflow-y-auto snap-y snap-mandatory scroll-smooth bg-black text-white font-montserrat overflow-x-hidden">
      {/* ================= SECTION 1: WELCOME SCREEN ================= */}
      <motion.section
        className="h-screen w-full snap-start flex items-center justify-center relative z-50"
        initial={{ backgroundColor: "#000000" }}
        animate={{ backgroundColor: "#ffffff" }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-medium text-black tracking-tighter"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
        >
          WELCOME
        </motion.h1>
      </motion.section>

      {/* ================= SECTION 2: PROFILE (CINEMATIC STYLE) ================= */}
      <section id="profile" className="h-screen w-full snap-start relative bg-black flex flex-col items-center justify-end overflow-hidden">
        
        {/* Latar Belakang Pencahayaan Premium (Diperkecil Proporsional) */}
        <div className="absolute top-[10%] right-[-5%] w-[480px] h-[480px] bg-gradient-to-br from-red-600/20 to-orange-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

        {/* FOTO 2: WAJAH BESAR */}
        <motion.div 
          className="absolute md:top-[-45%] right-0 w-full md:w-[90%] h-[110vh] z-0 opacity-70"
          initial={{ opacity: 0 }} 
          whileInView={{ 
            opacity: 0.7,
            filter: ["blur(0px)", "blur(8px)", "blur(0px)"], 
            transition: { duration: 4, delay: 0.1, ease: "easeOut", filter: { repeat: Infinity, duration: 5 } } 
          }}
        >
          <img 
            src={fotoWajahPlaceholder} 
            alt="Wajah Background" 
            className="w-full h-full object-cover object-top [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]" 
          />
        </motion.div>

        {/* FOTO 1: WAJAH + BADAN (Diperkecil Proporsional) */}
        <motion.div 
          className="absolute bottom-[35%] md:bottom-[32%] left-[10%] md:left-[27%] w-[160px] md:w-[260px] z-10"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 6.0, delay: 0.3, ease: "easeOut" }}
        >
          <img 
            src={fotoBadanPlaceholder} 
            alt="Badan" 
            className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]" 
          />
        </motion.div>

        {/* TEKS: AHMAD */}
        <motion.h2 
          className="absolute bottom-[45%] md:bottom-[45%] right-[15%] md:right-[20%] text-xl md:text-4xl font-extralight tracking-widest text-gray-300 z-20"
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
        >
          Ahmad
        </motion.h2>

        {/* TEKS RAKSASA: Mubasysyir */}
        <motion.h1 
          className="absolute bottom-[22%] md:bottom-[25%] w-full text-center text-5xl md:text-[8rem] lg:text-[10rem] font-medium tracking-tighter text-white z-20 leading-none drop-shadow-2xl"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
        >
          Mubasysyir
        </motion.h1>

        {/* CARD DESKRIPSI */}
        <motion.div 
          className="absolute bottom-[10%] md:bottom-[14%] w-full z-30 flex justify-center"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="w-full h-full pt-10 pb-5 px-5 bg-gradient-to-t from-black via-black/100 to-transparent backdrop-blur-[4px] flex justify-center border-t border-white/[0.03]">
            <p className="max-w-3xl text-xs md:text-lg font-light leading-relaxed text-gray-300 text-center tracking-wide">
              I am an Informatics Engineering student with strong passion for creativity, editing, storytelling, and development with AI. I want to create impactful on society.
            </p>
          </div>
        </motion.div>

        {/* Navbar Bawah */}
        <motion.nav 
          className="absolute bottom-5 w-[90%] max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-5 py-3 flex justify-between items-center z-50 shadow-xl md:bottom-[8%]"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }}
        >
          <a href="#profile" className="text-[10px] md:text-xs font-medium text-orange-400 transition-colors">Profile</a>
          <a href="#skills" className="text-[10px] md:text-xs font-medium hover:text-red-400 transition-colors">Skills</a>
          <a href="#achievement" className="text-[10px] md:text-xs font-medium hover:text-red-400 transition-colors">Achievement</a>
          <a href="#contact" className="text-[10px] md:text-xs font-medium hover:text-red-400 transition-colors">Contact</a>
        </motion.nav>

      </section>

      {/* ================= SECTION 3: SKILLS & EDUCATION ================= */}
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
          <a href="#profile" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Profile</a>
          <a href="#skills" className="text-[10px] md:text-xs font-medium text-orange-400 transition-colors">Skills</a>
          <a href="#achievement" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Achievement</a>
          <a href="#contact" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Contact</a>
        </motion.nav>

      </section>

      {/* ================= SECTION 4: EXPERIENCE (GRID 16:9 DENGAN VIDEO ASLI) ================= */}
      <section className="h-screen w-full snap-start relative bg-black flex flex-col items-center justify-center overflow-hidden px-4 md:px-12">
        
        {/* --- HEADER KIRI ATAS --- */}
        <motion.div 
          className="absolute top-6 left-6 md:top-10 md:left-10 z-20 flex flex-col"
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-gray-500 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-1">Skills</span>
          <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">Experience</h2>
        </motion.div>

        {/* --- HEADER TENGAH ATAS --- */}
        <motion.div 
          className="absolute top-12 md:top-20 left-1/2 -translate-x-1/2 z-20 w-full text-center"
          initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-xs md:text-lg font-medium tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            Teater & Short Movie
          </h2>
        </motion.div>

        {/* Efek Cahaya Latar Belakang */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[480px] h-[480px] bg-red-800/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

        {/* --- GRID VIDEO RAPI (2 - 3 - 2) --- */}
        <div className="flex flex-col gap-2 md:gap-4 w-full max-w-4xl z-10 md:-translate-y-6 mt-16 md:mt-10">
          
          {/* BARIS 1: 2 Video */}
          <motion.div 
            className="flex justify-center gap-2 md:gap-4 w-full"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Video 1 */}
            <div className="w-[45%] md:w-[28%] aspect-video bg-gray-900 relative group cursor-pointer overflow-hidden shadow-lg">
              <video src={videoDrama1} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
            </div>
            {/* Video 2 */}
            <div className="w-[45%] md:w-[28%] aspect-video bg-gray-900 relative group cursor-pointer overflow-hidden shadow-lg">
              <video src={videoDrama2} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
            </div>
          </motion.div>

          {/* BARIS 2: 3 Video */}
          <motion.div 
            className="flex justify-center gap-2 md:gap-4 w-full"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Video 3 */}
            <div className="w-[30%] md:w-[28%] aspect-video bg-gray-900 relative group cursor-pointer overflow-hidden shadow-lg">
              <video src={videoDrama3} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
            </div>
            {/* Video 4 */}
            <div className="w-[30%] md:w-[28%] aspect-video bg-gray-900 relative group cursor-pointer overflow-hidden shadow-lg">
              <video src={videoDrama4} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
            </div>
            {/* Video 5 */}
            <div className="w-[30%] md:w-[28%] aspect-video bg-gray-900 relative group cursor-pointer overflow-hidden shadow-lg">
              <video src={videoDrama5} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
            </div>
          </motion.div>

          {/* BARIS 3: 2 Video */}
          <motion.div 
            className="flex justify-center gap-2 md:gap-4 w-full"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Video 6 */}
            <div className="w-[45%] md:w-[28%] aspect-video bg-gray-900 relative group cursor-pointer overflow-hidden shadow-lg">
              <video src={videoDrama6} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
            </div>
            {/* Video 7 */}
            <div className="w-[45%] md:w-[28%] aspect-video bg-gray-900 relative group cursor-pointer overflow-hidden shadow-lg">
              <video src={videoDrama7} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
            </div>
          </motion.div>

        </div>

        {/* --- Navbar Bawah --- */}
        <motion.nav 
          className="absolute bottom-5 w-[90%] max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-5 py-3 flex justify-between items-center z-50 shadow-xl left-1/2 -translate-x-1/2 md:bottom-[8%]"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Profile</a>
          <a href="#" className="text-[10px] md:text-xs font-medium text-orange-400 transition-colors">Skills</a>
          <a href="#" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Achievement</a>
          <a href="#" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Contact</a>
        </motion.nav>

      </section>

      {/* ================= SECTION 5: SKILLS (SOCIAL MEDIA DESIGN - PART 1) ================= */}
      <section className="h-screen w-full snap-start relative bg-black flex items-center justify-start overflow-hidden">
        
        {/* --- HEADER KIRI ATAS --- */}
        <motion.div 
          className="absolute top-6 left-6 md:top-10 md:left-10 z-30 flex flex-col"
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-gray-500 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-1">Skills</span>
          <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">Experience</h2>
        </motion.div>

        {/* --- Pencahayaan Premium (Kiri Saja) --- */}
        <div className="absolute top-2/3 left-[-20%] -translate-y-1/2 w-[320px] md:w-[560px] h-[320px] md:h-[560px] bg-gradient-to-br from-orange-600/20 to-red-600/30 rounded-full blur-[100px] pointer-events-none z-0"></div>

        {/* Kontainer Utama Kiri (Teks Judul) */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center z-20 px-6 md:px-12">
          
          {/* --- SISI KIRI: TEKS "Social Media Design" --- */}
          <motion.div 
            className="w-full md:w-1/3 flex flex-col md:-translate-x-18"
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Social Media <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Design</span>
            </h2>
          </motion.div>

        </div>

        {/* --- SISI KANAN: GLASSMORPHIC CARD --- */}
        <motion.div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] md:w-[55%] h-[75vh] md:h-[99vh] bg-white/5 backdrop-blur-xl border-y border-l border-white/10 border-r-0 rounded-l-2xl md:rounded-l-[2.5rem] py-12 pr-6 pl-6 md:py-8 md:pr-12 md:pl-12 shadow-[-20px_0_40px_rgba(0,0,0,0.4)] flex items-center justify-center z-10"
          initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          {/* Kontainer Grid Dalam */}
          <div className="w-full max-w-3xl h-auto grid grid-cols-6 gap-0">
            
            {/* Baris 1: 3 Foto */}
            <div className="col-span-2 aspect-[4/5] bg-gray-900 border border-white/5 overflow-hidden relative">
              <img src={socmed1} alt="Social Media 1" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0  pointer-events-none"></div>
            </div>
            <div className="col-span-2 aspect-[4/5] bg-gray-900 border border-white/5 overflow-hidden relative">
              <img src={socmed2} alt="Social Media 2" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0  pointer-events-none"></div>
            </div>
            <div className="col-span-2 aspect-[4/5] bg-gray-900 border border-white/5 overflow-hidden relative">
              <img src={socmed3} alt="Social Media 3" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0  pointer-events-none"></div>
            </div>

            {/* Baris 2: 3 Foto */}
            <div className="col-span-2 aspect-[4/5] bg-gray-900 border border-white/5 overflow-hidden relative">
              <img src={socmed4} alt="Social Media 4" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0  pointer-events-none"></div>
            </div>
            <div className="col-span-2 aspect-[4/5] bg-gray-900 border border-white/5 overflow-hidden relative">
              <img src={socmed5} alt="Social Media 5" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0  pointer-events-none"></div>
            </div>
            <div className="col-span-2 aspect-[4/5] bg-gray-900 border border-white/5 overflow-hidden relative">
              <img src={socmed6} alt="Social Media 6" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 pointer-events-none"></div>
            </div>

          </div>
        </motion.div>

      </section>

      {/* ================= SECTION 5: SKILLS (SOCIAL MEDIA DESIGN - PART 2) ================= */}
      <section className="h-screen w-full snap-start relative bg-black flex items-center justify-start overflow-hidden">
        
        {/* --- HEADER KIRI ATAS --- */}
        <motion.div 
          className="absolute top-6 left-6 md:top-10 md:left-10 z-30 flex flex-col"
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-gray-500 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-1">Skills</span>
          <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">Experience</h2>
        </motion.div>

        {/* --- Pencahayaan Premium --- */}
        <div className="absolute top-2/3 left-[-20%] -translate-y-1/2 w-[320px] md:w-[560px] h-[320px] md:h-[560px] bg-gradient-to-br from-orange-600/20 to-red-600/30 rounded-full blur-[100px] pointer-events-none z-0"></div>

        {/* Kontainer Utama Kiri */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center z-20 px-6 md:px-12">
          
          {/* --- SISI KIRI: TEKS "Social Media Design" --- */}
          <motion.div 
            className="w-full md:w-1/3 flex flex-col md:-translate-x-18"
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Social Media <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Design</span>
            </h2>
          </motion.div>

        </div>

        {/* --- SISI KANAN: GLASSMORPHIC CARD --- */}
        <motion.div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] md:w-[55%] h-[75vh] md:h-[99vh] bg-white/5 backdrop-blur-xl border-y border-l border-white/10 border-r-0 rounded-l-2xl md:rounded-l-[2.5rem] py-12 pr-6 pl-6 md:py-8 md:pr-12 md:pl-12 shadow-[-20px_0_40px_rgba(0,0,0,0.4)] flex items-center justify-center z-10"
          initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          {/* Kontainer Grid Dalam */}
          <div className="w-full max-w-3xl h-auto grid grid-cols-2 gap-0">
            
            {/* Baris 1: Banner */}
            <div className="col-span-2 aspect-[37/16] bg-gray-900 border border-white/5 overflow-hidden relative">
              <img src={socmedBanner1} alt="Social Media Banner 1" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 pointer-events-none"></div>
            </div>

            {/* Baris 2: Banner */}
            <div className="col-span-2 aspect-[37/16] bg-gray-900 border border-white/5 overflow-hidden relative">
              <img src={socmedBanner2} alt="Social Media Banner 2" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0  pointer-events-none"></div>
            </div>

          </div>
        </motion.div>

      </section>

      {/* ================= SECTION 5: SKILLS (SOCIAL MEDIA DESIGN - PART 3) ================= */}
      <section className="h-screen w-full snap-start relative bg-black flex items-center justify-start overflow-hidden">
        
        {/* --- HEADER KIRI ATAS --- */}
        <motion.div 
          className="absolute top-6 left-6 md:top-10 md:left-10 z-30 flex flex-col"
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-gray-500 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-1">Skills</span>
          <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">Experience</h2>
        </motion.div>

        {/* --- Pencahayaan Premium --- */}
        <div className="absolute top-2/3 left-[-20%] -translate-y-1/2 w-[320px] md:w-[560px] h-[320px] md:h-[560px] bg-gradient-to-br from-orange-600/20 to-red-600/30 rounded-full blur-[100px] pointer-events-none z-0"></div>

        {/* Kontainer Utama Kiri */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center z-20 px-6 md:px-12">
          
          {/* --- SISI KIRI: TEKS "Social Media Design" --- */}
          <motion.div 
            className="w-full md:w-1/3 flex flex-col md:-translate-x-18"
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Social Media <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Design</span>
            </h2>
          </motion.div>

        </div>

        {/* --- SISI KANAN: GLASSMORPHIC CARD --- */}
        <motion.div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] md:w-[55%] h-[75vh] md:h-[99vh] bg-white/5 backdrop-blur-xl border-y border-l border-white/10 border-r-0 rounded-l-2xl md:rounded-l-[2.5rem] py-12 pr-6 pl-6 md:py-8 md:pr-12 md:pl-12 shadow-[-20px_0_40px_rgba(0,0,0,0.4)] flex items-center justify-center z-10"
          initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          {/* Kontainer Grid Dalam */}
          <div className="w-full max-w-3xl h-auto grid grid-cols-6 gap-0">
            
            <div className="col-span-2 aspect-[4/5] bg-gray-900 border border-white/5 overflow-hidden relative">
              <img src={socmed7} alt="Social Media 7" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            
            <div className="col-span-2 aspect-[4/5] bg-gray-900 border border-white/5 overflow-hidden relative">
              <img src={socmed8} alt="Social Media 8" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            <div className="col-span-2 row-span-2 aspect-[9/16] bg-gray-900 border border-white/5 overflow-hidden relative">
              <img src={socmed11} alt="Social Media 11" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            <div className="col-span-2 aspect-[4/5] bg-gray-900 border border-white/5 overflow-hidden relative">
              <img src={socmed9} alt="Social Media 9" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            
            <div className="col-span-2 aspect-[4/5] bg-gray-900 border border-white/5 overflow-hidden relative">
              <img src={socmed10} alt="Social Media 10" className="absolute inset-0 w-full h-full object-cover" />
            </div>

          </div>
        </motion.div>

      </section>

      {/* ================= SECTION 6: SKILLS (WEBSITE PROJECT) ================= */}
      <section className="h-screen w-full snap-start relative bg-black flex items-center justify-start overflow-hidden">
        
        {/* --- HEADER KIRI ATAS --- */}
        <motion.div 
          className="absolute top-6 left-6 md:top-10 md:left-10 z-30 flex flex-col"
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-gray-500 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-1">Skills</span>
          <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">Experience</h2>
        </motion.div>

        {/* --- Pencahayaan Premium --- */}
        <div className="absolute top-2/3 left-[-20%] -translate-y-1/2 w-[320px] md:w-[560px] h-[320px] md:h-[560px] bg-gradient-to-br from-orange-600/20 to-red-600/30 rounded-full blur-[100px] pointer-events-none z-0"></div>

        {/* Kontainer Utama Kiri */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center z-20 px-6 md:px-12">
          
          {/* --- SISI KIRI: TEKS "Website Project" --- */}
          <motion.div 
            className="w-full md:w-1/3 flex flex-col md:-translate-x-18"
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Website <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Project</span>
            </h2>
          </motion.div>

        </div>

        {/* --- SISI KANAN: GLASSMORPHIC CARD --- */}
        <motion.div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] md:w-[55%] h-[75vh] md:h-[99vh] bg-white/5 backdrop-blur-xl border-y border-l border-white/10 border-r-0 rounded-l-2xl md:rounded-l-[2.5rem] py-12 pr-6 pl-6 md:py-8 md:pr-12 md:pl-12 shadow-[-20px_0_40px_rgba(0,0,0,0.4)] flex items-center justify-center z-10"
          initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          {/* Kontainer Grid Dalam */}
          <div className="w-full max-w-3xl h-auto grid grid-cols-2 gap-0">
            
            <div className="col-span-2 aspect-[37/16] bg-gray-900 border border-white/5 overflow-hidden relative">
              <img src={web1} alt="Website 1" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 pointer-events-none"></div>
            </div>

            <div className="col-span-2 aspect-[37/16] bg-gray-900 border border-white/5 overflow-hidden relative">
              <img src={web2} alt="Website 2" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0  pointer-events-none"></div>
            </div>

          </div>
        </motion.div>

      </section>
      {/* ================= SECTION 7: 5 DAY CHALLENGE (INTERACTIVE IG LAYOUT) ================= */}
      <section className="h-screen w-full snap-start relative bg-black flex items-center justify-center overflow-hidden px-6 md:px-12">
        
        {/* --- HEADER KIRI ATAS (Baru Ditambahkan) --- */}
        <motion.div 
          className="absolute top-6 left-6 md:top-10 md:left-10 z-30 flex flex-col"
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-gray-500 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-1">Skills</span>
          <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">Experience</h2>
        </motion.div>

        {/* --- PENCAHAYAAN 4 SUDUT --- */}
        <div className="absolute top-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gradient-to-br from-orange-600/30 to-red-600/20 rounded-full blur-[80px] md:blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
        <div className="absolute top-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gradient-to-bl from-orange-600/30 to-red-600/20 rounded-full blur-[80px] md:blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gradient-to-tr from-red-600/30 to-orange-600/20 rounded-full blur-[80px] md:blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none z-0"></div>
        <div className="absolute bottom-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gradient-to-tl from-red-600/30 to-orange-600/20 rounded-full blur-[80px] md:blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none z-0"></div>

        <div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between z-20">
          
          {/* --- SISI KIRI: TEKS TIPOGRAFI --- */}
          <motion.div 
            className="w-full md:w-1/2 flex flex-col items-start mb-6 md:mb-0 md:-translate-x-6 lg:-translate-x-12"
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-gray-500 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-3">Content Creation</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1]">
              5 Day Challenge <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Making Video</span>
            </h2>
            
            {/* Tag / Kartu Nama Instagram Minimalis */}
            <div className="mt-6 md:mt-8 flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 md:px-5 py-2 md:py-3 rounded-full shadow-lg">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center p-[2px]">
                <div className="w-full h-full bg-black rounded-full overflow-hidden border-2 border-black">
                   <img src={socmedpp} alt="Avatar" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] md:text-xs text-gray-400 font-light">Follow me on</span>
                <span className="text-xs md:text-sm font-medium text-white flex items-center gap-2">
                  <FaInstagram className="text-pink-500" /> @luigisww
                </span>
              </div>
            </div>
          </motion.div>

          {/* --- SISI KANAN: KONTEN INTERAKTIF (CARD IG DIPERKECIL & KAPSUL ANGKA) --- */}
          <motion.div 
            className="w-full md:w-1/2 flex flex-row items-center justify-end gap-3 md:gap-6"
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            
            {/* 1. CARD INSTAGRAM REPLIKA (Ukuran Diperkecil) */}
            <div className="w-[240px] md:w-[280px] lg:w-[300px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col">
              
              {/* Header IG */}
              <div className="px-3 py-2 md:px-4 md:py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2 md:gap-3">
                  <img src={socmedpp} alt="Avatar" className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover border border-white/20" />
                  <span className="text-[10px] md:text-xs font-semibold text-white tracking-wide">luigisww</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                  <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                  <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                </div>
              </div>

              {/* Video Area (Rasio 3:4) */}
              <div className="w-full aspect-[4/5] bg-black relative">
                <video 
                  key={activeDay} 
                  src={currentDayData.video} 
                  autoPlay loop muted playsInline 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>

              {/* Footer IG (Ikon, Views, Likes & Caption) */}
              <div className="p-3 md:p-4 flex flex-col gap-1.5 md:gap-2">
                
                {/* Barisan Ikon */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 md:gap-4">
                    <FaRegHeart className="text-lg md:text-xl text-white hover:text-red-500 cursor-pointer transition-colors" />
                    <FaRegComment className="text-lg md:text-xl text-white hover:text-gray-400 cursor-pointer transition-colors" />
                    <FaRegPaperPlane className="text-lg md:text-xl text-white hover:text-gray-400 cursor-pointer transition-colors" />
                  </div>
                  <FaRegBookmark className="text-lg md:text-xl text-white hover:text-gray-400 cursor-pointer transition-colors" />
                </div>
                
                {/* Teks Views & Likes (Baru Ditambahkan) */}
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-[10px] md:text-xs font-bold text-white">{currentDayData.views} views</span>
                  <span className="text-[10px] md:text-xs font-bold text-gray-500">•</span>
                  <span className="text-[10px] md:text-xs font-bold text-white">{currentDayData.likes} likes</span>
                </div>

                {/* Caption */}
                <p className="text-[9px] md:text-[10px] lg:text-xs text-gray-300 font-light leading-relaxed line-clamp-2">
                  <span className="font-bold text-white mr-1 md:mr-2">luigisww</span>
                  {currentDayData.caption}
                </p>

              </div>
            </div>

            {/* 2. KAPSUL NAVIGASI VERTIKAL (Otomatis menyesuaikan jadi 5 angka) */}
            <div className="w-10 md:w-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full py-4 flex flex-col items-center gap-2 md:gap-3 shadow-xl">
              {challengeData.map((data) => (
                <button
                  key={data.id}
                  onClick={() => setActiveDay(data.id)}
                  className={`w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transition-all duration-300 ${
                    activeDay === data.id 
                      ? "bg-gradient-to-tr from-orange-500 to-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.6)] scale-110" 
                      : "bg-transparent text-gray-500 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {data.id}
                </button>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 8: ACHIEVEMENT (SEAMLESS INFINITE SCROLL) ================= */}
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
          <a href="#profile" className="text-[10px] md:text-xs font-semibold text-gray-700 hover:text-orange-500 transition-colors">Profile</a>
          <a href="#skills" className="text-[10px] md:text-xs font-semibold text-gray-700 hover:text-orange-500 transition-colors">Skills</a>
          <a href="#achievement" className="text-[10px] md:text-xs font-bold text-orange-500 transition-colors">Achievement</a>
          <a href="#contact" className="text-[10px] md:text-xs font-semibold text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
        </motion.nav>
      </section>

      {/* ================= SECTION 9: CONTACT & TIMELINE (FULL BLEED) ================= */}
      <section id="contact" className="h-screen w-full snap-start relative bg-black flex overflow-hidden">
        
        {/* --- PENCAHAYAAN PREMIUM (Kiri Atas & Kiri Bawah) - DIKEMBALIKAN --- */}
        <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-red-600/40 to-orange-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-tr from-red-700/30 to-orange-600/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none z-0"></div>

        {/* Kontainer Utama - Full Width & Full Height tanpa batas max-w agar bisa nempel kanan */}
        <div className="relative w-full h-full flex flex-col md:flex-row z-20">
          
          {/* ================= SISI KIRI: CONTACT ME & MEDSOS ================= */}
          <motion.div 
            className="w-full md:w-[45%] lg:w-[40%] flex flex-col justify-center h-full px-6 md:pl-40 lg:pl-56 pt-20 md:pt-0"
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Teks Utama (Typography Elegant) - DIKEMBALIKAN */}
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.9]">
              CONTACT <br />
              <span className="font-light tracking-wide">ME.</span>
            </h2>

            {/* Container Card Medsos - Dibuat Horizontal Sesuai Gambar */}
            <div className="mt-8 md:mt-12 flex flex-row gap-3 md:gap-5 w-full">
              
              {/* Card 1: WhatsApp */}
              {/* PERUBAHAN: Ditambah 'overflow-hidden', efek hover melayang (-translate-y-1), border menyala, shadow merah premium */}
              <a href="https://wa.me/6285242471640?text=Halo%20Basyir,%20saya%20tertarik%20untuk%20bekerja%20sama!" target="_blank" rel="noopener noreferrer" className="relative w-[100px] h-[70px] md:w-[130px] md:h-[85px] rounded-xl bg-white/5 border border-white/20 flex items-center justify-center group cursor-pointer backdrop-blur-md overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:border-white/50 hover:-translate-y-1 transition-all duration-500">
                {/* PERUBAHAN GRADIENT: inset-0 agar memenuhi bingkai, dipotong oleh overflow-hidden dari parent */}
                <div className="absolute inset-0 [background-image:radial-gradient(circle_at_bottom_left,_rgba(220,38,38,0.5)_0%,_transparent_60%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

                <FaWhatsapp className="text-3xl md:text-4xl text-white group-hover:scale-110 transition-transform duration-300 z-10" />
                {/* PERUBAHAN PANAH: Awalnya agak redup (white/50), menyala saat dihover */}
                <span className="absolute top-2 right-3 text-white/50 text-lg md:text-xl font-light group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 z-10">&#8599;</span>
              </a>

              {/* Card 2: Instagram */}
              <a href="https://www.instagram.com/basyirdxd_/" target="_blank" rel="noopener noreferrer" className="relative w-[100px] h-[70px] md:w-[130px] md:h-[85px] rounded-xl bg-white/5 border border-white/20 flex items-center justify-center group cursor-pointer backdrop-blur-md overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:border-white/50 hover:-translate-y-1 transition-all duration-500">
                <div className="absolute inset-0 [background-image:radial-gradient(circle_at_bottom_left,_rgba(220,38,38,0.5)_0%,_transparent_60%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

                <FaInstagram className="text-3xl md:text-4xl text-white group-hover:scale-110 transition-transform duration-300 z-10" />
                <span className="absolute top-2 right-3 text-white/50 text-lg md:text-xl font-light group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 z-10">&#8599;</span>
              </a>

              {/* Card 3: Linkedin */}
              <a href="https://www.linkedin.com/in/ahmad-mubasysyir-matdxd/" target="_blank" rel="noopener noreferrer" className="relative w-[100px] h-[70px] md:w-[130px] md:h-[85px] rounded-xl bg-white/5 border border-white/20 flex items-center justify-center group cursor-pointer backdrop-blur-md overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:border-white/50 hover:-translate-y-1 transition-all duration-500">
                <div className="absolute inset-0 [background-image:radial-gradient(circle_at_bottom_left,_rgba(220,38,38,0.5)_0%,_transparent_60%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

                <FaLinkedin className="text-3xl md:text-4xl text-white group-hover:scale-110 transition-transform duration-300 z-10" />
                <span className="absolute top-2 right-3 text-white/50 text-lg md:text-xl font-light group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 z-10">&#8599;</span>
              </a>

            </div>

          </motion.div>

          {/* ================= SISI KANAN: TIMELINE TAHUN RAKSASA ================= */}

          <motion.div

            className="w-full md:w-[55%] lg:w-[60%] flex flex-col justify-center gap-1 md:gap-3 h-full pt-10 pb-24 md:py-2"

            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}

          >

           

            {/* TAHUN 1: 2025 */}

            <div className="flex-1 w-[60%] md:w-[70%] ml-auto bg-[#111]/80 backdrop-blur-md border border-white/5 border-r-0 rounded-l-[3rem] flex justify-end items-center pr-8 md:pr-16 hover:bg-[#1a1a1a] transition-colors cursor-pointer">

              <span className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white tracking-tighter opacity-80">2025</span>

            </div>



            {/* TAHUN 2: 2026 (AKTIF) */}

            <div className="flex-1 w-[70%] md:w-[80%] ml-auto bg-[#1a1a1a] backdrop-blur-xl border border-white/10 border-r-0 rounded-l-[3rem] flex justify-end items-center pr-8 md:pr-16 relative shadow-[-30px_0_50px_rgba(0,0,0,0.5)] z-20 scale-y-105">

              {/* Ikon Panah Mengambang di Kiri */}

              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] z-10">

                 <FaArrowRight className="text-black text-xl md:text-2xl" />

              </div>

              <div className="flex flex-col items-end mr-4 md:mr-8">

                <span className="text-[9px] md:text-xs text-orange-500 font-bold tracking-widest uppercase flex items-center gap-2 mb-1 md:mb-2">

                  <FaClock className="animate-pulse text-sm" /> ON PROGRESS

                </span>

              </div>

              <span className="text-7xl md:text-9xl lg:text-[11rem] font-bold text-white tracking-tighter drop-shadow-lg">2026</span>

            </div>



            {/* TAHUN 3: 2026 (Opsional - Mungkin Anda ingin mengganti dengan tahun 2027) */}

            <div className="flex-1 w-[60%] md:w-[70%] ml-auto bg-[#111]/80 backdrop-blur-md border border-white/5 border-r-0 rounded-l-[3rem] flex justify-end items-center pr-8 md:pr-16 hover:bg-[#1a1a1a] transition-colors cursor-pointer relative overflow-hidden">

              {/* Efek Garis Progres */}

              <span className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white/40 tracking-tighter">2027</span>

            </div>



          </motion.div>

        </div>

        {/* --- Navbar Bawah (Dark Premium Glass) --- */}
        <motion.nav 
          className="absolute bottom-5 w-[90%] max-w-md bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-full px-5 py-3 flex justify-between items-center z-[100] shadow-[0_20px_40px_rgba(0,0,0,0.8)] left-1/2 -translate-x-1/2 md:bottom-[8%]"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#profile" className="text-[10px] md:text-xs font-medium text-white/50 hover:text-white transition-colors">Profile</a>
          <a href="#skills" className="text-[10px] md:text-xs font-medium text-white/50 hover:text-white transition-colors">Skills</a>
          <a href="#achievement" className="text-[10px] md:text-xs font-medium text-white/50 hover:text-white transition-colors">Achievement</a>
          <a href="#contact" className="text-[10px] md:text-xs font-medium text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all">Contact</a>
        </motion.nav>
      </section>
    </div>
  );
}

export default App;