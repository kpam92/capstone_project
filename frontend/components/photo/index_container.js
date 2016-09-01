import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import PhotoIndex from './index';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
