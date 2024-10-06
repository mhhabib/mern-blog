import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Calendar } from 'lucide-react';
import hljs from 'highlight.js';

const PostDetailsPage = () => {
	const [post, setPost] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await axios.get(
					`http://localhost:8000/api/posts/${id}`
				);
				setPost(response.data.data);
			} catch (error) {
				console.error('Error fetching post details:', error);
			}
		};

		fetchPost();
	}, [id]);

	useEffect(() => {
		document.querySelectorAll('pre').forEach((block) => {
			hljs.highlightElement(block);
		});
	}, [post]);

	if (!post) {
		return (
			<div className="flex justify-center items-center h-screen text-gray-200 uppercase text-3xl">
				Loading...
			</div>
		);
	}

	// Generate a sample author name
	const authorName = 'John Doe';

	// Format the date
	const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<div className="flex justify-center">
			<div className="w-[80%] max-w-4xl">
				<h1 className="text-3xl font-bold text-theme-paragraph-header mb-4">
					{post.title}
				</h1>

				<div className="flex items-center text-theme-paragraph mb-4">
					<Calendar className="w-4 h-4 mr-2" />
					<span>
						{formattedDate} · {authorName}
					</span>
					{post.category && (
						<span className="ml-4 px-2 py-1 border-2 border-theme-tag-boder bg-theme-tag-bg rounded-full text-sm font-medium">
							{post.category.name}
						</span>
					)}
				</div>

				<hr className="w-full mx-auto border-theme-border mb-6" />

				{post.thumbnail && (
					<img
						src={post.thumbnail}
						alt={post.title}
						className="w-full object-cover rounded-lg mb-6"
					/>
				)}

				<div
					className="text-theme-paragraph leading-relaxed rich-text-content"
					dangerouslySetInnerHTML={{ __html: post.description }}
				/>
			</div>
		</div>
	);
};

export default PostDetailsPage;
