import React from 'react';

class CoordinatesButton extends React.Component {

  button = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.button}>Button</button>
    )
  }
}

export default CoordinatesButton;
