import React, { useState } from 'react';
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	Fa500Px,
	FaStackOverflow,
} from 'react-icons/fa';
import { CiSettings } from 'react-icons/ci';
import { LuLayoutPanelLeft } from 'react-icons/lu';
import profileimage from './images/profile.JPG';
import backgroundSvg from './images/bullseye-gradient.svg';

const PortfolioPage = () => {
	const [currentSlide, setCurrentSlide] = useState(3);
	const [svgColor, setSvgColor] = useState('#ffffff');
	const totalSlides = 10;
	const handleSVGcolor = () => {
		setSvgColor(svgColor === '#ffffff' ? '#133244' : '#ffffff');
	};
	return (
		<div className="min-h-screen flex flex-col relative overflow-hidden bg-[#000000]">
			{/* SVG Background */}
			<div
				className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover"
				style={{
					backgroundImage: `url(${backgroundSvg})`,
					stroke: svgColor,
				}}
			/>

			{/* Content Container */}
			<div className="relative z-10 flex flex-col min-h-screen">
				{/* Navigation */}
				<nav className="flex justify-end p-4 text-white absolute top-5 right-10 left-0">
					<a href="#" className="mx-2 text-sm font-semibold">
						HOME
					</a>
					<a href="#" className="mx-2 text-sm font-semibold">
						ABOUT
					</a>
					<a href="#" className="mx-2 text-sm font-semibold">
						CONTACT
					</a>
					<a href="#" className="mx-2 text-sm font-semibold">
						BLOG
					</a>
				</nav>

				{/* Main content */}
				<div className="flex-grow flex items-center justify-center">
					{/* Profile picture */}
					<div className="w-96 h-96 rounded-full overflow-hidden border-4 border-white shadow-lg">
						<img
							src={profileimage}
							alt="Profile"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>

				{/* Slide indicators */}
				<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
					{[...Array(totalSlides)].map((_, index) => (
						<button
							key={index}
							className={`w-2 h-2 rounded-full ${
								index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
							}`}
							onClick={() => setCurrentSlide(index)}
						></button>
					))}
				</div>
			</div>

			{/* Side icons */}
			<div className="absolute left-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
				<CiSettings
					className="cursor-pointer"
					onClick={() => console.log('Facebook')}
					color="#ffffff"
					size={24}
				/>
				<LuLayoutPanelLeft
					className="cursor-pointer"
					onClick={() => console.log('Facebook')}
					color="#ffffff"
					size={24}
				/>
			</div>
			<div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
				<FaFacebook
					className="cursor-pointer"
					onClick={() => console.log('Facebook')}
					color="#ffffff"
					size={24}
				/>
				<FaLinkedin
					className="cursor-pointer"
					onClick={() => console.log('Facebook')}
					color="#ffffff"
					size={24}
				/>
				<FaInstagram
					className="cursor-pointer"
					onClick={() => console.log('Facebook')}
					color="#ffffff"
					size={24}
				/>
				<FaStackOverflow
					className="cursor-pointer"
					onClick={() => console.log('Facebook')}
					color="#ffffff"
					size={24}
				/>
				<Fa500Px
					className="cursor-pointer"
					onClick={() => console.log('Facebook')}
					color="#ffffff"
					size={24}
				/>
			</div>
		</div>
	);
};

export default PortfolioPage;
