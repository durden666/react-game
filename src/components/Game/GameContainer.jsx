import React from 'react'
import { connect } from 'react-redux';
import { resetGame, createNewGame } from '../../redux/gameReducer';
import Game from './Game';

const GameContainer = props => {
  return <Game { ...props } />
}

const mapStateToProps = state => {
  return {
    xWinCounter: state.gamePage.xWinCounter,
    oWinCounter: state.gamePage.oWinCounter,
    drawCounter: state.gamePage.drawCounter,
    isTurnX: state.gamePage.isTurnX,
    isGameEnd: state.gamePage.isGameEnd,
    totalMove: state.gamePage.totalMove
  };
}

export default connect(mapStateToProps,
  { resetGame, createNewGame }) (GameContainer);