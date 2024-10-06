const Category = require('../models/Category');

exports.createCategory = async (req, res, next) => {
	try {
		const { name } = req.body;
		const category = new Category({ name });
		await category.save();
		res.status(201).json({ success: true, data: category });
	} catch (error) {
		next(error);
	}
};

exports.getCategories = async (req, res, next) => {
	try {
		const categories = await Category.find();
		res.status(200).json({ success: true, data: categories });
	} catch (error) {
		next(error);
	}
};

exports.getCategory = async (req, res, next) => {
	try {
		const category = await Category.findById(req.params.id);
		if (!category) {
			return res
				.status(404)
				.json({ success: false, message: 'Category not found' });
		}
		res.status(200).json({ success: true, data: category });
	} catch (error) {
		next(error);
	}
};

exports.updateCategory = async (req, res, next) => {
	try {
		const { name } = req.body;
		const category = await Category.findByIdAndUpdate(
			req.params.id,
			{ name },
			{ new: true, runValidators: true }
		);
		if (!category) {
			return res
				.status(404)
				.json({ success: false, message: 'Category not found' });
		}
		res.status(200).json({ success: true, data: category });
	} catch (error) {
		next(error);
	}
};

exports.deleteCategory = async (req, res, next) => {
	try {
		const category = await Category.findByIdAndDelete(req.params.id);
		if (!category) {
			return res
				.status(404)
				.json({ success: false, message: 'Category not found' });
		}
		res.status(200).json({ success: true, data: {} });
	} catch (error) {
		next(error);
	}
};
