import React from 'react'
import { connect } from 'react-redux'

import HallOfFame from './HallOfFame'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    // binds go here:
  }
  render () {
    return (
      <div className='has-text-centered'>
        {!this.props.HoF.length > 0 && <h1 className='title is-1'>Poke-Match!</h1>}
        {this.props.HoF.length > 0 && <HallOfFame HoF={this.props.HoF}/>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    HoF: state.HoF
  }
}

export default connect(mapStateToProps)(Header)
