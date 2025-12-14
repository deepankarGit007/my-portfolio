import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <div id="experience" className='bg-slate-900 py-20 px-8 md:px-20 scroll-mt-24'>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-4xl font-bold text-gray-200 mb-12 text-center'
      >
        Experience & Education
      </motion.h2>

      <div className='max-w-4xl mx-auto space-y-12'>
        {/* --- Work Experience --- */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='border-l-4 border-accent pl-6 ml-2 md:ml-0'
        >
            <h3 className='text-2xl font-bold text-gray-100'>Junior Application Support Analyst (Intern)</h3>
            <p className='text-accent text-lg font-mono mb-2'>EPAM Systems | Jan 2025 – Jul 2025</p>
            <p className='text-gray-400 mb-4'>Hyderabad, Telangana</p>
            <ul className='list-disc list-inside text-gray-300 space-y-2 leading-relaxed'>
                <li>Analyzed and troubleshot complex production issues using <strong>C# debugging</strong> and log analysis.</li>
                <li>Optimized SQL queries, reducing mean time to resolution by <strong>35%</strong>.</li>
                <li>Collaborated with cross-functional teams following <strong>Agile Scrum methodology</strong>.
                </li>
                <li>Documented technical procedures and created knowledge base articles to enhance team productivity.</li>
            </ul>
        </motion.div>

        {/* --- Education --- */}
        <div className='grid md:grid-cols-2 gap-8'>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='bg-slate-800 p-6 rounded-lg border border-slate-700'
            >
                <h4 className='text-xl font-bold text-white'>Master of Computer Applications (MCA)</h4>
                <p className='text-gray-400'>Asansol Engineering College | 2023 - 2025</p>
                <p className='text-accent font-bold mt-2'>CGPA: 8.09 / 10</p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='bg-slate-800 p-6 rounded-lg border border-slate-700'
            >
                <h4 className='text-xl font-bold text-white'>Bachelor of Computer Applications (BCA)</h4>
                <p className='text-gray-400'>Asansol Engineering College | 2020 - 2023</p>
                <p className='text-accent font-bold mt-2'>CGPA: 9.28 / 10</p>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Experience