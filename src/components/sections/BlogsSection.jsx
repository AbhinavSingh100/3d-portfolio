import React from 'react';

const blogs = [
  {
    title: "The Art of 3D Web: A Deep Dive into Three.js",
    date: "July 22, 2025",
    link: "#",
    summary: "Exploring the fundamentals of creating immersive 3D experiences on the web using Three.js and React Three Fiber."
  },
  {
    title: "Crafting Glassmorphism in UI Design",
    date: "June 15, 2025",
    link: "#",
    summary: "A guide to implementing the glassmorphism trend with CSS, creating stunning, frosted-glass effects."
  },
  {
    title: "Optimizing Performance in React Applications",
    date: "May 01, 2025",
    link: "#",
    summary: "Tips and tricks for profiling and boosting the performance of your React applications for a smoother user experience."
  }
];

const BlogsSection = () => {
  return (
    <section id="blogs" className="py-10">
      <div className="w-full max-w-4xl mx-auto p-8">
        <h2 className="text-4xl text-white mb-6 uni-sans-heavy">
          My Thoughts & Writings
        </h2>
        <div className="space-y-8">
          {blogs.map((blog, index) => (
            <a key={index} href={blog.link} className="block p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-white uni-sans-heavy">{blog.title}</h3>
              <p className="text-sm text-gray-300 mt-1 mb-3 lora">{blog.date}</p>
              <p className="text-gray-200 lora">{blog.summary}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;