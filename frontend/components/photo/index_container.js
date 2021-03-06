import { connect } from 'react-redux';
import { fetchAllPhotos } from '../../actions/photo_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import PhotoIndex from './photo_index';

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
  fetchSingleUser: (id) => dispatch(fetchSingleUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
