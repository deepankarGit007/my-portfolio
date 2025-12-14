import React from 'react'
import { motion } from 'framer-motion'
import { FaRobot, FaBolt, FaLayerGroup } from 'react-icons/fa'

const GenAI = () => {
  return (
    <div className='bg-slate-900 py-16 px-8 relative overflow-hidden border-t border-slate-800'>
      
      {/* Background Glow Effect */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full bg-accent/5 blur-[100px] pointer-events-none'></div>

      <div className='max-w-4xl mx-auto relative z-10 text-center'>
        
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='inline-block mb-6'
        >
            <div className='bg-slate-800 p-4 rounded-full border border-slate-700 shadow-lg shadow-accent/20'>
                <FaRobot className='text-4xl text-accent animate-pulse' />
            </div>
        </motion.div>

        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-3xl md:text-4xl font-bold text-white mb-6'
        >
          Powered by <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600'>Prompt Engineering</span>
        </motion.h2>

        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto'
        >
          This entire portfolio is a testament to the potential of human-AI collaboration. 
          By leveraging advanced <strong>Generative AI prompting techniques</strong>, I architected, debugged, 
          and deployed this modern React application in record time—demonstrating how I use 
          AI to accelerate development workflows and solve complex problems efficiently.
        </motion.p>

        {/* Features Grid */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='grid md:grid-cols-3 gap-6 text-left'
        >
             <div className='bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-accent/50 transition-colors'>
                <FaBolt className='text-yellow-400 text-xl mb-3' />
                <h3 className='text-white font-bold mb-2'>Rapid Prototyping</h3>
                <p className='text-sm text-gray-400'>Converted concepts to production code using iterative prompting strategies.</p>
             </div>
             
             <div className='bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-accent/50 transition-colors'>
                <FaLayerGroup className='text-purple-400 text-xl mb-3' />
                <h3 className='text-white font-bold mb-2'>Architecture Design</h3>
                <p className='text-sm text-gray-400'>Directed the AI to implement scalable component structures and Tailwind styling.</p>
             </div>

             <div className='bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-accent/50 transition-colors'>
                <FaRobot className='text-cyan-400 text-xl mb-3' />
                <h3 className='text-white font-bold mb-2'>AI Integration</h3>
                <p className='text-sm text-gray-400'>Showcasing the practical application of LLMs in real-world software engineering.</p>
             </div>
        </motion.div>

      </div>
    </div>
  )
}

export default GenAI