import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { modules, formats } from './EditorConfig';

const EditorField = ({ value, setValue }) => {
	return (
		<ReactQuill
			theme="snow"
			value={value}
			onChange={setValue}
			modules={modules}
			formats={formats}
			className="w-full text-gray-400 mb-10 h-[320px]"
		/>
	);
};

export default EditorField;
