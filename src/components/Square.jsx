import React from 'react'
const Square = props => {
  let className = ['square'];
  if (props.value !== null) {
    className.push('square-' + props.value);
  }
  return (
    <button
      className={ className.join(' ') }
      onClick={ () => props.onClick() }>     
    </button>
  );
}

export default Square

