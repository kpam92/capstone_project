import { connect } from 'react-redux';
import { fetchAllPhotos } from '../../actions/photo_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { createComment } from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  photos: state.photos,
  user: state.user,
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  fetchAllPhotos: () => dispatch(fetchAllPhotos()),
  goToProfile: (id) => dispatch(goToProfile(id)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
  createComment: (id) => dispatch(createComment(id)),
  deleteComment: (id) => dispatch(deleteComment(id))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
