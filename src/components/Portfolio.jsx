import React, { useEffect, useRef } from 'react';
import HeroSection from './sections/HeroSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import BlogsSection from './sections/BlogsSection';
import GithubTab from './sections/GithubTab';
import Navbar from './Navbar';

// --- Helper Components for organization ---

// const Header = () => (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//             <a href="#" className="text-xl font-bold tracking-tighter">Abhinav Singh</a>
//             <nav className="hidden md:flex items-center space-x-8">
//                 <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
//                 <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
//                 <a href="#blogs" className="text-gray-600 hover:text-gray-900">Blogs</a>
//                 <a href="#contact" className="btn btn-secondary">Contact</a>
//             </nav>
//             <button className="md:hidden text-gray-900">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//                 </svg>
//             </button>
//         </div>
//     </header>
// );

// const HeroSection = () => (
//     <section id="hero" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
//         {/* Your React component <Hero /> with the 3D jellyfish would go here.
//           It would include the two canvas layers for the "3D sandwich" effect.
//           This is a static placeholder for that component.
//         */}
//         <div className="z-10 p-6">
//              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
//                 <span className="block">Abhinav Singh</span>
//                 <span className="block text-gray-500">Passionate Developer</span>
//             </h1>
//             <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
//                 Hi everyone, I am Abhinav. I build beautiful and immersive web experiences that blend design and technology.
//             </p>
//             <div className="flex items-center justify-center space-x-4">
//                 <img src="https://placehold.co/40x40/e5e7eb/e5e7eb?text=A" alt="Tech Logo" className="rounded-full" />
//                 <img src="https://placehold.co/40x40/e5e7eb/e5e7eb?text=B" alt="Tech Logo" className="rounded-full" />
//                 <img src="https://placehold.co/40x40/e5e7eb/e5e7eb?text=C" alt="Tech Logo" className="rounded-full" />
//                 <img src="https://placehold.co/40x40/e5e7eb/e5e7eb?text=D" alt="Tech Logo" className="rounded-full" />
//             </div>
//         </div>
//     </section>
// );

// const ExperienceSection = () => (
//     <section id="experience" className="py-20 lg:py-32">
//         <div className="container mx-auto px-6 text-center">
//             <h2 className="section-header animate-on-scroll">Experience</h2>
//             <p className="section-subheader animate-on-scroll">A summary of my professional journey and key roles.</p>
//             <div className="max-w-3xl mx-auto border-l-2 border-gray-200 pl-8 space-y-12 text-left">
//                 <div className="relative animate-on-scroll">
//                     <div className="absolute -left-[38px] top-1 h-4 w-4 bg-gray-900 rounded-full border-4 border-white"></div>
//                     <p className="text-sm text-gray-500 mb-1">March 2023 - Present</p>
//                     <h3 className="text-xl font-bold">Technical Intern</h3>
//                     <p className="font-semibold text-gray-700">Cisco Systems, Inc.</p>
//                     <p className="mt-2 text-gray-600">Played basketball, and also contributed to developing and maintaining internal tools using React and Python, improving workflow efficiency by 15%.</p>
//                 </div>
//                 <div className="relative animate-on-scroll">
//                     <div className="absolute -left-[38px] top-1 h-4 w-4 bg-gray-900 rounded-full border-4 border-white"></div>
//                     <p className="text-sm text-gray-500 mb-1">June 2022 - August 2022</p>
//                     <h3 className="text-xl font-bold">Web Development Intern</h3>
//                     <p className="font-semibold text-gray-700">Innovate Co.</p>
//                     <p className="mt-2 text-gray-600">Assisted the front-end team in building responsive user interfaces for client websites, gaining hands-on experience with modern CSS frameworks.</p>
//                 </div>
//             </div>
//         </div>
//     </section>
// );

// const ProjectsSection = () => (
//     <section id="projects" className="py-20 lg:py-32 bg-gray-50">
//         <div className="container mx-auto px-6 text-center">
//             <h2 className="section-header animate-on-scroll">Projects</h2>
//             <p className="section-subheader animate-on-scroll">A selection of my work. See something you like? Let's talk.</p>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <div className="card animate-on-scroll">
//                     <img src="https://placehold.co/600x400/111827/FFFFFF?text=Project+One" alt="Project Thumbnail" className="w-full h-48 object-cover" />
//                     <div className="p-6 text-left">
//                         <h3 className="text-lg font-bold mb-2">Immersive 3D Portfolio</h3>
//                         <p className="text-gray-600 mb-4">An interactive portfolio website built with React Three Fiber, featuring complex 3D animations and a minimalist UI.</p>
//                         <a href="#" className="font-semibold text-gray-900 hover:underline">View Project &rarr;</a>
//                     </div>
//                 </div>
//                 <div className="card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
//                     <img src="https://placehold.co/600x400/6B7280/FFFFFF?text=Project+Two" alt="Project Thumbnail" className="w-full h-48 object-cover" />
//                     <div className="p-6 text-left">
//                         <h3 className="text-lg font-bold mb-2">Data Visualization Dashboard</h3>
//                         <p className="text-gray-600 mb-4">A web application for visualizing complex datasets using D3.js, providing intuitive insights through interactive charts.</p>
//                         <a href="#" className="font-semibold text-gray-900 hover:underline">View Project &rarr;</a>
//                     </div>
//                 </div>
//                 <div className="card animate-on-scroll" style={{ animationDelay: '0.4s' }}>
//                     <img src="https://placehold.co/600x400/D1D5DB/111827?text=Project+Three" alt="Project Thumbnail" className="w-full h-48 object-cover" />
//                     <div className="p-6 text-left">
//                         <h3 className="text-lg font-bold mb-2">E-commerce Platform</h3>
//                         <p className="text-gray-600 mb-4">A full-stack e-commerce solution with features like product management, user authentication, and a payment gateway.</p>
//                         <a href="#" className="font-semibold text-gray-900 hover:underline">View Project &rarr;</a>
//                     </div>
//                 </div>
//             </div>
//             <div className="mt-12 animate-on-scroll">
//                 <a href="#" className="btn btn-primary">View More Projects</a>
//             </div>
//         </div>
//     </section>
// );

