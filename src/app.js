import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import update from 'react/lib/update'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

import Sidebar from './container/Sidebar'
import Editor from './container/Editor'

import './style.scss'

class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      templates: [],
      name: ''
    }
  }

  componentDidMount () {
    // TODO: Load data from Storage
  }

  componentWillUpdate (nextProps, nextStates) {
    // TODO: Update data in Storage
  }

  render () {
    return (<div className='container'>
      <header className='header'>
        <h1>react-article-builder</h1>
      </header>
      <div className='app'>
        <Sidebar />
        <Editor
          templates={this.state.templates}
          onDrop={this.handleDrop.bind(this)}
          onMove={this.hanldeMove.bind(this)}
          onModify={this.handleModify.bind(this)}
          onDelete={this.handleDelete.bind(this)}
        />
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

  handleDrop (item) {
    let newItem = update(item, {
      $merge: {
        id: this.state.templates.length
      }
    })

    this.setState(update(this.state, {
      templates: {
        $push: [newItem]
      }
    }))
  }

  hanldeMove () {

  }

  handleModify () {

  }

  handleDelete (index) {
    console.log(`Deleting ${index}`)
  }
}

let AppWrapped = DragDropContext(HTML5Backend)(App)

ReactDOM.render(
  <AppWrapped />,
  document.getElementById('app')
)
