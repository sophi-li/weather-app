import React, { Component } from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import WeatherCard from "./WeatherCard";
// import axios from "axios";

// const list = [...Array(5).keys()];

class Cards extends Component {
  state = {
    hasErrors: false,
    weather: [],
    temp: [],
    clouds: [],
    date: [],
    datalist: []
  };

  componentDidMount() {
    let url =
      "http://api.openweathermap.org/data/2.5/forecast?q=San+Francisco&appid=0b8748d716f8e438393856aa8448e0ba";
    fetch(url)
      .then(response => response.json())
      .then(response => this.setState({ datalist: response.list }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    console.log("2nd", this.state.datalist);
    const arr = this.state.datalist;
    const elems = [];
    for (let i = 4; i < arr.length; i += 8) {
      elems.push(
        <WeatherCard
          temp={arr[i].main.temp}
          date={arr[i].dt_txt}
          clouds={arr[i].weather[0].description}
        />
      );
    }

    return (
      <div>
        <h2>Weather App</h2>
        <div className="card-group">{elems} hi</div>
      </div>
    );
  }
}

ReactDOM.render(<Cards />, document.getElementById("root"));
