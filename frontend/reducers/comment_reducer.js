import merge from 'lodash/merge';
import {CommentConstants} from "../actions/comment_actions";

// const defaultState = Object.freeze({currentUser: null, errors:[]});
const CommentReducer = (oldState = [] , action) => {
  switch (action.type) {
    case CommentConstants.RECEIVE_ALL_COMMENTS:
      return [...action.comments];
    case CommentConstants.RECEIVE_NEW_COMMENT:
      return [...oldState, action.comment];
    case CommentConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, oldState, {errors});
    default:
      return oldState
  }
};

export default CommentReducer;
