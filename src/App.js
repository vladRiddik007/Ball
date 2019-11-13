import React, { Component } from "react";
import Control from "./Component/Control/Control";
import Area from "./Component/Area/Area";
import History from "./Component/History/History";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentX: 0,
      currentY: 0,
      nextX: 0,
      nextY: 0,
      history: []
    };
  }
  componentDidUpdate(){
    if(this.state.currentX !== this.state.nextX){
      let A = this.state.currentX;
      let B = this.state.nextX;
      for (A; A<=B;A++){
      this.setState({currentX: A})
      // console.log(A)
      }
    }
}
  setCoordinates = ( x, y ) => {
    this.setState({ nextX: x, nextY: y, history: [...this.state.history, { x, y }] });
    // console.log(this.state);
  };

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <Control setCoordinates={this.setCoordinates} />
        <Area x={this.state.currentX} y={this.state.currentY} />
        <History history={this.state.history} />
      </div>
    );
  }
}
