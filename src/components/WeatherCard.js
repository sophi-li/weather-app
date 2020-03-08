import React from 'react'
import PropTypes from 'prop-types'

const WeatherCard = ({ date, clouds, temp, cloudIcon }) => {
  return (
    <div className="card">
      <div className="card-body text-center">
        <h2 className="card-title">{date}</h2>
        <p>{temp}F</p>
        <p>{clouds}</p>
        <img src={cloudIcon} alt="weather-icon" />
      </div>
    </div>
  )
}

WeatherCard.propTypes = {
  date: PropTypes.string,
  clouds: PropTypes.string,
  temp: PropTypes.number,
  cloudIcon: PropTypes.string,
}

export default WeatherCard
