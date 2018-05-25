import React, { Component } from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";

const propTypes = {
  comments: PropTypes.arrayOf({}),
  onDeleteComment: PropTypes.func.isRequired
};
const defaultProps = {
  comments: []
};

class CommentList extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleDeleteComment(index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index);
    }
  }

  render() {
    return (
      <div>
        {this.props.comments.map((comment, i) => {
          const key = (i + 1) * Math.random();
          return (
            <Comment
              comment={comment}
              key={key}
              index={i}
              onDeleteComment={this.handleDeleteComment}
            />
          );
        })}
      </div>
    );
  }
}

CommentList.propTypes = propTypes;
CommentList.defaultProps = defaultProps;

export default CommentList;
