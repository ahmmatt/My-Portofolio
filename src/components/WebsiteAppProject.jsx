import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";
import app1 from "../assets/app1.jpg";
import web4 from "../assets/web4.png";

const projectsData = [
  {
    id: 1,
    title: "Pesan Masa Depan",
    description: "An interactive digital time capsule platform that allows users to write messages, record their emotional footprints, and schedule them to be sent or read in the future.",
    image: web1,
    techStack: ["HTML5", "PHP Native", "Vanilla JavaScript"]
  },
  {
    id: 2,
    title: "SecureGate v1",
    description: "A comprehensive event management and ticketing web application designed to handle event discovery and attendance tracking seamlessly. Features include integrated Midtrans payment processing, a built-in QR e-ticket scanner, and dedicated dashboards for organizers.",
    image: web2,
    techStack: ["PHP", "JavaScript", "MySQL", "CSS"]
  },
  {
    id: 3,
    title: "SecureGate v2",
    description: "An innovative event ticketing platform featuring advanced anti-scalper biometric verification. It uniquely integrates an AI-powered API for intelligent friend-matching at events, alongside comprehensive management dashboards for organizers.",
    image: web3,
    techStack: ["Vite.js", "Laravel", "MySQL", "Tailwind CSS", "QweenAI API", "Midtrans", "PHPMailer", "GoogleAuth", "Mapcn", "Fonnte API"]
  },
  {
    id: 4,
    title: "Voteryx",
    description: "A secure liquid democracy e-voting app for campus elections. Features include end-to-end vote encryption, a unique vote delegation system, one-time KYC verification, and seamless real-time data sync using SQLite and Supabase.",
    image: app1,
    techStack: ["Flutter","Supabase","Riverpod","SQLite"]
  },
  {
    id: 5,
    title: "Eysa Placement Test",
    description: "A comprehensive full-stack web application designed for managing online assessments and placement tests. Features include an advanced question pool editor with support for multiple-choice, writing, and speaking sections, customizable scoring weights, and a seamless Excel import functionality for bulk question management.",
    image: web4,
    techStack: ["Vite.js","Laravel","MySQL","Tailwind CSS"]
  }
];

function WebsiteAppProject() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerPage = isMobile ? 1 : 2;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < projectsData.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    } else {
      setCurrentIndex(0);
    }
  };

  // Mengambil project berdasarkan jumlah item per halaman
  const currentProjects = projectsData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="website-app" className="h-screen w-full snap-start relative bg-black flex items-center justify-start overflow-hidden">
      
      {/* --- HEADER KIRI ATAS --- */}
      <motion.div 
        className="absolute top-12 left-6 md:top-10 md:left-10 z-30 flex flex-col"
        initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-gray-500 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-1">Skills</span>
        <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">Experience</h2>
      </motion.div>

      {/* --- Pencahayaan Premium --- */}
      <div className="absolute top-2/3 left-[-20%] -translate-y-1/2 w-[320px] md:w-[560px] h-[320px] md:h-[560px] bg-gradient-to-br from-orange-600/20 to-red-600/30 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Kontainer Utama Kiri */}
      <div className="relative w-full h-full max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-start z-20 px-6 md:px-12 pt-40 md:pt-0 pointer-events-none">
        
        {/* --- SISI KIRI: TEKS "Website Project" --- */}
        <motion.div 
          className="w-full md:w-1/3 flex flex-col md:-translate-x-18 pointer-events-auto"
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
            Website & App <br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Project</span>
          </h2>
        </motion.div>

      </div>

      {/* --- SISI KANAN: KARTU PROYEK (Tanpa background wadah) --- */}
      <motion.div 
        className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[95%] md:left-auto md:translate-x-0 md:right-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:w-[65%] h-[55vh] md:h-[100vh] p-0 md:p-10 flex flex-col z-10 pointer-events-auto"
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      >
        
        {/* Header Kanan: Tempat Tombol Navigasi Slider */}
        <div className="w-full flex justify-end mb-4 z-30">
          <div className="flex gap-3">
            <button 
              onClick={handlePrev} 
              disabled={currentIndex === 0}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentIndex === 0 
                  ? 'opacity-30 cursor-not-allowed bg-white/5 border border-white/10 text-gray-500' 
                  : 'bg-transparent border border-white/20 text-gray-400 hover:text-white hover:bg-gradient-to-tr hover:from-orange-500 hover:to-red-600 hover:border-transparent hover:shadow-[0_0_15px_rgba(239,68,68,0.6)] hover:scale-110 cursor-pointer'
              }`}
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <button 
              onClick={handleNext} 
              disabled={currentIndex + itemsPerPage >= projectsData.length}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentIndex + itemsPerPage >= projectsData.length 
                  ? 'opacity-30 cursor-not-allowed bg-white/5 border border-white/10 text-gray-500' 
                  : 'bg-transparent border border-white/20 text-gray-400 hover:text-white hover:bg-gradient-to-tr hover:from-orange-500 hover:to-red-600 hover:border-transparent hover:shadow-[0_0_15px_rgba(239,68,68,0.6)] hover:scale-110 cursor-pointer'
              }`}
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* Kontainer Kartu Proyek */}
        <div className="w-full flex-1 min-h-0">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pb-4 overflow-y-auto no-scrollbar md:overflow-visible"
            >
              {currentProjects.map((project) => (
                <div key={project.id} className="w-full h-full md:h-[550px] bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col group hover:border-orange-500/50 hover:shadow-[0_10px_30px_rgba(249,115,22,0.15)] transition-all duration-300">
                  
                  {/* Bagian Gambar (Menggunakan rasio pasti dari web3.png yaitu 1918x863) */}
                  <div className="w-full aspect-[1918/863] relative overflow-hidden bg-gray-900 border-b border-white/10 shrink-0">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                    {/* Gradient Overlay halusnya */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Bagian Konten Teks (Bawah) - Mengisi sisa ruang ke bawah */}
                  <div className="p-4 md:p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-500 transition-all duration-300">{project.title}</h3>
                      <p className="text-xs md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Tech Stack Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs text-gray-300 font-medium tracking-wide">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </motion.div>

    </section>
  );
}

export default WebsiteAppProject;
