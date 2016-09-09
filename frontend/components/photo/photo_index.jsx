import React from 'react';
import PhotoIndexItem from './photo_index_item';


class PhotoIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllUsers();
  }


  render() {


    const photoList = this.props.photos.map(photo => (
      <PhotoIndexItem key={photo.id} photo = {photo} props = {this.props}/>
    ));


  	return (
  		<ul className='landing-photo-grid'>
        {photoList}
      </ul>
  	);
  }
}
export default PhotoIndex;
