import React from 'react'
import { connect } from 'react-redux'

import Cell from './Cell'
import Info from './Info'
import pokePics from '../../server/pokeScrape/pokeLibrary.json'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cells: []
    }
    // binds go here:
    this.scrumble = this.scrumble.bind(this)
    this.spinThat = this.spinThat.bind(this)
  }
  // functions go here:
  componentDidMount () {
    this.scrumble(this.state.cells)
  }

  scrumble (arr) {
    let scrambleCells = arr.length > 0 ? arr : []
    const newPokemon = pokePics.filter(img => !arr.find(i => i === img))
    let idx = Math.floor(Math.random() * newPokemon.length)
    scrambleCells.push(newPokemon[idx])
    if (scrambleCells.length === 8) {
      let full = scrambleCells.concat(scrambleCells)
      return this.setState({ cells: this.spinThat(full) })
    } else {
      this.scrumble(scrambleCells)
    }
  }

  spinThat (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    return arr
  }

  render () {
    const boardState = this.props.temp.length < 2 ? 'open' : 'closed'
    return (
      <div className='columns'>
        <div className='column is-2'></div>
        <div className='column is-6' id='niceMargin'>
          <div className={boardState} id='boardcontainer'>
            {this.state.cells.map((img, i) => <Cell key={i} id={i} img={img}/>)}
          </div>
        </div>
        <div className='column is-4'>
          <Info mix={this.scrumble}/>
        </div>
        <div className='column'></div>
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
