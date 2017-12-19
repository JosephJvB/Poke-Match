import React from 'react'

import Board from './Board'
import Header from './Header'

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <div id='bod'>
        <Board />
      </div>
    </div>
  )
}

export default App
