import React, { useContext } from 'react';
import { Search, Share2, Moon, Sun } from 'lucide-react';
import logo from '../images/byte.png';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../utils/ThemeContext';

const Header = () => {
	const navigate = useNavigate();
	const { isDarkMode, toggleTheme } = useContext(ThemeContext);
	const handleClick = () => {
		navigate('/');
	};
	return (
		<header className="container mx-auto px-4 py-4">
			<div className="flex items-center justify-between">
				<div
					className="flex items-center space-x-3 cursor-pointer"
					onClick={handleClick}
				>
					<img
						src={logo}
						alt="ByteByteGo logo"
						className="w-8 h-8 rounded-md bg-teal-500"
					/>
				</div>
				<div className="flex items-center">
					<h1
						className="text-xl font-semibold text-center text-theme-header cursor-pointer"
						onClick={handleClick}
					>
						Alice Newsletter
					</h1>
				</div>
				<div className="flex items-center space-x-4">
					<Search className="w-5 h-5 text-gray-500" />
					<Share2 className="w-5 h-5 text-gray-500" />
					<button className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium">
						Subscribe
					</button>
					<button className="text-gray-400 hover:text-gray-300 text-sm cursor-pointer">
						Sign in
					</button>
					<button
						onClick={toggleTheme}
						className="p-2 rounded-full text-theme-icon hover:bg-gray-200 dark:hover:bg-gray-700"
					>
						{isDarkMode ? (
							<Sun className="w-6 h-6" />
						) : (
							<Moon className="w-6 h-6" />
						)}
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
