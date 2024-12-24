import React from 'react'
import Button from './shared/button'

const HeaderSection = () => {

	return (
		<header id='header' className='py-8 relative bg-black overflow-hidden'>
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<a href="/">
						<img src='logo.svg' alt="" className='w-36 h-24'/>
					</a>
					<Button text="Contact me" backgroundColor='black' />
				</div>
			</div>
		</header>
	)
}

export default HeaderSection
