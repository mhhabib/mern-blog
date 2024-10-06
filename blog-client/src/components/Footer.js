import React from 'react';
import { Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-2xl font-bold mb-4">Alice Newsletter</h3>
						<p className="text-gray-400">
							Explaining complex systems with simple terms.
						</p>
					</div>
					<div>
						<h4 className="text-xl font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-teal-500 transition duration-300"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-teal-500 transition duration-300"
								>
									Archive
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-teal-500 transition duration-300"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-teal-500 transition duration-300"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-xl font-semibold mb-4">Stay Connected</h4>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-gray-400 hover:text-teal-500 transition duration-300"
							>
								<Twitter size={24} />
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-teal-500 transition duration-300"
							>
								<Linkedin size={24} />
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-teal-500 transition duration-300"
							>
								<Youtube size={24} />
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-teal-500 transition duration-300"
							>
								<Mail size={24} />
							</a>
						</div>
					</div>
					<div>
						<h4 className="text-xl font-semibold mb-4">Subscribe</h4>
						<p className="text-gray-400 mb-4">
							Get the latest updates directly to your inbox.
						</p>
						<div className="flex">
							<input
								type="email"
								placeholder="Your email"
								className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500"
							/>
							<button className="bg-teal-600 text-white px-4 py-2 rounded-r-md hover:bg-teal-700 transition duration-300">
								Subscribe
							</button>
						</div>
					</div>
				</div>
				<div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
					<p>&copy; 2024 Alice Newsletter. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
