import React from 'react'
import { gsap } from 'gsap'

const Hero = () => {
	gsap.from(".hero-title span", {
		y: 50,
		opacity: 0,
		duration: 1,
		ease: "power2.out",
		stagger: 0.2,
	});
	
	gsap.to(".cta-button", {
		scale: 1.1,
		duration: 0.2,
		ease: "power1.inOut",
		paused: true,
	});
	
	gsap.to(".scroll-indicator", {
		y: 10,
		repeat: -1,
		yoyo: true,
		duration: 1,
		ease: "power1.inOut",
	});
	

	return (
		<div className="hero-section">
  <div className="hero-content">
    <h1 className="hero-title">
      Hi, I'm <span>Ayoub Anjaimi</span>!
    </h1>
    <p className="hero-subtitle">
      Full Stack Developer
    </p>
    <button className="cta-button">
      View My Work
    </button>
  </div>
  <div className="hero-background">
    {/* Add interactive background or particles here */}
  </div>
  <div className="social-links">
    {/* Social media icons with hover animations */}
  </div>
  <div className="scroll-indicator">
    {/* Add arrow or "Scroll Down" text */}
  </div>
</div>

	)
}

export default Hero
