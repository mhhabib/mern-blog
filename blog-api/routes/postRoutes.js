const express = require('express');
const router = express.Router();
const {
	createPost,
	updatePost,
	deletePost,
	getPost,
	getAllPosts
} = require('../controllers/postController');
const upload = require('../middlewares/upload');

router.post('/posts', upload.single('thumbnail'), createPost);
router.put('/posts/:id', upload.single('thumbnail'), updatePost);
router.delete('/posts/:id', deletePost);
router.get('/posts/:id', getPost);
router.get('/posts', getAllPosts);

module.exports = router;
