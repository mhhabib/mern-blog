const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
		},
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Category',
			required: true,
		},
		thumbnail: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
