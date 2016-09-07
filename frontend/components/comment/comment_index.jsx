import React from 'react';
import CommentIndexItem from './comment_index_item';


class CommentIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllUsers();
  }

//this.props.photo_id
  render() {

    const commentList = (id) => {
      let result = [];
      this.props.comments.map(comment => {
        if (comment.photo_id === id) {
          result.push(comment);
        }
      });
      return result;
    }

    const allComments = commentList(this.props.photoid).map(comment => (
      <CommentIndexItem key={comment.id} comment = {comment} props = {this.props}/>

    ))
    
  	return (
      <div>
        <h3>Comments</h3>
    		<ul className='landing-photo-grid'>
          {allComments}
        </ul>
      </div>
  	);
  }
}
export default CommentIndex;
