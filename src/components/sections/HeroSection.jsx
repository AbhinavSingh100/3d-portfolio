import React from 'react';
import { Github, Twitter, Linkedin, Download, Instagram, Youtube, Mail } from 'lucide-react';
import { userDetails } from '../../utils/UserDetails';

const HeroSection = () => {
  return (
    <section className="relative w-full flex flex-col items-start justify-center text-white p-4">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-5xl font-black uni-sans-heavy leading-none tracking-tight text-shadow-lg">
          {userDetails.name}
        </h1>
        <h2 className="text-2xl md:text-3xl lora text-cyan-300 mt-4">
          {userDetails.role}
        </h2>
        <p className="mt-6 text-lg md:text-xl lora text-gray-300 max-w-xl mx-auto">
          {userDetails.bio}
        </p>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-start gap-4">
          <a
            href={userDetails.resume}
            download
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all duration-300 shadow-lg"
          >
            <Download size={20} />
            My Resume
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-cyan-400/10 backdrop-blur-md border border-cyan-400/20 text-cyan-300 font-semibold hover:bg-cyan-400/20 transition-all duration-300 shadow-lg"
          >
            Explore My Work
          </a>
        </div>
      </div>
      <div className="flex items-center gap-2 py-5">
        <a href={userDetails.socials.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300">
          <Github size={20} />
        </a>
        <a href={userDetails.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300">
          <Linkedin size={20} />
        </a>
        <a href={userDetails.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300">
          <Twitter size={20} />
        </a>
        <a href={userDetails.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300">
          <Instagram size={20} />
        </a>
        <a href={userDetails.socials.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300">
          <Youtube size={20} />
        </a>
        <a href={userDetails.socials.email} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300">
          <Mail size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;