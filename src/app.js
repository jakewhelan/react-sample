import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Example } from './example/example.js'

class App extends Component {
  render () {
    return (
      <div>
        Ayy we doing react boys
        <Example 
          firstName="jake"
          surname="whelan"
        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))