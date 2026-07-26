import { motion } from "framer-motion";
import socmed1 from "../assets/socmed1.jpg"; 
import socmed2 from "../assets/socmed2.jpg"; 
import socmed3 from "../assets/socmed3.jpg"; 
import socmed4 from "../assets/socmed4.jpg"; 
import socmed5 from "../assets/socmed5.jpg"; 
import socmed6 from "../assets/socmed6.jpg";
import socmed7 from "../assets/socmed7.png";
import socmed8 from "../assets/socmed8.png";
import socmed9 from "../assets/socmed9.png";
import socmed10 from "../assets/socmed10.png";
import socmed11 from "../assets/socmed11.png";
import socmedBanner1 from "../assets/banner1.png";
import socmedBanner2 from "../assets/banner2.png";

function SocialMedia() {
  return (
    <>
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
    </>
  );
}

export default SocialMedia;
