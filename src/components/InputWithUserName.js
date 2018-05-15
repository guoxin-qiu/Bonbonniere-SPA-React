import React, { Component } from 'react'
import wrapWithLocalData from '../wrapWithLocalData'

class InputWithUserName extends Component {
  render() {
    return <input value={this.props.data} />
  }
}

InputWithUserName = wrapWithLocalData(InputWithUserName, 'username')
export default InputWithUserName