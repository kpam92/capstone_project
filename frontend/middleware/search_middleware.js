import { SearchConstants } from '../actions/search_actions';
import { Link, hashHistory } from 'react-router';



export default ({getState, dispatch}) => next => action => {

  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case SearchConstants.RECEIVE_NEW_SEARCH_RESULTS:
      
      hashHistory.push(`/search/${action.search_results.search_results}`);
      next(action);
      break;
    default:
      return next(action);
  }
};
