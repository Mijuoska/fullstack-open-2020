import React, { useState } from "react"


const Filter = ({ persons, setShown }) => {
  const [filter, setFilter] = useState('')


  const filterNames = (event) => {
      const entriesToShow = event.target.value ? persons.filter(person => person.name.toLowerCase().search(event.target.value.toLowerCase()) >= 0) : persons
      setShown(entriesToShow)
  }


  const handleFilterInputChange = (event) => {
      filterNames(event)
      setFilter(event.target.value)
  }

  return (
<div>
Filter names: <input value={filter} onChange={handleFilterInputChange} />
</div>

  )

  }

  export default Filter