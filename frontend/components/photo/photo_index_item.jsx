import React from 'react';


class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <li>
        <img src={this.props.photo.image_url}/>
        <h3>{this.props.photo.title}</h3>
        <h5>{this.props.photo.description}</h5>
      </li>
      )
    }
  }

export default PhotoIndexItem;
