import React from 'react';
import { Link } from 'react-router';
import PhotoIndexLandingContainer from '../photo/photo_index_landing_container';
import IndexContainer from '../photo/index_container';

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
    let x = document.getElementsByClassName("by-album")[0];
    x.style.background = "darkgrey";
    x.style.cursor = "auto";
    let y = document.getElementsByClassName("by-piece")[0];
    y.style.background = "#eee";
    y.style.cursor = "pointer";

    this.setState({photos: false})
  }

  _handlePhotoClick() {
    let x = document.getElementsByClassName("by-piece")[0];
    x.style.background = "darkgrey";
    x.style.cursor = "auto";
    let y = document.getElementsByClassName("by-album")[0];
    y.style.background = "#eee";
    y.style.cursor = "pointer";

    this.setState({ photos: true});
  }
  render() {


    return(
    <div>
      <div className='home-nav'>
        <h1 className="explore-text">EXPLORE</h1>
        <div className=""/>
        <button className="explore-button by-album" onClick={this._handleAlbumClick.bind(this)}>By Album</button>
        <button className="explore-button by-piece" onClick={this._handlePhotoClick.bind(this)}>By Piece</button>
      </div>
      { this.state.photos ? <IndexContainer/> : <AlbumIndexLandingContainer/> }
    </div>
    )
  }
}

export default Home;
