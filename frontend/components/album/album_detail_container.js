import { connect } from 'react-redux';
// import { fetchAllPhotos } from '../../actions/photo_actions';
import { fetchSingleAlbum } from '../../actions/album_actions';
import AlbumDetail from './album_detail';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  photos: state.photos,
  user: state.user,
  albums: state.albums
});

const mapDispatchToProps = dispatch => ({
  // fetchAllAlbums: () => dispatch(fetchAllAlbums()),
  // fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchSingleAlbum: (id) => dispatch(fetchSingleAlbum(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumDetail);
