import React from 'react';

class DelayedButton extends React.Component{

clickedButton = (event) => {
  event.persist();
setTimeout(()=> {this.props.onDelayedClick(event)}, this.props.delay)
}

render(){
  return(
    <button onClick={this.clickedButton}>Click</button>
    )
  }
}

export default DelayedButton;
