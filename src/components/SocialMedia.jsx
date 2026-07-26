import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <>
      <section className="h-screen w-full snap-start relative bg-black flex items-center justify-start overflow-hidden">
        
        {/* --- HEADER KIRI ATAS --- */}
        <motion.div 
          className="absolute top-12 left-6 md:top-10 md:left-10 z-30 flex flex-col"
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-gray-500 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-1">Skills</span>
          <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">Experience</h2>
        </motion.div>

        {/* --- Pencahayaan Premium (Kiri Saja) --- */}
        <div className="absolute top-2/3 left-[-20%] -translate-y-1/2 w-[320px] md:w-[560px] h-[320px] md:h-[560px] bg-gradient-to-br from-orange-600/20 to-red-600/30 rounded-full blur-[100px] pointer-events-none z-0"></div>

        {/* Kontainer Utama Kiri (Teks Judul) */}
        <div className="relative w-full h-full max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-start z-20 px-6 md:px-12 pt-40 md:pt-0 pointer-events-none">
          
          {/* --- SISI KIRI: TEKS "Social Media Design" --- */}
          <motion.div 
            className="w-full md:w-1/3 flex flex-col md:-translate-x-18 pointer-events-auto"
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Social Media <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Design</span>
            </h2>
          </motion.div>

        </div>

        {/* --- SISI KANAN: GLASSMORPHIC CARD (SLIDER) --- */}
        <motion.div 
          className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[95%] rounded-3xl border border-white/10 md:left-auto md:translate-x-0 md:right-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:w-[55%] h-[52vh] md:h-[99vh] bg-white/5 backdrop-blur-xl md:border-y md:border-l md:border-r-0 md:rounded-none md:rounded-l-[2.5rem] py-4 px-4 md:py-8 md:pr-12 md:pl-12 shadow-[0_20px_40px_rgba(0,0,0,0.4)] md:shadow-[-20px_0_40px_rgba(0,0,0,0.4)] flex items-center justify-center z-10 pointer-events-auto"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          {/* Kontrol Navigasi (Tombol) */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-black/40 backdrop-blur-md border border-white/20 text-gray-400 hover:text-white hover:bg-gradient-to-tr hover:from-orange-500 hover:to-red-600 hover:border-transparent hover:shadow-[0_0_15px_rgba(239,68,68,0.6)] hover:scale-110 cursor-pointer z-50"
          >
            <FaChevronLeft className="text-sm md:text-base" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-black/40 backdrop-blur-md border border-white/20 text-gray-400 hover:text-white hover:bg-gradient-to-tr hover:from-orange-500 hover:to-red-600 hover:border-transparent hover:shadow-[0_0_15px_rgba(239,68,68,0.6)] hover:scale-110 cursor-pointer z-50"
          >
            <FaChevronRight className="text-sm md:text-base" />
          </button>

          {/* Indikator Slider (Dots) */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
            {[0, 1, 2].map((i) => (
              <button 
                key={i} 
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? "bg-orange-500 w-6" : "bg-white/30 w-2 hover:bg-white/50"}`} 
              />
            ))}
          </div>

          {/* Wrapper Animasi Transisi */}
          <div className="w-full max-w-3xl relative flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              {currentIndex === 0 && (
                <motion.div 
                  key="slide0"
                  initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}
                  className="w-full max-h-[45vh] md:max-h-none overflow-y-auto md:overflow-visible no-scrollbar grid grid-cols-6 gap-1 md:gap-0"
                >
                  {/* Baris 1: 3 Foto */}
                  <div className="col-span-2 aspect-[4/5] bg-gray-900 border border-white/5 overflow-hidden relative">
                    <img src={socmed1} alt="Social Media 1" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="col-span-2 aspect-[4/5] bg-gray-900 border border-white/5 overflow-hidden relative">
                    <img src={socmed2} alt="Social Media 2" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="col-span-2 aspect-[4/5] bg-gray-900 border border-white/5 overflow-hidden relative">
                    <img src={socmed3} alt="Social Media 3" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  {/* Baris 2: 3 Foto */}
                  <div className="col-span-2 aspect-[4/5] bg-gray-900 border border-white/5 overflow-hidden relative">
                    <img src={socmed4} alt="Social Media 4" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="col-span-2 aspect-[4/5] bg-gray-900 border border-white/5 overflow-hidden relative">
                    <img src={socmed5} alt="Social Media 5" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="col-span-2 aspect-[4/5] bg-gray-900 border border-white/5 overflow-hidden relative">
                    <img src={socmed6} alt="Social Media 6" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </motion.div>
              )}

              {currentIndex === 1 && (
                <motion.div 
                  key="slide1"
                  initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}
                  className="w-full max-h-[45vh] md:max-h-none overflow-y-auto md:overflow-visible no-scrollbar grid grid-cols-2 gap-1 md:gap-0"
                >
                  <div className="col-span-2 aspect-[37/16] bg-gray-900 border border-white/5 overflow-hidden relative">
                    <img src={socmedBanner1} alt="Social Media Banner 1" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="col-span-2 aspect-[37/16] bg-gray-900 border border-white/5 overflow-hidden relative">
                    <img src={socmedBanner2} alt="Social Media Banner 2" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </motion.div>
              )}

              {currentIndex === 2 && (
                <motion.div 
                  key="slide2"
                  initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}
                  className="w-full max-h-[45vh] md:max-h-none overflow-y-auto md:overflow-visible no-scrollbar grid grid-cols-6 gap-1 md:gap-0"
                >
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </section>
    </>
  );
}

export default SocialMedia;
