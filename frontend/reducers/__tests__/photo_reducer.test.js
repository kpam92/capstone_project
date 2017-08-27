import PhotoReducer from '../photo_reducer';
import {PhotoConstants} from "../../actions/photo_actions";
import { fromJS } from 'immutable';

let testPhotos = [
  {
    id: 1,
    image_url: 'test.com/1',
    title: 'test1'
  },
  {
    id: 2,
    image_url: 'test.com/2',
    title: 'test2'
  },
  {
    id: 3,
    image_url: 'test.com/3',
    title: 'test3'
  }
]
describe('PhotoReducer', function() {
  it('should return the initial state', function() {
    expect(PhotoReducer(undefined, {})).toEqual(fromJS([]));
  });
  it('should return action.photos', function() {
    expect(PhotoReducer(undefined, {type: PhotoConstants.RECEIVE_ALL_PHOTOS, photos: testPhotos})).toEqual(fromJS(testPhotos));
  });
});
