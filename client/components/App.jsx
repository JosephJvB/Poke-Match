import React from 'react'
import { connect } from 'react-redux'
import Snowfetti from 'react-snowfetti'

import Board from './Board'
import Header from './Header'

const App = (props) => {
  const h = window.screen.availHeight
  const w = window.screen.availWidth
  const p = ['#55476a', '#ae3d63', '#db3853', '#f45c44', '#f8b646']
  const s = { backgroundColor: 'white', opacity: 0.1 }
  return (
    <div className='app-container'>
      {props.win && <Snowfetti height={h} width={w} profile={['confetti', 'steady', p]} styles={s} />}
      <Header />
      <hr />
      <Board />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    win: state.win
  }
}

export default connect(mapStateToProps)(App)
