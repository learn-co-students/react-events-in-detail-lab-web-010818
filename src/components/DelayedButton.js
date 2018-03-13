// Code DelayedButton Component Here
import React from "react"

class DelayedButton extends React.Component{

  onDelayedClick = (event) => {
    event.persist();
      setTimeout(() =>{
        console.log(event.timeStamp)
      this.props.onDelayedClick(event)
    }, this.props.delay);
  }


  render(){
    return(
      <div>
        <button onClick={this.onDelayedClick}>Delayed</button>
      </div>
    )
  }
}





export default DelayedButton
