import { connect } from 'react-redux';
// import { fetchAllPhotos } from '../../actions/photo_actions';
import Profile from './profile';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  photos: state.photos
});

const mapDispatchToProps = dispatch => ({
  fetchUserPhotos: () => dispatch(fetchUserPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
