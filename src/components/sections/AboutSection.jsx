import React from 'react';
import { userDetails } from '../../utils/UserDetails';

const AboutSection = () => {
  return (
    <section id="about" className="py-10">
      <div className="w-full max-w-4xl mx-auto p-8 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
        <h2 className="text-4xl text-white mb-6 uni-sans-heavy">
          {userDetails.about.title}
        </h2>
        <p className="text-lg text-gray-200 leading-relaxed lora">
          {userDetails.about.description}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;