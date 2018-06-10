import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      comment: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const body = JSON.stringify({ comment: this.state.comment });
    const response = await fetch('http://localhost:4000/comment', {
      method: 'post',
      body,
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = await response.json();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="comment-form">
        <input placeholder="Your Name" />
        <textarea placeholder="Enter your comment" rows="4" />
        <div>
          <button className="button submit-button">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
