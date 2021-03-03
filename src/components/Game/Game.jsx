import React, { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook';

import BoardContainer from '../Board/BoardContainer';
import ChoiseTurn from '../ChoiseTurn';
import MusicPlayer from '../Sound/MusicPlayer';
import Statistic from '../Statistic/Statistic';
import Timer from '../Clock';
import Footer from '../Footer/Footer';
import { fullScreenMode } from '../common/Fullscreen'
import s from './Game.module.css'
import HotKeys from '../common/HotKeys';

const Game = (props) => { 
  const [flag, setFlag] = useState(true);
  const [activeKeys, setActiveKeys] = useState(true);

  const [isActive, setActive] = useState(true);

  const handleToggle = () => {
    setActive(!isActive);
  };
 
  useHotkeys('alt+a', () => setFlag(true))
  useHotkeys('alt+s', () => setFlag(false))

  return (
    <>          
      <button onClick={handleToggle}>Theme</button>

      <div className={s.gameWrapper}>
        <ChoiseTurn />
        <MusicPlayer />
        <Timer />

        <button
          className={s.btn}
          onClick={() => setActiveKeys(!activeKeys)}>
          {activeKeys ? 'Hot Keys' : <HotKeys />}
        </button>

        <div className={s.state}>
          <div>
            <span className={s.winCounter}>{props.oWinCounter} win</span>
          </div>
          <div className={s.stateX}>
            <span className={s.winCounter}>{props.xWinCounter} win</span>
          </div>
          <div>
            <span className={s.winCounter}>{props.drawCounter} draw</span>
          </div>
        </div>
        <div className={s.infoMove}>
          <span className={s.winCounter}>Total Move: {props.totalMove}</span>
        </div>

        <div className={isActive ? s.gameWrap : s.active}>      
          <BoardContainer createNewGame = {() => props.createNewGame()}/>        
        </div>

        <div className={s.buttonsWrap}>  
          <button 
            className={s.btn}
            onClick={() => props.resetGame()}>
            Reset
          </button>
          <button
            className={s.btn}
            onClick={() => props.createNewGame()}>
            New game
          </button>
        </div>

        <div>
          <button
            className={s.btn}
            onClick={() => setFlag(!flag)}>  
            { flag ? 'Statistic' : <Statistic /> }
          </button>
        </div>        
        { fullScreenMode() }
      </div>
    <Footer />
  </>
  );
}

export default Game;