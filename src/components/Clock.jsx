import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const reset = () => { setSeconds(0) }

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <div>
      <div>Timer: {seconds}s</div>
      <div className="row">
        <button className="btn" onClick={reset}>
          Reset Timer
        </button>
      </div>
    </div>
  );
};

export default Timer;