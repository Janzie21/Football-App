import React, {useState, useEffect} from 'react';
import Loading from "./components/Loading";
import PlayerGrid from './components/PlayerGrid';
import Form from './components/Form';
import Page from './components/Page';
import { flattenDiagnosticMessageText } from 'typescript';
import axios from 'axios';


const App = () => {
  const [loading, setLoading] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [player, setPlayer] = useState("");
  const [players, setPlayers] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(
    function(){
      if(player) {
        setLoading(true);
        axios(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${player}`)
        .then( (response) => {
          setPlayers(response.data.player);
          setLoading(false);
        })
        .catch(console.log);
      }
    },
    [page, player]
  );
  return (
    <>
    <Form
    setPlayer={setPlayer}
    searchField = {searchField}
    setSearchField = {setSearchField} 
    />
    {loading && <Loading />}
    {players && <PlayerGrid players={players} />}
    </>
  )
}



export default App;