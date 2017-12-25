import React from 'react'

import kantoDex from '../../server/pokeScrape/pokeLibrary/kantoDex.json'
import johtoDex from '../../server/pokeScrape/pokeLibrary/johtoDex.json'
import hoennDex from '../../server/pokeScrape/pokeLibrary/hoennDex.json'

const GenBar = (props) => {
  const style = { height: 100, width: 190 }
  return (
    <div className='column is-2' id='gens'>
      <img className='gen' src='/images/kantoStarters.jpg' id='kanto'/>
      <button className='button' id='genBut' onClick={() => props.reset(kantoDex)}>KANTO</button>
      <img className='gen' src='/images/johtoStarters.jpg' id='johto'/>
      <button className='button' id='genBut' onClick={() => props.reset(johtoDex)}>JOHTO</button>
      <img style={style} src='/images/hoennStarters.jpg' id='hoenn'/>
      <button className='button' id='genBut' onClick={() => props.reset(hoennDex)}>HOENN</button>
    </div>
  )
}

export default GenBar
