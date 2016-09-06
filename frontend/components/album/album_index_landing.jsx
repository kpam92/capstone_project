import React from 'react';
import AlbumIndexItem from './album_index_item';


class AlbumIndexLanding extends React.Component {
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

    const albumList = this.props.albums.map(album => (
      <AlbumIndexItem key={album.id} album = {album} props = {this.props}/>
    ));

  	return (
  		<ul className='landing-photo-grid'>
        {albumList}
      </ul>
  	);
  }
}
export default AlbumIndexLanding;
