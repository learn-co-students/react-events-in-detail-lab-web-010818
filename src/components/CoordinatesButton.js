// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component{

  clickEvent = (event) => {
    // [event.clientX, event.clientY]
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return(
      <div>
        <button onClick={this.clickEvent}>Coordinates</button>
      </div>
    )
  }

}






export default CoordinatesButton;
