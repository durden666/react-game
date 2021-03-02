import React from 'react'

const openFullscreen = () => {
  if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen()
  }
}

const closeFullscreen = () => {
  if (document.fullscreenElement) {
      document.exitFullscreen();
  }
}

export const fullScreenMode = () => {
  return (
    <div className='fullScreenMode'>
      <button
        className="btn"
        onClick={openFullscreen}>
        Во весь экран
      </button>
      <button
        className="btn"
        onClick={closeFullscreen}>
        Закрыть во весь экран
      </button>
    </div>
  )
}