import React from 'react';

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
    debugger;
    return(
      <div className="prof-container">
        <img src={thisProf.profile_pic}/>
      </div>
    )
  }
}


export default Profile;
