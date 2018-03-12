import React from 'react';
import PropTypes from 'prop-types';

export default class DelayedButton extends React.Component {
  handleClick = (event) => {
    event.persist()
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
  }

  render() {
    return (
      <button onClick={this.handleClick}>DelayedButton</button>
    )
  }
}

DelayedButton.propTypes = {
  onDelayedClick: PropTypes.func,
  delay: PropTypes.number
}
