import React, { useState } from 'react';

const Navbar = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<nav className="border-y-2 p-3 border-theme-border">
			<div className="flex items-center justify-center px-4">
				<ul className="flex space-x-8">
					<li>
						<a
							onClick={() => setActiveIndex(0)}
							href="#"
							className={`${
								activeIndex === 0
									? 'text-teal-600 hover:text-teal-700 border-b-2 border-teal-600 pb-2 font-medium'
									: 'text-theme-paragraph-header hover:text-gray-300'
							}`}
						>
							Latest
						</a>
					</li>
					<li>
						<a
							onClick={() => setActiveIndex(1)}
							href="#"
							className={`${
								activeIndex === 1
									? 'text-teal-600 hover:text-teal-700 border-b-2 border-teal-600 pb-2 font-medium'
									: 'text-theme-paragraph-header hover:text-gray-300'
							}`}
						>
							Deep tech
						</a>
					</li>
					<li>
						<a
							onClick={() => setActiveIndex(2)}
							href="#"
							className={`${
								activeIndex === 2
									? 'text-teal-600 hover:text-teal-700 border-b-2 border-teal-600 pb-2 font-medium'
									: 'text-theme-paragraph-header hover:text-gray-300'
							}`}
						>
							Sustainability
						</a>
					</li>
					<li>
						<a
							onClick={() => setActiveIndex(3)}
							href="#"
							className={`${
								activeIndex === 3
									? 'text-teal-600 hover:text-teal-700 border-b-2 border-teal-600 pb-2 font-medium'
									: 'text-theme-paragraph-header hover:text-gray-300'
							}`}
						>
							Ecosystems
						</a>
					</li>
					<li>
						<a
							onClick={() => setActiveIndex(4)}
							href="#"
							className={`${
								activeIndex === 4
									? 'text-teal-600 hover:text-teal-700 border-b-2 border-teal-600 pb-2 font-medium'
									: 'text-theme-paragraph-header hover:text-gray-300'
							}`}
						>
							Data and Security
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
