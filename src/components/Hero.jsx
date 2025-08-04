import React from 'react'
import './Hero.css'
import ThreeDComp from './ThreeDComp'
import Portfolio from './Portfolio'

const Hero = () => {
  return (
    <div className="hero-wrapper">
      {/* Layer 1: Canvas for objects BEHIND the HTML */}
      <div className="canvas-back">
        <ThreeDComp inFront={false} />
      </div>

      {/* Layer 2: Your HTML Content */}
      {/* <div className="hero-content-layer">
        <div className="hero-content">
          <div className="hero-badge">
            <div className="badge-dot"></div>
            Welcome to my portfolio
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">Creative</span>
            <span className="title-line gradient-text">Developer</span>
            <span className="title-line">& Designer</span>
          </h1>
          
          <p className="hero-description">
            I create <span className="highlight">immersive digital experiences</span> that 
            blend cutting-edge technology with stunning visual design. Let's build something 
            extraordinary together.
          </p>
          
          <div className="hero-actions">
            <button className="btn-primary">
              View My Work
            </button>
            <button className="btn-secondary">
              Get In Touch
            </button>
          </div>
        </div>
      </div> */}
      <div className="portfolio">
        <Portfolio />
      </div>

      {/* Layer 3: Canvas for objects IN FRONT of the HTML */}
      <div className="canvas-front">
        <ThreeDComp inFront={true} />
      </div>
    </div>
  )
}

export default Hero
