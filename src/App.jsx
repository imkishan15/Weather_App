import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';


const App = () => {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})
  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query)
      setWeather(data);
      setQuery('');
    }
  }
  return (
    <div className="wraper">
      <div className="start">
        <div className="title">
          <center>
          Welcome to Weather App <br />
          ~Made by Kishan Patel 
          </center>
        </div>
        <center>
        <input type="text" placeholder='Enter name of city....' className='search' value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
        </center>
      </div>
      {weather.main && (
        <div className="city">
          <center>
          <div className="cname">
            <span>
              City: {weather.name} <br />
              Country code: {weather.sys.country}
            </span>
            <div className="tmp">
              Tempreature: {Math.round(weather.main.temp)}<sup>&deg;C</sup>
            </div>
            <div className="info">
              <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} className="icon" />
              <p> Status: {weather.weather[0].description} </p>
            </div>
          </div>
          </center>
        </div>
      )}
    </div>
  )
}

export default App;
