import React from 'react';
import PropTypes from 'prop-types';

export default class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    let x = event.screenX;
    let y = event.screenY;
    this.props.onReceiveCoordinates([x, y])
  }

  render() {
    return (
      <button onClick={this.handleClick}>CoordinatesButton</button>
    )
  }
}

CoordinatesButton.propTypes = {
  onReceiveCoordinates: PropTypes.func
}
