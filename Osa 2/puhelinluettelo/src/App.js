import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {

 const [persons, setPersons] = useState([])
  const [shownPersons, setShown] = useState([])


 const hook = () => {
axios.get('http://localhost:3001/persons').then(response => {
  setPersons(response.data);
  setShown(response.data)
  console.log(response.data)
});
}
useEffect(hook, [])

  

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter persons={persons} setShown={setShown} />
      <PersonForm persons={persons} setPersons={setPersons} setShown={setShown}/> 
      <h2>Numbers</h2>
      {shownPersons.map(person => <Persons name={person.name} number={person.number} key={person.name}/>)}
  </div>
      )
  }



export default App