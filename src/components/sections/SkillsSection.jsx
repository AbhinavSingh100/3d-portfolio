import React from 'react';
import { userDetails } from '../../utils/UserDetails';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-10">
      <div className="w-full max-w-4xl mx-auto p-8">
        <h2 className="text-5xl font-bold text-white mb-12 text-center uni-sans-heavy">
          {userDetails.skills.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {userDetails.skills.list.map((skill, index) => (
            <div key={index} className="p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 text-center text-white hover:bg-white/20 transition-colors duration-300">
              <div className="flex justify-center mb-4 text-cyan-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold lora">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
