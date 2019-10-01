import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { camera_isload, camera_preview, camera_filter, camera_images } from '../../../actions';

import { FiChevronDown, FiTrash2 } from 'react-icons/fi';
import './index.css';

function Preview() {
	const camera = useSelector(state => state.camera);
	const dispatch = useDispatch();

	const images = camera.images;
	const preview = camera.preview;
	const filter = camera.filter;

	function _rollback() {
		dispatch(camera_isload(true));
		dispatch(camera_preview(''));
	}

	function _deleteImage(name) {
		for(let i = 0; i < images.length; i++) {
			if(images[i] === name) {
				images.splice(i, 1);
			}
		}
		dispatch(camera_images(images));
		_rollback();
	}

	return (
		<div className='preview'>
			<img className={'preview-image preview-filter-' + filter} src={preview} alt='Rendered' />
			<FiChevronDown className='preview-rollback' onClick={ () => _rollback() } />
			<img className={'preview-filter preview-filter-' + filter} src={preview} alt='Rendered' onClick={ () => dispatch(camera_filter(filter === 2 ? 0 : filter + 1)) } / >
			<div className='preview-filter-title' onClick={ () => dispatch(camera_filter(filter === 2 ? 0 : filter + 1)) }>
				{filter === 0 ? 'Original' : ''}
				{filter === 1 ? 'Black & White' : ''}
				{filter === 2 ? 'Sephia' : ''}
			</div>
			<FiTrash2 className='preview-delete' onClick={ () => _deleteImage(preview) } />
		</div>
	);
}

export default Preview;
