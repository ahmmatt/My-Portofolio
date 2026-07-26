import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  SiPython, SiHtml5, SiCplusplus, SiJavascript, SiPhp, SiReact, SiVite, SiLaravel, SiDart,
  SiFigma, SiSupabase, SiGit, SiPostman, SiMysql, SiDocker, SiCpanel, SiAndroidstudio, SiFlutter
} from "react-icons/si";
import { 
  FaDatabase, FaBrain, FaUsers, FaRegComments, FaTasks, FaChartLine, FaSyncAlt, FaProjectDiagram, FaFileWord, FaFileExcel 
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

function SkillsEducation() {
  const programmingSkills = [
    { name: 'Python', icon: <SiPython />, hoverColor: 'group-hover:text-blue-400', hoverBg: 'group-hover:bg-blue-400/20', hoverBorder: 'group-hover:border-blue-400' },
    { name: 'HTML/CSS', icon: <SiHtml5 />, hoverColor: 'group-hover:text-orange-500', hoverBg: 'group-hover:bg-orange-500/20', hoverBorder: 'group-hover:border-orange-500' },
    { name: 'C++', icon: <SiCplusplus />, hoverColor: 'group-hover:text-blue-600', hoverBg: 'group-hover:bg-blue-600/20', hoverBorder: 'group-hover:border-blue-600' },
    { name: 'SQL', icon: <FaDatabase />, hoverColor: 'group-hover:text-blue-300', hoverBg: 'group-hover:bg-blue-300/20', hoverBorder: 'group-hover:border-blue-300' },
    { name: 'JavaScript', icon: <SiJavascript />, hoverColor: 'group-hover:text-yellow-400', hoverBg: 'group-hover:bg-yellow-400/20', hoverBorder: 'group-hover:border-yellow-400' },
    { name: 'PHP', icon: <SiPhp />, hoverColor: 'group-hover:text-indigo-400', hoverBg: 'group-hover:bg-indigo-400/20', hoverBorder: 'group-hover:border-indigo-400' },
    { name: 'React', icon: <SiReact />, hoverColor: 'group-hover:text-cyan-400', hoverBg: 'group-hover:bg-cyan-400/20', hoverBorder: 'group-hover:border-cyan-400' },
    { name: 'Vite.js', icon: <SiVite />, hoverColor: 'group-hover:text-purple-500', hoverBg: 'group-hover:bg-purple-500/20', hoverBorder: 'group-hover:border-purple-500' },
    { name: 'Laravel', icon: <SiLaravel />, hoverColor: 'group-hover:text-red-500', hoverBg: 'group-hover:bg-red-500/20', hoverBorder: 'group-hover:border-red-500' },
    { name: 'Dart', icon: <SiDart />, hoverColor: 'group-hover:text-blue-400', hoverBg: 'group-hover:bg-blue-400/20', hoverBorder: 'group-hover:border-blue-400' },
    { name: 'Flutter', icon: <SiFlutter />, hoverColor: 'group-hover:text-cyan-400', hoverBg: 'group-hover:bg-cyan-400/20', hoverBorder: 'group-hover:border-cyan-400' },
  ];

  const toolsSkills = [
    { name: 'Figma', icon: <SiFigma />, hoverColor: 'group-hover:text-pink-400', hoverBg: 'group-hover:bg-pink-400/20', hoverBorder: 'group-hover:border-pink-400' },
    { name: 'Supabase', icon: <SiSupabase />, hoverColor: 'group-hover:text-green-500', hoverBg: 'group-hover:bg-green-500/20', hoverBorder: 'group-hover:border-green-500' },
    { name: 'Git', icon: <SiGit />, hoverColor: 'group-hover:text-orange-500', hoverBg: 'group-hover:bg-orange-500/20', hoverBorder: 'group-hover:border-orange-500' },
    { name: 'Postman', icon: <SiPostman />, hoverColor: 'group-hover:text-orange-400', hoverBg: 'group-hover:bg-orange-400/20', hoverBorder: 'group-hover:border-orange-400' },
    { name: 'MySQL', icon: <SiMysql />, hoverColor: 'group-hover:text-blue-300', hoverBg: 'group-hover:bg-blue-300/20', hoverBorder: 'group-hover:border-blue-300' },
    { name: 'Docker', icon: <SiDocker />, hoverColor: 'group-hover:text-blue-500', hoverBg: 'group-hover:bg-blue-500/20', hoverBorder: 'group-hover:border-blue-500' },
    { name: 'Photoshop', iconText: 'Ps', hoverColor: 'group-hover:text-[#31A8FF]', hoverBg: 'group-hover:bg-[#31A8FF]/20', hoverBorder: 'group-hover:border-[#31A8FF]' },
    { name: 'Illustrator', iconText: 'Ai', hoverColor: 'group-hover:text-[#FF9A00]', hoverBg: 'group-hover:bg-[#FF9A00]/20', hoverBorder: 'group-hover:border-[#FF9A00]' },
    { name: 'After Effects', iconText: 'Ae', hoverColor: 'group-hover:text-[#9999FF]', hoverBg: 'group-hover:bg-[#9999FF]/20', hoverBorder: 'group-hover:border-[#9999FF]' },
    { name: 'CapCut', iconText: 'Cc', hoverColor: 'group-hover:text-white', hoverBg: 'group-hover:bg-white/20', hoverBorder: 'group-hover:border-white' },
    { name: 'Word', icon: <FaFileWord />, hoverColor: 'group-hover:text-blue-600', hoverBg: 'group-hover:bg-blue-600/20', hoverBorder: 'group-hover:border-blue-600' },
    { name: 'Excel', icon: <FaFileExcel />, hoverColor: 'group-hover:text-green-600', hoverBg: 'group-hover:bg-green-600/20', hoverBorder: 'group-hover:border-green-600' },
    { name: 'VS Code', icon: <VscVscode />, hoverColor: 'group-hover:text-blue-400', hoverBg: 'group-hover:bg-blue-400/20', hoverBorder: 'group-hover:border-blue-400' },
    { name: 'Laragon', iconText: 'Lg', hoverColor: 'group-hover:text-blue-400', hoverBg: 'group-hover:bg-blue-400/20', hoverBorder: 'group-hover:border-blue-400' },
    { name: 'Antigravity', iconText: 'Ag', hoverColor: 'group-hover:text-purple-400', hoverBg: 'group-hover:bg-purple-400/20', hoverBorder: 'group-hover:border-purple-400' },
    { name: 'CPanel', icon: <SiCpanel />, hoverColor: 'group-hover:text-orange-500', hoverBg: 'group-hover:bg-orange-500/20', hoverBorder: 'group-hover:border-orange-500' },
    { name: 'Android Studio', icon: <SiAndroidstudio />, hoverColor: 'group-hover:text-green-400', hoverBg: 'group-hover:bg-green-400/20', hoverBorder: 'group-hover:border-green-400' },
  ];

  const softSkills = [
    { title: "Problem Solving", desc: "Analytical approach to complex challenges with innovative solutions", icon: <FaBrain /> },
    { title: "Leadership", desc: "Guiding teams towards common goals with vision and empathy", icon: <FaUsers /> },
    { title: "Team Collaboration", desc: "Effective communication and cooperation in diverse team settings", icon: <FaUsers /> },
    { title: "Project Management", desc: "Organizing resources and timeline management for project success", icon: <FaTasks /> },
    { title: "Communication", desc: "Clear and concise information exchange with all stakeholders", icon: <FaRegComments /> },
    { title: "Adaptability", desc: "Quickly adjusting to new technologies and changing requirements", icon: <FaSyncAlt /> },
    { title: "Analytical Thinking", desc: "Breaking down complex problems into logical components", icon: <FaChartLine /> },
    { title: "Detailed Structural Plan", desc: "Creating comprehensive blueprints for scalable architectures", icon: <FaProjectDiagram /> },
  ];

  const SkillIcon = ({ name, icon, iconText, hoverColor, hoverBg, hoverBorder }) => (
    <div className="flex flex-col items-center gap-2 group cursor-pointer w-[65px] md:w-[80px]">
      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 shadow-lg ${hoverBg} ${hoverBorder}`}>
        {icon ? (
          <div className={`text-2xl md:text-4xl text-gray-400 transition-colors drop-shadow-md ${hoverColor}`}>
            {icon}
          </div>
        ) : (
          <span className={`text-xl md:text-2xl font-bold text-gray-400 transition-colors font-sans drop-shadow-md ${hoverColor}`}>
            {iconText}
          </span>
        )}
      </div>
      <span className="text-[10px] md:text-xs font-medium text-gray-400 group-hover:text-gray-100 text-center leading-tight transition-colors">
        {name}
      </span>
    </div>
  );

  return (
    <>
      {/* SECTION 1: HARD SKILLS & TOOLS */}
      <section id="skills" className="h-screen w-full snap-start relative bg-black flex flex-col items-center justify-center overflow-hidden px-4 md:px-12 py-10">
        
        {/* --- PENCAHAYAAN 4 SUDUT --- */}
        <div className="absolute top-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gradient-to-br from-orange-600/30 to-red-600/20 rounded-full blur-[80px] md:blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
        <div className="absolute top-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gradient-to-bl from-orange-600/30 to-red-600/20 rounded-full blur-[80px] md:blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gradient-to-tr from-red-600/30 to-orange-600/20 rounded-full blur-[80px] md:blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none z-0"></div>
        <div className="absolute bottom-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gradient-to-tl from-red-600/30 to-orange-600/20 rounded-full blur-[80px] md:blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none z-0"></div>

        {/* HEADER / JUDUL UTAMA */}
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tighter z-10 mb-8 md:mb-12"
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)] pr-3 py-1 block">
            Skills
          </span>
        </motion.h1>

        {/* CONTENT CONTAINER - Scrollable if screen is small */}
        <div className="w-full max-w-7xl z-10 flex flex-col lg:flex-row gap-5 md:gap-8 h-auto max-h-[70vh] lg:max-h-none overflow-y-auto lg:overflow-visible no-scrollbar pb-20 md:pb-12 px-2 md:px-0">
          
          {/* Card 1: Programming Languages */}
          <motion.div 
            className="w-full lg:w-[40%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-200 mb-6 text-center md:text-left border-b border-white/10 pb-3">
              Programming Languages & Frameworks
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-5">
              {programmingSkills.map((skill, i) => (
                <SkillIcon key={i} {...skill} />
              ))}
            </div>
          </motion.div>

          {/* Card 2: Technologies & Tools */}
          <motion.div 
            className="w-full lg:w-[60%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-200 mb-6 text-center md:text-left border-b border-white/10 pb-3">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-5">
              {toolsSkills.map((skill, i) => (
                <SkillIcon key={i} {...skill} />
              ))}
            </div>
          </motion.div>

        </div>

        {/* Navbar Bawah */}
        <motion.nav 
          className="absolute bottom-5 w-[90%] max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-5 py-3 flex justify-between items-center z-50 shadow-xl left-1/2 -translate-x-1/2 md:bottom-[8%]"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link to="/profile" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Profile</Link>
          <Link to="/skills" className="text-[10px] md:text-xs font-medium text-orange-400 transition-colors">Skills</Link>
          <Link to="/achievement" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Achievement</Link>
          <Link to="/contact" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Contact</Link>
        </motion.nav>

      </section>

      {/* SECTION 2: SOFT SKILLS */}
      <section id="soft-skills" className="h-screen w-full snap-start relative bg-black flex flex-col items-center justify-center overflow-hidden px-4 md:px-12 py-10">
        
        {/* --- PENCAHAYAAN 4 SUDUT (SAMA DENGAN ATAS) --- */}
        <div className="absolute top-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gradient-to-br from-orange-600/30 to-red-600/20 rounded-full blur-[80px] md:blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
        <div className="absolute top-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gradient-to-bl from-orange-600/30 to-red-600/20 rounded-full blur-[80px] md:blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gradient-to-tr from-red-600/30 to-orange-600/20 rounded-full blur-[80px] md:blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none z-0"></div>
        <div className="absolute bottom-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gradient-to-tl from-red-600/30 to-orange-600/20 rounded-full blur-[80px] md:blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none z-0"></div>

        {/* CONTENT CONTAINER - Center the Soft Skills */}
        <div className="w-full max-w-7xl z-10 flex flex-col gap-4 md:gap-5 h-auto max-h-[70vh] lg:max-h-none overflow-y-auto lg:overflow-visible no-scrollbar pb-20 md:pb-12 px-2 md:px-0 mt-8">
          
          <motion.div 
            className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl flex flex-col"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-200 mb-8 text-center md:text-left border-b border-white/10 pb-4">
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {softSkills.map((skill, i) => (
                <div key={i} className="bg-black/40 border border-white/5 rounded-2xl p-5 md:p-6 flex gap-4 hover:border-orange-500/40 hover:bg-black/60 transition-all duration-300 group cursor-default shadow-inner">
                  <div className="text-orange-500/80 text-3xl md:text-4xl pt-1 shrink-0 group-hover:text-orange-400 transition-colors">
                    {skill.icon}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-white font-semibold text-base md:text-lg tracking-wide">{skill.title}</h4>
                    <p className="text-gray-400 font-light text-xs md:text-sm mt-2 leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Navbar Bawah */}
        <motion.nav 
          className="absolute bottom-5 w-[90%] max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-5 py-3 flex justify-between items-center z-50 shadow-xl left-1/2 -translate-x-1/2 md:bottom-[8%]"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link to="/profile" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Profile</Link>
          <Link to="/skills" className="text-[10px] md:text-xs font-medium text-orange-400 transition-colors">Skills</Link>
          <Link to="/achievement" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Achievement</Link>
          <Link to="/contact" className="text-[10px] md:text-xs font-medium hover:text-orange-400 transition-colors">Contact</Link>
        </motion.nav>

      </section>
    </>
  );
}

export default SkillsEducation;
