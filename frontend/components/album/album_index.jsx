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
    const userAlbums = (id) => {
      let result = [];
      this.props.albums.map(album => {
        if (album.author_id === id) {
          result.push(album);
        };
      })
      return result;
    }
    // const userAlbums = (array) => {
    //   let result = [];
    //   array.map(id => {
    //     this.props.albums.map(album => {
    //       if (album.author_id === id) {
    //         result.push(album);
    //       };
    //     })
    //   })
    //   return result;
    // }

    const albumList = userAlbums(this.props.prof.id).map(album => (
      <AlbumIndexItem key={album.id} album = {album} props = {this.props}/>
    ));

  	return (
  		<ul className='landing-photo-grid prof-album'>
        {albumList}
      </ul>
  	);
  }
}
export default AlbumIndex;
