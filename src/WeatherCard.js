import React from 'react'
import './WeatherCard.css'
import PropTypes from 'prop-types'

const WeatherCard = ({ date, clouds, temp }) => {
  return (
    // <div className="weather-cards">
    <div className="card">
      <div className="card-body text-center">
        <h2 className="card-title">{date}</h2>
        <p>{temp}F</p>
        <p>{clouds}</p>
      </div>
    </div>
    // </div>
  )
}

WeatherCard.propTypes = {
  date: PropTypes.string,
  clouds: PropTypes.string,
  temp: PropTypes.number
}

export default WeatherCard
