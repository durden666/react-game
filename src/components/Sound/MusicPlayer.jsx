import React, { useEffect, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import useSound from 'use-sound';
import musicUrl from '../../assets/audio/music.mp3';
import volumeIcon from '../../assets/img/volume.svg';
import muteIcon from '../../assets/img/mute.svg';

const MusicPlayer = () => {
  const [volume, setVolume] = useState(0.5);
  const [play, { stop }] = useSound(musicUrl, { volume });
  const [flag, setFlag] = useState(false);

  const musicClickPlus = () => { setVolume(volume + 0.1) }
  const musicClickMinus = () => { setVolume(volume - 0.1) }

  useHotkeys('alt+r', () => setVolume(0))
  useHotkeys('alt+t', () => setVolume(0.5))

  useEffect(() => {
    if (flag) {
      play()
    } else {
      stop()
    }
  }, [flag]);

  return (
    <div className="btnSoundWrapper">
      <p>Music volume</p>
      <div className="btn-sound-wrapper">
        <button className="btn-sound" onClick={()=>setFlag(!flag)}>  
          {flag
            ? <img src={volumeIcon} alt=""/>
            : <img src={muteIcon} alt=""/>} 
        </button>
        <button
          className="btn-sound"
          onClick={musicClickPlus}>+
        </button>
        <button
          className="btn-sound"
          onClick={musicClickMinus}>-
        </button>
      </div>
    </div>
  );
}

export default MusicPlayer;
