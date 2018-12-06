import React, { Component } from 'react'

export class Example extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: `hello world ${this.props.firstName} ${this.props.surname}!`
    }
  }

  capitalize (string) {
    return string.toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.substring(1))
      .join(' ')
  }

  onClick () {
    this.setState({
      title: `${this.state.title} 123`
    })
  }

  render () {
    return (
      <div onClick={this.onClick.bind(this)}>
        {this.capitalize(this.state.title)}
      </div>
    )
  }
}
