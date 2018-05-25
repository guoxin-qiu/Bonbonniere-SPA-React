import React, { Component } from "react";
import PropTypes from "prop-types";
import wrapWithLocalData from "../../WrapWithLocalData";
import CommentInput from "../../components/Comment/CommentInput";
import CommentList from "../../components/Comment/CommentList";

import "./index.css";

class CommentApp extends Component {
  static propTypes = {
    data: PropTypes.string.isRequired,
    saveData: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
    this.handelDeleteComment = this.handelDeleteComment.bind(this);
    this.state = { comments: props.data };
  }

  handleSubmitComment(comment) {
    if (!comment) return;
    if (!comment.username) {
      alert("username required");
      return;
    }
    if (!comment.content) {
      alert("content required");
      return;
    }
    const { comments } = this.state;
    comments.unshift(comment);
    this.setState({ comments });
    this.props.saveData(comments);
  }
  handelDeleteComment(index) {
    const { comments } = this.state;
    comments.splice(index, 1);
    this.setState({ comments });
    this.props.saveData(comments);
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment} />
        <CommentList
          comments={this.state.comments}
          onDeleteComment={this.handelDeleteComment}
        />
      </div>
    );
  }
}

export default wrapWithLocalData(CommentApp, "comments");
