import React from 'react';

const PlayerGrid = ({players}) => (
  <ul>
    {players.map(player => (
      <li>
        <img src="https://www.thesportsdb.com/images/media/player/thumb/82uics1544986067.jpg"></img>
        {player.strTeam}
        {player.strNationality}
      </li>))}
  </ul>
);

export default PlayerGrid;