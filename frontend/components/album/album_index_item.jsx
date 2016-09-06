import React from 'react';
// import Modal from 'react-modal';
// import ModalStyle from './modal_style'
import { withRouter } from 'react-router';



class AlbumIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount(){
    // this.props.fetchSingleUser(this.props.photo.author_id);
  }




  render() {

    const cover_photo = (id) => {
      let result = ''
      this.props.props.photos.map(x => {
        if (id === x.id) {
          result = x.image_url;
        }
      })
      return result;
    }

    const handleAlbumClick = (router, url) => (
    () => router.push(url)
    )
    const albumAuthFun = (id) => {
      let result = ""
        this.props.props.user.map(x => {
          if (id === x.id) {
            result = x;
          }
        })
        return result;
    }
    const Author = albumAuthFun(this.props.album.author_id);

    return(
      <li>
        <img onClick={handleAlbumClick(this.props.router, `/album/${this.props.album.id}`)} src={cover_photo(this.props.album.cover_photo_id)}/>
        <div className="auth">
          <img onClick={handleAlbumClick(this.props.router,  `/album/${this.props.album.id}`)} src={Author.profile_pic}/>
          <h3>{this.props.album.title}</h3>
        </div>
      </li>
      )
    };

  }

export default withRouter(AlbumIndexItem);
