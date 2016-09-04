import React from 'react';

class Profile extends React.Component{
  constructor(props){
    super(props);
  }


  render(){

    const currProfile = (id) => {
      let result = ''
      this.props.user.map(x => {
        if (id === x.id) {
          result = x;
        }
      })
      return result;
    }
    debugger;
    return(
      <div className={currProfile(this.props.params.userId).username}>
        <img src={currProfile(this.props.params.profileId).profile_pic}/>
      </div>
    )
  }
}


export default Profile;
