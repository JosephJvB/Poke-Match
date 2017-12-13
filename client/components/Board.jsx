import React from 'react'

import Cell from './Cell'
import { cells } from '../../server/cellData'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    // binds go here:
  }
  // functions go here:

  render () {
    return (
      <div>
        <h1 className='title is-1'>heres a board:</h1>
        <div className='boardcontainer'>
          {cells.map(cell => <Cell key={cell.id} cell={cell}/>)}
        </div>
      </div>
    )
  }
}

export default Board
