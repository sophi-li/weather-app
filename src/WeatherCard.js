import React from "react";

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
  );
};

export default WeatherCard;
