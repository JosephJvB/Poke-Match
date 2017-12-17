import React from 'react'
import { connect } from 'react-redux'

import Cell from './Cell'
import Info from './Info'
import pokePics from '../../server/pokeScrape/pokeLibrary.json'
// import { cells } from '../../server/cellData'

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
    this.scrumble(this.state.cells)
  }

  scrumble (arr) {
    let scrambleCells = arr.length > 0 ? arr : []
    const newPokemon = pokePics.filter(img => !arr.find(i => i === img))
    let idx = Math.floor(Math.random() * newPokemon.length)
    scrambleCells.push(newPokemon[idx])
    if (scrambleCells.length === 8) {
      return this.setState({ cells: scrambleCells })
    } else {
      this.scrumble(scrambleCells)
    }
  }

  render () {
    const boardState = this.props.temp.length < 2 ? 'open' : 'closed'
    return (
      <div className='columns'>
        <div className='column is-2'></div>
        <div className='column is-6' id='niceMargin'>
          <div className={boardState} id='boardcontainer'>
            {this.state.cells.map((img, i) => <Cell key={i} id={i} img={img}/>)}
            {this.state.cells.map((img, i) => <Cell key={i} id={i + 8} img={img}/>)}
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
