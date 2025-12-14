import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div id="about" className='bg-slate-900 min-h-screen py-20 px-8 md:px-20 scroll-mt-24 text-gray-300'>
      <div className='max-w-4xl mx-auto'>
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-4xl font-bold text-gray-200 mb-8 text-center'
        >
          About Me
        </motion.h2>

        <div className='flex flex-col md:flex-row gap-12 items-center'>
            
          {/* Left Side: The Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex-1 leading-loose text-lg'
          >
            <p className='mb-6'>
              Hi! I'm <span className='text-accent font-bold'>Deepankar Karn</span>, a Software Engineer based in India. 
              I recently completed my <span className='text-gray-100 font-semibold'>Master of Computer Applications (MCA)</span> with a CGPA of 8.09. Also, I have completed my <span className='text-gray-100 font-semibold'>Bachelor of Computer Applications (BCA)</span> in 2023 with a CGPA of 9.28.
            </p>
            <p className='mb-6'>
              I have worked as <span className='text-gray-100 font-semibold'>Junior Application Support Analyst (Intern) at EPAM Systems</span>, where I specialize in .NET and C# enterprise applications. My daily work involved analyzing complex production issues, optimizing and improving system performance.
            </p>
            <p>
              I am passionate about building scalable solutions using <span className='text-accent'>.NET Core, ASP.NET and Cloud Technologies</span>. When I'm not coding, I love exploring system architectures and learning new DevOps tools like Docker and Kubernetes.
            </p>
          </motion.div>

          {/* Right Side: Quick Stats / Skills Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='w-full md:w-1/3 bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg'
          >
            <h3 className='text-xl font-bold text-white mb-4 border-b border-slate-600 pb-2'>Tech Stack</h3>
            <div className='flex flex-wrap gap-2'>
                {['C#', '.NET Core', 'SQL Server', 'Docker','Kubernetes', 'Git', 'Cloud'].map((skill) => (
                    <span key={skill} className='text-sm bg-primary text-accent px-3 py-1 rounded-md'>
                        {skill}
                    </span>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About