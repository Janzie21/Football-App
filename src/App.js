import React, {useState, useEffect} from 'react';
import Loading from "./components/Loading";
import PlayerGrid from './components/PlayerGrid';
import Form from './components/Form';
import { flattenDiagnosticMessageText } from 'typescript';
import axios from 'axios';


App = () => {
  const [loading, setLoading] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [player, setPlayer] = useState("");
  const [players, setPlayers] = useState([]);
  useEffect(
    function(){
      if(player) {
        setLoading(true);
        axios(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${player}`)
        .then( response => {
          setPlayer(response.dataplayer);
          setLoading(false);
        })
        .catch(console.log);
      }
    },
    [page, player]
  );
}

(
  <>
  <Form
  setPlayer={setPlayer}
  searchField = {searchField}
  setSearchField = {setSearchField} 
  />
  <Loading />
  <PlayerGrid />
  </>
)

export default App;