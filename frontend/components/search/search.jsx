import React from 'react';
import { Link } from 'react-router';
import PhotoIndexContainer from '../photo/index_container';
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
        if (x.title.indexOf(substring) !== -1) {
          result.push(x);
        } else if (x.description && x.description.indexOf(substring) !== -1) {
          result.push(x);
        } else if (x.medium && x.medium.indexOf(substring) !== -1) {
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


    return(
    <div>
      <div className='home-nav'>
        <h1 className="explore-text">RESULTS FOR : <span><q>{this.props.search_results[0].search_results}</q></span></h1>
      </div>

      <ul className='prof-album-grid'>
        <h3>Albums</h3>
        {albumList}
      </ul>
    </div>
    )
  }
}

export default Home;
