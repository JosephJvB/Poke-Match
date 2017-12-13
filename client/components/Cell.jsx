import React from 'react'
import { connect } from 'react-redux'

import { addTempCell, solvePair, clearTemp } from '../actions'

class Cell extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    // binds go here:
    this.cellClick = this.cellClick.bind(this)
    this.checkTemp = this.checkTemp.bind(this)
    this.checkSolved = this.checkSolved.bind(this)
  }
  // functions go here:
  cellClick (img) {
    this.props.dispatch(addTempCell(img))
    setTimeout(this.checkTemp, 100)
    this.checkSolved()
  }

  checkTemp () {
    if (this.props.temp.length === 2) {
      if (this.props.temp[0] === this.props.temp[1]) {
        console.log('match!')
        this.props.dispatch(solvePair(this.props.temp))
      } else {
        console.log('no match dickhead')
      }
      this.props.dispatch(clearTemp())
    } else {
      console.log('choose another cell')
    }
  }

  checkSolved () {
    if (this.props.solved.length === 8) {
      console.log('u win m\'dude')
    }
  }

  render () {
    return (
      <div className='cell' onClick={this.cellClick}>
        cell: {this.props.cell.id}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    temp: state.temp,
    solved: state.solved
  }
}

export default connect(mapStateToProps)(Cell)
