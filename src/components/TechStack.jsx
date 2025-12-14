import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaServer, FaDatabase, FaTrophy } from 'react-icons/fa'

const TechStack = () => {
  const skills = [
    { category: "Languages", icon: <FaCode />, items: ["C#", "Java", "SQL", "Shell Scripting (Bash)"] }, // [cite: 23]
    { category: "Frameworks", icon: <FaServer />, items: [".NET Core", "ASP.NET", "Entity Framework"] }, // [cite: 24]
    { category: "DevOps & Cloud", icon: <FaServer />, items: ["Docker", "Kubernetes", "GitHub Actions", "Azure"] }, // [cite: 25]
    { category: "Databases", icon: <FaDatabase />, items: ["SQL Server", "MySQL", "MongoDB", "Firebase"] } // [cite: 26]
  ]

  const achievements = [
    "Selected for Hexaware IMS Trainee Program", // [cite: 64]
    "Qualified TCS National Qualifier Test (NQT)", // [cite: 64]
    "Shortlisted for Wipro WILP Program", // [cite: 64]
    "Dept. Representative (BCA & MCA) for 5 years", // [cite: 64]
    "Training & Placement Coordinator (Led 20+ drives)" // [cite: 64]
  ]

  return (
    <div className='bg-primary py-20 px-8 md:px-20'>
        {/* Skills Grid */}
        <h2 className='text-3xl font-bold text-center text-gray-200 mb-12'>Technical Arsenal</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20'>
            {skills.map((skill, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className='bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-accent transition-colors'
                >
                    <div className='text-accent text-3xl mb-4'>{skill.icon}</div>
                    <h3 className='text-xl font-bold text-white mb-4'>{skill.category}</h3>
                    <div className='flex flex-wrap gap-2'>
                        {skill.items.map(item => (
                            <span key={item} className='text-sm bg-slate-900 text-gray-300 px-2 py-1 rounded'>{item}</span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Achievements Section */}
        <div className='max-w-4xl mx-auto bg-slate-900 rounded-2xl p-8 border border-slate-800'>
            <div className='flex items-center gap-4 mb-6'>
                <FaTrophy className='text-yellow-500 text-3xl' />
                <h3 className='text-2xl font-bold text-white'>Achievements & Leadership</h3>
            </div>
            <div className='grid md:grid-cols-2 gap-4'>
                {achievements.map((item, i) => (
                    <div key={i} className='flex items-start gap-3 text-gray-300'>
                        <span className='text-accent mt-1'>▹</span>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TechStack