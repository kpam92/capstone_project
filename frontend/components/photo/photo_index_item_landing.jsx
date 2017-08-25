import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style'
import { withRouter } from 'react-router';
import CommentIndexContainer from '../comment/comment_container';


class PhotoIndexItemLanding extends React.Component {
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

  componentDidMount(){
    // this.props.fetchSingleUser(this.props.photo.author_id);
  }




  render() {


    const author = (id) => {
      let result = ''
      this.props.props.user.map(x => {
        if (id === x.id) {
          result = x.profile_pic;
        }
      })
      return result;
    }

    const handleProfileClick = (router, url) => (
    () => router.push(url)
    )

    return(
      <li>
        <div>
        <img className="cld-responsive" src={this.props.photo.image_url} media="(max-width: 400px)" onClick={this._handleClick.bind(this)}/>
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}
          onAfterOpen={this.onModalOpen}
          className='modal'>

          <div className='modal-container'>
            <img src={this.props.photo.image_url}/>
          </div>
          <CommentIndexContainer photoid={this.props.photo.id}/>

        </Modal>

      </li>
      )
    }
  }

export default withRouter(PhotoIndexItemLanding);
