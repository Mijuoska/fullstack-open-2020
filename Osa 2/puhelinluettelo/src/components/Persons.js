import React from 'react'

const Persons = ({ person, deletePerson }) => {

    return (
        <p>{person.name} {person.number} <button type="button" value={person.id} name={person.name} onClick={deletePerson}>Delete</button></p>


    )
    }

export default Persons