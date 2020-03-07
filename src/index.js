import React, { Component } from "react";
import ReactDOM from "react-dom";
// import "./index.css";

import moment from "moment";

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
      el.main.temp = Math.round(((el.main.temp - 273) * 9) / 5 + 32);
      return el.dt_txt.includes("12:00");
    });
    console.log("noonarray", noonArray);

    // loop through and display cards with weather data for the next 5 days
    const elems = [];
    for (let i = 0; i < noonArray.length; i++) {
      elems.push(
        <WeatherCard
          temp={noonArray[i].main.temp}
          // Moment changes date to "Monday", "Tuesday", etc
          date={moment(noonArray[i].dt_txt).format("dddd")}
          clouds={noonArray[i].weather[0].description}
          key={i}
        />
      );
      console.log(moment(noonArray[i].dt_txt).format("dddd"));
    }

    return (
      <div>
        <h2>Weather App</h2>
        <div className="card-group">{elems}</div>

        {/* {moment(dateToBeFormate).format("DD/MM/YYYY")} */}
      </div>
    );
  }
}

ReactDOM.render(<Cards />, document.getElementById("root"));
