import React, { useState, useEffect } from 'react';
import hljs from 'highlight.js';
import byte from '../images/byte.png';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostsList = () => {
	const [activeButton, setActiveButton] = useState('Latest');
	const [posts, setPosts] = useState([]);
	const fetchPosts = async () => {
		try {
			const response = await axios.get('http://localhost:8000/api/posts');
			setPosts(response.data.data);
			console.log('Post: ', response.data.data);
		} catch (error) {
			console.error('Error fetching categories:', error);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	useEffect(() => {
		document.querySelectorAll('pre').forEach((block) => {
			hljs.highlightElement(block);
		});
	}, [posts]);

	const formattedDate = (postDate) =>
		new Date(postDate).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});

	return (
		<div className="flex items-center justify-center mt-4">
			<div className="w-[80%] mx-auto max-w-6xl">
				<div className="flex justify-center mb-8">
					<div className="flex space-x-2 bg-gray-200 shadow-sm rounded-full p-1">
						<button
							onClick={() => setActiveButton('Latest')}
							className={`${
								activeButton === 'Latest'
									? 'bg-teal-600 text-gray-100'
									: 'text-gray-500'
							} px-4 py-2 rounded-full text-sm font-medium`}
						>
							Latest
						</button>

						<button
							onClick={() => setActiveButton('Top')}
							className={`${
								activeButton === 'Top'
									? 'bg-teal-600 text-gray-100'
									: 'text-gray-500'
							} px-4 py-2 rounded-full text-sm font-medium`}
						>
							Top
						</button>

						<button
							onClick={() => setActiveButton('Discussions')}
							className={`${
								activeButton === 'Discussions'
									? 'bg-teal-600 text-gray-100'
									: 'text-gray-500'
							} px-4 py-2 rounded-full text-sm font-medium`}
						>
							Discussions
						</button>
					</div>
				</div>
				{posts.length ? (
					<div className="grid md:grid-cols-3 gap-8">
						<div className="md:col-span-2 space-y-8">
							{posts?.map((post, index) => (
								<div key={index}>
									<article className="flex space-x-4">
										<div className="flex-grow">
											<Link to={`/posts/${post._id}`}>
												<h2 className="text-xl font-bold mb-2 text-theme-paragraph-header hover:text-teal-600">
													{post.title}
												</h2>
											</Link>
											<div
												className="text-theme-paragraph mb-2"
												dangerouslySetInnerHTML={{
													__html:
														post.description.length > 200
															? post.description.substring(0, 200) + '...'
															: post.description,
												}}
											/>
											<div className="flex items-center text-theme-paragraph text-sm">
												<Calendar className="w-4 h-4 text-gray-500 mr-2" />
												<span>{formattedDate(post.createdAt)} · MH Habib</span>
											</div>
										</div>
										<img
											src={post.thumbnail}
											alt={post.title}
											className="w-36 h-24 object-cover rounded-lg"
										/>
									</article>
									{index < posts.length - 1 && (
										<hr className="border-gray-600 mt-5" />
									)}
								</div>
							))}
						</div>

						<div className="space-y-8">
							<div className="bg-white p-6 rounded-lg shadow-sm">
								<div className="flex items-center space-x-3 mb-4">
									<img
										src={byte}
										alt="ByteByteGo logo"
										className="w-10 h-10 rounded-md bg-teal-500"
									/>
									<h2 className="text-xl font-bold">Alice Newsletter</h2>
								</div>
								<p className="text-gray-600 mb-4">
									Environmental prosecutor Christer B Jarlås told the paper that
									officials will deliver the formal notice in the coming weeks,
									which indicates Northvolt is under investigation for possible
									legal responsibility in the incident.
								</p>
								<div className="flex">
									<input
										type="email"
										placeholder="Type your email..."
										className="flex-grow border rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
									/>
									<button className="bg-teal-600 text-white px-4 py-2 rounded-r-md hover:bg-teal-700 transition duration-200">
										Subscribe
									</button>
								</div>
							</div>

							<div className="bg-white p-6 rounded-lg shadow-sm">
								<h3 className="text-lg font-semibold mb-3">Important links</h3>
								<ul className="space-y-2">
									<li>
										<a href="#" className="text-teal-600 hover:underline">
											YouTube channel
										</a>
									</li>
									<li>
										<a href="#" className="text-teal-600 hover:underline">
											System design interview course
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				) : (
					<div className="flex justify-center h-screen text-gray-200 uppercase text-3xl">
						Loading...
					</div>
				)}
			</div>
		</div>
	);
};

export default PostsList;
