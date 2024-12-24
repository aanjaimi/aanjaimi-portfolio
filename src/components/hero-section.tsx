import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Github, Linkedin, Twitter } from 'lucide-react';
import Button from './shared/button';


const HeroSection = () => {
	const circleRefs = useRef<HTMLDivElement[]>([]);

	useEffect(() => {
		// Floating circles animation
		circleRefs.current.forEach((circle, index) => {
			gsap.to(circle, {
				y: "random(-30, 30)",
				x: "random(-30, 30)",
				rotation: "random(-360, 360)",
				duration: "random(3, 6)",
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
				delay: index * 0.1
			});
		});
	}, []);

	const addToRefs = (el: HTMLDivElement | null) => {
		if (el && !circleRefs.current.includes(el)) {
			circleRefs.current.push(el);
		}
	};

	return (
		<section id='#hero' className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white border rounded-t-[70px] rounded-b-[70px]">
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden">
				{[...Array(15)].map((_, i) => (
					<div
						key={i}
						ref={addToRefs}
						className="absolute rounded-full opacity-10"
						style={{
							background: "linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #3bace2 100%, #406aff 117.04%)",
							width: `${Math.random() * 200 + 30}px`,
							height: `${Math.random() * 200 + 30}px`,
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							transform: `rotate(${Math.random() * 360}deg)`,
						}}
					/>
				))}
			</div>
			
			<div
				className="relative z-10 text-center px-4"
			>
				<h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
					Hi, I'm <span className="bg-gradient-to-r from-[#ff56f6] via-[#b936ee] via-[#3bace2] to-[#406aff] inline-block text-transparent bg-clip-text transition-all duration-500 ease-out">Ayoub Anjaimi</span>!
				</h1>
				
				<p className="text-xl md:text-2xl text-gray-600 mb-8 font-bold">
					Full Stack Developer
				</p>
				
				<Button text="Work With me" backgroundColor='white' />

				<div className="flex justify-center gap-6 mt-12">
					<a
						href="https://github.com/aanjaimi"
						target='_blank'
						rel='noreferrer'
						className="text-black hover:text-gray-400 transition-colors"
					>
						<Github className="w-6 h-6" />
					</a>
					<a
						href="https://www.linkedin.com/in/ayoub-anjaimi-3b1150240"
						target='_blank'
						rel='noreferrer'
						className="text-black hover:text-gray-400 transition-colors"
					>
						<Linkedin className="w-6 h-6" />
					</a>
					<a
						href="https://x.com/ayoub_anjaimi"
						target='_blank'
						rel='noreferrer'
						className="text-black hover:text-gray-400 transition-colors"
					>
						<Twitter className="w-6 h-6" />
					</a>
				</div>

			</div>
		</section>
	)
}

export default HeroSection
