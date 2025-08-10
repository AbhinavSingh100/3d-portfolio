import React from 'react';

const projects = [
  {
    title: "Interactive Ocean Explorer",
    image: "https://via.placeholder.com/400x300", // Replace with your project image
    description: "A web-based 3D experience that allows users to explore a vibrant underwater world, built with Three.js and React.",
    link: "#"
  },
  {
    title: "Glassmorphic UI Kit",
    image: "https://via.placeholder.com/400x300", // Replace with your project image
    description: "A component library for React that makes it easy to create beautiful glassmorphism-style interfaces.",
    link: "#"
  },
  {
    title: "Portfolio Website",
    image: "https://via.placeholder.com/400x300", // Replace with your project image
    description: "The very website you are on, designed to showcase my skills in 3D, animation, and responsive design.",
    link: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-10">
      <div className="w-full max-w-6xl mx-auto p-8">
        <h2 className="text-4xl text-white mb-6 uni-sans-heavy">
          My Creations
        </h2>
        <div className="grid grid-cols-1  gap-8">
          {projects.map((project, index) => (
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