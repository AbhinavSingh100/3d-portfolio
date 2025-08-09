import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative z-10 h-screen w-full flex items-center justify-center">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8 max-w-xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Abhinav Singh
        </h1>
        <h2 className="text-xl md:text-2xl text-pink-300 font-medium mb-4">
          Passionate Designer
        </h2>
        <p className="text-gray-200 text-base md:text-lg mb-6">
          I blend creativity with code to craft immersive, beautiful digital experiences.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white border border-white/30 transition-all"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection