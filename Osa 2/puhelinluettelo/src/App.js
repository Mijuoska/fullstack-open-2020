import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import Filter from './components/Filter'
import personService from './services/persons'


const App = () => {

const [persons, setPersons] = useState([])
const [shownPersons, setShown] = useState([])
const [message, setMessage] = useState()
const [messageType, setMessageType] = useState()

const setAndRenderPersons = (persons) => {
  setPersons(persons)
  setShown(persons)
}

const setMessageTypeAndContent = (type, content) => {
    setMessageType(type)
    setMessage(content)
}

useEffect(() => { personService.getAll().then(initialNames => {
   setAndRenderPersons(initialNames)
   
 }) 
 }, [])

 const deletePerson = (event) => {
   const result = window.confirm(`Delete ${event.target.name}?`)
   if (result) {
     personService.remove(event.target.value)
     const copy = persons.filter(person => person.id !== Number(event.target.value))  
     setAndRenderPersons(copy)
     setMessageTypeAndContent('info', `Removed ${event.target.name}`)
   }
 }


  
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} messageType={messageType} />
      <Filter persons={persons} setShown={setShown} />
      <PersonForm persons={persons} setAndRenderPersons={setAndRenderPersons} setMessageTypeAndContent={setMessageTypeAndContent}/> 
      <h2>Numbers</h2>
      {shownPersons.map(person => <Persons person={person} key={person.id} deletePerson={deletePerson}/>)}
  </div>
      )
  }



export default App