import React from 'react';
import { userDetails } from '../../utils/UserDetails';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-10">
      <div className="w-full max-w-6xl mx-auto p-8">
        <h2 className="text-5xl font-bold text-white mb-12 text-center uni-sans-heavy">
          {userDetails.projects.title}
        </h2>
        <div className="grid grid-cols-1  gap-8">
          {userDetails.projects.list.map((project, index) => (
            <div key={index} className="rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 overflow-hidden group">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white uni-sans-heavy">{project.title}</h3>
                <p className="text-gray-200 mt-2 lora">{project.description}</p>
                <a href={project.link} className="inline-block mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-300 lora font-semibold">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;