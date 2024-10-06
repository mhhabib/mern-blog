const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const xss = require('xss');
const path = require('path');
const connectDB = require('./config/database');
const postRoutes = require('./routes/postRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const errorHandler = require('./utils/errorHandler');

dotenv.config();
const app = express();

connectDB();

// XSS Protection Middleware
const xssProtection = (req, res, next) => {
	if (req.body) {
		Object.keys(req.body).forEach((key) => {
			if (typeof req.body[key] === 'string') {
				req.body[key] = xss(req.body[key]);
			}
		});
	}
	next();
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xssProtection);

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
};

app.use(cors(corsOptions));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', postRoutes);
app.use('/api', categoryRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
