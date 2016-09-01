import { connect } from 'react-redux';
import { fetchAllPhotos } from '../../actions/photo_actions';
import PhotoIndex from './photo_index';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  photos: state.photos
});

const mapDispatchToProps = dispatch => ({
  fetchAllPhotos: () => dispatch(fetchAllPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
