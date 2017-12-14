import React from 'react'

import Board from './Board'
import Info from './Info'
import Header from './Header'

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <div className='columns'>
        <div className='column is-2'></div>
        <div className='column is-6' id='niceMargin'>
          <Board />
        </div>
        <div className='column is-4'>
          <Info />
        </div>
        <div className='column'></div>
      </div>
    </div>
  )
}

export default App
