import merge from 'lodash/merge';
import {SearchConstants} from "../actions/search_actions";

const SearchReducer = (state = [], action) => {
  switch (action.type) {
    case SearchConstants.RECEIVE_NEW_SEARCH_RESULTS:
      return [action.search_results];
    default:
      return state
  }
};

export default SearchReducer;
