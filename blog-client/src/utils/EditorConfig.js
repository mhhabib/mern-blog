import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

hljs.configure({
	languages: [
		'javascript',
		'python',
		'c',
		'c++',
		'java',
		'html',
		'css',
		'matlab',
	],
});

export const modules = {
	syntax: {
		highlight: (text) => hljs.highlightAuto(text).value,
	},
	toolbar: [
		[{ header: [1, 2, 3, false] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[{ color: [] }, { background: [] }],
		[{ list: 'ordered' }, { list: 'bullet' }],
		[{ indent: '-1' }, { indent: '+1' }],
		['link', 'image', 'code-block'],
		['clean'],
	],
	clipboard: {
		matchVisual: false,
	},
};

export const formats = [
	'header',
	'font',
	'size',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'indent',
	'link',
	'image',
	'video',
	'code-block',
	'color',
	'background',
];
