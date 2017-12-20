import React from 'react'
import { connect } from 'react-redux'

import { reset, saveGen } from '../actions'
import Cell from './Cell'
import Info from './Info'
import GenBar from './GenBar'
import kantoDex from '../../server/pokeScrape/pokeLibrary/kantoDex.json'

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
    const newPokemon = mons.filter(img => !arr.find(i => i === img))
    let idx = Math.floor(Math.random() * newPokemon.length)
    arr.push(newPokemon[idx])
    if (arr.length === 8) {
      let full = arr.concat(arr)
      return this.setState({ cells: this.spinThat(full) })
    } else {
      this.scrumble(arr, mons)
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

  resetGame (gen) {
    this.props.dispatch(reset())
    this.scrumble([], gen)
  }

  render () {
    const boardState = this.props.temp.length < 2 ? 'open' : 'closed'
    return (
      <div className='columns'>
        <GenBar reset={this.resetGame}/>
        <div className='column is-6' id='niceMargin'>
          {!this.props.win && <div className={boardState} id='boardcontainer'>
            {this.state.cells.map((img, i) => <Cell key={i} id={i} img={img}/>)}
          </div>}
          {this.props.win && <div id='boardcontainer' onClick={() => this.resetGame(this.props.gen)}>
            <img src='/images/pokewin.gif' />
          </div>}
        </div>
        <div className='column is-4'>
          <Info reset={this.resetGame} />
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
