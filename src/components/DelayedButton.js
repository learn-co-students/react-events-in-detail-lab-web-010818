import React from 'react'

class DelayedButton extends React.Component {
  clickHandler = (event) => {
    event.persist()
    console.log(event)
    setTimeout(this.props.onDelayedClick,this.props.delay, event)
  }
  render() {
    return (
      <button onClick={this.clickHandler}>Delayed Button</button>
    )
  }
}

export default DelayedButton
