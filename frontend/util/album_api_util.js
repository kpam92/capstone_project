import { receiveAllAlbums, receiveErrors } from '../actions/album_actions';

export const fetchAllAlbums = function(success, error) {
	$.ajax({
		method: 'GET',
		url: 'api/albums',
		success,
		error
	});
};
