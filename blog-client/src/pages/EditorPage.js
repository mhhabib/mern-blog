import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import EditorField from '../utils/EditorField';

const EditorPage = () => {
	const [value, setValue] = useState('');
	const [title, setTitle] = useState('');
	const [image, setImage] = useState(null);
	const [category, setCategory] = useState('');
	const [categories, setCategories] = useState([]);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	useEffect(() => {
		fetchCategories();
	}, []);

	const fetchCategories = async () => {
		try {
			const response = await axios.get('http://localhost:8000/api/categories');
			setCategories(response.data.data);
		} catch (error) {
			console.error('Error fetching categories:', error);
			setError('Failed to fetch categories. Please try again.');
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setSuccess('');

		if (!title.trim() || !value.trim() || !category || !image) {
			setError('Please fill in all fields and select an image.');
			return;
		}

		const formData = new FormData();
		formData.append('title', DOMPurify.sanitize(title));
		formData.append('description', DOMPurify.sanitize(value));
		formData.append('category', category);
		formData.append('thumbnail', image);

		try {
			const response = await axios.post(
				'http://localhost:8000/api/posts',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
					withCredentials: true,
				}
			);
			console.log('POST status: ', response);
			if (response.data.success) {
				setSuccess('Post created successfully!');
				// Reset form
				setTitle('');
				setValue('');
				setCategory('');
				setImage(null);
			} else {
				setError('Failed to create post. Please try again.');
			}
		} catch (error) {
			console.error('Error creating post:', error);
			setError('An error occurred while creating the post. Please try again.');
		}
	};

	return (
		<div className="w-[80%] mx-auto relative pb-20">
			<h2 className="text-theme-header text-3xl font-semibold mb-2">
				Add new post
			</h2>

			{error && (
				<p className="text-red-500 mb-4">{DOMPurify.sanitize(error)}</p>
			)}
			{success && (
				<p className="text-green-500 mb-4">{DOMPurify.sanitize(success)}</p>
			)}

			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<input
						type="text"
						placeholder="Enter post title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="w-full p-2 rounded bg-theme-bg border-theme-tag-boder border-2 text-theme-paragraph"
					/>
				</div>

				<div className="grid grid-cols-2 gap-4 mb-4">
					<div>
						<input
							type="file"
							accept="image/*"
							onChange={(e) => setImage(e.target.files[0])}
							className="block w-full bg-theme-bg border-theme-tag-boder border-2 text-theme-paragraph rounded p-2"
						/>
					</div>

					<div className="h-45">
						<select
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							className="block w-full p-2 rounded bg-theme-bg border-theme-tag-boder border-2 text-theme-paragraph"
						>
							<option value="" disabled>
								Select category
							</option>
							{categories.map((cat) => (
								<option key={cat._id} value={cat._id}>
									{cat.name}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className="mb-4">
					<EditorField value={value} setValue={setValue} />
				</div>

				<div className="absolute bottom-0 left-0 right-0 mb-4">
					<button
						type="submit"
						className="bg-teal-600 text-white px-4 py-2 rounded-md w-full"
						disabled={!title.trim() || !value.trim() || !category || !image}
					>
						Submit Post
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditorPage;
