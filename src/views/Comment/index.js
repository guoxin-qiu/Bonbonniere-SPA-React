import React, { Component } from 'react'
import PropTypes from 'prop-types'
import wrapWithLocalData from '../../wrapWithLocalData'
import CommentInput from '../../components/Comment/CommentInput'
import CommentList from '../../components/Comment/CommentList'

import './index.css'

class CommentApp extends Component {
  static propTypes = {
    data: PropTypes.any,
    saveData: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.state = { comments: props.data }
  }

  handleSubmitComment(comment) {
    if (!comment) return;
    if (!comment.username) return alert('username required')
    if (!comment.content) return alert('content required')
    const comments = this.state.comments
    comments.unshift(comment)
    this.setState({ comments })
    this.props.saveData(comments)
  }
  handelDeleteComment(index) {
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({ comments })
    this.props.saveData(comments)
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput
          onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} onDeleteComment={this.handelDeleteComment.bind(this)} />
      </div>
    )
  }
}

CommentApp = wrapWithLocalData(CommentApp, 'comments')
export default CommentApp