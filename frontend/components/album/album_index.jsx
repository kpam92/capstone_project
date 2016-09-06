import React from 'react';
import AlbumIndexItem from './album_index_item';


class AlbumIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // this.props.fetchAllUsers();
    //fetchAllAlbums
  }


  render() {
    const albumList = this.props.albums.map(album => (
      <AlbumIndexItem key={album.id} album = {album} props = {this.props}/>
    ));
  	return (
  		<ul className='prof-album-grid'>
        {albumList}
      </ul>
  	);
  }
}
export default AlbumIndex;
