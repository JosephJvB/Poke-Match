import React from 'react'
import { connect } from 'react-redux'

import HallOfFame from './HallOfFame'

const Header = (props) => {
  return (
    <div className='has-text-centered' id='header'>
      {!props.HoF.length > 0 && <h1 className='title is-1'>Poke-Match!</h1>}
      {props.HoF.length > 0 && <HallOfFame HoF={props.HoF}/>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    HoF: state.HoF
  }
}

export default connect(mapStateToProps)(Header)
