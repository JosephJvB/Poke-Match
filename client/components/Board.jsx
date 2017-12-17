import React from 'react'
import { connect } from 'react-redux'

import Cell from './Cell'
import { cells } from '../../server/cellData'
import pokePics from '../../server/pokeScrape/pokeLibrary.json'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cells: []
    }
    // binds go here:
    this.scrumble = this.scrumble.bind(this)
  }
  // functions go here:
  componentDidMount () {
    this.scrumble([])
  }

  scrumble (arr) {
    let scrambleCells = arr.length > 0 ? arr : []
    const newPokemon = pokePics.filter(img => !this.state.cells.find(i => i === img))
    let idx = Math.floor(Math.random() * newPokemon.length)
    scrambleCells.push(newPokemon[idx])
    if (scrambleCells.length === 8) {
      console.log(scrambleCells)
      return this.setState({ cells: scrambleCells })
    } else {
      this.scrumble(scrambleCells)
    }
  }

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
