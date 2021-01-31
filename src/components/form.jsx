import React from 'react';

const Form = ({searchField, setSearchField, setPlayer}) => (
  <form onSubmit={e => {
    e.preventDefault();
    setPlayer(searchField);
  }}>
    <input 
    type="text"
    value={searchField}
    onChange={e => {setSearchField(e.target.value);}}
    />
    <button>Submit</button>
  </form>
)

export default Form;