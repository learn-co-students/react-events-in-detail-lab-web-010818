// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
  clickHandler = (event) => {
    event.persist()
    const x = event.screenX
    const y = event.screenY
    this.props.onReceiveCoordinates([x,y])
  }
  render() {
    return (
      <button onClick={this.clickHandler}>Click me</button>
    )
  }
}

export default CoordinatesButton
