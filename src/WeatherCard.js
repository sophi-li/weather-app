import React from "react";

const WeatherCard = ({ date, clouds, temp }) => {
  return (
    <div className="weather-card">
      <div className="card">
        <div className="card-body">
          <h3>{date}</h3>
          {/* <img alt="icon"></img> */}
          <p>{clouds}</p>
          <p>{temp}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
