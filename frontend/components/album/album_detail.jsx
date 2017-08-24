import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style'
import { withRouter } from 'react-router';
import PhotoIndexItem from '../photo/photo_index_item';



class AlbumDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.onModalClose = this.onModalClose.bind(this)
    this.onModalOpen = this.onModalOpen.bind(this)
    this.upload = this.upload.bind(this)
  }

  onModalClose(){
    this.setState({modalOpen: false});
    ModalStyle.content.opacity = 0;
  }
  onModalOpen(){
    ModalStyle.content.opacity = 100;
    ModalStyle.content.background
  }

  _handleClick() {
    this.setState({ modalOpen: true});
  }
  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images) {
        if (error === null) {
          console.log("HI")
        }
   });
  }
  render() {

    const currAlbumPhotos = (id) => {
      let result = [];
      this.props.photos.map(x => {
        if (id === x.album_id) {
          result.push(x);
        }
      })
      return result;
    }
    const thisAlbumPhotos = currAlbumPhotos(parseInt(this.props.params.albumId))

    const currAlbum = (id) => {
      let result = "";
      this.props.albums.map(x => {
        if (id === x.id) {
          result = x;
        }
      })
      return result;
    }

    const thisAlbum = currAlbum(parseInt(this.props.params.albumId))

    const handleProfileClick = (router, url) => (
      () => router.push(url)
    )

    const photoList = thisAlbumPhotos.map(photo => (
      <PhotoIndexItem key={photo.id} photo = {photo} props = {this.props}/>
    ));

    const editButton = () => {
      if (thisAlbum.author_id === this.props.currentUser.id) {
        return (
          <button className="explore-button">Edit Album</button>
        )
      }
    }

    return(
      <div>
        <div className='home-nav'>
          <h1 className="album-text">{thisAlbum.title}</h1>

          <button className="explore-button" onClick={handleProfileClick(this.props.router, `/profile/${thisAlbum.author_id}`)}>User Profile</button>
          <button className="explore-button" onClick={this._handleClick.bind(this)}>About Series</button>
          { this.props.currentUser.id === thisAlbum.author_id ? <button onClick={handleProfileClick(this.props.router, `/profile/${thisAlbum.author_id}/upload/album/${thisAlbum.id}`)}className="explore-button">Add Photo</button> : <a/> }
          {editButton}
          <h1 className="album-text">{thisAlbum.description ? thisAlbum.description : ''}</h1>
        </div>

        <div className="album-show-container">
          <ul className="album-photo landing-photo-grid">
            {photoList}
          </ul>
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}
          onAfterOpen={this.onModalOpen}>
          <div className='modal-container'>
            <h3>{thisAlbum.description ? thisAlbum.description : 'No Description...'}</h3>
          </div>

        </Modal>

    </div>
      )
    };

  }

export default withRouter(AlbumDetail);
