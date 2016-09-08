import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { goToProfile } from '../../actions/user_actions';
import Search from './search';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  search_results: state.search_results,
  currentUser: state.session.currentUser,
  photos: state.photos,
  user: state.user,
  albums: state.albums
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  goToProfile: (id) => dispatch(goToProfile(id)),
  receiveNewSearchResults: (data) => dispatch(receiveNewSearchResults(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
