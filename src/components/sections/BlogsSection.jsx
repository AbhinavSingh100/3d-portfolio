import React from 'react';
import { userDetails } from '../../utils/UserDetails';

const BlogsSection = () => {
  return (
    <section id="blogs" className="py-10">
      <div className="w-full max-w-4xl mx-auto p-8">
        <h2 className="text-5xl font-bold text-white mb-12 text-center uni-sans-heavy">
          {userDetails.blogs.title}
        </h2>
        <div className="space-y-8">
          {userDetails.blogs.list.map((blog, index) => (
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