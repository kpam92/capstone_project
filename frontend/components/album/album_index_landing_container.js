import { connect } from 'react-redux';
// import { fetchAllPhotos } from '../../actions/photo_actions';
// import { fetchAllUsers } from '../../actions/user_actions';
import AlbumIndexLanding from './album_index_landing';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  photos: state.photos,
  user: state.user,
  albums: state.albums
});

const mapDispatchToProps = dispatch => ({
  fetchAllAlbums: () => dispatch(fetchAllAlbums()),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchSingleUser: (id) => dispatch(fetchSingleUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndexLanding);
