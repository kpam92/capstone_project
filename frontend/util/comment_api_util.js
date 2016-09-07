import { receiveAllComments, receiveNewComment, receiveErrors } from '../actions/comment_actions';

export const fetchAllComments = function(success, error) {
	$.ajax({
		method: 'GET',
		url: 'api/comments',
		success,
		error
	});
};

export const createComment = function(comment, success, error) {
	$.ajax({
		method: 'POST',
		url: 'api/comments',
		data: {comment: comment},
		success,
		error
	});
};
