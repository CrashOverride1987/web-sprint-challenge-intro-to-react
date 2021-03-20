import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Character from './Character.js'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [details, setDetails] = useState([])
  useEffect(()=> {
    axios
    .get('https://swapi.dev/api/people/')
    .then(res => {
      setDetails(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
  console.log(details)
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {details.map(element => {return <Character key={details.name} details={element}></Character>})}
    </div>
  );
}

export default App;
