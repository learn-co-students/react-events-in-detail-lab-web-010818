import React from 'react';

export default class CoordinatesButto extends React.Component {
  handleClick = (event) => {
    const xCoord = event.clientX;
    const yCoord = event.clientY;
    return this.props.onReceiveCoordinates([xCoord, yCoord]);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Button</button>
    )
  }
}
