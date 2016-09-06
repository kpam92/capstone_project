import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style'
import { withRouter } from 'react-router';



class AlbumDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.onModalClose = this.onModalClose.bind(this)
    this.onModalOpen = this.onModalOpen.bind(this)
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

    const handleAlbumClick = (router, url) => (
      () => router.push(url)
    )
    const photoList = thisAlbumPhotos.map(photo => (
      <li>
        <img key={photo.image_url} src={photo.image_url} onClick={this._handleClick.bind(this)}/>
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            style={ModalStyle}
            onAfterOpen={this.onModalOpen}>
            <a className="modal-close" onClick={this.onModalClose}><img src="http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,h_41/v1472778565/x_alt-128_p7d2vo.png"/></a>

            <div className='modal-container'>
              <img src={photo.image_url}/>
            </div>

          </Modal>
      </li>
    ));

    return(
      <div>
        <div className='home-nav'>
          <h1 className="explore-text">{thisAlbum.title}</h1>
          <div className=""/>
          <button className="explore-button">Back to Profile</button>
          <button className="explore-button">Edit Album</button>
        </div>
        <div className="album-show-container">
          <ul className="album-photo-grid">
            {photoList}
          </ul>
        </div>
    </div>
      )
    };

  }

export default withRouter(AlbumDetail);
