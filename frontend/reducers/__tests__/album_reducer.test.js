import AlbumReducer from '../album_reducer';
import {AlbumConstants} from "../../actions/album_actions";
import { fromJS } from 'immutable';

let testAlbums = [
  {
    id: 1,
    description: 'test 1',
    title: 'test1'
  },
  {
    id: 2,
    description: 'test 2',
    title: 'test2'
  },
  {
    id: 3,
    description: 'test 3',
    title: 'test3'
  }
]

let testAlbum = ({
    id: 4,
    description: 'test 4',
    title: 'test4'
  })
describe('AlbumReducer', function() {
  it('should return the initial state', function() {
    expect(AlbumReducer(undefined, {})).toEqual(fromJS([]));
  });
  it('should return all albums', function() {
    expect(AlbumReducer(undefined, {type: AlbumConstants.RECEIVE_ALL_AlBUMS, albums: testAlbums})).toEqual(fromJS(testAlbums));
  });
  it('should return a single album', function() {
    expect(AlbumReducer(undefined, {type: AlbumConstants.RECEIVE_SINGLE_ALBUM, album: testAlbum})).toEqual(fromJS(testAlbum));
  });
  it('should add a new album', function() {
    expect(AlbumReducer(testAlbums, {type: AlbumConstants.RECEIVE_NEW_ALBUM, album: testAlbum})).toEqual(fromJS([testAlbums..,testAlbum]);
  });
});
