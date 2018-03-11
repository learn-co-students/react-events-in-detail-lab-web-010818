import React from 'react';

class DelayedButton extends React.Component {

  button = event => {
    event.persist();
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
  }

  render() {
    return (
      <button onClick={this.button}>Button</button>
    )
  }
}

export default DelayedButton;
