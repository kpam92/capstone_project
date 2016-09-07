import { receiveAllPhotos, receiveNewPhoto, receiveErrors } from '../actions/photo_actions';

export const fetchAllPhotos = function(success, error) {
	$.ajax({
		method: 'GET',
		url: 'api/photos',
		success,
		error
	});
};

export const createPhoto = function(photo, success, error) {
	$.ajax({
		method: 'POST',
		url: 'api/photos',
		data: {photo: photo},
		success,
		error
	});
};
