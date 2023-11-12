import React, { useState } from 'react';

function Player({name, symbol}) {
  const [isEditing, setIsEditing] = useState(false);

  const editNameHandler = () => {
    setIsEditing(true)
    console.log(isEditing)
  }

  return (
    <li>
      <span className='player'>
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editNameHandler}>Edit</button>
    </li>
  );
}

export default Player;