import React from 'react';

class CoordinatesButton extends React.Component{
  clickedButton = (event) => {
     const coordinates = [event.screenX, event.screenY]
     this.props.onReceiveCoordinates(coordinates)
  }

  render(){
    return(
      <button onClick={this.clickedButton}>Click</button>
    )
  }
}

export default CoordinatesButton
