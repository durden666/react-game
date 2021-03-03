import React from 'react'
import { connect } from "react-redux";
import { setWhoMoveFirst } from '../redux/gameReducer';

const ChoiseTurn = props => {
  return (
    <div className={'pieceChooserWrap' + (!props.player ? '' : ' inactive')}>
      <div className="pieceChooser">
        <button onClick={ () => props.choosePiece('o') }>O</button>
        <span>or</span>
        <button onClick={ () => props.choosePiece('x') }>X</button>
      </div>
    </div>    
  );
}

const mapStateToProps = (state) => {
  return {
    player: state.gamePage.player
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    choosePiece: (piece) => dispatch(setWhoMoveFirst(piece === 'x'))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoiseTurn);
