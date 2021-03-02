import React from "react";
import SoundPlayer from "../Sound/SoundPlayer";

const Board = props => {
  return (
    <>
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
    <SoundPlayer
      soundClickMinus = {props.soundClickMinus}
      soundClickPlus = {props.soundClickPlus}
    />
  </>
  );
}

 {/* <p>Sound volume</p>
    <div className="btn-sound-wrapper">
      <button className="btn-sound" onClick={ ()=>setFlag(!flag) }>  
        {flag
          ? <img src={volumeIcon} />
          : <img src={muteIcon} />} 
      </button>
      <button
        className="btn-sound"
        onClick={() => props.soundClickPlus()}>
        +
      </button>
      <button
        className="btn-sound"
        onClick={() => props.soundClickMinus()}>
        -
      </button>
    </div>
  </div> */}

export default Board