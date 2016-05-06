import React, { Component } from 'react'
import { DragSource } from 'react-dnd'

const titleSource = {
  beginDrag (props, monitor, component) {
    return {
      templateId: 1,
      text: component.props.text
    }
  },
  endDrag (props, monitor, component) {

  }
}

class Title extends Component {
  static defaultProps = {
    text: 'Heading'
  }

  render () {
    const { text, isDragging, connectDragSource } = this.props

    return connectDragSource(<div className='template'><h1>{text}</h1></div>)
  }
}

export default DragSource('template', titleSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(Title)
