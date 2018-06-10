import React from 'react';
import Form from './form';
import Comment from './Comment';

import '../../css/comment.css';

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: {},
    };
  }

  render() {
    return (
      <div>
        <Form />
        <hr />
        <div className="comment-list">
          <Comment comment={this.state.comment} />
        </div>
      </div>
    );
  }
}

export default Comments;
