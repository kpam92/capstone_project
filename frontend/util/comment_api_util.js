import { receiveAllComments, receiveNewComment, receiveErrors } from '../actions/comment_actions';

export const fetchAllCommentsApi = function(success, error) {
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
export const deleteComment = function(comment, success, error) {
	
	$.ajax({
		method: 'DELETE',
		url: `api/comments/${comment}`,
		success,
		error
	});
};
