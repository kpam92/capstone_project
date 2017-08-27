import CommentReducer from '../comment_reducer';
import {CommentConstants} from "../../actions/comment_actions";
import { fromJS } from 'immutable';

let testComments = [
  {
    id: 1,
    author_id: 1,
    title: 'test1'
  },
  {
    id: 2,
    author_id: 2,
    title: 'test2'
  },
  {
    id: 3,
    author_id: 3,
    title: 'test3'
  }
]

let testComment = ({
    id: 4,
    author_id: 4,
    title: 'test4'
  })
describe('CommentReducer', function() {
  it('should return the initial state', function() {
    expect(CommentReducer(undefined, {})).toEqual(fromJS([]));
  });
  it('should return all comments', function() {
    expect(CommentReducer(undefined, {type: CommentConstants.RECEIVE_ALL_COMMENTS, comments: testComments})).toEqual(fromJS(testComments));
  });
  it('should add a new comment', function() {
    expect(CommentReducer(testComments, {type: CommentConstants.RECEIVE_NEW_COMMENT, comment: testComment})).toEqual(fromJS([testComments..,testComment]);
  });
});
