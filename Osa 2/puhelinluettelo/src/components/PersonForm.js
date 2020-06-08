import React, { useState } from "react"
import personService from '../services/persons'

const PersonForm = ({ persons, setAndRenderPersons, setMessageTypeAndContent }) => {

const [newName, setNewName] = useState('')
const [newNumber, setNewNumber] = useState('')

      const addPerson = (event) => {
        
          event.preventDefault()
          const match = persons.filter(person => person.name === newName)
          
          if (match.length > 0) {
             const result = window.confirm(`${newName} already exists in the phonebook. Add a new number?`)
             if (result) {
             const personObject = {...match[0], number: newNumber}
             personService.update(personObject, personObject.id).then(returnedPerson => {
               const copy = persons.filter(person => person.id !== personObject.id)        
               setAndRenderPersons(copy.concat(returnedPerson))     
               setMessageTypeAndContent('info', `Edited ${returnedPerson.name}`)
             }).catch(error => {
               console.log(error.response.data.error)
               setMessageTypeAndContent('error', error.response.data.error)
        
             })
          }
            } else {
              const personObject = {
                  name: newName,
                  number: newNumber
              }          
              
              personService.create(personObject).then(returnedPerson => {
                setAndRenderPersons(persons.concat(returnedPerson))
                setMessageTypeAndContent('info', `Added ${returnedPerson.name}`)
              }).catch(error => {
                setMessageTypeAndContent('error', `Something went wrong while adding the person ${personObject.name}: ${error.response.data.error}`)
                console.log(error.response.data.error)
              });
             
          }
          
          setNewName('')
          setNewNumber('')
          
      }

       const handleNameInputChange = (event) => {
           setNewName(event.target.value)
       }

       const handleNumberInputChange = (event) => {
               setNewNumber(event.target.value)
       }
    return (
        <div>
        <h2>Add a new person</h2>
<form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameInputChange} />
           </div>
           <div>
          Number: <input value={newNumber} onChange={handleNumberInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      </div>
) 
      }

    export default PersonForm