import React, { useState } from "react"



const PersonForm = ({ persons, setPersons, setShown }) => {

const [newName, setNewName] = useState('')
const [newNumber, setNewNumber] = useState('')

      const addPerson = (event) => {
        
          event.preventDefault()
          const match = persons.filter(person => person.name === newName)

          if (match.length > 0) {
              alert(`${newName} is already added to the phonebook`)
          } else {
              const personObject = {
                  name: newName,
                  number: newNumber
              }
              
            const newPersons = persons.concat(personObject)
              
              setPersons(newPersons)
              setShown(newPersons)

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