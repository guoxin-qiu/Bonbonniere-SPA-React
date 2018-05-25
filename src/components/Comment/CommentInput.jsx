import React, { Component } from "react";
import PropTypes from "prop-types";
import wrapWithLocalData from "../../WrapWithLocalData";

class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.handleUsernameBlur = this.handleUsernameBlur.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: props.data,
      content: ""
    };
  }

  componentDidMount() {
    this.textarea.focus();
  }

  handleUsernameBlur(event) {
    this.props.saveData(event.target.value);
  }
  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }
  handleContentChange(event) {
    this.setState({
      content: event.target.value
    });
  }
  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      this.props.onSubmit({ username, content, createdTime: new Date() });
    }
    this.setState({ content: "" });
  }

  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">Username:</span>
          <div className="comment-field-input">
            <input
              value={this.state.username}
              onBlur={this.handleUsernameBlur}
              onChange={this.handleUsernameChange}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">Content:</span>
          <div className="comment-field-input">
            <textarea
              ref={ref => {
                this.textarea = ref;
              }}
              value={this.state.content}
              onChange={this.handleContentChange}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit}>Send</button>
        </div>
      </div>
    );
  }
}

CommentInput.propTypes = {
  data: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  saveData: PropTypes.func.isRequired
};

CommentInput.defaultProps = {
  data: ""
};

export default wrapWithLocalData(CommentInput, "username");
