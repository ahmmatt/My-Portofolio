import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import fotoBadanPlaceholder from "../assets/lig_hitam.png"; 
import fotoWajahPlaceholder from "../assets/lig_hitam_face.png";

function Profile() {
  return (
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
        <Link to="/profile" className="text-[10px] md:text-xs font-medium text-orange-400 transition-colors">Profile</Link>
        <Link to="/skills" className="text-[10px] md:text-xs font-medium hover:text-red-400 transition-colors">Skills</Link>
        <Link to="/achievement" className="text-[10px] md:text-xs font-medium hover:text-red-400 transition-colors">Achievement</Link>
        <Link to="/contact" className="text-[10px] md:text-xs font-medium hover:text-red-400 transition-colors">Contact</Link>
      </motion.nav>

    </section>
  );
}

export default Profile;
