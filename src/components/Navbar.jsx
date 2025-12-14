import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <nav className='w-full px-8 md:px-20 py-6 flex justify-between items-center absolute top-0 left-0 z-10'>
      {/* --- THE LOGO --- */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className='flex items-center'
      >
        {/* This is the SVG drawn directly in React */}
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className="w-10 h-10 text-accent" // Tailwind colors applied here
        >
            {/* The < and > brackets */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
        
        {/* Text next to logo (Optional) */}
        <span className='ml-3 text-xl font-bold text-gray-200 font-mono'>
            DK<span className='text-accent'>.</span>dev
        </span>
      </motion.div>

      {/* --- Navigation Links (Placeholder for future) --- */}
      {/* --- Navigation Links --- */}
      <motion.ul 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='hidden md:flex gap-8 text-gray-400 font-medium'
      >
        {/* About Link */}
        <li>
            <a href="#about" className='hover:text-accent transition-colors'>About</a>
        </li>
        
        {/* Experience Link (NEW) - Links to your timeline */}
        <li>
            <a href="#experience" className='hover:text-accent transition-colors'>Experience</a>
        </li>

        {/* Projects Link */}
        <li>
            <a href="#projects" className='hover:text-accent transition-colors'>Projects</a>
        </li>

        {/* Contact Link (UPDATED) - Now clickable */}
        <li>
            <a href="#contact" className='hover:text-accent transition-colors'>Contact</a>
        </li>
      </motion.ul>
    </nav>
  )
}

export default Navbar