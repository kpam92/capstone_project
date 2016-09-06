import React from 'react';
import AlbumIndexContainer from '../album/album_index_container';

class Profile extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    const profUser = (id) => {
      let result = ''
      this.props.user.map(x => {
        if (id === x.id) {
          result = x;
        }
      })
      return result;
    }
    const thisProf = profUser(parseInt(this.props.params.profileId))

    return(
      <div className="prof-container">
        <div className="prof-header">
          <div className="prof-main-pic"><img src={thisProf.profile_pic}/></div>
          <h1>{thisProf.username}</h1>
        </div>
        <div className="album-grid">
          <AlbumIndexContainer prof={thisProf}/>
        </div>
      </div>
    )
  }
}


export default Profile;
