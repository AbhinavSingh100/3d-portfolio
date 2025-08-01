import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for work
        </div>
        
        <h1 className="hero-title">
          <span className="title-line">Creative</span>
          <span className="title-line gradient-text">Developer</span>
          <span className="title-line">& Designer</span>
        </h1>
        
        <p className="hero-description">
          I craft exceptional digital experiences through innovative 
          <span className="highlight"> web development</span> and 
          <span className="highlight"> 3D design</span>. 
          Let's bring your ideas to life.
        </p>
        
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Passion</span>
          </div>
        </div>
        
        <div className="hero-actions">
          <button className="btn-primary">
            <span>View My Work</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button className="btn-secondary">
            <span>Get In Touch</span>
          </button>
        </div>
        
        <div className="hero-scroll">
          <div className="scroll-indicator">
            <div className="scroll-line"></div>
          </div>
          <span className="scroll-text">Scroll to explore</span>
        </div>
      </div>
    </div>
  )
}

export default Hero