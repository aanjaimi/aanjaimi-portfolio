import React, { useRef } from 'react';
import './App.css';
import { gsap } from 'gsap'
import HeroSection from './components/hero-section';
import HeaderSection from './components/header-section';
import AboutSection from './components/about-section';

function App() {
  const cursorRef = useRef(null);

  React.useEffect(() => {
    const cursor = cursorRef.current;
    
    // Initial cursor position off screen
    gsap.set(cursor, {
      x: -100,
      y: -100,
      opacity: 0
    });

    // Animation configuration
    const cursorAnimation = {
      duration: 0.5,
      ease: "power2.out"
    };

    // Mouse move handler
    const onMouseMove = (e: any) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        ...cursorAnimation
      });
    };
    
    // Mouse leave handler
    const onMouseOut = () => {
      gsap.killTweensOf(cursor); // Kill any ongoing animations
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut"
      });
    };

    // Add and remove event listener
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseOut);
    
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black  text-white relative overflow-hidden">
      {/* Fixed background that covers the entire viewport */}
      <div className="fixed inset-0 bg-black z-0"></div>
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none 
                  mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 z-50"
      ></div>
      <HeaderSection />
      <HeroSection />
      <AboutSection />
    </main>
  );
}

export default App;
