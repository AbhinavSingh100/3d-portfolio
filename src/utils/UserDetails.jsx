import { Code, Database, Wind, Palette } from 'lucide-react';

export const userDetails = {
  name: "Abhinav Singh",
  role: "programmer • designer",
  bio: "Crafting immersive and beautiful web experiences that flow like the ocean.",
  resume: "/path-to-your-resume.pdf", // IMPORTANT: Update this path
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    email: "mailto:youremail@example.com"
  },
  about: {
    title: "About Me",
    description: "I am a passionate and creative developer with a love for building beautiful and functional web experiences. My journey into the world of code started with a fascination for 3D graphics and interactive design, which led me to explore the depths of React, Three.js, and modern web technologies. I thrive on turning complex problems into elegant solutions and bringing ideas to life on the digital canvas. When I'm not coding, you can find me exploring the latest design trends or diving into a good book."
  },
  skills: {
    title: "My Toolkit",
    list: [
      { name: 'React & Next.js', icon: <Code size={32} /> },
      { name: 'Three.js & R3F', icon: <Wind size={32} /> },
      { name: 'Node.js & Express', icon: <Code size={32} /> },
      { name: 'MongoDB & SQL', icon: <Database size={32} /> },
      { name: 'Tailwind CSS', icon: <Palette size={32} /> },
      { name: 'UI/UX Design', icon: <Palette size={32} /> },
    ]
  },
  experience: {
    title: "My Journey",
    list: [
      {
        role: "Creative Frontend Developer",
        company: "Digital Illusions Inc.",
        period: "2023 - Present",
        description: "Led the development of interactive 3D web applications using React and Three.js. Focused on creating immersive user experiences and pushing the boundaries of web-based graphics."
      },
      {
        role: "UI/UX Designer",
        company: "Pixel Perfect Studios",
        period: "2021 - 2023",
        description: "Designed and prototyped user interfaces for a variety of web and mobile applications. Specialized in user-centered design principles and creating intuitive, beautiful products."
      }
    ]
  },
  projects: {
    title: "My Creations",
    list: [
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
    ]
  },
  blogs: {
    title: "My Thoughts & Writings",
    list: [
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
    ]
  }
};
