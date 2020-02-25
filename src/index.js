import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import WeatherCard from "./WeatherCard";

const Cards = () => {
  return (
    <div>
      <h2>Weather App</h2>
      <div className="card-group">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </div>
    </div>
  );
};

ReactDOM.render(<Cards />, document.getElementById("root"));
