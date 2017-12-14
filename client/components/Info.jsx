import React from 'react'
import { connect } from 'react-redux'

class Info extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    // binds go here:
  }
  // functions go here:

  render () {
    let asheFace = ''
    const count = this.props.count ? this.props.count : 0
    const mans = this.props.solved.length ? this.props.solved.length : 0
    if (this.props.check === 'yup') {
      asheFace = '/images/happyAsh.jpeg'
    } else if (this.props.check === 'nope') {
      asheFace = '/images/angyAsh.png'
    } else {
      asheFace = '/images/catchem.png'
    }
    return (
      <section className='section has-text-centered'>
        <div className='card'>
          <h1 className='subtitle is-1'>Game State:</h1>
          <ul className='has-text-left'>
            <li>Turn Count: {count}</li>
            <li>Poke-Pairs Caught: {mans} / 8</li>
            <li><img src={asheFace}/></li>
          </ul>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    check: state.check,
    count: state.count,
    solved: state.solved,
    temp: state.temp
  }
}

export default connect(mapStateToProps)(Info)
