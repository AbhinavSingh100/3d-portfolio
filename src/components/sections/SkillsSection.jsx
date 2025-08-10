import React from 'react';
import { Code, Database, Wind, Palette } from 'lucide-react';

const skills = [
  { name: 'React & Next.js', icon: <Code size={32} /> },
  { name: 'Three.js & R3F', icon: <Wind size={32} /> },
  { name: 'Node.js & Express', icon: <Code size={32} /> },
  { name: 'MongoDB & SQL', icon: <Database size={32} /> },
  { name: 'Tailwind CSS', icon: <Palette size={32} /> },
  { name: 'UI/UX Design', icon: <Palette size={32} /> },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-10">
      <div className="w-full max-w-4xl mx-auto p-8">
        <h2 className="text-4xl text-white mb-6 uni-sans-heavy">
          My Toolkit
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
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
