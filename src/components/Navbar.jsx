import React from 'react';

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#footer" }
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-6">
      <div className="container mx-auto px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
        <ul className="flex items-center justify-center gap-x-6 md:gap-x-8 text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-sm md:text-base font-medium uni-sans-thin hover:text-cyan-300 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;