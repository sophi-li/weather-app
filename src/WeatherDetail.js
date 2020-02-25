import React from "react";
import axios from "axios";

function WeatherDetail() {
  let url =
    "http://api.openweathermap.org/data/2.5/forecast?q=San+Francisco&appid=0b8748d716f8e438393856aa8448e0ba";

  const [weather, setWeather] = React.useState([]);
  React.useEffect(() => {
    axios.get(url).then(response => {
      //   const newWeather = response.data.map(obj => obj.data);
      //   setWeather(newWeather);
      const newWeather = response.data;
      const weather = newWeather.list;
      const temp = newWeather.list[0].main.temp;
      console.log(weather);
      console.log("temp", temp);
      //   console.log(newWeather.city);
    });
  }, []);
  return <div>he</div>;
}

export default WeatherDetail;
