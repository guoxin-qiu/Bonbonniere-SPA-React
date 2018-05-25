import React, { Component } from "react";
import PropTypes from "prop-types";
import { EncodeContent } from "../../utils/html-helper";

const propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    createdTime: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired,
  onDeleteComment: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

class Comment extends Component {
  constructor() {
    super();
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
    this.state = { timeString: "" };
  }

  componentWillMount() {
    this.updateTimeString();
    this.timer = setInterval(this.updateTimeString.bind(this), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateTimeString() {
    const { comment } = this.props;
    const duration = (new Date() - new Date(comment.createdTime)) / 1000;
    this.setState({
      timeString:
        duration > 60
          ? `${Math.round(duration / 60)} minutes ago`
          : `${Math.round(Math.max(duration, 1))} seconds ago`
    });
  }

  handleDeleteComment() {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index);
    }
  }

  render() {
    const { comment } = this.props;
    return (
      <div className="comment">
        <div className="comment-user">
          <span className="comment-username">{comment.username} </span>:
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: EncodeContent(comment.content)
          }}
        />
        <span className="comment-createdtime">{this.state.timeString}</span>
        <span
          role="presentation"
          onClick={this.handleDeleteComment}
          className="comment-delete"
        >
          delete
        </span>
      </div>
    );
  }
}

Comment.propTypes = propTypes;

export default Comment;
