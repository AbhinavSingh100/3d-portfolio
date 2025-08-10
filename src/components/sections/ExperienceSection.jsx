import React from 'react';

const experiences = [
  {
    role: "Creative Frontend Developer",
    company: "Digital Illusions Inc.",
    period: "2023 - Present",
    description: "Led the development of interactive 3D web applications using React and Three.js. Focused on creating immersive user experiences and pushing the boundaries of web-based graphics."
  },
  {
    role: "UI/UX Designer",
    company: "Pixel Perfect Studios",
    period: "2021 - 2023",
    description: "Designed and prototyped user interfaces for a variety of web and mobile applications. Specialized in user-centered design principles and creating intuitive, beautiful products."
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-10">
      <div className="w-full max-w-4xl mx-auto p-8">
        <h2 className="text-4xl text-white mb-6 uni-sans-heavy">
          My Journey
        </h2>
        <div className="relative border-l-2 border-white/20 pl-8">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute -left-10 w-4 h-4 bg-white rounded-full border-2 border-cyan-500"></div>
              <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
                <h3 className="text-2xl font-semibold text-white uni-sans-heavy">{exp.role}</h3>
                <p className="text-md text-gray-300 mt-1 mb-3 lora">{exp.company} | {exp.period}</p>
                <p className="text-gray-200 lora">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;