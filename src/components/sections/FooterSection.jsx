import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer id='footer' className="relative z-10 w-full py-8">
      <div className="w-full max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/20 pt-8">
          <p className="text-gray-300 lora text-sm mb-4 md:mb-0">
            © 2025 Abhinav Singh. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
