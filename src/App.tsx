import React from 'react';
import './App.css';
import { useRef } from 'react';
import { gsap } from 'gsap'
import Hero from './components/hero-section';
// import { useGSAP } from '@gsap/react'

function App() {
  // const cursorRef = useRef(null);

  // React.useEffect(() => {
  //   const cursor = cursorRef.current;
    
  //   // Initial cursor position off screen
  //   gsap.set(cursor, {
  //     x: -100,
  //     y: -100,
  //     opacity: 0
  //   });

  //   // Animation configuration
  //   const cursorAnimation = {
  //     duration: 0.5,
  //     ease: "power2.out"
  //   };

  //   // Mouse move handler
  //   const onMouseMove = (e: any) => {
  //     gsap.to(cursor, {
  //       x: e.clientX,
  //       y: e.clientY,
  //       opacity: 1,
  //       ...cursorAnimation
  //     });
  //   };
    
  //   // Mouse leave handler
  //   const onMouseOut = () => {
  //     gsap.killTweensOf(cursor); // Kill any ongoing animations
  //     gsap.to(cursor, {
  //       opacity: 0,
  //       duration: 0.5,
  //       ease: "power2.inOut"
  //     });
  //   };

  //   // Add and remove event listener
  //   window.addEventListener("mousemove", onMouseMove);
  //   window.addEventListener("mouseout", onMouseOut);
    
  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //     window.removeEventListener("mouseout", onMouseOut);
  //   };
  // }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none 
                  mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
      ></div> */}

      {/* <div className="container mx-auto p-8">
        <h1 className="text-4xl text-white mb-4">Move your mouse around</h1>
        <p className="text-gray-300">
          The circle will follow your cursor with a smooth animation.
        </p>
      </div> */}
      <Hero />
    </div>
  );
}

export default App;