// const BlogsSection = () => (
//     <section id="blogs" className="py-20 lg:py-32">
//         <div className="container mx-auto px-6 text-center">
//             <h2 className="section-header animate-on-scroll">From My Blog</h2>
//             <p className="section-subheader animate-on-scroll">I write about web development, design, and the tech I'm excited about.</p>
//             <div className="max-w-4xl mx-auto space-y-8">
//                 <div className="card flex flex-col md:flex-row items-center animate-on-scroll">
//                     <div className="p-6 text-left flex-grow">
//                         <p className="text-sm text-gray-500 mb-2">August 4, 2025</p>
//                         <h3 className="text-xl font-bold mb-2">Mastering React Three Fiber: A Beginner's Guide</h3>
//                         <p className="text-gray-600 mb-4 hidden md:block">Dive into the world of 3D on the web. This guide breaks down the fundamentals of creating stunning 3D scenes with React.</p>
//                         <a href="#" className="font-semibold text-gray-900 hover:underline">Read More &rarr;</a>
//                     </div>
//                 </div>
//                 <div className="card flex flex-col md:flex-row items-center animate-on-scroll">
//                     <div className="p-6 text-left flex-grow">
//                         <p className="text-sm text-gray-500 mb-2">July 21, 2025</p>
//                         <h3 className="text-xl font-bold mb-2">The Art of Minimalism in Web Design</h3>
//                         <p className="text-gray-600 mb-4 hidden md:block">Exploring how "less is more" can lead to more effective and beautiful user interfaces. Principles, examples, and tips.</p>
//                         <a href="#" className="font-semibold text-gray-900 hover:underline">Read More &rarr;</a>
//                     </div>
//                 </div>
//             </div>
//              <div className="mt-12 animate-on-scroll">
//                 <a href="#" className="btn btn-secondary">Visit My Blog</a>
//             </div>
//         </div>
//     </section>
// );

// const ContactSection = () => (
//     <section id="contact" className="py-20 lg:py-32 bg-gray-900 text-white">
//         <div className="container mx-auto px-6 text-center">
//             <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight animate-on-scroll">Let's Build Something Great</h2>
//             <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-300 animate-on-scroll">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
//             <div className="mt-10 animate-on-scroll">
//                 <a href="mailto:abhinav.singh@example.com" className="btn btn-primary bg-white text-gray-900 hover:bg-gray-200">Get In Touch</a>
//             </div>
//             <div className="mt-12 flex justify-center space-x-6 animate-on-scroll">
//                 <a href="#" className="text-gray-400 hover:text-white">
//                     <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.738 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"/></svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                     <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                     <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.206v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.337 7.433c-.91 0-1.644-.734-1.644-1.643 0-.91.734-1.644 1.644-1.644.91 0 1.644.734 1.644 1.644 0 .91-.734 1.643-1.644 1.643zM6.617 16.338H4.06v-8.59h2.557v8.59zM17.638 2H6.362A4.362 4.362 0 002 6.362v11.276A4.362 4.362 0 006.362 22h11.276A4.362 4.362 0 0022 17.638V6.362A4.362 4.362 0 0017.638 2z" clipRule="evenodd"/></svg>
//                 </a>
//             </div>
//         </div>
//     </section>
// );

// const Footer = () => (
//     <footer className="bg-white border-t border-gray-200">
//         <div className="container mx-auto px-6 py-8 text-center text-gray-500">
//             <p>&copy; 2025 Abhinav Singh. All Rights Reserved.</p>
//         </div>
//     </footer>
// );

// // --- Main Portfolio Component ---

const Portfolio = () => {
    // Effect for scroll animations
    useEffect(() => {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        animatedElements.forEach(el => {
            observer.observe(el);
        });

        // Cleanup observer on component unmount
        return () => animatedElements.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className='antialiased flex flex-col items-center pt-20 relative w-[50vw] text-white'>
                    <HeroSection />
                    <ExperienceSection />
                    <ProjectsSection />
                    <BlogsSection />
                    <div className='fixed bottom-10 left-[50%] translate-x-[-50%]'>
                        <Navbar />
                    </div>
                    <GithubTab />
                </div>
                
            </div>
        </>
    );
};

export default Portfolio;
