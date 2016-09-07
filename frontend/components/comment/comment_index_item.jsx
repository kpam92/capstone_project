import React from 'react';

import { withRouter } from 'react-router';



class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }



  componentDidMount(){
    // this.props.fetchSingleUser(this.props.photo.author_id);
  }




  render() {

    const author = (id) => {
      let result = ''
      this.props.props.user.map(x => {
        if (id === x.id) {
          result = x;
        }
      })
      return result;
    }

    const handleProfileClick = (router, url) => (
      () => router.push(url)
    )
 // this.props.props this.props.comment
    const currAuthor = author(this.props.comment.author_id)
    return(
      <li>
        <h5>{currAuthor.username} : {this.props.comment.body}   {this.props.props.currentUser.id === this.props.comment.author_id ?
           <img className="delete-button" src="http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,h_15/v1472778565/x_alt-128_p7d2vo.png"/> : <a/>}</h5>
      </li>
      )
    }
  }

export default withRouter(CommentIndexItem);
