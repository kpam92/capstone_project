import { receiveAllAlbums, receiveSingleAlbum, receiveNewAlbum, receiveErrors } from '../actions/album_actions';

export const fetchAllAlbums = function(success, error) {
	$.ajax({
		method: 'GET',
		url: 'api/albums',
		success,
		error
	});
};

export const fetchSingleAlbum = function(id, success, error) {
	$.ajax({
		method: 'GET',
		url: `api/albums/${id}`,
		success,
		error
	});
};

export const createAlbum = function(album, success, error) {
	debugger;
	$.ajax({
		method: 'POST',
		url: 'api/albums',
		data: {album: album},
		success,
		error
	});
};
