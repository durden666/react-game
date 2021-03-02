import React, { useEffect, useState } from 'react'
import Board from './Board';
import { connect } from "react-redux";
import { makeMove, setAITurn, setWinner, setDraw, totalMove } from '../../redux/gameReducer'
import Square from '../Square';
import { Board as GameBoard, findBestMove } from "../ai";
import useSound from 'use-sound';
import soundUrl from '../../assets/audio/click.mp3'

const BoardContainer = props => {
  const [volume, setVolume] = useState(0.5);
  const [play] = useSound(soundUrl, { volume });

  const calculateWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return [squares.filter(s => s === null).length === 0, false]
  }

  const soundClickPlus = () => {
    setVolume(volume + 0.1);
    play();
  };

  const soundClickMinus = () => {
    setVolume(volume - 0.1);
    play();
  };

  const handleClick = (i, ai = false) => {
    if (props.isGameEnd || props.squares[i] !== null || (!ai && props.isTurnAI)) return;
  
    const squares = props.squares.slice();
    squares[i] = props.isTurnX ? 'x' : 'o';
    
    props.makeMove(squares);
    props.totalMove()
    play()   

    const [winner] = calculateWinner(squares);
    if (winner) {
      props.setWinner(winner); 
    } else if (!ai) {
      props.setAITurn(true);
    }
  }

  useEffect(() => {
    if (!props.isGameEnd && props.isTurnAI) {
      const move = props.squares.filter(s => s).length === 0
      ? Math.floor(Math.random() * 8)
      : findBestMove(new GameBoard(props.squares, props.isTurnX
        ? 'x': 'o')
      );

      setTimeout(() => { handleClick(move, true) }, 100);
      props.setAITurn(false);
    };
  });

  const renderSquare = (i) => {
    return (
      <Square
        value={ props.squares[i] }
        onClick={ () => handleClick(i) }
      />
    );
  }

  return (
    <Board
      { ...props }
      renderSquare = { renderSquare }
      soundClickMinus = { soundClickMinus }
      soundClickPlus = { soundClickPlus }
    />
  )
}

const mapStateToProps = state => {
  return {
    squares: state.gamePage.squares,
    isTurnX: state.gamePage.isTurnX,
    isTurnAI: state.gamePage.isTurnAI,
    isGameEnd: state.gamePage.isGameEnd,
  };
};

export default connect(mapStateToProps,
  { makeMove, setAITurn, setWinner, setDraw, totalMove })(BoardContainer);
