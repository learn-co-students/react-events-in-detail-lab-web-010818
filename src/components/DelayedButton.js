// Code DelayedButton Component Here
// In the components/DelayedButton.js file, create a DelayedButton React component
// This component takes two props: onDelayedClick (a function), and delay (a number). (These props are only passed in the test suite, you will have errors in the browser)
// When the button is clicked, we want to persist the e so we can pass it to the this.props.onDelayedClick() in a setTimeout() block. The setTimeout() will be set to this.props.delay.
//




import React, { Component } from "react";

class DelayedButton extends Component{
    event = (e)=>{
      e.persist();
      setTimeout(() => {
        this.props.onDelayedClick(e);
  }, this.props.delay);
}
  render(){
    return(
      <button onClick= {this.event}></button>
    )
  }
}


export default DelayedButton
