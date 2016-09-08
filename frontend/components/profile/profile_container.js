import { connect } from 'react-redux';
// import { fetchAllPhotos } from '../../actions/photo_actions';
import Profile from './profile';
import { createAlbum } from '../../actions/album_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  photos: state.photos,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  createAlbum: (id) => dispatch(createAlbum(id))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
