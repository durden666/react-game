import React, { useState } from 'react'

import volumeIcon from '../../assets/img/volume.svg'
import muteIcon from '../../assets/img/mute.svg'

const SoundPlayer = props => {
  const [flag, setFlag] = useState(false);

  return (
    <div>
      <p>Sound volume</p>
      <div className="btn-sound-wrapper">
        <button className="btn-sound"
         onClick={ ()=>setFlag(!flag) }>  
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
    </div>
  );
}

export default SoundPlayer
