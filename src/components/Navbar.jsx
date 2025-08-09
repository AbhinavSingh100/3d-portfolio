import { Github, Twitter, Mail, Linkedin, Instagram, Youtube } from 'lucide-react'
import React from 'react'
import './Navbar.css'

const Navbar = () => {
    const iconClass = `w-6 h-6 text-white hover:text-gray-400 transition-colors duration-200`; 
    const strokeWidth = 1.5; // Default icon size

  return (
    <div className='flex items-center justify-around bg-black rounded-3xl py-3 px-2'>
        <a href="https://github.com/AbhinavSingh100" className='border-r-2 border-gray-700'>
            <Github className={`${iconClass}`} strokeWidth={strokeWidth} />
        </a>
        <a href="https://x.com/the_grt_pretndr" className='border-r-2 border-gray-700'>
            <Twitter className={`${iconClass}`} strokeWidth={strokeWidth} />
        </a>
        <a href="mailto:abhinav22singh03@gmail.com" className='border-r-2 border-gray-700'>
            <Mail className={`${iconClass}`} strokeWidth={strokeWidth} />
        </a>
        <a href="https://www.linkedin.com/in/abhinav-singh-529935223/" className='border-r-2 border-gray-700'>
            <Linkedin className={`${iconClass}`} strokeWidth={strokeWidth} />
        </a>
        <a href="https://www.instagram.com/the_grt_pretndr/" className='border-r-2 border-gray-700'>
            <Instagram className={`${iconClass}`} strokeWidth={strokeWidth} />
        </a>
        <a href="https://www.youtube.com/@thegreatpretender" >
            <Youtube className={`${iconClass}`} strokeWidth={strokeWidth} />
        </a>
    </div>
  )
}

export default Navbar