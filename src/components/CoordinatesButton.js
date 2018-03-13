// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    console.log(event.clientX, event.clientY)
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return (
      <button onClick={this.handleClick}>Coordinates</button>
    );
  }
}

export default CoordinatesButton;
