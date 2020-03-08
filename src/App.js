import React, { useState, useEffect } from 'react'
import moment from 'moment'

import WeatherCard from './components/WeatherCard'
import styles from './App.module.css'

const App = () => {
  const [datalist, setDatalist] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=San+Francisco&appid=0b8748d716f8e438393856aa8448e0ba&units=imperial`
    fetch(url)
      .then(response => response.json())
      .then(response =>
        setDatalist(response.list.filter(el => el.dt_txt.includes('15:00')))
      )
      .catch(error => {
        console.error(error)
        setError(error)
      })
  }, [])

  return (
    <div>
      <h2 className="text-center">San Francisco 5 Day Weather</h2>
      {error ? (
        'There was an error.'
      ) : (
        <div className={`card-group ${styles.weatherCards}`}>
          {datalist.map(element => (
            <WeatherCard
              key={element.dt}
              temp={Math.round(element.main.temp)}
              date={moment(element.dt_txt).format('dddd')}
              clouds={element.weather[0].description}
              cloudIcon={`http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
