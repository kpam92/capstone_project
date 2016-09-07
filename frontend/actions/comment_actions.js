export const CommentConstants = {
  FETCH_ALL_COMMENTS: "FETCH_ALL_COMMENTS",
  RECEIVE_ALL_COMMENTS: "RECEIVE_ALL_COMMENTS",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
  CREATE_COMMENT: 'CREATE_COMMENT',
  RECEIVE_NEW_COMMENT: 'RECEIVE_NEW_COMMENT',

};

export const fetchAllComments = () => ({
  type: CommentConstants.FETCH_ALL_COMMENTS
});

export const receiveAllComments = comments => ({
  type: CommentConstants.RECEIVE_ALL_COMMENTS,
  comments
});

export const createComment = (comment, push) => ({
	type: CommentConstants.CREATE_COMMENT,
	photo,
	push
});

export const receiveNewComment = comment => ({
	type: CommentConstants.RECEIVE_NEW_COMMENT,
	comment
});

export const receiveErrors = errors => ({
  type: CommentConstants.RECEIVE_ERRORS,
  errors
});
