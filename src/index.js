import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import WeatherCard from "./WeatherCard";
import WeatherDetail from "./WeatherDetail";

// const list = [...Array(5).keys()];

const Cards = () => {
  return (
    <div>
      <h2>Weather App</h2>
      <div className="card-group">
        <WeatherCard />
      </div>
      <WeatherDetail />
    </div>
  );
};

ReactDOM.render(<Cards />, document.getElementById("root"));
