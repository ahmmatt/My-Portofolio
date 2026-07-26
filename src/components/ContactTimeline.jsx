import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaArrowRight, FaClock } from "react-icons/fa";

function ContactTimeline() {
  return (
    <section id="contact" className="h-screen w-full snap-start relative bg-black flex overflow-hidden">
      
      {/* --- PENCAHAYAAN PREMIUM (Kiri Atas & Kiri Bawah) - DIKEMBALIKAN --- */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-red-600/40 to-orange-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-tr from-red-700/30 to-orange-600/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none z-0"></div>

      {/* Kontainer Utama - Full Width & Full Height tanpa batas max-w agar bisa nempel kanan */}
      <div className="relative w-full h-full flex flex-col-reverse md:flex-row z-20">
        
        {/* ================= SISI KIRI: CONTACT ME & MEDSOS ================= */}
        <motion.div 
          className="w-full md:w-[45%] lg:w-[40%] flex flex-col justify-end md:justify-center h-[40%] md:h-full px-6 md:pl-40 lg:pl-56 pb-24 md:pb-0 z-10"
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Teks Utama (Typography Elegant) - DIKEMBALIKAN */}
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.9]">
            CONTACT <br />
            <span className="font-light tracking-wide">ME.</span>
          </h2>

          {/* Container Card Medsos - Dibuat Horizontal Sesuai Gambar */}
          <div className="mt-8 md:mt-12 flex flex-row flex-nowrap gap-2 md:gap-3 lg:gap-4 w-full">
            
            {/* Card 1: WhatsApp */}
            <a href="https://wa.me/6285242471640?text=Halo%20Basyir,%20saya%20tertarik%20untuk%20bekerja%20sama!" target="_blank" rel="noopener noreferrer" className="relative flex-1 max-w-[120px] aspect-[1.5] rounded-xl bg-white/5 border border-white/20 flex items-center justify-center group cursor-pointer backdrop-blur-md overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:border-white/50 hover:-translate-y-1 transition-all duration-500">
              <div className="absolute inset-0 [background-image:radial-gradient(circle_at_bottom_left,_rgba(220,38,38,0.5)_0%,_transparent_60%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

              <FaWhatsapp className="text-3xl md:text-4xl text-white group-hover:scale-110 transition-transform duration-300 z-10" />
              <span className="absolute top-2 right-2 md:right-3 text-white/50 text-base md:text-xl font-light group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 z-10">&#8599;</span>
            </a>

            {/* Card 2: Instagram */}
            <a href="https://www.instagram.com/basyirdxd_/" target="_blank" rel="noopener noreferrer" className="relative flex-1 max-w-[120px] aspect-[1.5] rounded-xl bg-white/5 border border-white/20 flex items-center justify-center group cursor-pointer backdrop-blur-md overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:border-white/50 hover:-translate-y-1 transition-all duration-500">
              <div className="absolute inset-0 [background-image:radial-gradient(circle_at_bottom_left,_rgba(220,38,38,0.5)_0%,_transparent_60%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

              <FaInstagram className="text-3xl md:text-4xl text-white group-hover:scale-110 transition-transform duration-300 z-10" />
              <span className="absolute top-2 right-2 md:right-3 text-white/50 text-base md:text-xl font-light group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 z-10">&#8599;</span>
            </a>

            {/* Card 3: Linkedin */}
            <a href="https://www.linkedin.com/in/ahmad-mubasysyir-matdxd/" target="_blank" rel="noopener noreferrer" className="relative flex-1 max-w-[120px] aspect-[1.5] rounded-xl bg-white/5 border border-white/20 flex items-center justify-center group cursor-pointer backdrop-blur-md overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:border-white/50 hover:-translate-y-1 transition-all duration-500">
              <div className="absolute inset-0 [background-image:radial-gradient(circle_at_bottom_left,_rgba(220,38,38,0.5)_0%,_transparent_60%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

              <FaLinkedin className="text-3xl md:text-4xl text-white group-hover:scale-110 transition-transform duration-300 z-10" />
              <span className="absolute top-2 right-2 md:right-3 text-white/50 text-base md:text-xl font-light group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 z-10">&#8599;</span>
            </a>

            {/* Card 4: GitHub */}
            <a href="https://github.com/ahmmatt" target="_blank" rel="noopener noreferrer" className="relative flex-1 max-w-[120px] aspect-[1.5] rounded-xl bg-white/5 border border-white/20 flex items-center justify-center group cursor-pointer backdrop-blur-md overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:border-white/50 hover:-translate-y-1 transition-all duration-500">
              <div className="absolute inset-0 [background-image:radial-gradient(circle_at_bottom_left,_rgba(220,38,38,0.5)_0%,_transparent_60%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

              <FaGithub className="text-3xl md:text-4xl text-white group-hover:scale-110 transition-transform duration-300 z-10" />
              <span className="absolute top-2 right-2 md:right-3 text-white/50 text-base md:text-xl font-light group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 z-10">&#8599;</span>
            </a>

          </div>

        </motion.div>

        {/* ================= SISI KANAN: TIMELINE TAHUN RAKSASA ================= */}

        <motion.div
          className="w-full md:w-[55%] lg:w-[60%] flex flex-col justify-center gap-2 md:gap-3 h-[60%] md:h-full pt-20 md:pt-0 pb-0"

          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}

        >

         

          {/* TAHUN 1: 2025 */}
          <div className="flex-1 w-[60%] md:w-[70%] ml-auto bg-[#111]/80 backdrop-blur-md border border-white/5 border-r-0 rounded-l-[2rem] md:rounded-l-[3rem] flex justify-end items-center pr-6 md:pr-16 hover:bg-[#1a1a1a] transition-colors cursor-pointer py-1 md:py-0">
            <span className="text-5xl md:text-8xl lg:text-[10rem] font-bold text-white tracking-tighter opacity-80">2025</span>
          </div>



          {/* TAHUN 2: 2026 (AKTIF) */}
          <div className="flex-1 w-[70%] md:w-[80%] ml-auto bg-[#1a1a1a] backdrop-blur-xl border border-white/10 border-r-0 rounded-l-[2rem] md:rounded-l-[3rem] flex justify-end items-center pr-6 md:pr-16 relative shadow-[-30px_0_50px_rgba(0,0,0,0.5)] z-20 scale-y-105 py-2 md:py-0">
            {/* Ikon Panah Mengambang di Kiri */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] z-10">
               <FaArrowRight className="text-black text-sm md:text-2xl" />
            </div>
            <div className="flex flex-col items-end mr-3 md:mr-8">
              <span className="text-[8px] md:text-xs text-orange-500 font-bold tracking-widest uppercase flex items-center gap-1 md:gap-2 mb-0 md:mb-2">
                <FaClock className="animate-pulse text-[10px] md:text-sm" /> ON PROGRESS
              </span>
            </div>
            <span className="text-6xl md:text-9xl lg:text-[11rem] font-bold text-white tracking-tighter drop-shadow-lg">2026</span>
          </div>



          {/* TAHUN 3: 2026 (Opsional - Mungkin Anda ingin mengganti dengan tahun 2027) */}
          <div className="flex-1 w-[60%] md:w-[70%] ml-auto bg-[#111]/80 backdrop-blur-md border border-white/5 border-r-0 rounded-l-[2rem] md:rounded-l-[3rem] flex justify-end items-center pr-6 md:pr-16 hover:bg-[#1a1a1a] transition-colors cursor-pointer relative overflow-hidden py-1 md:py-0">
            {/* Efek Garis Progres */}
            <span className="text-5xl md:text-8xl lg:text-[10rem] font-bold text-white/40 tracking-tighter">2027</span>
          </div>



        </motion.div>

      </div>

      {/* --- Navbar Bawah (Dark Premium Glass) --- */}
      <motion.nav 
        className="absolute bottom-5 w-[90%] max-w-md bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-full px-5 py-3 flex justify-between items-center z-[100] shadow-[0_20px_40px_rgba(0,0,0,0.8)] left-1/2 -translate-x-1/2 md:bottom-[8%]"
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link to="/profile" className="text-[10px] md:text-xs font-medium text-white/50 hover:text-white transition-colors">Profile</Link>
        <Link to="/skills" className="text-[10px] md:text-xs font-medium text-white/50 hover:text-white transition-colors">Skills</Link>
        <Link to="/achievement" className="text-[10px] md:text-xs font-medium text-white/50 hover:text-white transition-colors">Achievement</Link>
        <Link to="/contact" className="text-[10px] md:text-xs font-medium text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all">Contact</Link>
      </motion.nav>
    </section>
  );
}

export default ContactTimeline;
