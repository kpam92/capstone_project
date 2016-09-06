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
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }

        return array;
      }
    const shuffledPhotoList = shuffle(photoList)

  	return (
  		<ul className='landing-photo-grid'>
        {shuffledPhotoList}
      </ul>
  	);
  }
}
export default PhotoIndex;
