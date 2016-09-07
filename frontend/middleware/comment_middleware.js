import { receiveAllComments,
         receiveNewComment,
         fetchAllComments,
         receiveErrors,
         CommentConstants
       } from '../actions/comment_actions';

import { fetchAllCommentsApi, createComment, deleteComment } from '../util/comment_api_util';
import { Link, hashHistory } from 'react-router';



export default ({getState, dispatch}) => next => action => {
  const receiveCommentSuccess = data => dispatch(receiveAllComments(data));
  const deleteSuccess = () => dispatch(fetchAllComments());
  const receiveNewCommentSuccess = (data) => {
    debugger;
    dispatch(receiveNewComment(data));
    // hashHistory.push(`/album/${data.album_id}`);
  };
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case CommentConstants.FETCH_ALL_COMMENTS:
      fetchAllCommentsApi(receiveCommentSuccess, errorCallback);
      next(action);
      break;
    case CommentConstants.CREATE_COMMENT:
      createComment(action.comment ,receiveNewCommentSuccess, errorCallback);
      return next(action);
      break;
    case CommentConstants.DELETE_COMMENT:
      deleteComment(action.comment ,deleteSuccess, errorCallback);
      return next(action);
      break;
    default:
      return next(action);
  }
};
