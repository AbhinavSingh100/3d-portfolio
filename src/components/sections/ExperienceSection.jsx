import React from 'react';
import { userDetails } from '../../utils/UserDetails';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-10">
      <div className="w-full max-w-4xl mx-auto p-8">
        <h2 className="text-5xl font-bold text-white mb-12 text-center uni-sans-heavy">
          {userDetails.experience.title}
        </h2>
        <div className="relative border-l-2 border-white/20 pl-8">
          {userDetails.experience.list.map((exp, index) => (
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