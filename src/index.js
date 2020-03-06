import React, { Component } from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import WeatherCard from "./WeatherCard";
import axios from "axios";

// const list = [...Array(5).keys()];

class Cards extends Component {
  state = {
    weather: [],
    temp: [],
    clouds: [],
    date: []
  };

  componentDidMount() {
    let url =
      "http://api.openweathermap.org/data/2.5/forecast?q=San+Francisco&appid=0b8748d716f8e438393856aa8448e0ba";
    axios
      .get(url)
      .then(response => {
        this.setState({
          weather: response.data.list[0],
          temp: response.data.list[0].main.temp,
          clouds: response.data.list[0].weather[0].description,
          date: response.data.list[0].dt_txt
        });
        console.log("day", new Date(this.state.temp).getDate());
        console.log(this.state.temp);
        console.log("date", this.state.date);
        console.log("weather", this.state.weather);
        console.log(response.data.list);
      })
      .catch(error => {
        console.log("error", error);
      });
  }

  render() {
    return (
      <div>
        <h2>Weather App</h2>
        <div className="card-group">
          <WeatherCard
            temp={this.state.temp}
            clouds={this.state.clouds}
            date={this.state.date}
          />
        </div>
        <div>
          temp: {this.state.temp}
          clouds: {this.state.clouds}
          date: {this.state.date}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Cards />, document.getElementById("root"));
