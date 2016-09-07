import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style'
import { withRouter } from 'react-router';



class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      image_url: '',
      album_id: '',
    };
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleUpload(e) {
    e.preventDefault();
    let that = this;
    cloudinary.openUploadWidget(
               window.CLOUDINARY_OPTIONS,
               function(error, images) {
                 if (error === null) {
                  that.setState({image_url: images[0].url})
                 }
            });
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    this.props.createPokemon(this.state);
  }

  render() {


    // const currAlbum = currAlbumFun(parseInt(this.props.params.albumId))


    return(
    <div className="photo-form-container">
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          placeholder="title"
          onChange={this.update('title')}/>
        <input
          type="hidden"
          name={this.state.author_id}
          value={parseInt(this.props.params.profileId)}/>
        <input
          type="hidden"
          name={this.state.album_id}
          value={parseInt(this.props.params.albumId)}/>
        <input
          type="text"
          value={this.state.medium}
          placeholder="medium (optional)"
          onChange={this.update('medium')}/>
        <input
          type="text"
          value={this.state.description}
          placeholder="description (optional)"
          onChange={this.update('description')}/>
        {this.state.image_url === "" ? <button onClick={this.handleUpload.bind(this)}>Upload Photo</button> :
                                        <img className='image-preview'src={this.state.image_url}/>}
        <button>Submit Photo</button>
      </form>
    </div>
      )
    }
  }

export default withRouter(PhotoForm);
