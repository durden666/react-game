import React from "react";

const Board = props => {
  return (
    <div className="board-wrap">
      <div className="board-row">
        {props.renderSquare(0)}
        {props.renderSquare(1)}
        {props.renderSquare(2)}
      </div>
      <div className="board-row">
        {props.renderSquare(3)}
        {props.renderSquare(4)}
        {props.renderSquare(5)}
      </div>
      <div className="board-row">
        {props.renderSquare(6)}
        {props.renderSquare(7)}
        {props.renderSquare(8)}
      </div>
    </div>
  );
}

export default Board