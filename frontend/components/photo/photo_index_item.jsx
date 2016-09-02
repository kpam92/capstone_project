import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style'
class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, url: ""};
    this.onModalClose = this.onModalClose.bind(this)
    this.onModalOpen = this.onModalOpen.bind(this)
  }

  onModalClose(){
    this.setState({modalOpen: false});
    ModalStyle.content.opacity = 0;
  }
  onModalOpen(){
    ModalStyle.content.opacity = 100;
  }

  _handleClick() {
    this.setState({ modalOpen: true, url: this.props.photo.image_url});
  }

  render() {
    return(
      <li>
        <a>
        <img src={this.props.photo.image_url} onClick={this._handleClick.bind(this)}/>
        </a>
        <h3>{this.props.photo.title}</h3>
        <h5>{this.props.photo.description}</h5>

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            style={ModalStyle}
            onAfterOpen={this.onModalOpen}>

            <div className='modal-container'>
              <button className="splash-button" onClick={this.onModalClose}>Close</button>
              <img src={this.props.photo.image_url}/>
            </div>

          </Modal>

      </li>
      )
    }
  }

export default PhotoIndexItem;
