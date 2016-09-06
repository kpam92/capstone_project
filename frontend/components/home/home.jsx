import React from 'react';
import { Link } from 'react-router';
import PhotoIndexContainer from '../photo/index_container';
import AlbumIndexLandingContainer from '../album/album_index_landing_container';
// import AlbumIndexContainer from '../album/album_index_container';
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: true
    }
    // this.handleAlbumClick = this.handleAlbumClick.bind(this);
    // this.handlePhotoClick = this.handlePhotoClick.bind(this);
  }

  componentDidMount(){
    // this.props.fetchAllUsers();
  }

  _handleAlbumClick() {
    this.setState({photos: false})
  }

  _handlePhotoClick() {
    this.setState({ photos: true});
  }
  render() {


    return(
    <div>
      <div className='home-nav'>
        <h1 className="explore-text">EXPLORE</h1>
        <div className=""/>
        <button className="explore-button" onClick={this._handleAlbumClick.bind(this)}>By Album</button>
        <button className="explore-button" onClick={this._handlePhotoClick.bind(this)}>By Photo</button>
      </div>
      { this.state.photos ? <PhotoIndexContainer/> : <AlbumIndexLandingContainer/> }
    </div>
    )
  }
}

export default Home;
