import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
const Hero = () => {
  return (
    // Tailwind classes for centering and full height
    <div className='h-screen flex flex-col justify-center items-start px-8 md:px-20'>
        
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
        [Deepankar Karn].
      </motion.h1>

      {/* 3. The Tagline */}
      <motion.h2 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.4 }}
        className='text-3xl md:text-5xl font-bold text-gray-400 mb-8'
      >
        I build cool stuffs.
      </motion.h2>
      
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

    </div>
  )
}

export default Hero