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
  cellClick (cell) {
    this.props.dispatch(addTempCell(cell))
    setTimeout(this.checkTemp, 100)
  }

  checkTemp () {
    if (this.props.temp.length === 2) {
      if (this.props.temp[0].img === this.props.temp[1].img) {
        console.log('match!')
        this.props.dispatch(solvePair(this.props.temp))
      } else {
        console.log('no match')
      }
      setTimeout(() => this.props.dispatch(clearTemp()), 1500)
    } else {
      console.log('choose another cell')
    }
    setTimeout(this.checkSolved, 100)
  }

  checkSolved () {
    if (this.props.solved.length === 8) {
      console.log('u win m\'dude')
    }
  }

  render () {
    const foundCell = (this.props.temp.find(c => c === this.props.cell) || this.props.solved.find(set => set.find(c => c === this.props.cell)))
    return (
      <div>
        {!foundCell && <div className='cell' onClick={() => this.cellClick(this.props.cell)}>
          <img src='/images/pkball.png' />
        </div>}
        {foundCell && <div className='cell' disabled>
          <img src={this.props.cell.img} />
        </div>}
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
