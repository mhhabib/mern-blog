import React from 'react';
import PostsList from './PostsList';
import LatestPost from './LatestPost';

const NewsFeed = () => {
	return (
		<div>
			<LatestPost />
			<hr className="w-[80%] mx-auto my-10 border-gray-600" />
			<PostsList />
		</div>
	);
};

export default NewsFeed;
