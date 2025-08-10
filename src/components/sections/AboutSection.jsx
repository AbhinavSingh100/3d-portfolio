import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-10">
      <div className="w-full max-w-4xl mx-auto p-8 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
        <h2 className="text-4xl text-white mb-6 uni-sans-heavy">
          About Me
        </h2>
        <p className="text-lg text-gray-200 leading-relaxed lora">
          I am a passionate and creative developer with a love for building beautiful and functional web experiences. My journey into the world of code started with a fascination for 3D graphics and interactive design, which led me to explore the depths of React, Three.js, and modern web technologies. I thrive on turning complex problems into elegant solutions and bringing ideas to life on the digital canvas. When I'm not coding, you can find me exploring the latest design trends or diving into a good book.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;