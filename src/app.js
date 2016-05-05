import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Sidebar from './presentation/Sidebar'
import Editor from './presentation/Editor'

import './style.scss'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (<div className='container'>
      <header className='header'>
        <h1>eact-article-builder</h1>
      </header>
      <div className='app'>
        <Sidebar />
        <Editor />
        <div className='actions'>
          <button className='btn'><span className='octicon octicon-eye'></span> Preview</button>
          <button className='btn'><span className='octicon octicon-check'></span> Save</button>
        </div>
      </div>
      <footer className='footer'>
        <p>
          <a href='https://github.com/SFantasy/react-article-builder'><span className='octicon octicon-mark-github'></span> View on Github</a>
        </p>
      </footer>
    </div>)
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
