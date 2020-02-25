import React from "react";
import axios from "axios";
import WeatherDetail from "./WeatherDetail";

function WeatherCard() {
  return (
    <div className="weather-card">
      <div className="card">
        <div className="card-body">
          <h3>Weds</h3>
          <img alt="icon"></img>
          <p>76</p>
        </div>
      </div>
      <WeatherDetail />
    </div>
  );
}

export default WeatherCard;
