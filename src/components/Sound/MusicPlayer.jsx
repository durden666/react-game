import React, { useEffect, useState } from 'react';

import useSound from 'use-sound';
import musicUrl from '../../assets/audio/music.mp3';
import volumeIcon from '../../assets/img/volume.svg';
import muteIcon from '../../assets/img/mute.svg';

function MusicPlayer() {
  const [volume, setVolume] = useState(0.5);
  const [play, { stop }] = useSound(musicUrl, { volume });
  const [flag, setFlag] = useState(false);

  const musicClickPlus = () => { setVolume(volume + 0.1) }
  const musicClickMinus = () => { setVolume(volume - 0.1) }

  useEffect(() => {
    if (flag) {
      play()
    } else {
      stop()
    }
  }, [flag]);

  return (
    <div>
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
