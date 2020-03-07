import React from "react";
import Moment from "react-moment";

const WeatherCard = ({ date, clouds, temp }) => {
  return (
    <div className="weather-card">
      <div className="card">
        <div className="card-body">
          <h2>
            <Moment date={date} />
          </h2>
          {/* <img alt="icon"></img> */}
          <p>Clouds: {clouds}</p>
          <p>Temp: {temp}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
