import React from 'react';

const PlayerGrid = ({players}) => (
  <ul>
    {players.map(player => (
      <li>
        <img src={player.strThumb}/>
        {player.strTeam}
        {player.strNationality}
      </li>))}
  </ul>
);

export default PlayerGrid;