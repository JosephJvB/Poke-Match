import React from 'react'

class Cell extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    // binds go here:
  }
  // functions go here:

  render () {
    return (
      <div>
        {this.props.cell.id}
      </div>
    )
  }
}

export default Cell
