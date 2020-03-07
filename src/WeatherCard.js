import React from 'react'
import PropTypes from 'prop-types'

const WeatherCard = ({ date, clouds, temp }) => {
  return (
    <div className="weather-card">
      <div className="card">
        <div className="card-body">
          <h2>{date}</h2>

          <p>{clouds}</p>
          <p>{temp}F</p>
        </div>
      </div>
    </div>
  )
}

WeatherCard.propTypes = {
  date: PropTypes.string,
  clouds: PropTypes.string,
  temp: PropTypes.string
}

export default WeatherCard
