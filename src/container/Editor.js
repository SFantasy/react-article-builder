import React, { PropTypes, Component } from 'react'
import { DropTarget } from 'react-dnd'

import {
  PresentTitle
} from '../presentation'

const getPresentItemById = (id) => {
  switch (id) {
    case 1: return PresentTitle
    default: return PresentTitle
  }
}

class Editor extends Component {

  constructor (props) {
    super(props)
  }

  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    templates: PropTypes.array,
    onDrop: PropTypes.func
  }

  static defaultProps = {
    templates: [],
    onDrop () {}
  }

  render () {
    const { canDrop, isOver, connectDropTarget } = this.props
    const isActive = canDrop && isOver

    return connectDropTarget(
      <div className='editor'>
        <p className='msg'>{isActive ? 'Drop to add' : '+ Drag here to add template'}</p>
        {this.props.templates.map((template, index) => {
          let PresentItem = getPresentItemById(template.templateId)

          return (
            <PresentItem
              key={index}
              index={index}
              text={template.text}
              data={template.data || null}
              onDelete={index => {
                this.props.onDelete(index)
              }}
              onMove={(dragIndex, hoverIndex) => {
                this.props.onMove(dragIndex, hoverIndex)
              }}
              onModify={(index, text, data) => {
                this.props.onModify(index, text, data)
              }}
            />
          )
        })}
      </div>
    )
  }

}

export default DropTarget('template', {
  drop (props, monitor, component) {
    let item = monitor.getItem()

    if (item.templateId) props.onDrop(monitor.getItem())

    return {
      text: 'Drop!'
    }
  }
}, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(Editor)
