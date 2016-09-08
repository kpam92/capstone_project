import React from 'react';
import { Link } from 'react-router';
import PhotoIndexContainer from '../photo/index_container';
import PhotoIndexItem from '../photo/photo_index_item';
import AlbumIndexLandingContainer from '../album/album_index_landing_container';
import AlbumIndexItem from '../album/album_index_item';
// import AlbumIndexContainer from '../album/album_index_container';
class Home extends React.Component {
  constructor(props) {
    super(props)
    }

  render() {



    const editedPhotoList = (substring) => {
      let result = [];
      this.props.photos.map(x => {
        if (x.title.toUpperCase().indexOf(substring) !== -1) {
          result.push(x);
        } else if (x.description && x.description.toUpperCase().indexOf(substring) !== -1) {
          result.push(x);
        } else if (x.medium && x.medium.toUpperCase().indexOf(substring) !== -1) {
          result.push(x);
        }
      })
      return result;
    }
    const editedAlbumList = (substring) => {
      let result = [];
      this.props.albums.map(x => {
        if (x.title.toUpperCase().indexOf(substring) !== -1) {
          result.push(x);
        } else if (x.description && x.description.toUpperCase().indexOf(substring) !== -1) {
          result.push(x);
        }
      })
      return result;
    }


    const albumList = editedAlbumList(this.props.search_results[0].search_results.toUpperCase()).map(album => (
      <AlbumIndexItem key={album.id} album = {album} props = {this.props}/>
    ));

    const photoList = editedPhotoList(this.props.search_results[0].search_results.toUpperCase()).map(photo => (
      <PhotoIndexItem key={photo.id} photo = {photo} props = {this.props}/>
    ));
    // debugger;
    return(
    <div className="search-container">
      <div className='home-nav'>
        <h1 className="explore-text">RESULTS FOR : <span><q>{this.props.search_results[0].search_results}</q></span></h1>
      </div>

      <ul className='landing-photo-grid'>
        <h2>PHOTOS</h2>
        {photoList.length > 0 ? photoList : <h3 className="no-res">No Results...</h3>}
      </ul>
      <ul className='landing-photo-grid'>
        <h2>ALBUMS</h2>
        {albumList.length > 0 ? albumList : <h3 className="no-res">No Results...</h3>}
      </ul>
    </div>
    )
  }
}

export default Home;
