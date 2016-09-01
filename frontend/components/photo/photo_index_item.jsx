import React from 'react';


class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    debugger;
    return(
      <div>
        <img src={this.props.photo.image_url}/>
      </div>
      )
    }
  }

export default PhotoIndexItem;
