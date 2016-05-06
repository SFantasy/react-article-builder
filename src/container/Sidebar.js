import React, { Component } from 'react'

import {
  TemplateTitle
} from '../templates'

class Sidebar extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (<div className='sidebar'>
      <TemplateTitle />
    </div>)
  }
}

export default Sidebar
