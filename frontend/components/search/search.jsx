import React from 'react';
import { Link } from 'react-router';
import PhotoIndexContainer from '../photo/index_container';
import AlbumIndexLandingContainer from '../album/album_index_landing_container';
// import AlbumIndexContainer from '../album/album_index_container';
class Home extends React.Component {
  constructor(props) {
    super(props)
    }

  render() {

    const editedPhotoList = (substring) = {
      let result = [];
      this.props.photos.map(photo => {
        if (photo.title.indexOf(substring) !== -1) || (photo.description.indexOf(substring) {
          result.push(photo);
        }
      })
      return result;
    }
    const editedAlbumList = (substring) = {
      let result = [];
      this.props.albums.map(album => {
        if (album.title.indexOf(substring) !== -1) || (album.description.indexOf(substring) {
          result.push(photo);
        }
      })
      return result;
    }
    const photoList = editedPhotoList(this.props.search_results);
    const albumList = editedAlbumList(this.props.search_results);

    return(
    <div>
      <div className='home-nav'>
        <h1 className="explore-text">RESULTS FOR : </h1><h3="explore-text">{this.props.search_results}</h3>
      </div>
    </div>
    )
  }
}

export default Home;
