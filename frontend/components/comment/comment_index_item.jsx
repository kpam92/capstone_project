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
        <h3>{currAuthor.username} : </h3>
        <h4>{this.props.comment.body}</h4>
      </li>
      )
    }
  }

export default withRouter(CommentIndexItem);
