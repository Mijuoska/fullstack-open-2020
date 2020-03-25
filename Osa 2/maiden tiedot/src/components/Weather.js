import React, { useState, useEffect } from 'react';
import axios from 'axios'


const Weather = ({ city }) => {
    const [weather, setWeather] = useState([])
    const [isLoading, setIsLoading] = useState(true)

const api_key = process.env.REACT_APP_API_KEY
useEffect(() => { axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`)
    .then(response => {
        console.log(response.data)
        setWeather(response.data)
        setIsLoading(false)

    });
}, [city])
    

         if (isLoading) {
            return (
                  <div>
                    <p>Please wait... Fetching weather data</p>
                    </div>
                    )
            } else {

             return (
                <div>
                <h3>Weather in {weather.location.name}</h3>
                <p>Temperature: {weather.current.temperature} Celsius</p>
                <p>Wind: {weather.current.wind_speed} mph, direction {weather.current.wind_dir}</p>
                <img src={weather.current.weather_icons} alt="weather-icon"/>
                </div>

            )
           }

}

export default Weather