import React from 'react'
import Button from './button'

const HeaderSection = () => {

	return (
		<header className='py-8 relative overflow-hidden'>
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
