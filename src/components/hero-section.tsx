import { gsap } from 'gsap'
import { Github, Linkedin, Twitter } from 'lucide-react';


const HeroSection = () => {
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
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
				// ref={heroRef}
				className="relative z-10 text-center px-4"
			>
        <h1
					// ref={titleRef}
					className="text-5xl md:text-7xl font-bold mb-6"
				>
          Hi, I'm <span className="text-[#406aff] transition-all duration-500 ease-out">Ayoub Anjaimi</span>!
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Full Stack Developer
        </p>
        
        <button 
          // ref={buttonRef}
          className="px-8 py-3 bg-gradient-to-r from-[#ff56f6] to-[#406aff] rounded-lg font-semibold transition-all duration-200"
        >
          Work With Me
        </button>

        <div className="flex justify-center gap-6 mt-12">
          <a
						href="https://github.com/aanjaimi"
						target='_blank'
						rel='noreferrer'
						className="text-gray-200 hover:text-gray-400 transition-colors"
					>
            <Github className="w-6 h-6" />
          </a>
          <a
						href="https://www.linkedin.com/in/ayoub-anjaimi-3b1150240"
						target='_blank'
						rel='noreferrer'
						className="text-gray-200 hover:text-gray-400 transition-colors"
					>
            <Linkedin className="w-6 h-6" />
          </a>
          <a
						href="https://x.com/ayoub_anjaimi"
						target='_blank'
						rel='noreferrer'
						className="text-gray-200 hover:text-gray-400 transition-colors"
					>
            <Twitter className="w-6 h-6" />
          </a>
        </div>

      </div>
    </section>
	)
}

export default HeroSection
