const Post = require('../models/Posts');
const xss = require('xss');

exports.createPost = async (req, res, next) => {
	try {
		const { title, description, category } = req.body;
		const thumbnail = req.file.path;

		const post = new Post({
			title: xss(title),
			description: xss(description),
			category,
			thumbnail,
		});

		await post.save();
		res.status(201).json({ success: true, data: post });
	} catch (error) {
		next(error);
	}
};

exports.getAllPosts = async (req, res, next) => {
	try {
		const posts = await Post.find().populate('category');

		const postsWithFullUrls = posts.map((post) => ({
			...post.toObject(),
			thumbnail: `${req.protocol}://${req.get('host')}/${post.thumbnail}`,
		}));
		res.status(200).json({ success: true, data: postsWithFullUrls });
	} catch (error) {
		next(error);
	}
};

exports.updatePost = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { title, description, category } = req.body;
		const update = { title, description, category };

		if (req.file) {
			update.thumbnail = req.file.path;
		}

		const post = await Post.findByIdAndUpdate(id, update, {
			new: true,
			runValidators: true,
		});

		if (!post) {
			return res
				.status(404)
				.json({ success: false, message: 'Post not found' });
		}

		res.status(200).json({ success: true, data: post });
	} catch (error) {
		next(error);
	}
};

exports.deletePost = async (req, res, next) => {
	try {
		const { id } = req.params;
		const post = await Post.findByIdAndDelete(id);

		if (!post) {
			return res
				.status(404)
				.json({ success: false, message: 'Post not found' });
		}

		res.status(200).json({ success: true, data: {} });
	} catch (error) {
		next(error);
	}
};

exports.getPost = async (req, res, next) => {
	try {
		const { id } = req.params;
		const post = await Post.findById(id).populate('category');

		if (!post) {
			return res
				.status(404)
				.json({ success: false, message: 'Post not found' });
		}
		const postsWithFullUrls = {
			...post.toObject(),
			thumbnail: `${req.protocol}://${req.get('host')}/${post.thumbnail}`,
		};
		res.status(200).json({ success: true, data: postsWithFullUrls });

		// res.status(200).json({ success: true, data: post });
	} catch (error) {
		next(error);
	}
};
