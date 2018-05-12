import React, { Component } from 'react';
import CommentInput from '../../components/Comment/CommentInput';
import CommentList from '../../components/Comment/CommentList';

import './index.css';

class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };
  }

  componentWillMount() {
    this._loadComments();
  }

  _loadComments() {
    let comments = localStorage.getItem('comments');
    if (comments) {
      comments = JSON.parse(comments);
      this.setState({ comments });
    }
  }
  _saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments));
  }

  handleSubmitComment(comment) {
    if (!comment) return;
    if (!comment.username) return alert('username required');
    if (!comment.content) return alert('content required');
    const comments = this.state.comments;
    comments.unshift(comment);
    this.setState({ comments });
    this._saveComments(comments);
  }
  handelDeleteComment(index) {
    const comments = this.state.comments;
    comments.splice(index, 1);
    this.setState({ comments });
    this._saveComments(comments);
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput
          onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} onDeleteComment={this.handelDeleteComment.bind(this)} />
      </div>
    );
  }
}

export default CommentApp;