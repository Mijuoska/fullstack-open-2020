import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Weather from './components/Weather'
import './index.css'


const App = () => {

const [countries, setCountries ] = useState([])
const [results, showResults] = useState([])
const [filter, setFilter ] = useState('')

const getCountries = () => {
   axios.get('https://restcountries.eu/rest/v2/all').then(response => {
     setCountries(response.data)
   });
}

useEffect(getCountries, [])

  const filterCountries = (event) => {
    let result = event.target.value ? countries.filter(country => country.name.toLowerCase().search(event.target.value.toLowerCase()) > -1) : []
   showResults(result)
  }


 

  const handleFilterInputChange = (event) => {
    filterCountries(event)
    setFilter(event.target.value)
  }

  const showCountryButton = (event) => {
    const country = results.find(country => country.name === event.target.value)
    showResults(country)
  }

if (results.length > 10) {
  return (
    <div>
    <h1>Countries</h1>
<input onChange={handleFilterInputChange} value={filter}/>
<p>Too many matches, specify another filter</p>
</div>
  )
  }
else if (results.length <= 10 && results.length > 1) {
  return (
    <div>
    <h1>Countries</h1>
    <input onChange={handleFilterInputChange} value={filter}/>
    <ul>
    {results.map(country => <li key={country.alpha3Code}>{country.name} <button type="button" value={country.name} onClick={showCountryButton} >Show</button></li>)}
    </ul>

    </div>

  )
  } else if (results.length === 1) {
    return (
    <div>
    <h1>Countries</h1>
    <input onChange={handleFilterInputChange} value={filter}/>
    <h2>{results[0].name}</h2>
    <p>Capital: {results[0].capital}</p>
    <p>Population: {results[0].population}</p>
    <h3>Languages</h3>
<ul>
{results[0].languages.map(language => <li key={language.name}>{language.name}</li>)}
</ul>
<img src={results[0].flag} alt={results[0].name} width={150} height={100}/>
<Weather country={results[0].name} city={results[0].capital} />
    </div>
    )
  } else {
    return (
      <div>
    <h1>Countries</h1>
    <input onChange={handleFilterInputChange} value={filter}/>
    </div>
    )
  }
}

export default App;
