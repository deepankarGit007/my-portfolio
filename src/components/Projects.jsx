import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: "Inflation-Adjusted SIP Calculator",
    description: "A robust financial tool projecting returns over a 30-year horizon. Integrates the World Bank API to fetch real-time CPI data for dynamic inflation-adjusted maturity calculations. Features custom error handling and asynchronous programming.",
    tech: ["C#", ".NET", "RESTful API", "Async/Await"],
    github: "https://github.com/deepankarGit007/SIP_Calculator_ConsoleApp.git", 
    demo: null 
  },
  {
    title: "Yatrik Travel App",
    description: "A responsive Single Page Application (SPA) for travel planning. implemented Firebase Authentication for user sessions and Realtime Database for itinerary storage. Features a CI/CD pipeline via Netlify and GitHub Actions.",
    tech: ["React.js", "Firebase", "Tailwind CSS", "CI/CD"],
    github: "https://github.com/deepankarGit007/yatrik.git", 
    demo: "#" // Add link if active
  },
  {
    title: "Calories Burn Prediction (ML)",
    description: "A Machine Learning model to predict calorie expenditure based on physiological parameters. Utilized Python and Scikit-learn to implement regression algorithms and performed EDA using Pandas and NumPy.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    github: "#", 
    demo: null
  },
  {
    title: "Console Banking System",
    description: "A scalable banking application built on SOLID principles. Implemented the Factory Design Pattern for account creation (Savings/Current) and a custom exception handling framework to ensure transaction safety.",
    tech: ["C#", ".NET", "Factory Pattern", "OOP"],
    github: "https://github.com/deepankarGit007/BankingConsoleApp.git", 
    demo: null
  }
]

const Projects = () => {
  return (
    <div id="projects" className='bg-primary min-h-screen py-20 px-8 md:px-20 scroll-mt-24'>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-4xl font-bold text-gray-200 mb-12 text-center'
      >
        Featured Projects
      </motion.h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='bg-slate-800 p-6 rounded-xl hover:shadow-xl hover:shadow-accent/20 transition-all border border-slate-700 flex flex-col h-full'
          >
            <div className="flex-grow">
                <h3 className='text-2xl font-bold text-accent mb-3'>{project.title}</h3>
                <p className='text-gray-400 mb-4 text-sm leading-relaxed'>{project.description}</p>
                
                <div className='flex flex-wrap gap-2 mb-6'>
                {project.tech.map((t, i) => (
                    <span key={i} className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-full border border-slate-700'>
                    {t}
                    </span>
                ))}
                </div>
            </div>

            <div className='flex gap-4 mt-auto pt-4 border-t border-slate-700/50'>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm'>
                <FaGithub /> Code
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-gray-300 hover:text-accent transition-colors text-sm'>
                   <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects