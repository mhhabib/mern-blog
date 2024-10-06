// tailwind.config.js
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class', // Optional, if you're using dark mode
	theme: {
		extend: {
			textColor: {
				'theme-header': 'var(--header-color)',
				'theme-paragraph': 'var(--paragraph-color)',
				'theme-paragraph-header': 'var(--paragraph-header-color)',
				'theme-link': 'var(--link-color)',
				'theme-icon': 'var(--theme-icon)',
			},
			backgroundColor: {
				'theme-bg': 'var(--background-color)',
				'theme-tag-bg': 'var(--tag-bg)',
			},
			borderColor: {
				'theme-border': 'var(--border-color)',
				'theme-tag-boder': 'var(--tag-border)',
			},
		},
	},
	plugins: [],
};
