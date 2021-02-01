import React from 'react';

const PlayerGrid = ({players}) => (
  <ul>
    {players.map(player => (
      <li>
        <img src={player.strThumb}/>
        <p>{player.strTeam}</p>
        <p>{player.strNationality}</p>
        
      </li>))}
  </ul>
);

export default PlayerGrid;