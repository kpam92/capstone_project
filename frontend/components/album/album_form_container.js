import { connect } from 'react-redux';
import { fetchAllPhotos, createPhoto } from '../../actions/photo_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import AlbumForm from './album_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  photos: state.photos,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchAllPhotos: () => dispatch(fetchAllPhotos()),
  goToProfile: (id) => dispatch(goToProfile(id)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
  createPhoto: (id) => dispatch(createPhoto(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumForm);
