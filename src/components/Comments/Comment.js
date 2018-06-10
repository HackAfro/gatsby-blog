import React from 'react';

const Comment = ({ comment }) => (
  <div className="comment">
    <div className="comment__meta">
      <h5>Richard Afro</h5>
      <span>June 21, 2018</span>
    </div>
    <p className="comment__body">I really enjoyed this article</p>
  </div>
);

export default Comment;
