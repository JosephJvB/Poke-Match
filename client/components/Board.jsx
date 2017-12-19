import React from 'react'
import { connect } from 'react-redux'

import { reset, saveGen } from '../actions'
import Cell from './Cell'
import Info from './Info'
import kantoDex from '../../server/pokeScrape/pokeLibrary/kantoDex.json'
import johtoDex from '../../server/pokeScrape/pokeLibrary/johtoDex.json'
import hoennDex from '../../server/pokeScrape/pokeLibrary/hoennDex.json'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cells: []
    }
    // binds go here:
    this.scrumble = this.scrumble.bind(this)
    this.spinThat = this.spinThat.bind(this)
    this.resetGame = this.resetGame.bind(this)
  }
  // functions go here:
  componentDidMount () {
    this.scrumble(this.state.cells, kantoDex)
  }

  scrumble (arr, mons) {
    this.props.dispatch(saveGen(mons))
    let scrambleCells = arr.length > 0 ? arr : []
    const newPokemon = mons.filter(img => !arr.find(i => i === img))
    let idx = Math.floor(Math.random() * newPokemon.length)
    scrambleCells.push(newPokemon[idx])
    if (scrambleCells.length === 8) {
      let full = scrambleCells.concat(scrambleCells)
      return this.setState({ cells: this.spinThat(full) })
    } else {
      this.scrumble(scrambleCells, mons)
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

  resetGame () {
    this.props.dispatch(reset())
    this.scrumble([], this.props.gen)
  }

  render () {
    const boardState = this.props.temp.length < 2 ? 'open' : 'closed'
    return (
      <div className='columns'>
        <div className='column is-2'>
          <button onClick={() => this.scrumble([], kantoDex)}>KANTO</button>
          <button onClick={() => this.scrumble([], johtoDex)}>JOHTO</button>
          <button onClick={() => this.scrumble([], hoennDex)}>HOENN</button>
        </div>
        <div className='column is-6' id='niceMargin'>
          {!this.props.win && <div className={boardState} id='boardcontainer'>
            {this.state.cells.map((img, i) => <Cell key={i} id={i} img={img}/>)}
          </div>}
          {this.props.win && <div className={boardState} id='boardcontainer' onClick={this.resetGame}>
            <img src='/images/pokewin.gif' />
          </div>}
        </div>
        <div className='column is-4'>
          <Info mix={this.scrumble} />
        </div>
        <div className='column'></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gen: state.gen,
    win: state.win,
    temp: state.temp
  }
}

export default connect(mapStateToProps)(Board)
