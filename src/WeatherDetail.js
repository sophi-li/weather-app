import React, { Component } from "react";
import axios from "axios";

class WeatherDetail extends Component {
  // const [weather, setWeather] = React.useState([])

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
    // const { temp } = this.state.temp;
    return (
      <div>
        {/* weather: {this.state.weather} */}
        temp: {this.state.temp}
        clouds: {this.state.clouds}
        date: {this.state.date}
      </div>
    );
  }
}

export default WeatherDetail;
