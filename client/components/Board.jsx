import React from 'react'
import { connect } from 'react-redux'

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
    const boardState = this.props.temp.length < 2 ? 'open' : 'closed'
    return (
      <div className={boardState} id='boardcontainer'>
        {cells.map((cell, i) => <Cell key={i} cell={cell}/>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    temp: state.temp
  }
}

export default connect(mapStateToProps)(Board)
