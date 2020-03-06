import React from "react";

const WeatherCard = ({ date, clouds, temp }) => {
  return (
    <div className="weather-card">
      <div className="card">
        <div className="card-body">
          <h3>Date: {date}</h3>
          {/* <img alt="icon"></img> */}
          <p>Clouds: {clouds}</p>
          <p>Temp: {temp}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
