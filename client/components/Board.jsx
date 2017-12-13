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
  componentDidMount () {
    console.log(cells)
  }

  render () {
    return (
      <div>
        im Board
        {cells.map(cell => <Cell key={cell.id} cell={cell}/>)}
      </div>
    )
  }
}

export default Board
