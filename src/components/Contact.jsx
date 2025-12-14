import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <div id="contact" className='bg-slate-950 py-16 px-8 border-t border-slate-800 text-center'>
      <h2 className='text-3xl font-bold text-white mb-12'>Get In Touch</h2>
      
      {/* --- UPDATED LAYOUT: Grid System --- */}
      <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-gray-300'>
        
        {/* Phone Section */}
        <div className='flex flex-col items-center gap-3'>
            <FaPhone className='text-accent text-2xl' />
            <span className='font-medium'>+91-7086143431</span>
        </div>

        {/* Email Section */}
        <div className='flex flex-col items-center gap-3'>
            <FaEnvelope className='text-accent text-2xl' />
            <a href="mailto:deepankarkarn@gmail.com" className='hover:text-white transition-colors font-medium'>
                deepankarkarn@gmail.com
            </a>
        </div>

        {/* Location Section */}
        <div className='flex flex-col items-center gap-3'>
            <FaMapMarkerAlt className='text-accent text-2xl' />
            <span className='font-medium'>Dhanbad, Jharkhand, India</span>
        </div>
      </div>

      <p className='text-gray-600 text-sm'>
        © {new Date().getFullYear()} Deepankar Karn. Built with React & Tailwind.
      </p>
    </div>
  )
}

export default Contact