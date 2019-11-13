import React from "react";
import s from "./Area.module.css";
import Ball from "./Ball/Ball";

class Area extends React.Component {

  render() {
    return (
      <div className={s.Area}>
        <Ball x={this.props.x * 50} y={this.props.y * 50} />
      </div>
    );
  }
}

export default Area;
