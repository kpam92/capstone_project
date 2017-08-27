import SearchReducer from '../search_reducer';
import {SearchConstants} from "../../actions/search_actions";
import { fromJS } from 'immutable';

let testSearch = "test1";

describe('SearchReducer', function() {
  it('should return the initial state', function() {
    expect(SearchReducer(undefined, {})).toEqual(fromJS([]));
  });
  it('should return action.photos', function() {
    expect(SearchReducer(undefined, {type: SearchConstants.RECEIVE_NEW_SEARCH_RESULTS, search_results: testSearch})).toEqual(fromJS(testSearch));
  });
});
