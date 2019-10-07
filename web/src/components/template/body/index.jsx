import React from 'react';
import { useSelector } from 'react-redux';

import Search from '../../function/search';
import Camera from '../../function/camera';
import Notification from '../../function/notification';
import Mypage from '../../function/mypage';
import Post from '../../function/post';
import Detail from '../../function/detail';

import './index.css';

function Body() {
	const ui = useSelector(state => state.ui);
	const content = useSelector(state => state.content);
	const post = useSelector(state => state.post);

	return (
		<div className='body'>
			{ ui.nav === 0 || ui.nav === 1 ? 
				<div className='inner-container'>
					{ content.post.id !== undefined ? <Detail id={content.id} /> : '' }
					{ post.posts.map((post) => 
						<Post key={post.id} data={post} />
					)}
				</div>
			: '' }
			{ ui.nav === 2 ? <Search /> : '' }
			{ ui.nav === 3 ? <Camera /> : '' }
			{ ui.nav === 4 ? <Notification /> : '' }
			{ ui.nav === 5 ? <Mypage /> : '' }
		</div>
	);
}

export default Body;
