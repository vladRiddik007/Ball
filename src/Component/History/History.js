import React from "react";
import s from "./History.module.css";

const History = props => {
  const renderElement = props.history.map((e, i) => (
    <li key={i}> {`x: ${e.x} y: ${e.y}`}</li>
  ));

  return (
    <div className={s.history}>
      <p>History:</p>
      <ol>{renderElement}</ol>
    </div>
  );
};

export default History;
