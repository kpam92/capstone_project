import { receiveAllPhotos, receiveErrors } from '../actions/photo_actions';

export const fetchAllPhotos = function(success, error) {
	$.ajax({
		method: 'GET',
		url: 'api/photos',
		success,
		error
	});
};
