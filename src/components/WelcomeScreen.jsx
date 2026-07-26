import { motion } from "framer-motion";

function WelcomeScreen() {
  return (
    <motion.section
      id="welcome"
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
  );
}

export default WelcomeScreen;
