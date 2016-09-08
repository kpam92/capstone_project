import React from 'react';
// import Modal from 'react-modal';
// import ModalStyle from './modal_style'
import { withRouter } from 'react-router';



class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      album_id: parseInt(this.props.params.albumId),
      author_id: parseInt(this.props.params.profileId),
    };
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPhoto(this.state);
  }

  render() {


    // const currAlbum = currAlbumFun(parseInt(this.props.params.albumId))


    return(
    <div className="album-form-container">
      <form className="form-container" onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          value={this.state.title}
          placeholder="title"
          onChange={this.update('title')}/>
        <input
          type="text"
          value={this.state.description}
          placeholder="description (optional)"
          onChange={this.update('description')}/>
        <button className="splash-button">Create Album</button>
      </form>
    </div>
      )
    }
  }

export default withRouter(AlbumForm);
