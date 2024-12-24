import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'



interface ButtonProps {
	text: string;
	backgroundColor: "black" | "white";
}

const Button = ({ text, backgroundColor }: ButtonProps) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const buttonBgRef = useRef<HTMLDivElement>(null);
	const buttonTextRef = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		if (!buttonRef.current || !buttonBgRef.current || !buttonTextRef.current) return;

		const button = buttonRef.current;
		const buttonBg = buttonBgRef.current;
		const buttonText = buttonTextRef.current;

		gsap.set(buttonBg, {
			yPercent: 100,
			backgroundColor: backgroundColor === "black" ? "white" : "black",
		});

		const tl = gsap.timeline({ paused: true });
		tl.to(buttonBg, {
			yPercent: 0,
			duration: 0.3,
			ease: "power2.out",
		})
		.to(buttonText, {
			color: backgroundColor,
			duration: 0.2,
		}, "-=0.2")
		.to(
			button,
			{
				scale: 1.02,
				duration: 0.2,
				ease: "power2.out",
			},
			"-=0.2"
		);

		tl.to(button, {
			scale: 1,
			duration: 0.2,
			ease: "power2.in",
		});

		// Create the handler functions
		const handleEnter = () => tl.play();
		const handleLeave = () => tl.reverse();

		button.addEventListener("mouseenter", handleEnter);
		button.addEventListener("mouseleave", handleLeave);

		return () => {
			button.removeEventListener("mouseenter", handleEnter);
			button.removeEventListener("mouseleave", handleLeave);
			tl.kill();
		};
	}, [backgroundColor]);

	return (
		<div className="relative">
			<button
				ref={buttonRef}
				className={`border ${backgroundColor === 'black' ? "border-white text-white" : "border-black text-black"} rounded-full w-48 h-16 relative overflow-hidden`}
			>
				<div
					ref={buttonBgRef}
					className="absolute inset-0"
				/>
				<a
					href="#contact"
					ref={buttonTextRef}
					className={`relative z-10 tracking-wider text-lg ${backgroundColor === "black" ? "text-white" : "text-black"}`}
				>
					{text}
				</a>
			</button>
		</div>
	)
}

export default Button
