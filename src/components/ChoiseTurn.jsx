import React from 'react'
import { connect } from "react-redux";
import { setWhoMoveFirst } from '../redux/gameReducer';

const ChoiseTurn = (props) => {
  return (
    <div className={'piece-chooser-wrap' + (!props.player ? '' : ' inactive')}>
      <div className="piece-chooser">
        <button
          className="side-o"
          onClick={ () => props.choosePiece('o') }>
          O 
        </button>
        <span>or</span>
        <button
          className="side-x"
          onClick={ () => props.choosePiece('x') }>
          X
        </button>
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
