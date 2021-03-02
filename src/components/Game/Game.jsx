import React, { useState } from 'react'

import BoardContainer from '../Board/BoardContainer';
import ChoiseTurn from '../ChoiseTurn';
import MusicPlayer from '../Sound/MusicPlayer';
import Statistic from '../Statistic/Statistic';
import SoundPlayer from '../Sound/SoundPlayer';
import Timer from '../Clock';
import Footer from '../Footer/Footer';
import { fullScreenMode } from '../common/Fullscreen'
  
const Game = (props) => { 
  const [flag, setFlag] = useState(false);
 
  return (
    <>
      <div className="game-wrapper">
        <ChoiseTurn />
        <div className="btn-sound-wrapper">
          <MusicPlayer />
        </div>
        <Timer />

        <div className="state">
          <div className="state-o">
            <span className="win-counter">{ props.oWinCounter } win</span>
          </div>
          <div className="state-x">
            <span className="win-counter">{ props.xWinCounter } win</span>
          </div>
          <div className="state-d">
            <span className="win-counter">{ props.drawCounter } draw</span>
          </div>
        </div>
        <div className="info-move">
          <span className="win-counter">Total Move: { props.totalMove }</span>
        </div>

        <div className="game-wrap">      
          <BoardContainer createNewGame = { () => props.createNewGame() }/>        
        </div>

        <div className="buttons-wrap">        
          <button 
            className="btn"
            onClick={ () => props.resetGame() }>
            Reset
          </button>
          <button
            className="btn"
            onClick={ () => props.createNewGame() }>
            New game
          </button>
        </div>
        <div>
          <button
            className="btn"
            onClick={()=>setFlag(!flag)}>  
            { flag ? "Statistic" : <Statistic /> }
          </button>
        </div>        
        { fullScreenMode() }
      </div>
    <Footer />
  </>
  );
}

export default Game;