import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from "react-icons/fa";
import socmedpp from "../assets/pp_luigisww.png";
import videoh1 from "../assets/video1.mp4"; 
import videoh2 from "../assets/video2.mp4"; 
import videoh3 from "../assets/video3.mp4"; 
import videoh4 from "../assets/video4.mp4"; 
import videoh5 from "../assets/video5.mp4";

function FiveDayChallenge() {
  // === LOGIKA SECTION 7: 5 DAY CHALLENGE ===
  const [activeDay, setActiveDay] = useState(1);

  // Database mini untuk menyimpan data tiap hari (Disesuaikan jadi 5 Hari)
  // Database mini untuk menyimpan data tiap hari (Ditambahkan data views)
  const challengeData = [
    { id: 1, video: videoh1, views: "85.2K", likes: "4,2K", caption: " - Day 1 5 Days Challenge Editing Video"},
    { id: 2, video: videoh2, views: "812.4K", likes: "61,5K", caption: " - Day 2 5 Days Challenge Editing Video"},
    { id: 3, video: videoh3, views: "2.2M", likes: "136K", caption: " - Day 3 5 Days Challenge Editing Video"},
    { id: 4, video: videoh4, views: "268.1K", likes: "34,9K", caption: " - Day 4 5 Days Challenge Editing Video"},
    { id: 5, video: videoh5, views: "185.8K", likes: "20,4K", caption: " - Day 5 5 Days Challenge Editing Video"},
  ];

  const currentDayData = challengeData.find((data) => data.id === activeDay);

  return (
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
                <span className="text-[10px] md:text-xs font-bold text-white">luigisww</span>
              </div>
              <div className="flex gap-1 md:gap-1.5 cursor-pointer">
                <div className="w-1 h-1 md:w-1 md:h-1 bg-white/50 rounded-full"></div>
                <div className="w-1 h-1 md:w-1 md:h-1 bg-white/50 rounded-full"></div>
                <div className="w-1 h-1 md:w-1 md:h-1 bg-white/50 rounded-full"></div>
              </div>
            </div>

            {/* Area Video (Dynamic) */}
            <div className="w-full aspect-[4/5] bg-gray-900 relative">
              {/* Gunakan 'key' agar video di-remount dan putar ulang tiap ganti hari */}
              <video 
                key={currentDayData.id}
                src={currentDayData.video} 
                autoPlay 
                loop 
                muted 
                playsInline 
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
  );
}

export default FiveDayChallenge;
