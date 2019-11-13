import React, { Component } from "react";
import s from "./Control.module.css";
import Info from "./Info/Info";

export default class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeX = e => {
    //   if(e.target.value >= 0 && e.target.value <= 9 ) {
        this.setState({ x: e.target.value });
      }
//   };

  handleChangeY = e => {
    // if(e.target.value >= 0 && e.target.value <= 9 ) {
        this.setState({ y: e.target.value });
      }
//   };

  handleSubmit(e) {
    e.preventDefault();
  }

  setCoord = () => {
    const { x, y } = this.state;
    this.props.setCoordinates( x, y );
  };

  render() {
    return (
      <div>
          {(this.state.x<0 || this.state.x>9) || (this.state.y<0 || this.state.y>9)? <Info/>: null }
        <form onSubmit={this.handleSubmit} className={s.Control}>
          <div className={s.input}>
            <label>
              <div className={s.p}>X:</div>
              <input
                type="number"
                value={this.state.x}
                onChange={this.handleChangeX}
              />
            </label>
            <label>
              <div className={s.p}>Y:</div>
              <input
                type="number"
                value={this.state.y}
                onChange={this.handleChangeY}
              />
            </label>
          </div>
          <div className={s.btn}>
            <button className={s.button} onClick={this.setCoord}>Move</button>
            <div className={s.dot}></div>
          </div>
        </form>
      </div>
    );
  }
}
