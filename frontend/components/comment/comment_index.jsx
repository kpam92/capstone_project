import React from 'react';
import CommentIndexItem from './comment_index_item';


class CommentIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: '',
      photo_id: this.props.photoid,
      author_id: this.props.currentUser.id,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({body: ''})
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

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
      <div className='comment-box'>
        <header>
          <div>
            <h3 className="">COMMENTS</h3>
          </div>
        </header>
        <aside className='info'>
          <div>
        		<ul className='comments-grid'>
              {allComments}
            </ul>
          </div>
          <div>
            <form className="form-container" onSubmit={this.handleSubmit.bind(this)}>
              <input
                type="text"
                id="comment-body"
                value={this.state.body}
                placeholder="type comment here..."
                autoComplete="off"
                onChange={this.update('body')}
                required/>
              <button className="comment-button">+</button>
            </form>
          </div>
        </aside>
      </div>
  	);
  }
}
export default CommentIndex;
