import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaArrowDown, FaFileDownload } from 'react-icons/fa';
const Hero = () => {
  return (
    // Tailwind classes for centering and full height
    <div className='h-screen flex flex-col justify-center items-start px-8 md:px-20 relative'>
        
      {/* 1. The Intro Text */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }} // Start state: invisible, slightly down
        animate={{ opacity: 1, y: 0 }}  // End state: visible, in place
        transition={{ duration: 0.5 }}  // How long it takes
        className='text-accent text-lg mb-4 font-mono'
      >
        Hi, my name is
      </motion.p>

      {/* 2. The Big Name */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }} // Add delay so it appears after the line above
        className='text-4xl md:text-7xl font-bold text-gray-200 mb-4'
      >
        [Deepankar Karn]
      </motion.h1>

      {/* 3. The Tagline - Sized Down */}
      <motion.h2 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.4 }}
        className='text-xl md:text-4xl font-bold text-gray-400 mb-8'
      >
        Bridging the gap between <span className='text-accent'>Logic</span> and <span className='text-accent'>Creativity</span>.
      </motion.h2>
      
      {/* --- RESUME BUTTON --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-8"
      >
        <a 
            href="/resume.pdf" 
            download="Deepankar_Karn_Resume.pdf" // This name appears when they download it
            className="group flex items-center gap-3 bg-accent text-slate-900 px-6 py-3 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
        >
            <FaFileDownload className="group-hover:animate-bounce" />
            Download Resume
        </a>
      </motion.div>

      {/* 4. Social Icons */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1, delay: 0.8 }}
         className='flex gap-6'
      >
        {/* Replace # with your actual links */}
        <a href="https://github.com/deepankarGit007" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-accent text-3xl transition-colors"><FaGithub /></a>
        <a 
        href="https://www.linkedin.com/in/deepankar-karn" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-accent text-3xl transition-colors"><FaLinkedin /></a>
        <a 
          href="https://www.instagram.com/deepankarkarn/?igsh=eTFydGt5Znd5ZTA%3D#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-accent text-3xl transition-colors"
        >
          <FaInstagram />
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className='absolute bottom-10 left-1/2 -translate-x-1/2'
      >
        <a href="#about" className='flex flex-col items-center cursor-pointer'>
          <span className='text-gray-500 text-xs mb-2 tracking-widest uppercase'>Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className='text-accent text-2xl border border-slate-700 p-2 rounded-full hover:bg-slate-800 transition-colors'
          >
            <FaArrowDown />
          </motion.div>
        </a>
      </motion.div>

    </div>
  )
}

export default Hero