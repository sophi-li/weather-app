import React, { Component } from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import WeatherCard from "./WeatherCard";

class Cards extends Component {
  state = {
    hasErrors: false,
    weather: [],
    temp: [],
    clouds: [],
    date: [],
    datalist: [],
    hour: []
  };

  componentDidMount() {
    let url =
      "http://api.openweathermap.org/data/2.5/forecast?q=San+Francisco&appid=0b8748d716f8e438393856aa8448e0ba";
    fetch(url)
      .then(response => response.json())
      .then(response =>
        this.setState({
          datalist: response.list
        })
      )
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    // Getting data from noon
    const arr = this.state.datalist;
    let noonArray = arr.filter(function(el) {
      // console.log("ji", el);
      // − 273.15) × 9/5 + 32
      el.main.temp = Math.round(((el.main.temp - 273) * 9) / 5 + 32);
      return el.dt_txt.includes("12:00");
    });
    console.log("noonarray", noonArray);

    // loop through and display cards
    const elems = [];
    for (let i = 0; i < noonArray.length; i++) {
      elems.push(
        <WeatherCard
          temp={noonArray[i].main.temp}
          date={noonArray[i].dt_txt}
          clouds={noonArray[i].weather[0].description}
          key={i}
        />
      );
    }

    return (
      <div>
        <h2>Weather App</h2>
        <div className="card-group">{elems}</div>
      </div>
    );
  }
}

ReactDOM.render(<Cards />, document.getElementById("root"));
