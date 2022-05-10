import React, {Component} from 'react'
import './item-list-container.css'


export class Cuerpo extends Component {
  render() {
    return (
      <div className='cuerpo'>
          {this.props.titulo}
      </div>
    )
  }
}

export default Cuerpo