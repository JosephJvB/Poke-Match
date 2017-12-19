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
    let asheFace = '/images/wPoke.png'
    const count = this.props.count ? this.props.count : 0
    const mans = this.props.solved.length ? this.props.solved.length : 0
    if (this.props.check === 'yup') {
      asheFace = '/images/happyAsh.jpeg'
    } else if (this.props.check === 'nope') {
      asheFace = '/images/aAsh.jpg'
    }
    return (
      <section id='info' className='section has-text-centered'>
        <img src='/images/catchem.png'/>
        <div className='card' style={{height: 240, width: 980}}>
          <img src={asheFace} />
        </div>
        <div className='card'>
          <ul className='has-text-left'>
            <li>Turn Count: {count}</li>
            <li>Poke-Pairs Caught: {mans} / 8</li>
          </ul>
        </div>
        <button className='button is-danger is-large' onClick={() => this.props.reset(this.props.gen)}>RESET</button>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gen: state.gen,
    check: state.check,
    count: state.count,
    solved: state.solved,
    temp: state.temp
  }
}

export default connect(mapStateToProps)(Info)
