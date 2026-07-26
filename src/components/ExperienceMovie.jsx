import { motion } from "framer-motion";
import videoDrama1 from "../assets/drama1.mp4"; 
import videoDrama2 from "../assets/drama2.mp4"; 
import videoDrama3 from "../assets/drama3.mp4"; 
import videoDrama4 from "../assets/drama4.mp4"; 
import videoDrama5 from "../assets/drama5.mp4"; 
import videoDrama6 from "../assets/drama6.mp4"; 
import videoDrama7 from "../assets/drama7.mp4";

function ExperienceMovie() {
  return (
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
        <a href="#profile" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Profile</a>
        <a href="#skills" className="text-[10px] md:text-xs font-medium text-orange-400 transition-colors">Skills</a>
        <a href="#achievement" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Achievement</a>
        <a href="#contact" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Contact</a>
      </motion.nav>

    </section>
  );
}

export default ExperienceMovie;
