import React from 'react';
import PhotoIndexItemLanding from './photo_index_item_landing';
import Masonry from 'react-masonry-component';


class PhotoIndexLanding extends React.Component {
  constructor(props){
    super(props);
  }


  render() {


    const photoList = this.props.photos.map(photo => (
      <PhotoIndexItemLanding key={photo.id} photo = {photo} props = {this.props}/>
    ));

    var masonryOptions = {
        transitionDuration: 0
    };
  	return (
      <Masonry
          className={'my-gallery-class'} // default ''
          elementType={'ul'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          onImagesLoaded={this.handleImagesLoaded}
      >

        {photoList}

    </Masonry>
  	);
  }
}
export default PhotoIndexLanding;
