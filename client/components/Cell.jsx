import React from 'react'
import { connect } from 'react-redux'

import { addTempCell, solvePair, clearTemp, addCount, checkPair, win, saveHoF } from '../actions'

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
  cellClick (img, id) {
    this.props.dispatch(addTempCell(img, id))
    setTimeout(this.checkTemp, 100)
  }

  checkTemp () {
    let count = this.props.count ? this.props.count : 0
    if (this.props.temp.length === 2) {
      if (this.props.temp[0].img === this.props.temp[1].img) {
        console.log('Match!')
        this.props.dispatch(checkPair('yup'))
        this.props.dispatch(solvePair(this.props.temp))
      } else {
        this.props.dispatch(checkPair('nope'))
        console.log('no match')
      }
      count += 1
      this.props.dispatch(addCount(count))
      setTimeout(() => this.props.dispatch(clearTemp()), 1500)
    } else {
      console.log('choose another cell')
    }
    setTimeout(this.checkSolved, 100)
  }

  checkSolved () {
    const HoF = this.props.solved.map(pair => pair[0].img)
    if (this.props.solved.length === 8) {
      this.props.dispatch(saveHoF(HoF))
      setTimeout(() => this.props.dispatch(win()), 2300)
      console.log('u win m\'dude')
    }
  }

  render () {
    const foundCell = (this.props.temp.find(c => c.id === this.props.id) || this.props.solved.find(set => set.find(c => c.id === this.props.id)))
    return (
      <div>
        {!foundCell && <div className='cell' onClick={() => this.cellClick(this.props.img, this.props.id)}>
          <img className ='cellImg' src='/images/pkball.png' />
        </div>}
        {foundCell && <div className='cell' disabled>
          <img src={`https://${this.props.img}`} />
        </div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    temp: state.temp,
    solved: state.solved
  }
}

export default connect(mapStateToProps)(Cell)
